## Getting Started

First, install dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

To run the production build:

```bash
# This resets the database to the initial mock data
npm run create-db

npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Focus Areas

### Tech Stack

- Next.js 15 with App Router;
- Open Props for styling and CSS Modules;
- React Query for data fetching;
- Zustand for state management; for now only used as part of the PrescriptionsFilter component, to store the filter values;

### Mock API

This project has a mock api that is used to store and retrieve data. To simulate a real network conditions, the api has a 400ms delay on gets, and 1700ms delay on updates.

The endpoint for requesting a prescription refill updates the available refills by 2 and sets the expiry date to the one selected in the form.

### Routing and pages

This project uses the App Router, and has 2 pages + home.

- Home: The home page is the main page of the app. Doesn't have anything on it besides two links to the other pages.
- Prescriptions List page `/prescriptions`: Displays a list of prescriptions.
- Prescription Details page `/prescriptions/[id]`: Displays the details of a prescription.

### Speed

For speed, this project uses:
- NextJS SSR 
- TanStack Query for data fetching and caching
- Prefetching of pages and data most likely to be accessed next

This can serve as a good starting point for a speed optimized app, and could be extended to include more precise prefetching, code splitting if needed, streaming, etc.

### Accessibility

For accessibility, this project uses:
- Support for Light and Dark themes; Ideally, every color should be hand picked to create an appropriate color palette for both themes.
- Semantic HTML elements + ARIA attributes where appropriate to enhance the VO experience;
- Making sure the app is usable with keyboard navigation only;
- Ensure proper contrast between text and background;

In a real word scenario, the app design and interaction should be designed with a11y in mind. Some examples can include: 
- extensive form validation, that guides the user through validation and error handling;
- graceful progress/loading and error states, with options to retry;
- UI and animation hints to guide the user through the main app flow and provide feedback on actions;

### Project Structure
```
healthera/
├── src/                      # Source code directory
│   ├── app/                  # Next.js App Router pages + API Endpoints
│   ├── features/             # Feature-based components and logic
│   │   ├── Header/
│   │   ├── PrescriptionsPage/
│   │   ├── PrescriptionDetailsPage/
│   │   └── PrescriptionRefill/
│   ├── components/          # Shared/common components
│   ├── shared/              # Shared utilities, hooks, and api functions, query clients, etc
│   ├── data/                # Mock prescription data
│   └── assets/              # Static assets and resources
├── db/                      # Mock database and data
└── public/                  # Static public assets
```

### Feature structure
```
features/
├── PrescriptionsPage/
│   ├── components/
│   │   ├── PrescriptionsPage.tsx # Root component of the feature
│   │   └── ... # Other components specific to the feature
│   ├── hooks/
│   │   └── useFilteredPrescriptions.ts # react-query hook to filter prescriptions
└   └── constants.ts # Holds constants specific to the feature;
```

Each feature should have a root component, that should serve as the entry point for the feature. It can be extended to hold types, hooks, utils, api specific to the feature. So far, every feature uses queries and API functions from the shared folder. The shared folder too, could be extended to be a feature in itself, or a package, that could benefit more than one project.

There's the `PrescriptionRefill` feature, used to request a refill. It has an overengineered title that requests a prescription by id, to display the name of the prescription in the title. The feature only depends on the prescription **ID**, and by being used in the PrescriptionsList page and PrescriptionDetails page, it showcases the feature's reusability and cache capabilities of the react-query client.

#### A more complex feature would looks something like this:
```
features/
├── feature-name/
│   ├── components/
│   │   ├── RootComponent.tsx # Root component of the feature
│   │   └── ... # Other components specific to the feature
│   ├── hooks/
│   │   └── useFeatureHook.ts # react-query hooks and/or query makers
│   ├── utils/
│   │   └── featureUtils.ts # feature-specific utility functions
│   ├── api/
│   │   └── featureApi.ts # feature-specific API functions
│   ├── types/
│   │   └── featureTypes.ts # feature-specific types
│   ├── constants.ts # Holds constants specific to the feature;
│   ├── features/
│   │   └── ... # Child features specific to this feature
│   └── index.ts # Public API of the feature
```

I believe the current structure is a good starting point for a feature based architecture, balancing encapsulation and reusability. The specifics can surely evolve as new requirements are implemented and the project grows.

Some immediate additions that I can think of are:

1. **Authentication & Authorization**
   - Create an `Auth` feature that manages user sessions, roles, and permissions
   - Implement route protection and role-based access control
   - Add authentication state management in the shared layer

2. **Error Handling & Monitoring**
   - Develop an `ErrorBoundary` feature for consistent error handling
   - Add error reporting and monitoring integration
   - Implement retry mechanisms for API calls
   - Create a Toast/Notification system for user feedback

3. **Data Management**
   - Consider moving API layer to a dedicated feature for better separation
   - Implement caching strategies for better performance
4. **Feature Documentation and Testing**

This extension focuses on scalability, maintainability, and real-world requirements while preserving the feature-based architecture. The end result would very much be influenced by the project's growth and priorities.

## Time Management 

In total, I think I spend ~2.5 working days on this project.

### First day
Most of the first day was spent on setting up the project, installing dependencies and configuring build tools.

The second part of the first day was spent implementing the Header and Prescriptions List and features, to kick start the feature based architecture setup.

### Second day

The second day was spent on implementing the Prescriptions Filter,
Prescription Details page and the Prescription Refill feature

After having two/three features implemented, having a better understanding of the feature requirements, I started moving some code around, creating a shared folder for features.

To have a better feel of what the mutation would feel like, I updated the mock API to use a local SQLite database, that allows for writing and seeing the mutation results.

### Third day

Some debugging and fixes were done to enable proper SSR rendering and data fetching. To improve the app responsiveness, I added some prefetching to the prescription page of details link hover, as well as prefetching the prescriptions list page from the details page.

Rest of the time was spent on documenting the code and process in this README.md document.


import { MOCK_PRESCRIPTIONS } from "@/data/prescriptions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const GET = async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  console.log("\n\nFetching prescription ...");

  await delay(400);

  const prescription = MOCK_PRESCRIPTIONS.find(prescription => prescription.id === id);

  console.log("prescription fetched");
  return Response.json({ prescription });
};

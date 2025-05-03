import Link from 'next/link';
import { ContentWrapper } from '@/components/ContentWrapper';

export default function Home() {
  return (
    <main>
      <ContentWrapper>
        <p>Healthera home assignment</p>
        <ul>
          <li>Start with a list of <Link href="/prescriptions">prescriptions</Link></li>
          <li>Or go straight to a <Link href="/prescriptions/1">prescription details page</Link></li>
        </ul>
      </ContentWrapper>
    </main>
  );
}

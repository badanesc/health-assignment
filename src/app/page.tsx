import {Header} from '@/features/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <p>Hello world</p>
      </main>
      <footer>Footer component</footer>
    </>
  );
}

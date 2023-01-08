import styles from '../styles/Home.module.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
      <Head>
        <title>About - Adri</title>
        <meta name="description" content="About Adri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.center}>
        <Link href="/" className={styles.card}>
          <h2 className={inter.className}>
            Home <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Nuevo componente</p>
        </Link>
      </div>
    </>
  );
}

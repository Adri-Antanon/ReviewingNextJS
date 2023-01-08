import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Layout from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Adri</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        <Link href="/about" className={styles.card}>
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Nuevo componente</p>
        </Link>
      </div>
    </Layout>
  );
}

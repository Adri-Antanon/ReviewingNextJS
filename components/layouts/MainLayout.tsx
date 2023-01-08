import Head from 'next/head';
import { ReactNode } from 'react';

import Navbar from '../Navbar';

import styles from '../../styles/Home.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}

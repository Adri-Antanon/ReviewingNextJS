import { ReactNode } from 'react';

import Navbar from '../Navbar';

import styles from '../../styles/Home.module.css';

export default function DarkLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark Layout</h3>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

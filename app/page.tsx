import Image from 'next/image';
import styles from './page.module.css';
import Orb from '@/components/orb';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full p-1">
      <Orb />
    </main>
  );
}

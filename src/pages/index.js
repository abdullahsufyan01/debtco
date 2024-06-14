import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import App from './App';
import generatePageSEO from '@/utils/generatePageSEO';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Debt Relief Co. – Authentic & Reliable Debt Relief</title>
        {generatePageSEO(
              '', 
              'The Debt Relief Co. – Authentic & Reliable Debt Relief', 
              `The Debt Relief Co, America’s better debt relief option. Sign up in seconds and 
                take back control from your high interest credit card debt.`,
                'homepage'
        )} 
      </Head>
      <App />
    </>
  )
}

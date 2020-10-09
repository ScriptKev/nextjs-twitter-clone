import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout/index'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          Devter
        </h1>

        <Link href="/timeline">
          <a>Go to Timeline</a>
        </Link>
      </AppLayout>
    </>
  )
}

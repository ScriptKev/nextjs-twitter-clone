import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout/index';

export default function Timeline({ userName }) {
  return (
    <>
      <Head>
        <title>Timeline</title>
      </Head>

      <AppLayout>
        <h1>This is the timeline of { userName }</h1>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </AppLayout>
    </>
  )
}

// getInitialProps solo funciona en componentes tipo pagina
Timeline.getInitialProps = async () => { // Recupera los datos de forma asincrona
  const res = await fetch('http://localhost:3000/api/userName') // Antes que se renderize el componente
  const userName = res.json();
  return userName;
}
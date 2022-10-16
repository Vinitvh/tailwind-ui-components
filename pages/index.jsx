import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name='description' content='Welcome to Tailwind UI Components' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{/* <Layout /> */}</main>
    </>
  );
}

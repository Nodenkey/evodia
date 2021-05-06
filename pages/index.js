import Head from 'next/head'
import Loader from "../components/loader/loader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Evodia | Home</title>
        <meta name="description" content="Evodia web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Loader/>
    </>
  )
}

import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components";
export default function Home() {
  return (
    <>
      <Head>
        <title>{`Cuong's blog`}</title>
        <meta name="description" content="Where I blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}

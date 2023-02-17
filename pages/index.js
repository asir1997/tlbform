import MultiStepForm from "@/components/forms";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Bullet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full max-w-screen-2xl px-5 mt-10 mx-auto">
          <MultiStepForm />
        </div>
      </Layout>
    </>
  );
}

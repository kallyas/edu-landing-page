import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Programs from "../components/Programs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Outbox Edu | Learn, Build, Grow</title>

        <meta charset="UTF-8" />
        <meta
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport"
        />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Unlock your Brilliance with our hands-on training. Recruit from our global network of a highly adept intelligent workforce. Learn to code and teach others. Get a job as a coder / programmer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Hero />
      <section className="programes">
        <Programs />
      </section>
      <footer className="footer my-container mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

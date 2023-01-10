import Head from "next/head";
import { Inter } from "@next/font/google";
import headerStyles from "../styles/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next101</title>
      </Head>
      <div className={headerStyles.description}>
        <div class="content-container">
          <h1 id="overview">Next.js</h1>
          <h2>The React Framework for Production</h2>
          <p>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.
          </p>
        </div>
      </div>
    </div>
  );
}

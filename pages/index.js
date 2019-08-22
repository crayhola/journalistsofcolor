/** @jsx jsx */

import Head from "next/head";
import { jsx } from "theme-ui";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <h1
      sx={{
        fontWeight: "bold",
        color: "primary"
      }}
    >
      Journalists of Color
    </h1>
  </div>
);

export default Home;

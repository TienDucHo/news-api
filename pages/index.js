import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NewsCard from "../components/NewsCard";
let Parser = require("rss-parser");

export default function Home({ feed }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My News</title>
        <meta name="description" content="Testing News API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {feed.items.map((elem, index) => (
            <NewsCard news={elem} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let parser = new Parser();
  let feed = await parser.parseURL(
    "https://vnexpress.net/rss/tin-moi-nhat.rss"
  );
  return { props: { feed } };
}

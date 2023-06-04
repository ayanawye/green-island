import NewsList from "@/components/AboutPage/newsList/NewsList";
import Head from "next/head";

const News = () => {
  return (
    <>
      <Head>
        <title>Новости</title>
      </Head>
      <div>
        <NewsList/>
      </div>
    </>
  );
};

export default News;
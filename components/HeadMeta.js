import Head from "next/head";
const HeadMeta = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
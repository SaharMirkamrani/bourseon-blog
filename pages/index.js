import Head from 'next/head';

export const getServerSideProps = async () => {
  const res = await fetch('https://api.bourseon.com/posts');
  const data = await res.json();
  return {
    props: {
      posts:data,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <h1>Home page</h1>
      {posts?.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

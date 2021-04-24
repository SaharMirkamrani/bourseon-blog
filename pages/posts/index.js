import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://api.bourseon.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <h1>Posts page</h1>
      {posts?.posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
          <a>
            {post.title}
          </a>
          </Link>
        </li>
      ))}
    </div>
  );
}

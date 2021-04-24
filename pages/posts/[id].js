import React from 'react';

export default function Items({ title, desc }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('https://api.bourseon.com/posts');
  const data = await res.json();
  const paths = data.posts.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch(`https://api.bourseon.com/posts/${id}`);
  const data = await res.json();
  return { props: { title: data.title, desc: data.description } };
};

// export const getServerSideProps = async(ctx) => {
//   const id = ctx.params.id;
//   console.log(ctx.params)
//   return {
//     props: {
//       title: 'hey, ' + id,
//     }
//   }
// }

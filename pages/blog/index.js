import Head from 'next/head';
import BaseLayout from '../../components/layout/BaseLayout';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard/BlogCard';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <BaseLayout>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Bit and bobs I've learnt along the way, mostly about React and JavaScript"
        />
        <meta name="keywords" content="Blog JavaScript React Frontend Developer Jobs" />
        <meta name="og:title" content="Tom Wagner Blog" />
        <meta
          name="og:description"
          content="Bit and bobs I've learnt along the way, mostly about React and JavaScript"
        />
        <meta name="og:url" content="https://twagner.me/blog" />
      </Head>
      <section>
        <div className="container mx-auto pb-16 px-4 md:px-32 lg:px-48 xl:px-64">
          <h2 className="AbrilFat py-8 md:pt-16 flex items-center text-2xl">Blog</h2>
          <div className="mb-16 pb-16 leading-relaxed border-solid border-b border-black">
            <ul>
              {allPostsData.map(({ id, date, title, keywords, summary, img }) => (
                <li key={id}>
                  <Link href={`/blog/${id}`}>
                    <a>
                      {' '}
                      <BlogCard
                        title={title}
                        date={date}
                        tags={keywords}
                        summary={summary}
                        img={img}
                      />
                    </a>
                  </Link>
                  {/* <br />
                  <div className="text-sm text-gray-600 pb-6">{date}</div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </BaseLayout>
    // <BaseLayout>
    //   <section>
    //     <p>[Your Self Introduction]</p>
    //     <p>
    //       (This is a sample website - you’ll be building a site like this on{' '}
    //       <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    //     </p>
    //   </section>
    //   <section>
    //     <h2>Blog</h2>
    //     <ul>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li key={id}>
    //           <Link href={`/blog/${id}`}>
    //             <a>{title}</a>
    //           </Link>
    //           <br />
    //           <small>{/* <Date dateString={date} /> */}</small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </BaseLayout>
  );
}

import React from 'react';
import BaseLayout from '../../components/layout/BaseLayout';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import styles from './style.module.scss';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <BaseLayout>
      <Head>
        <title>{postData?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={postData?.description} />
        <meta name="keywords" content={postData?.keywords} />
        <meta name="og:title" content={postData?.title} />
        <meta name="og:description" content={postData?.description} />
        <meta name="og:url" content="https://twagner.me/blog/slider" />
      </Head>
      <article className={styles.article}>
        <h2 className="AbrilFat pt-6 md:pt-16 flex items-center text-2xl">{postData?.title}</h2>
        <div className="text-sm text-gray-600 pb-6">{postData?.date}</div>
        <ReactMarkdown
          source={postData?.content?.content}
          renderers={{ code: CodeBlock }}
        ></ReactMarkdown>
      </article>
    </BaseLayout>
  );
}

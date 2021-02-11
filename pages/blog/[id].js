import React from 'react';
import BaseLayout from '../../components/layout/BaseLayout';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import styles from './style.module.scss';
import Head from 'next/head';
import moment from 'moment';

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
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    error: false,
  });
  const [inputs, setInputs] = React.useState({
    name: '',
    comment: '',
  });
  const [comments, setComments] = React.useState([]);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        error: false,
      });
      setInputs({
        name: '',
        comment: '',
      });
    } else {
      setStatus({
        error: true,
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      error: false,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: inputs?.name,
      comment: inputs?.comment,
      postID: postData.postID,
    };

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      handleServerResponse(true, 'Thank you, your message has been submitted.');
      setComments([{ ...body, date: moment().format('ll') }, ...comments]);
    } else {
      handleServerResponse(false, 'Something went wrong');
    }
  };

  React.useEffect(() => {
    fetch('/api/blog').then((res) =>
      res
        .json()
        .then((res) =>
          setComments(
            [...res.comments.filter((comment) => comment.postID === postData.postID)].reverse(),
          ),
        ),
    );
  }, []);

  return (
    <BaseLayout>
      <Head>
        <title>{postData?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={postData?.description} />
        <meta name="keywords" content={postData?.keywords} />
        <meta name="og:title" content={postData?.title} />
        <meta name="og:description" content={postData?.description} />
      </Head>
      <article className={styles.article}>
        <h2 className="AbrilFat pt-6 md:pt-16 flex items-center text-2xl">{postData?.title}</h2>
        <div className="text-sm text-gray-600 pb-6">{postData?.date}</div>
        <ReactMarkdown
          source={postData?.content?.content}
          renderers={{ code: CodeBlock }}
        ></ReactMarkdown>
      </article>
      <div className="container mx-auto md:px-32 lg:px-48 xl:px-64">
        <h3 className="text-2xl font-bold border-solid border-b border-black">Comments</h3>
        <form className="w-full py-6 border-solid border-b border-black" onSubmit={handleOnSubmit}>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="name"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
            </div>
          </div>
          <div className="flex flex-wrapmb-2">
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                id="comment"
                comment
                name="comment"
                onChange={handleOnChange}
                required
                value={inputs.comment}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                type="submit"
                disabled={status.submitting}
              >
                {!status.submitting ? (!status.submitted ? 'Add Comment' : 'DONE!') : 'Adding...'}
              </button>
            </div>
            {status?.error && (
              <p className="text-red-700 font-bold">Sorry! Something went wrong!</p>
            )}
          </div>
        </form>
        {comments &&
          comments.map((comment) => (
            <div className="my-6">
              <p className="text-md">{comment.comment}</p>
              <div className="text-gray-700 text-sm flex py-4">
                <p>{comment.name}</p>
                <p className="ml-6">{moment(comment.date).format('ll')}</p>
              </div>
            </div>
          ))}
      </div>
    </BaseLayout>
  );
}

import React from 'react';
import BaseLayout from '../../components/layout/BaseLayout';
import axios from 'axios';
import Head from 'next/head';

const ContactPage = () => {
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = React.useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
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
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/myybonvr',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, your message has been submitted.');
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <BaseLayout>
      <Head>
        <title>Tom W</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Contact Tom Wagner" />
        <meta
          name="keywords"
          content="developer, react, react native, frontend developer, tom wagner, tomasz wagner, tomek wagner, contact me, contact, get in touch"
        />
        <meta name="og:title" content="Tom Wagner Frontend Devloper - Contact" />
        <meta
          name="og:description"
          content="developer, react, react native, frontend developer, tom wagner, tomasz wagner, tomek wagner, contact me, contact, get in touch"
        />
        <meta name="og:image" content="/img/seoMain.jpg" />
        <meta name="og:url" content="https://twagner.me/contact" />
      </Head>
      <main className="container mx-auto pb-16 px-4 md:px-32 lg:px-48 xl:px-64 flex flex-col items-center">
        <h1 className="AbrilFat py-8 md:pt-16 flex items-center  text-2xl">Get in touch</h1>
        <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
          <div className="flex flex-wrap -mx-3 lg:border-solid lg:border-t lg:border-r lg:border-grey-900">
            <div className="w-full p-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 lg:border-solid lg:border-t lg:border-l lg:border-b lg:border-grey-900">
            <div className="w-full p-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </div>
          </div>
          <div class="md:flex md:items-center l">
            <div class="md:w-1/3">
              <button
                className="shadow text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                type="submit"
                disabled={status.submitting}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </div>
          </div>
        </form>
        {status.info.error && <div className="error">Error: {status.info.msg}</div>}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </main>
    </BaseLayout>
  );
};

export default ContactPage;

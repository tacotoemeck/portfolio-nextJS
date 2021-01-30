import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import BaseLayout from '../../components/layout/BaseLayout';
import experience from '../../public/content/experience';
import Head from 'next/head';

const ExperiencePage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Tom W</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="experience, JavaScript, React, React Native developer" />
        <meta
          name="keywords"
          content="developer, react, react native, frontend developer, MatchPint"
        />
        <meta name="og:title" content="Tom Wagner experience" />
        <meta
          name="og:description"
          content="developer, react, react native, frontend developer, tom wagner, tomasz wagner, tomek wagner, experience, portfolio"
        />
        <meta name="og:image" content="/img/mp3.jpg" />
        <meta name="og:url" content="https://twagner.me/experience" />
      </Head>
      <div className="md:py-12">
        {experience.map((exp) => (
          <ExperienceTile key={exp.company} {...exp} />
        ))}
      </div>
    </BaseLayout>
  );
};

const ExperienceTile = ({
  screenshotsFirst,
  screenshoots,
  company,
  role,
  type,
  stack,
  description,
  live,
  github,
}) => {
  const actionButton = (link, text) => (
    <a
      className="shadow mx-4 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
      href={link}
    >
      {text}
    </a>
  );

  return (
    <div
      className={`container mx-auto flex flex-col lg:border-solid lg:border-b lg:border-grey-900 ${
        screenshotsFirst ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="w-screen md:w-1/2 px-8 lg:px-24 xl:px-32 flex flex-col items-center lg:py-12">
        <Carousel images={screenshoots} />
        <div className="flex">
          {live && actionButton(live, 'Visit Live')}
          {github && actionButton(github, 'See code')}
        </div>
      </div>
      <div
        className={`flex flex-col justify-center p-4 lg:px-20 lg:py-8 lg:border-solid  lg:border-grey-900 md:w-1/2 ${
          screenshotsFirst ? 'lg:border-r' : 'lg:border-l'
        }`}
      >
        <h2 className="text-2xl font-bold py-2">{company}</h2>
        <h3 className="py-1">
          <span className="font-bold">Role: </span>
          {role}
        </h3>
        <h3 className="py-1">
          <span className="font-bold">Type: </span>
          {type}
        </h3>
        <p className="py-1">{stack}</p>
        <p className="py-2">{description}</p>
      </div>
    </div>
  );
};

export default ExperiencePage;

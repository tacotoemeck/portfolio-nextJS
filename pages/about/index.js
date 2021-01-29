import React from 'react';
import BaseLayout from '../../components/layout/BaseLayout';
import Image from 'next/image';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import Emoji from '../../components/Emoji/Emoji';

const AboutPage = () => (
  <BaseLayout>
    <div className="w-full">
      <Image src="/img/me.png" width={1024} height={300} layout="responsive" />
    </div>
    <div className="container mx-auto pb-16 px-4 md:px-32 lg:px-48 xl:px-64">
      <h2 className="AbrilFat py-8 md:pt-16 flex items-center text-2xl">About me</h2>
      <div className="mb-16 pb-16 leading-relaxed border-solid border-b border-black">
        <p className="my-6">
          Ahoy, It’s Tom or Tomek, as everyone calls me back in Poland where I grew up. I am a
          London based software developer specializing in frontend, particularly JavaScript, React
          and React Native. The UK has been home my whole adult life, but a lot of time is spent
          travelling between the US, Mexico and Poland.
        </p>
        <p className="my-6">
          I started building websites in secondary school but haven’t pursued it as a career until
          2019. In between I got myself a business degree, a fruitful career in sales and
          recruitment, which I then switched for a dream of owning a restaurant. Here’s where
          taco-tomek comes from. I’ve also done a fair share of travelling and backpacking which
          really helped shaping who I am now.
        </p>
        <p className="my-6">
          Hard work is really in my core. When I decided to make a switch to a full time career as a
          developer, I had quite a bit of catching up to do. I have been dedicating my whole spare
          time on getting better at what I do. 2 years on and I still can’t see the light at the end
          of the tunnel. There’s just so much to learn and I love it! If you want to learn more
          about my journey into tech, check the article I wrote here: LINK .
        </p>
        <h3 className="py-4 text-lg font-bold">Main stack:</h3>
        <p>JavaScript, React, NextJS, React Native, HTML, CSS, NodeJS, Tailwind</p>
        <h3 className="py-4 text-lg font-bold">Secondary:</h3>
        <p>PostgreSQL, MongoDB, Express</p>
        <h3 className="py-4 text-lg font-bold">Other skills:</h3>
        <p>Project Management, Public speaking, Business Management</p>
        <h3 className="py-4 text-lg font-bold">Groups/Organizations:</h3>
        <ul>
          <li className="flex">
            <Emoji className="mr-3" symbol="🔗" label="link" />
            <ExternalLink
              href="https://www.foundersandcoders.com/about"
              text="Founders and Coders"
            />
          </li>
          <li className="flex">
            <Emoji className="mr-3" symbol="🔗" label="link" />
            <ExternalLink
              href="https://www.meetup.com/freeCodeCamp-London/"
              text="Free Code Camp - London"
            />
          </li>
        </ul>
        <h3 className="py-4 text-lg font-bold">Other passions:</h3>
        <p className="pb-6">Running, Climbing, Reading, Business, Nature</p>
        <p>
          Visit my{' '}
          <ExternalLink href="https://www.linkedin.com/in/tomasz-wagner/" text="Linkedin" /> to view
          my work experience and education
        </p>
        <p>
          See my <ExternalLink href="https://github.com/tacotoemeck" text="Github" /> for code
          examples
        </p>
      </div>
    </div>
  </BaseLayout>
);

export default AboutPage;

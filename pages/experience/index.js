import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import BaseLayout from '../../components/layout/BaseLayout';
import experience from '../../public/content/experience';

const ExperiencePage = () => {
  return (
    <BaseLayout>
      <div className="md:py-12">
        {experience.map((exp) => (
          <ExperienceTile {...exp} />
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
}) => (
  <div
    className={`container mx-auto flex flex-col lg:border-solid lg:border-b lg:border-grey-900 ${
      screenshotsFirst ? 'md:flex-row' : 'md:flex-row-reverse'
    }`}
  >
    <div className="w-screen md:w-1/2 px-8 lg:px-24 xl:px-32 flex items-center lg:py-12">
      <Carousel images={screenshoots} />
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

export default ExperiencePage;

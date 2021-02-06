import Image from 'next/image';
import React from 'react';

const BlogCard = ({ img, tags, title, date, summary }) => (
  <div className="w-full lg:flex border border-gray-200 rounded-sm shadow-md hover:shadow-2xl cursor-pointer my-4">
    <div className="h-48 lg:h-auto lg:w-48 flex-none border-r border-gray-400">
      <Image width={150} height={150} src={img} layout="responsive" />
    </div>
    <div className="p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        {tags && (
          <div className="flex items-center">
            {tags.split(' ').map((tag) => (
              <div
                className="px-2 shadow-sm no-underline rounded-full bg-blue-300 text-xs mr-1 my-2"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="flex items-center">
        {/* <img className="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer" /> */}
        <div className="text-sm">
          {/* <p className="text-gray-900 leading-none">John Smith</p> */}
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;

import React from 'react';

function NodeIcon(props) {
  let colors = {
    mainColor: props.mainColor || '#53C1DE', //
    secondaryGreen: props.mainColor || '#3b8739', // green
    lightGreen: props.mainColor || '#66a060', // light green
    otherGreen: props.mainColor || '#6da75d', // other green ??
    darkColor: props.mainColor || '#333', // black
    backgroundColor: props.background || '#fff', // light white
  };

  return (
    <svg
      className={props.className}
      height="75"
      width="75"
      enable-background="new 0 0 2249 2249"
      viewBox="0 0 2249 2249"
    >
      <path
        d="m2249 1124.5c0 621-503.5 1124.5-1124.5 1124.5-573 0-1045.9-428.5-1115.6-982.6-5.9-47.1-8.9-94.5-8.9-141.9 0-88 10.1-173.7 29.2-255.9 115.9-497.7 562.3-868.6 1095.3-868.6 531.7 0 977.2 369 1094.3 864.9 15.6 65.8 25.1 132.9 28.6 200.5 1.1 19.7 1.6 39.4 1.6 59.1z"
        fill={colors.backgroundColor}
      />
      <path
        d="m1068.3 1214.8v-292.4l-253.2-146.1-253.2 146.1v292.4l253.2 146.2z"
        fill={colors.secondaryGreen}
      />
      <path
        d="m2065.4 1170.4 165 95.3-165 95.3-253.2-146.2v-292.3l253.2-146.2 153.4 88.6c15.6 65.8 25.1 132.9 28.6 200.5l-93.8 54.2v-101.8l-88.2-50.9-88.2 50.9v101.8z"
        fill={colors.darkColor}
      />
      <path d="m2114.6 1097v-56.8l-49.1-28.4-49.2 28.4v56.8l49.2 28.4z" fill={colors.lightGreen} />
      <path
        d="m442.3 922.5v385.5l-168.9-96.3v-197.7l-84.3-48.7-84.3 48.7v197.6l-95.9 54.7c-5.9-47-8.9-94.4-8.9-141.8 0-88 10.1-173.7 29.2-255.9l159.9-92.3z"
        fill={colors.darkColor}
      />
      <path d="m815 776.2 253.2 438.5-253.2 146.2-253.1-438.5z" fill={colors.otherGreen} />
      <path d="m561.9 1214.8 86.9-141.8-86.9-150.6z" fill={colors.secondaryGreen} />
      <path d="m983.8 1068.6 84.4-146.2-253.1-146.1z" fill={colors.secondaryGreen} />
      <path
        d="m1522.3 437.4v387.9l-84.9-49-253.2 146.2v292.4l253.2 146.2 253.2-146.2v-687.4zm-.5 679.9-84.4 48.7-84.4-48.7v-97.4l84.4-48.7 84.4 48.7z"
        fill={colors.darkColor}
      />
      <g fill={colors.lightGreen}>
        <path d="m1239.4 1575.7s-5-42.7-50.7-42.7-77 6-77 31.3 88.9 25.3 122.7 35.3c33.8 9.9 63.6 35.8 48.7 81.5s-60.6 50.7-131.2 50.7-86.5-58.6-86.5-81.5h39.8s-5 35.8 41.7 41.7 91.4 9.3 97.4-26.8c8-47.7-151.1-23.9-165-70.6-11.8-39.5-5-91.4 74.5-99.4s123.2 27.2 123.2 79.5z" />
        <path d="m855.3 1762 87.9 50.7c44.2 25.5 99.4-6.4 99.4-57.4v-252.6h-35.8v242.6c0 27.8-30.1 45.3-54.3 31.3l-61.3-35.4v-258.9l224.2-129.4 224.2 129.4v258.9l-224.2 129.4-64.6-37.3-42.2 17 106.8 61.6 260-150.1v-300.2l-260-150.1-260 150.1z" />
      </g>
    </svg>
  );
}

export default NodeIcon;

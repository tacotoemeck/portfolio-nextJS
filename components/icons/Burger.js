import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Burger = ({ isOpen }) => {
  const first = useSpring({
    transform: isOpen ? 'translate(5px, 32px) rotate(-45deg)' : 'translate(2px, 7px) rotate(0deg)',
  });
  const second = useSpring({
    transform: isOpen ? 'translate(10px, 4px) rotate(45deg)' : 'translate(2px, 19px) rotate(0deg)',
  });
  const third = useSpring({
    transform: isOpen ? 'translate(5px, 32px) rotate(-45deg)' : 'translate(2px, 31px) rotate(0deg)',
  });

  return (
    <div>
      <svg width="40" height="30" viewBox="0 0 44 35" fill="black">
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </div>
  );
};

export default Burger;

// import React from 'react';
// import PropTypes from 'prop-types';

// const Burger = ({ size, isOpen }) =>
//     !isOpen ? (
//         <svg width={size} height={size} viewBox="0 0 24 24">
//             <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
//         </svg>
//     ) : (
//         <svg width={size} height={size} viewBox="0 0 24 24">
//             <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
//         </svg>
//     );
// export default Burger;

// Burger.propTypes = {
//     size: PropTypes.number,
//     isOpen: PropTypes.bool
// };

// Burger.defaultProps = {
//     size: 24,
//     isOpen: false
// };

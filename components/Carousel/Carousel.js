import React from 'react';
import style from './style.module.scss';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = images?.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };

  const totalImages = images?.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  const sliderControl = (isLeft) => (
    <button
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
    <div className="relative w-full">
      <div className={style.carousel}>
        {sliderControl(true)}
        {images.map((img, i) => (
          <div className="w-full flex-shrink-0">
            <img ref={refs[i]} src={img} className="w-full object-contain" />
          </div>
        ))}
        {sliderControl()}
      </div>
    </div>
  );
};

export default Carousel;

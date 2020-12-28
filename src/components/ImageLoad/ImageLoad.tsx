import React, {useState, useEffect} from 'react';

type Props = {
  src: string;
  placeholder: string;
  alt?: string;
};

const ImageLoad: React.FC<Props> = (props) => {
  const {src, placeholder, alt = ''} = props;
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    const imageToLoad = new Image();

    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: 'opacity .15s linear',
      }}
      alt={alt}
    />
  );
};

export default ImageLoad;

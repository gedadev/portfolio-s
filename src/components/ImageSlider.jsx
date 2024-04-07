import PropTypes from "prop-types";
import { useCallback, useEffect, useState, Fragment } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPrevImage = () => {
    setCurrentIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const getNextImage = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }, [images]);

  useEffect(() => {
    const intervalID = setInterval(() => getNextImage(), 10000);

    return () => clearInterval(intervalID);
  }, [getNextImage]);

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="preview-slider">
      <div className="images-container">
        {images.map((img) => (
          <img
            key={img.url}
            src={img.url}
            alt={img.alt}
            style={{ translate: `${-100 * currentIndex}%` }}
          />
        ))}
      </div>
      <div className="prev-arrow-container" onClick={getPrevImage}>
        <span className="left-arrow"></span>
      </div>
      <div className="next-arrow-container" onClick={getNextImage}>
        <span className="right-arrow"></span>
      </div>
      <div className="navigation">
        {images.map((item, index) => (
          <Fragment key={item.url}>
            {index === currentIndex ? (
              <RadioButtonCheckedIcon onClick={() => selectImage(index)} />
            ) : (
              <RadioButtonUncheckedIcon onClick={() => selectImage(index)} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;

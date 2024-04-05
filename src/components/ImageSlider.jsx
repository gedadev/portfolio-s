import PropTypes from "prop-types";

function ImageSlider({ images }) {
  return (
    <div className="preview-slider">
      <div className="prev-arrow-container">
        <span className="left-arrow"></span>
      </div>
      <div className="images-container">
        {images.map((img) => (
          <img key={img} src={img} alt="" />
        ))}
      </div>
      <div className="next-arrow-container">
        <span className="right-arrow"></span>
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;

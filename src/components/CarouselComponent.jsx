import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ Images }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      stopOnHover={false}
    >
      {Images.map((img, i) => (
        <div key={i}>
          <img src={img.src} alt={img.alt || `Slide ${i + 1}`} />
          <p className="legend">{img.legend || `Legend ${i + 1}`}</p>
        </div>
      ))}
    </Carousel>
  );
};

// Prop Types validation
CarouselComponent.propTypes = {
  Images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, // Image source is required
      legend: PropTypes.string, // Legend text is optional
      alt: PropTypes.string, // Alt text is optional
    })
  ).isRequired, // Images array is required
};

export default CarouselComponent;

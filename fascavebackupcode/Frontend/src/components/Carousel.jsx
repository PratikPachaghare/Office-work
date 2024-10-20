import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-customcrousel text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          <div className="bg-customcrousel text-white py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
              {/* Text Content on the Left */}
              <div className="text-left flex-1 lg:pr-8">
                <p className="text-lg font-semibold mb-2">
                  Starting at $999.00
                </p>
                <h1 className="text-4xl font-bold mb-4">
                  The best notebook collection 2023
                </h1>
                <p className="text-xl mb-6">
                  Exclusive offer -10% off this week
                </p>
                <button className="bg-white text-teal-900 py-2 px-6 rounded-full">
                  Shop Now
                </button>
              </div>

              {/* Image on the Right */}
              <div className="flex-1 mt-8 lg:mt-0">
                <img
                  src="/Images/crou1.png"
                  alt="Notebook"
                  className="rounded-md "
                />
              </div>
            </div>
          </div>

          <div className="bg-customcrousel text-white py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
              {/* Text Content on the Left */}
              <div className="text-left flex-1 lg:pr-8">
                <p className="text-lg font-semibold mb-2">
                  Starting at $999.00
                </p>
                <h1 className="text-4xl font-bold mb-4">
                  The best notebook collection 2023
                </h1>
                <p className="text-xl mb-6">
                  Exclusive offer -10% off this week
                </p>
                <button className="bg-white text-teal-900 py-2 px-6 rounded-full">
                  Shop Now
                </button>
              </div>

              {/* Image on the Right */}
              <div className="flex-1 mt-8 lg:mt-0">
                <img
                  src="/Images/crou3.png"
                  alt="Notebook"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

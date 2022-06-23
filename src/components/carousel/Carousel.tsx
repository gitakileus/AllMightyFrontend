import { useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Carousel = (props: { Images: any | undefined }) => {
  const [nav, setNav] = useState(0);
  
  const carosel = () =>
    props.Images.map((image: any, index: any) => {
      return (
        <div key={index} className='px-[4px]'>
          <img key={index} alt={index} src={image} />
        </div>
      );
    });

  return (
    <div>
      {/* <div>
        <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill='#fff'><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" onClick={next} /></svg>
      </div> */}
      <Slider
        asNavFor={nav}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {carosel()}
      </Slider>
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill='#fff'><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" onClick={prev} /></svg>
      </div> */}
    </div>
  );
};

export default Carousel;

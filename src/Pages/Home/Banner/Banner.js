import React from "react";
import '../../../Pages/Home/Banner/style.css';
const Banner = () => {
  return (
    <div className="">
      <div className="hero-content flex-col lg:flex-row-reverse 100vhm">
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-6xl font-bold color3"> Your Health, Our Mission.</h1>
          <br />
          <h3 className="text-3xl color2">
            Your Health, Our Priority. Providing Compassionate Care and
            Expertise to Enhance Your Well-being.
          </h3>
        </div>
        <br />
        <br />
        <br />
        {/* <img src={doctor} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' /> */}
      </div>
    </div>
  );
};

export default Banner;

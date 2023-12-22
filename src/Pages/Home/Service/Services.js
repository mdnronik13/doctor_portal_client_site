import React from "react";
import fluoride from "../../../assets/images/Doctor.jpg";
import cavity from "../../../assets/images/doctor3.jpg";
import Service from "./Service";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Experience Doctors",
      description: `Experience is the healer's wisdom, and in its embrace, they become the masters of health and well-being.`,
      icon: fluoride,
    },
    {
      id: 2,
      name: `Best Hospital's Doctors`,
      description: `The best hospitals are defined by the dedication and expertise of their doctors, where excellence in healthcare is the ultimate commitment.`,
      icon: cavity,
    },
  ];
  return (
    <div className="mt-20">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <h3 className="text-2xl red uppercase font-bold">Our Services</h3>
        <h2 className="text-4xl font-bold">Services We Provide</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div
          style={{ height: 500, width: 1000 }}
          className=" grid mt-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8"
        >
          {servicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Services;

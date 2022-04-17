import React from "react";
import useService from "../../hooks/useService/useService";
import MainService from "../MainService/MainService";

const MainServices = () => {
  const [services, setServices] = useService();
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Our <span style={{ color: "orange" }}>Services</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {services.map((service) => (
          <MainService key={service.id} service={service}></MainService>
        ))}
      </div>
    </div>
  );
};

export default MainServices;

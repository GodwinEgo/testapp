import React from "react";
import {
  BiCoffee,
  BiHeart,
  BiCamera,
  BiBook,
  BiAlarm,
  BiCar,
  BiCalendar,
  BiChart,
  BiCloud,
  BiCode,
  BiCreditCard,
  BiDesktop,
  BiDollar,
  BiEnvelope,
  BiFilm,
  BiFolder,
  BiGame,
  BiGlobe,
  BiHome,
  BiKey,
  BiMap,
  BiPhone,
  BiShield,
  BiStar,
  BiUser,
} from "react-icons/bi";

const IconGrid = () => {
  const icons = [
    BiCoffee,
    BiHeart,
    BiCamera,
    BiBook,
    BiAlarm,
    BiCar,
    BiCalendar,
    BiChart,
    BiCloud,
    BiCode,
    BiCreditCard,
    BiDesktop,
    BiDollar,
    BiEnvelope,
    BiFilm,
    BiFolder,
    BiGame,
    BiGlobe,
    BiHome,
    BiKey,
    BiMap,
    BiPhone,
    BiShield,
    BiStar,
    BiUser,
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {icons.map((Icon, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <Icon size={48} className="mb-3" />
                <h5 className="card-title text-center">{Icon.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;

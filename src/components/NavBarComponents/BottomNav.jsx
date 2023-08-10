import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiMicrophone, BiSearch } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div>
      <nav className="d-flex flex-column flex-md-row align-items-md-center gap-3 mt-4">
        <div className="input-group">
          <span className="input-group-text bg-body border-0">
            <AiOutlineEnvironment />
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Chandigarh"
          />
        </div>
        <div className="input-group mt-3 mt-md-0">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Search in Chandigarh"
          />
          <span className="input-group-text border-0 bg-body">
            <BiMicrophone />
          </span>
          <span className="input-group-text border-0 bg-danger">
            <BiSearch className="text-white" />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;

import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";

const BottomNav = () => {
  return (
    <div>
      <nav className="d-flex justify-content-evenly gap-3  ">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <AiOutlineEnvironment />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Location" />
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;

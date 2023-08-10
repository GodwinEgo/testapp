import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const TopNav = () => {
  return (
    <div>
      <nav className="d-flex flex-column flex-lg-row justify-content-between mt-4">
        <h2 className="fs-4 fs-lg-3 mb-3 mb-lg-0">
          Search across <span className="text-primary">'3.3 crore +'</span>{" "}
          <a href="/">Products & Services</a>{" "}
        </h2>
        <button className="btn btn-primary">
          Download App <AiOutlineCloudDownload className="ml-1" />{" "}
        </button>
      </nav>
    </div>
  );
};

export default TopNav;

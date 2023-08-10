import React from "react";
import mover from "../assets/packer.jpg";
import b2b from "../assets/b2b.jpg";
import repair from "../assets/repair.jpg";
import house from "../assets/house.jpg";
import doctor from "../assets/doctor.jpg";
import { BiRightArrow } from "react-icons/bi";

const ImageGrid = () => {
  return (
    <div className="hero-area">
      <div
        className="image-grid d-flex justify-content-between flex-wrap"
        style={{ marginTop: "20px" }}
      >
        <div
          className="image-item item1"
          style={{
            flex: "0 0 calc(40% - 15px)",
            marginRight: "10px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={mover}
            alt="mover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <div className="overlay .overlay-first">
            <h1>Packers & Movers </h1>
            <button>Get The Best Deal</button>
          </div>
        </div>
        <div
          className="image-item item2"
          style={{
            flex: "0 0 calc(15% - 15px)",
            marginRight: "10px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={b2b}
            alt="b2b"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <div className="overlay">
            <div className="overlay-text">
              <h2>B2B </h2>
              <br />
              <p>Quick Quotes</p>
            </div>
            <div className="icon">
              <BiRightArrow />
            </div>
          </div>
        </div>
        <div
          className="image-item item3"
          style={{
            flex: "0 0 calc(15% - 15px)",
            marginRight: "10px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={repair}
            alt="repair"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <div className="overlay">
            {" "}
            <div className="overlay-text">
              <h2>Repair & Services </h2>
              <br />
              <p>Get nearest vendor</p>
            </div>
            <div className="icon">
              <BiRightArrow />
            </div>
          </div>
        </div>
        <div
          className="image-item item4"
          style={{
            flex: "0 0 calc(15% - 15px)",
            marginRight: "10px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={house}
            alt="house"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <div className="overlay">
            {" "}
            <div className="overlay-text">
              <h2>B2B </h2>
              <br />
              <p>Quick Quotes</p>
            </div>
            <div className="icon">
              <BiRightArrow />
            </div>
          </div>
        </div>
        <div
          className="image-item item5"
          style={{
            flex: "0 0 calc(15% - 15px)",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={doctor}
            alt="doctor"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <div className="overlay">
            {" "}
            <div className="overlay-text">
              <h2>B2B </h2>
              <br />
              <p>Quick Quotes</p>
            </div>
            <div className="icon">
              <BiRightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

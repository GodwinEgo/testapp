import React from "react";
import mover from "../assets/packer.jpg";
import b2b from "../assets/b2b.jpg";
import repair from "../assets/repair.jpg";
import house from "../assets/house.jpg";
import doctor from "../assets/doctor.jpg";

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
          <div className="overlay">
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
          <div className="overlay">Text for Image 2</div>
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
          <div className="overlay">Text for Image 3</div>
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
          <div className="overlay">Text for Image 4</div>
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
          <div className="overlay">Text for Image 5</div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

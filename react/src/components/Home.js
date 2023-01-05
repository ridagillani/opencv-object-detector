import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [fileButton, setFileButton] = useState(false);

  const [imageURL, setImageURL] = useState("");
  const [show, setShow] = useState(false);
  const fileUpload = () => {
    setFileButton(true);
  };
  const handleImageChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      axios
        .post("http://localhost:5000/objectdetect", { image: reader.result })
        .then((res) => {
          setImageURL(`data:image/jpeg;base64,${res.data}`);
          setShow(true);
        })
        .catch((error) => console.log(error));
    };
  };

  return (
    <div>
      <header>
        <div className="logo">
          <em>Object</em> Detection
        </div>
      </header>
      <div className="topicsDiv" style={{ height: "100rem" }}>
        <div className="hello">
          <h1 className="Topic-main-heading">
            <em>Object </em>Detection
          </h1>
          <br />
          <Link to="/video">
            <Button
              variant="danger"
              style={{
                backgroundColor: "green",
                color: "white",
                height: "50px",
                fontSize: "20px",
                margin: 5,
                width: "400px",
              }}
            >
              <strong>Open Camera</strong>
            </Button>
          </Link>{" "}
          <br />
          <Button
            variant="danger"
            onClick={fileUpload}
            style={{
              backgroundColor: "green",
              color: "white",
              height: "50px",
              fontSize: "20px",
              margin: 5,
              width: "40%",
            }}
          >
            <strong>Detect by image</strong>
          </Button>
          <br />
          <br />
          {fileButton && (
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleImageChange}
              style={{ margin: 5 }}
            />
          )}
          {show && (
            <img src={imageURL} alt="loading" height={1000} width={1000} />
          )}
        </div>
      </div>
    </div>
  );
}

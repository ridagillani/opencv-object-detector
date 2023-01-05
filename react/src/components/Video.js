import React from "react";

export default function Video() {
  return (
    <div>
      <header>
        <div className="logo">
          <em>Object</em> Detection
        </div>
      </header>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="http://localhost:5000/objectdetect"
          alt="loading"
          height={600}
          width={900}
        />
      </div>
    </div>
  );
}

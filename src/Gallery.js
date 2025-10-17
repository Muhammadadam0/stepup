import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    "https://i.imgur.com/Tl8r5lC.jpg",
    "https://i.imgur.com/M9dz2kL.jpg",
    "https://i.imgur.com/r2z9tUq.jpg",
    "https://i.imgur.com/XyI3F4C.jpg",
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Our Gallery</h2>
      <div className="grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Institute" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

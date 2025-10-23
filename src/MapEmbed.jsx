import React from "react";
import "./MapEmbed.css"; // optional if you want to style it separately

const MapEmbed = () => {
  return (
    <div className="map-container">
      <iframe
        title="Ishaq Haroon Hospital Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9267217274746!2d74.2983708!3d31.553625599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919034dbb7dec2b%3A0x16a5f29a668bd332!2sIshaq%20Haroon%20Hospital!5e0!3m2!1sen!2s!4v1761250237248!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

import React from "react";
import "./About.css";
import { FaHeart, FaChalkboardTeacher, FaHandsHelping, FaGlobeAsia } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="overlay"></div>
      <div className="about-container">
        <div className="about-left">
          <h2>About Step Up Institute</h2>
          <p>
            Step Up Institute is a professional special education and therapy center dedicated to 
            empowering children with learning, speech, and developmental challenges. 
            We focus on inclusive growth through personalized support and innovative educational methods.
          </p>

          <p className="urdu">
            اسٹیپ اپ انسٹیٹیوٹ خصوصی تعلیم اور تھراپی کا ایک ادارہ ہے جو بچوں کو ان کے سیکھنے، بولنے اور
            نشوونما کے مسائل میں مدد فراہم کرتا ہے۔ ہم بچوں کی انفرادی ضروریات کے مطابق تعلیم اور تربیت فراہم کرتے ہیں۔
          </p>

          <div className="mission-vision">
            <div>
              <h3>🎯 Our Mission</h3>
              <p>
                To create an inclusive and nurturing educational environment that helps every child 
                reach their potential through compassion, innovation, and evidence-based care.
              </p>
            </div>
            <div>
              <h3>🌍 Our Vision</h3>
              <p>
                To become Pakistan’s most trusted center for special education and therapy, 
                recognized for transforming lives through love, learning, and empowerment.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h3>Why Choose Step Up Institute?</h3>
          <div className="choose-item">
            <FaChalkboardTeacher className="icon" />
            <div>
              <h4>Experienced Educators</h4>
              <p>Our therapists and teachers bring years of experience in child development and special education.</p>
            </div>
          </div>

          <div className="choose-item">
            <FaHeart className="icon" />
            <div>
              <h4>Compassionate Care</h4>
              <p>We ensure that every child feels supported, respected, and understood throughout their journey.</p>
            </div>
          </div>

          <div className="choose-item">
            <FaHandsHelping className="icon" />
            <div>
              <h4>Family Collaboration</h4>
              <p>We work closely with parents to make therapy and learning a shared, rewarding experience.</p>
            </div>
          </div>

          <div className="choose-item">
            <FaGlobeAsia className="icon" />
            <div>
              <h4>Inclusive Environment</h4>
              <p>We embrace diversity and aim to build a future where every child has equal opportunities to learn and grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

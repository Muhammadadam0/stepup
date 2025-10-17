import React from "react";
import "./DrNabeelaShahid.css";

function Nabeela({ lang }) {
  return (
    <section id="nabeela" className="nabeela">
      <div className="content">
        <div className="text">
          <h2>{lang === "en" ? "Meet Ms. Nabeela Shahid" : "محترمہ نبیلہ شاہد سے ملیے"}</h2>
          <p className="roles">
            {lang === "en"
              ? "Clinical Psychologist | Founder of STEP UP Institute | Behavior Therapist | NLP Practitioner | Motivational Speaker"
              : "کلینیکل سائیکولوجسٹ | بانی اسٹیپ اپ انسٹیٹیوٹ | بیہیویئر تھراپسٹ | این ایل پی پریکٹیشنر | موٹیویشنل اسپیکر"}
          </p>
          <p className="bio">
            {lang === "en"
              ? "Ms. Nabeela Shahid is a visionary leader in the field of child development and special education. With years of hands-on experience, she empowers children to reach their full potential through compassionate therapy, evidence-based strategies, and motivational guidance."
              : "محترمہ نبیلہ شاہد بچوں کی ترقی اور خصوصی تعلیم کے شعبے میں ایک بصیرت مند رہنما ہیں۔ متعدد سالوں کے عملی تجربے کے ساتھ، وہ بچوں کو محبت، جدید تھراپی اور موثر حکمت عملی کے ذریعے اپنی مکمل صلاحیتوں تک پہنچنے کا موقع فراہم کرتی ہیں۔"}
          </p>
        </div>
        <div className="image">
          <img
            src="/Nabeela.jpeg"
            alt="Ms. Nabeela Shahid"
          />
        </div>
      </div>
    </section>
  );
}

export default Nabeela;

import React, { useState } from "react";
import "../Main/main.scss";

function Main() {
  const [showModal, setShowModal] = useState(false); // Modal oynasini boshqarish uchun
  const [showLearnMore, setShowLearnMore] = useState(false); // Learn More ma'lumotini boshqarish uchun

  // Modalni ochish funksiyasi
  const openModal = () => {
    setShowModal(true);
  };

  // Modalni yopish funksiyasi
  const closeModal = () => {
    setShowModal(false);
  };

  // Learn More ma'lumotini ko'rsatish/yashirish funksiyasi
  const toggleLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  return (
    <main className="container">
      <h1>Make your website</h1>
      <h2>wonderful</h2>

      <h3>
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </h3>

      <div id="div_btn">
        <button id="free_try" onClick={openModal}>
          Start free trial
        </button>
        {/* Yangi Learn More tugmasi */}
        <button id="learn_more" onClick={toggleLearnMore}>
          Learn More
        </button>
      </div>

      {/* Modal oynasi */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Sign Up</h2>
            <p>Enter your details to create an account.</p>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Learn More uchun qo'shimcha ma'lumot */}
      {showLearnMore && (
        <div className="learn-more">
          <h2>Additional Information</h2>
          <p>
            Bu yerda qo‘shimcha ma'lumot joylashadi. Siz bu yerga mahsulot yoki xizmatlaringiz haqida batafsil ma'lumot, afzalliklar yoki qo'llanmani qo'shishingiz mumkin.
          </p>
        </div>
      )}
    </main>
  );
}

export default Main;

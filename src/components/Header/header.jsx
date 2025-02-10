import { useState } from 'react';
import '../Header/header.scss';
import React from "react";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header className='container'>
            <a href="#">
                <img src="/assets/icons/Logo.svg" alt="Logo" />
            </a>

            <div className='button_div'>
                <button>Sign in</button>

                {/* Sign Up button with onClick */}
                <button onClick={openModal}>
                    Sign up
                    <img src="/assets/icons/Path.png" alt="" />
                </button>
            </div>

            {/* Sign Up Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Sign Up</h2>
                        <p>Enter your details to create an account.</p>
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

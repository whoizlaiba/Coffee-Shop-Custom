"use client"
import React, { useState } from 'react';
import style from "./page.module.css"
const ReviewForm: React.FC = () => {
  const [isSubmitting] = useState(false);

  return (
    <div className={`${style.reviewformcontainer}`} id="reviews">
      <h1  className={`${style.reviewformheader}`}>
        Got a favorite brew? Share your sip-spiration and help us make every cup better!
      </h1>
      <br />
      <div  className={`${style.reviewformbox}`}>
        <h2  className={`${style.reviewformtitle}`}>
          Caffeine Dreams Review Form
        </h2>

        <form
          action="https://formspree.io/f/xrbglazw"
          method="POST"
          className={`${style.reviewformfields}`}
        >
          <div  className={`${style.formfield}`}>
            <label htmlFor="name" className={`${style.formlabel}`}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${style.forminput}`}
              required
            />
          </div>

          <div  className={`${style.formfield}`}>
            <label htmlFor="email"  className={`${style.formlabel}`}>Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${style.forminput}`}
              required
            />
          </div>

          <div  className={`${style.formfield}`}>
            <label htmlFor="rating"  className={`${style.formlabel}`}>Rating</label>
            <select
              id="rating"
              name="rating"
              className={`${style.formselect}`}
              required
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <div  className={`${style.formfield}`}>
            <label htmlFor="review"  className={`${style.formlabel}`}>Your Review</label>
            <textarea
              id="review"
              name="review"
              className={`${style.formtextarea}`}
              rows={4}
              required
            />
          </div>

          <div  className={`${style.submitbuttoncontainer}`}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${style.submitbutton}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;






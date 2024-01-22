import React from "react";
import "./Article.css";
const Article = () => {
  return (
    <div>
      <h1>Amazing Head Phone</h1>
      <p>$50 USD</p>
      <p>
        Audio cues may be skewed to one side and you may even feel 'listening
        fatigue' after listening for some time. This is what we call imaging.
        It's the localization of spatial cues such as instruments, sound
        effects, or voices inherent to your audio content
      </p>
      <div className="options">
        <div className="option">
          <h4>color</h4>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="option">
          <h4>color</h4>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="option">
          <h4>color</h4>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Article;

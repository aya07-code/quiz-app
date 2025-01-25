import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../../styles/CardCategory.css';

const CardCategory = ({ title, imgSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card" style={{padding:'5px'}}>
      <div className="image-container"       
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imgSrc} className="card-img-top fixed-size" alt={title}    />
        {isHovered && (
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        )}
      </div>
      <div className="card-footer">
        <h5 className="card-title">{title}</h5>
        <a href="">
          <FaBars />
        </a>
      </div>
    </div>
  );
};

export default CardCategory;
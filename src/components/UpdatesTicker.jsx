import React from 'react';

function UpdatesTicker({ updates }) {
  if (!updates || updates.length === 0) return null;
  return (
    <div className="bg-warning text-dark py-2 mb-3 animate__animated animate__fadeInDown">
      <marquee>
        {updates.map((up, idx) => (
          <span key={idx} style={{ marginRight: 30 }}>
            {up} &#128227;
          </span>
        ))}
      </marquee>
    </div>
  );
}

export default UpdatesTicker;

import React from "react";
import './styles.css';

export default function ItemList({ users }) {
  return (

    <div className="item-list-container container">
      <div className="item-list">
        {users.map((user) => (
          <div className="item-card" key={user.id}>
            <h4>"{user.title}"</h4>
            <img src={user.img} alt={user.title} />
          </div>
        ))}

      </div>
    </div>
  );
}
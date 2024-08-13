/* eslint-disable react/prop-types */
import "./App.css";

export default function Card({ users }) {
  return (
    <div key={users.id} className="sub-container">
      <p className="text-white">{users.name}</p>
      <p>{users.email}</p>
    </div>
  );
}

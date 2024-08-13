/* eslint-disable react/prop-types */
import "./App.css";

export default function Card({ users,loading,error }) {
  return (
    <>
    {error && <h1>ERROR ..</h1>}
      {loading ? 
        <h1>Loading ...</h1>
        :
        <div key={users.id} className="sub-container">
          <p className="text-white">{users.name}</p>
          <p>{users.email}</p>
        </div>
      }
    </>
  );
}

import React from "react";

const Profile = ({ person }) => {
  return (
    <div
      style={{
        marginTop: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={person.imgSrc}
        alt={person.fullName}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "15px"
        }}
      />
      <h2>{person.fullName}</h2>
      <p style={{ fontStyle: "italic", color: "#666" }}>{person.bio}</p>
      <h4 style={{ color: "#007BFF" }}>{person.profession}</h4>
    </div>
  );
};

export default Profile;

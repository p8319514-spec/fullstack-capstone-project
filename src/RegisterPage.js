import React from "react";

function RegisterPage() {

  const registerUser = async () => {
    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "thulasi",
        email: "thulasi@gmail.com",
        password: "12345"
      })
    });
  };

  return (
    <button onClick={registerUser}>
      Register
    </button>
  );
}

export default RegisterPage;

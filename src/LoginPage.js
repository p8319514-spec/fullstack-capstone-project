import React from "react";

function LoginPage() {

  const loginUser = async () => {
    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sampletoken123"
      },
      body: JSON.stringify({
        email: "thulasi@gmail.com",
        password: "12345"
      })
    });
  };

  return (
    <button onClick={loginUser}>
      Login
    </button>
  );
}

export default LoginPage;

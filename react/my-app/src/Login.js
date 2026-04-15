import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(e) {
  e.preventDefault(); // prevent page reload

  // ✅ Step 1: validation (ADD THIS FIRST)
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  // ✅ Step 2: login check
  if (email === "admin@gmail.com" && password === "1234") {
    alert("Login Successful ✅");
  } else {
    alert("Invalid Credentials ❌");
  }
}

  return (
   
	<div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
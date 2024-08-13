import { useState } from "react";

const handleSubmit = ({e, email, setMessage}) => {
  e.preventDefault();

  try {
    fetch("http://localhost:8080/api/account/findEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        setMessage("Password reset email sent. Please check your inbox.");
      } else {
        const data = res.text();
        setMessage(`Error: ${data}`);
      }
    })
  } catch (error) {
    setMessage(`Error: ${error.message}`);
  }
};

let ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message] = useState(""); // For success/error message

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%", textAlign: "center" }}>
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://img.pikbest.com/element_our/20230314/bg/802d7f483f0a4.png!sw800"
            alt="Forgot Password"
            className="img-fluid rounded-circle mb-4"
            style={{ height: "10rem", width: "10rem" }}
          />
        </div>
        <div className="card-title">
          <h3 className="mt-3">Forgot Password?</h3>
        </div>
        <p className="text-muted mb-4">Enter your email to reset your password</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <button type="button" className="btn btn-secondary mt-2">
            Cancel
          </button>
        </form>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;

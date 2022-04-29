import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-input-form">
      <input
        className="input-1"
        placeholder="Phone,email or username"
        type="text"
      ></input>
      <button>Next</button>
      <input
        className="input-2"
        placeholder="Forgot Password?"
        type="text"
      ></input>
      <span href="www.twitter.com">
        Don't have an account <a href="www.twitter.com">Sign Up</a>{" "}
      </span>
    </div>
  );
};

import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariant = {
  initial: {
    x: "-300px",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    x: "-300px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Login = () => {
  return (
    <motion.div
      className="login"
      variants={pageVariant}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <h3 className="extra-bold">Welcome back!</h3>
      <div className="form">
        <form>
          <div className="form-ele">
            <label htmlFor="email" className="label-txt">
              Email
            </label>
            <input type="email" name="email" className="form-i input-txt" />
            <p className="error">
              There might be a typo in your email. Try again.
            </p>
          </div>
          <div className="form-ele">
            <label htmlFor="password" className="label-txt">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-i password-txt"
            />

            <p className="error">
              There might be a typo in your password . Try again.
            </p>
          </div>
          <div className="fp">
            <a href="#" className="purple">
              Forgot password
            </a>
          </div>
          <div className="btn">
            <button type="submit" className="xtra-lg">
              Sign in
            </button>
          </div>
        </form>
        <div className="google-sign-in">
          <button type="submit" className="transparent-btn">
            <img src="/assets/google.svg" alt="google signin" className="" />
            <p>Sign in with Google</p>
          </button>
        </div>
        <div className="footer">
          <p className="input-txt">Don’t have an account?</p>
          <Link to="/register" className="purple">
            Sign up
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;

import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow =()=>{
    setShowPassword(!showPassword);
  }
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
          <label htmlFor={showPassword ? "text" :"password"} className="label-txt">
              Password
            </label>
            <div className="input">
              <input
                type={showPassword ?  "text" :"password"}
                name="password"
                className="form-i password-txt"
              />
              {showPassword ? (
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleShow}
                >
                  <path
                    d="M0.18103 9C1.12103 3.88 5.60803 0 11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.60803 18 1.12203 14.12 0.18103 9ZM11 14C12.3261 14 13.5979 13.4732 14.5356 12.5355C15.4732 11.5979 16 10.3261 16 9C16 7.67392 15.4732 6.40215 14.5356 5.46447C13.5979 4.52678 12.3261 4 11 4C9.67395 4 8.40218 4.52678 7.4645 5.46447C6.52681 6.40215 6.00003 7.67392 6.00003 9C6.00003 10.3261 6.52681 11.5979 7.4645 12.5355C8.40218 13.4732 9.67395 14 11 14ZM11 12C10.2044 12 9.44132 11.6839 8.87871 11.1213C8.3161 10.5587 8.00003 9.79565 8.00003 9C8.00003 8.20435 8.3161 7.44129 8.87871 6.87868C9.44132 6.31607 10.2044 6 11 6C11.7957 6 12.5587 6.31607 13.1214 6.87868C13.684 7.44129 14 8.20435 14 9C14 9.79565 13.684 10.5587 13.1214 11.1213C12.5587 11.6839 11.7957 12 11 12Z"
                    fill="#515050"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleShow}
                >
                  <path
                    d="M3.52003 4.93401L0.39303 1.80801L1.80803 0.393005L21.607 20.193L20.192 21.607L16.882 18.297C15.1232 19.4126 13.0828 20.0033 11 20C5.60803 20 1.12203 16.12 0.18103 11C0.61106 8.67072 1.78166 6.5429 3.52003 4.93401ZM13.757 15.172L12.293 13.708C11.7331 13.9759 11.1038 14.0635 10.492 13.9588C9.88012 13.854 9.31583 13.5621 8.8769 13.1231C8.43797 12.6842 8.146 12.1199 8.04125 11.5081C7.93649 10.8962 8.02411 10.267 8.29203 9.70701L6.82803 8.24301C6.19175 9.2045 5.9073 10.3563 6.02286 11.5035C6.13842 12.6507 6.64688 13.7226 7.46215 14.5379C8.27742 15.3532 9.34939 15.8616 10.4965 15.9772C11.6437 16.0927 12.7955 15.8083 13.757 15.172ZM6.97403 2.76001C8.22103 2.27001 9.58003 2.00001 11 2.00001C16.392 2.00001 20.878 5.88001 21.819 11C21.5126 12.6657 20.8239 14.2376 19.807 15.592L15.947 11.732C16.0617 10.9596 15.9939 10.1711 15.749 9.42966C15.5041 8.68821 15.0889 8.01442 14.5368 7.46227C13.9846 6.91013 13.3108 6.49498 12.5694 6.25008C11.8279 6.00518 11.0394 5.93735 10.267 6.05201L6.97403 2.76001Z"
                    fill="#434CE6"
                  />
                </svg>
              )}
            </div>
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

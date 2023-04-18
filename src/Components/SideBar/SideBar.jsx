import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";

const SideBar = ({ openSidebar, handleNav }) => {
  const loc = useLocation();
  let path = loc.pathname;
  const save = () => {
    console.log("eii");
  };
  const linksVariants ={
    initial :{
      x : "-100vw",
      opacity : 0,
    },
    final : {
      x : 0,
      opacity : 1,
      transition :{
        duration : 1,
        type : "spring",
        stiffness : 270,
      }
    },
    finalTwo : {
      x : 0,
      opacity : 1,
      transition :{
        duration : 1,
      }
    },
    initialTwo :{
      opacity : 0,
    },
    exit :{
      x : "-100vw",
      opacity : 0,
      transition :{
        duration : 1
      }
    },
    exitTwo :{
      opacity : 0,
      transition :{
        duration : 1
      }
    },
  }
  return (
    <div className="sidebar">
      <div className="desktop-sidebar desktop">
        <div className="hnd">
          <div className="hnd-ele">
            <Link
              to="/dashboard/"
              className={`link ${path == "/dashboard/" ? "current" : ""}`}
            >
              <div className={`svg ${path == "/dashboard/" ? "cur" : ""}`}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6156 20.8242C20.6156 21.0894 20.5102 21.3438 20.3227 21.5313C20.1352 21.7188 19.8808 21.8242 19.6156 21.8242H5.6156C5.35038 21.8242 5.09603 21.7188 4.90849 21.5313C4.72096 21.3438 4.6156 21.0894 4.6156 20.8242V11.8242H1.6156L11.9426 2.4362C12.1267 2.26868 12.3667 2.17584 12.6156 2.17584C12.8645 2.17584 13.1045 2.26868 13.2886 2.4362L23.6156 11.8242H20.6156V20.8242ZM11.6156 13.8242V19.8242H13.6156V13.8242H11.6156Z"
                    fill="#222121"
                  />
                </svg>
              </div>
              <p className="normal-txt">Home</p>
            </Link>
          </div>
          <div className="hnd-ele">
            <Link
              to="/dashboard/draft"
              className={`link ${path == "/dashboard/draft" ? "current" : ""}`}
            >
              <div className={`svg ${path == "/dashboard/draft" ? "cur" : ""}`}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.698 2C21.25 2 21.698 2.448 21.698 3V6.757L12.699 15.757L12.693 19.995L16.939 20.001L21.698 15.242V21C21.698 21.552 21.25 22 20.698 22H4.698C4.146 22 3.698 21.552 3.698 21V3C3.698 2.448 4.146 2 4.698 2H20.698ZM22.476 8.808L23.89 10.222L16.112 18L14.696 17.998L14.698 16.586L22.476 8.808ZM12.698 12H7.698V14H12.698V12ZM15.698 8H7.698V10H15.698V8Z"
                    fill="#222121"
                  />
                </svg>
              </div>

              <p className="normal-txt">Draft</p>
            </Link>
          </div>
        </div>
        <div className="hnd-other">
          <div className="create-btn not-tab">
            <button className="xtra-lg ">Create new time table</button>
          </div>
          <div className="new-btn tab">
            <button className="xtra-lg" disabled onClick={save}>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0L18 5V19.008C17.9997 19.2712 17.895 19.5235 17.7088 19.7095C17.5226 19.8955 17.2702 20 17.007 20H0.993C0.730378 19.9982 0.479017 19.8931 0.293218 19.7075C0.107418 19.5219 0.00209465 19.2706 0 19.008V0.992C0 0.444 0.445 0 0.993 0H13ZM8 9H5V11H8V14H10V11H13V9H10V6H8V9Z"
                  fill="white"
                />
              </svg>
            </button>
            <p className="normal-txt">New</p>
          </div>
          <div className="logout">
            <Link to="/login" className="link">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.198 11H2.24799C2.74799 5.947 7.01199 2 12.198 2C17.721 2 22.198 6.477 22.198 12C22.198 17.523 17.721 22 12.198 22C7.01299 22 2.74899 18.053 2.24799 13H10.198V16L15.198 12L10.198 8V11Z"
                  fill="#FC2D2D"
                />
              </svg>
              <p className="normal-txt">Log out</p>
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openSidebar && (
          <div className="mobile-sidebar mobile">
            <motion.div className="link-list"
            variants={linksVariants}
            initial = "initial"
            animate = "final"
            exit= "exit"
            key = "hinokami"
            >
              <div className="m-ele x-cancel">
                <button className="cancel" onClick={handleNav}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99974 5.58574L11.9497 0.635742L13.3637 2.04974L8.41374 6.99974L13.3637 11.9497L11.9497 13.3637L6.99974 8.41374L2.04974 13.3637L0.635742 11.9497L5.58574 6.99974L0.635742 2.04974L2.04974 0.635742L6.99974 5.58574Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="m-ele">
                <Link
                  to="/dashboard/"
                  className={`link ${path == "/dashboard/" ? "current" : ""}`}
                >
                  <div className={`svg ${path == "/dashboard/" ? "cur" : ""}`}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.6156 20.8242C20.6156 21.0894 20.5102 21.3438 20.3227 21.5313C20.1352 21.7188 19.8808 21.8242 19.6156 21.8242H5.6156C5.35038 21.8242 5.09603 21.7188 4.90849 21.5313C4.72096 21.3438 4.6156 21.0894 4.6156 20.8242V11.8242H1.6156L11.9426 2.4362C12.1267 2.26868 12.3667 2.17584 12.6156 2.17584C12.8645 2.17584 13.1045 2.26868 13.2886 2.4362L23.6156 11.8242H20.6156V20.8242ZM11.6156 13.8242V19.8242H13.6156V13.8242H11.6156Z"
                        fill="#222121"
                      />
                    </svg>
                  </div>
                  <p className="normal-txt">Home</p>
                </Link>
              </div>
              <div className="m-ele">
                <Link
                  to="/dashboard/draft"
                  className={`link ${
                    path == "/dashboard/draft" ? "current" : ""
                  }`}
                >
                  <div
                    className={`svg ${path == "/dashboard/draft" ? "cur" : ""}`}
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.698 2C21.25 2 21.698 2.448 21.698 3V6.757L12.699 15.757L12.693 19.995L16.939 20.001L21.698 15.242V21C21.698 21.552 21.25 22 20.698 22H4.698C4.146 22 3.698 21.552 3.698 21V3C3.698 2.448 4.146 2 4.698 2H20.698ZM22.476 8.808L23.89 10.222L16.112 18L14.696 17.998L14.698 16.586L22.476 8.808ZM12.698 12H7.698V14H12.698V12ZM15.698 8H7.698V10H15.698V8Z"
                        fill="#222121"
                      />
                    </svg>
                  </div>

                  <p className="normal-txt">Draft</p>
                </Link>
              </div>
              <div className="m-ele">
                <Link to="/login" className="link logout">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.198 11H2.24799C2.74799 5.947 7.01199 2 12.198 2C17.721 2 22.198 6.477 22.198 12C22.198 17.523 17.721 22 12.198 22C7.01299 22 2.74899 18.053 2.24799 13H10.198V16L15.198 12L10.198 8V11Z"
                      fill="#FC2D2D"
                    />
                  </svg>
                  <p className="normal-txt">Log out</p>
                </Link>
              </div>
            </motion.div>
            <motion.div className="nothing" onClick={handleNav}
            variants={linksVariants}
            initial = "initialTwo"
            animate = "finalTwo"
            exit= "exitTwo"
            key = "kagura"
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
<div className="sidebar">i am sidebar</div>;

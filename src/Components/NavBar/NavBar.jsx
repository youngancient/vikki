import "./style.css";

const NavBar = ({ handleNav }) => {
  const show = () => {
    console.log("eii");
  };
  return (
    <nav>
      <div className="navbars">
        <div className="desktop-nav desktop">
          <svg
            width="138"
            height="51"
            viewBox="0 0 138 51"
            fill="none"
            className="nav-fl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.782227"
              width="137.834"
              height="49.4362"
              rx="1.60086"
              fill="rgba(0, 0, 0,0)"
            />
            <path
              d="M8.29053 26.409C8.29053 21.9358 11.9168 18.3096 16.39 18.3096H28.9527V29.4699C28.9527 33.9431 25.3265 37.5694 20.8533 37.5694H8.29053V26.409Z"
              fill="#434CE6"
            />
            <path
              d="M6.21802 21.5301C6.21802 17.0569 9.84427 13.4307 14.3175 13.4307H26.8802V24.591C26.8802 29.0642 23.254 32.6905 18.7808 32.6905H6.21802V21.5301Z"
              fill="#65FA4D"
            />
            <path
              d="M53.1041 16.5396L46.9109 34H41.5882L35.395 16.5396H39.9218L44.2496 29.722L48.6022 16.5396H53.1041ZM66.5966 16.5396V34H62.3434V16.5396H66.5966ZM87.2636 34L81.3937 26.2896V34H77.1405V16.5396H81.3937V24.2003L87.2138 16.5396H92.2132L85.4479 25.0957L92.4619 34H87.2636ZM112.068 34L106.198 26.2896V34H101.945V16.5396H106.198V24.2003L112.018 16.5396H117.018L110.252 25.0957L117.266 34H112.068ZM131.002 16.5396V34H126.749V16.5396H131.002Z"
              fill="#434CE6"
            />
          </svg>
          <div className="save-btn lg-width">
            <button className="md lg-width">Save</button>
          </div>
        </div>
        <div className="mobile-nav mobile">
          <button className="tiles" onClick={handleNav}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
                fill="#222121"
              />
            </svg>
          </button>
          <div className="save-del">
            <div className="save-btn">
              <button className="md md-width">Save</button>
            </div>
            <button className="del" onClick={show} disabled>
              <svg
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z"
                  fill="#222121"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
<div className="navbar">navbar</div>;

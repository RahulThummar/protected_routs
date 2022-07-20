import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
  return (
    <div>


{localStorage.getItem("login") ? (
        <>

        <div className="my-5 mx-5 ">
        || <Link to="/home"> Home </Link> || <Link to="/about"> About </Link> ||{" "}
        <Link to="/contact"> Contact Us </Link> ||{" "}
       

        <button
            type="submit"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            className="btn btn-danger"
          >
            logout
          </button>
      </div>
      <div>
        {" "}
        ..........................................................................................................
      </div>
        </>
        
      ) : (
       <>
        <div className="my-5 mx-5 ">
        || <Link to="/home"> Home </Link> || <Link to="/about"> About </Link> ||{" "}
        <Link to="/contact"> Contact Us </Link> ||{" "}
       

    
      </div>
      <div>
        {" "}
        ..........................................................................................................
      </div>
       </>
      )}

      
    </div>
  );
}

export default Header;

import "../navbar/Navbar.css";
import { useState } from "react";
import BrandLogo from "../brandLogo/BrandLogo";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
// import { MdLocationOff } from "react-icons/md";
// import { MdMyLocation } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const querySearch = (e) => {
    // console.log(e);
    console.log(query);
  };

  const keyPressSubmitHandler = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      querySearch();
    }
  };

  return (
    <nav className="navbar">
      <section>
        <BrandLogo />
      </section>
      <section>
        <div>
          <button type="submit" onClick={querySearch}>
            <BsSearch />
          </button>
          <input
            type="search"
            placeholder="Search for cuisine, restaurant or a dish"
            required
            onChange={(event) => {
              console.log(event.target.value);
              setQuery(event.target.value);
            }}
            onKeyDown={(e) => {
              keyPressSubmitHandler(e);
            }}
          />
        </div>
        {/* <div className="searchbar">
        <input type="search" className="userInput" id="queryInput" placeholder="Search places..." required onChange={(event) => {setQuery(event.target.value)}} onKeyDown={(e) => submitHandler(e)}/>
        <button className="searchbutton" type="submit" onClick={ querySearch }><i className="icon bi bi-search"></i></button>
        </div> */}

        {/* <div className="userInput">
        <input type="url" name="longUrl" id="longUrl" placeholder="Enter the url here..." required  
        onChange={(event) => {
          setLongUrl(event.target.value);
        }}/>
        <button type="submit" onClick={ createShortUrl }>Create short URL</button>
      </div> */}
      </section>
      <section className="flex flex-row">
        <IoLocationSharp />
        <span>Deliver to location</span>
        <div>
          <FaUser />
        </div>
        <div className="bag">
          <BsFillHandbagFill />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

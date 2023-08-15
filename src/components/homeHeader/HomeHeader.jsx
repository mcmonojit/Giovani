import "../homeHeader/HomeHeader.css";
import BrandLogo from "../brandLogo/BrandLogo";

const HomeHeader = () => {
  return (
    <header>
      <div className="homeHeader">
        <BrandLogo />
        <p>LOG IN</p>
      </div>
    </header>
  );
};

export default HomeHeader;

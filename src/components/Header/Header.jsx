import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo deliveroo" />
      </div>
    </header>
  );
};
export default Header;

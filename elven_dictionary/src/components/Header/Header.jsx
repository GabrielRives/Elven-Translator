import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__headContainer">
        <div className="header__headContainer__titleSite">Elven Translator</div>
      </div>
      <div className="header__HeadSide">
        <a className="header__HeadSide__nav-item-link">
          <img
            src="../src/assets/dotMenu.svg"
            alt="logOut"
            className="header__HeadSide__nav-item-link__iconLogOut"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;

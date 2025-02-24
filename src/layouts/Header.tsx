import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-#f5f5f5 z-100 fixed left-0 top-0 flex h-14 w-full items-center justify-between border-b px-5">
      <div className="left">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
      </div>

      <div className="right">사용가이드</div>
    </header>
  );
};

export default Header;

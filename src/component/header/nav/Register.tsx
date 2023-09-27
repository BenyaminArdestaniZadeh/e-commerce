export default function Register() {
  return (
    <>
      <nav className="hidden md:display-flex-row p-4">
        <div className="display-flex-row gap-2">
          <a href="#">
            <img src="./svg/profile.svg" alt="profile icon" />
          </a>
          <a href="#" className="h6 text-spanishSkyBlue">
            Login / Register
          </a>
        </div>

        <div className="display-flex-row">
          <button className="p-4">
            <img src="./svg/navbar/search.svg" alt="search icon" />
          </button>
          <button className="p-4 display-flex-row gap-1">
            <img src="./svg/navbar/shop.svg" alt="shop icon" />
            <small className="text-spanishSkyBlue">1</small>
          </button>
          <button className="p-4 display-flex-row gap-1">
            <img src="./svg/navbar/like.svg" alt="like icon" />
            <small className="text-spanishSkyBlue">1</small>
          </button>
        </div>
      </nav>
    </>
  );
}

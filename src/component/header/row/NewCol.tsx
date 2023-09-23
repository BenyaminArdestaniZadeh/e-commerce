export default function NewCol() {
  return (
    <>
      <div className="row h-[56.5rem] max-w-[320px] rounded-xl display-flex-column gap-[4.12rem]  bg-backGround shrink-0">
        <div className="content display-flex-column gap-8 h-[23.37rem] mt-[5rem]">
          <h5 className="h5">SUMMER 2020</h5>
          <h2 className="h2 h-[6.25rem] text-center">
            NEW COLLECTION
          </h2>
          <h4 className="h4 h-[5.6rem ] text-center">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="btn h3 text-white bg-spanishSkyBlue rounded-[5px]">
            SHOP NOW
          </button>
        </div>
        <div className="hero ">
          <img src="./img/hero-mobile.png" alt="hero" className="img" />
        </div>
      </div>
    </>
  );
}

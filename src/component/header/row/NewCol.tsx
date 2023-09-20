export default function NewCol() {
  return (
    <>
      <div className="row w-[24.25rem] h-[56.5rem]  rounded-xl display-flex-column gap-[4.12rem]  bg-backGround shrink-0">
        <div className="content display-flex-column gap-8 h-[23.37rem] mt-[5rem]">
          <h5 className="h5 text-steelBlue">SUMMER 2020</h5>
          <h2 className="h2 text-peacoat w-[16.7rem] h-[6.25rem] text-center">
            NEW COLLECTION
          </h2>
          <h4 className="h4 text-nickel w-[18.18rem] h-[5.6rem ] text-center">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="btn h3 text-white bg-spanishSkyBlue rounded-[5px]">
            SHOP NOW
          </button>
        </div>
        <div className="hero ">

          <img src="./img/hero-mobile.png" alt="hero" className="" />
        </div>
      </div>
    </>
  );
}

export default function NewCol({ screenSize }: any) {
  return (
    <>
      <div className=" w-[95%] rounded-xl display-flex-column gap-[4.12rem] bg-backGround shrink-0  md:flex md:flex-row md:mt-0 md:gap-4 md:pl-[5rem]">
        <div className="content w-[90%] display-flex-column gap-8 mt-[5rem] md:w-1/2 md:items-start md:mt-0">
          <h5 className="h5">SUMMER 2020</h5>
          <h2 className="h2  text-center xl:text-[58px]">NEW COLLECTION</h2>
          <h4 className="h4  text-center text-[1.1rem] sm:px-5 md:text-left md:px-0 md:max-w-sm">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="btn h3 text-white bg-spanishSkyBlue rounded-[5px]">
            SHOP NOW
          </button>
        </div>
        <div className="w-full md:w-1/2">
          {screenSize === "xs" || "sm" || "md" ? (
            <img
              src="./img/hero-mobile.png"
              alt="hero"
              className="img w-full"
            />
          ) : (
            <img src="./img/hero-pc.png" alt="hero" className="img w-full" />
          )}
        </div>
      </div>
    </>
  );
}

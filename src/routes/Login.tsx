export default function Login() {
  return (
    <>
      <div className=" display-flex-row items-center btn-border bg-cartBackground w-full h-[100vh] mb-7">
        <div className="login-container w-[90%] h-[90%]  display-flex-column justify-center items-center  bg-peacoat rounded-md md:desktop-display md:justify-around lg:gap-1">
          <div className="design display-flex-column gap-5 w-full h-[60%] mt-2 justify-center md:h-full md:border-r-[1px] border-white border-solid md:m-0 md:max-w-[75%]">
            <img
              src="../img/login/loginBgg.jfif"
              alt="login-header"
              className="img px-5 rounded-md min-w-[55vw] max-h-[80%] md:max-w[100%] "
            />
            <h3 className="h3 text-white">Bandage</h3>
          </div>

          <div className="form h-[40%] display-flex-column pt-9 md:h-full md:justify-center md:pr-3 md:pl-2 md:border-l-[1px] md:border-solid md:border-white">
            <form
              action="#"
              method="post"
              className="display-flex-column gap-3 "
            >
              <input
                type="number"
                name="number"
                placeholder="Please enter your number"
                className="loginInput"
              />
              <input
                type="password"
                name="password"
                placeholder="Please enter your password"
                className="loginInput"
              />
              <button type="submit" className="desktop-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

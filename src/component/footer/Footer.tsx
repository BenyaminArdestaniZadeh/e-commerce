import { footer } from "../../data/footer";

export default function Footer() {
  return (
    <>
      <div className="mobile-container items-start px-3 md:px-7">
        <div className="display-flex-column items-start md:flex-row md:justify-between md:w-full">
          <div className="lists display-flex-column items-start gap-6 md:gap-3 md:flex-row md:max-w-[60%]">
            {footer.map((item, index) => (
              <ul className="footer-ul" key={index}>
                <h5 className="footer-h5">{item.title}</h5>
                <li>
                  <a href="#">{item.listOne}</a>
                </li>
                <li>
                  <a href="#">{item.listTwo}</a>
                </li>
                <li>
                  <a href="#">{item.listThree}</a>
                </li>
                <li>
                  <a href="#">{item.listFour}</a>
                </li>
              </ul>
            ))}
          </div>

          <div className="form display-flex-column items-start gap-5 mt-5 max-w-[295px]">
            <h5 className="footer-h5">Get In Touch</h5>
            <form
              action="#"
              method="post"
              className="display-flex-row justify-start"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <button className="footer-btn">Subscribe</button>
            </form>
            <p className="p">Lore imp sum dolor Amit</p>
          </div>
        </div>

        <div className="text my-0 mx-auto">
          <h6 className="h6 text-nickel text-center">
            Made With Love By <br />
            Finland All Right Reserved{" "}
          </h6>
        </div>
      </div>
    </>
  );
}

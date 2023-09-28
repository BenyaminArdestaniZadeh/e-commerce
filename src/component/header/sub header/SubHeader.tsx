import { subHeader } from "../../../data/subHeader";

export default function SubHeader() {
  return (
    <>
      <nav className="md:w-full md:desktop-display md:h-16 md:bg-peacoat md:px-6 md:pt-2 md:pb-1 hidden">
        <span className="span-subHeader">
          <img src="./svg/subHeader/phone.svg" alt="phone icon" />
          <h6 className="subHeader-text">(225) 555-0118</h6>
        </span>
        <span className="span-subHeader">
          <img src="./svg/subHeader/email.svg" alt="email icon" />
          <h6 className="subHeader-text">michelle.rivera@example.com</h6>
        </span>
        <h6 className="subHeader-text">
          Follow Us and get a chance to win 80% off
        </h6>
        <span className="span-subHeader">
          <h6 className="subHeader-text">Follow Us :</h6>
          {subHeader.map((item) => (
            <img src={item.url} alt={item.imgSrc} />
          ))}
        </span>
      </nav>
    </>
  );
}

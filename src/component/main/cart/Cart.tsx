import { cart } from "../../../data/cart";

export default function Cart() {
  return (
    <>
      {}
      <div className="cart-container display-flex-column gap-4 md:desktop-display md:items-end md:px-10 md:justify-center">
        {cart.map((item, index) => (
          <div
            className="relative "
            key={index}
          >
            <img src={item.url} alt={item.title} className="w-full" />
            <div className="cart-content">
              <h6 className="h3 text-white">{item.topic}</h6>
              <button className="btn btn-text btn-border min-w-[184px] text-white rounded-md">
                {item.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

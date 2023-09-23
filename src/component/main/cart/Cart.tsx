import { cart } from "../../../data/cart";

export default function Cart() {
  return (
    <>
      <div className="cart-container display-flex-column gap-4">
        {cart.map((item, index) => (
          <div className="relative" key={index}>
            <img src={item.url} alt={item.title} />
            <div className="cart-content">
              <h6 className="h3 text-white">{item.topic}</h6>
              <button className="btn btn-text btn-border text-white rounded-md">
                {item.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

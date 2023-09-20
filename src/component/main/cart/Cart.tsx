export default function Cart() {
  return (
    <>
      <div className="cart-container display-flex-column gap-4">
        {/* item-1 */}
        <div className="relative">
          <img
            src="./img/cart/product-of-the-week-1.png"
            alt="product-1"
            className="img"
          />
          <div className="cart-content">
            <h6 className="h3 text-white">Top Product Of the Week</h6>
            <button className="btn btn-text btn-border text-white rounded-md">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        {/* item-2 */}
        <div className="relative">
          <img
            src="./img/cart/product-of-the-week-2.png"
            alt="product-2"
            className="img"
          />
          <div className="cart-content">
            <h6 className="h3 text-white">Top Product Of the Week</h6>
            <button className="btn btn-text btn-border text-white rounded-md">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        {/* item-3 */}

        <div className="relative">
          <img
            src="./img/cart/product-of-the-week-3.png"
            alt="product-3"
            className="img"
          />
          <div className="cart-content">
            <h6 className="h3 text-white">Top Product Of the Week</h6>
            <button className="btn btn-text btn-border text-white rounded-md">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Ecommerce</h3>
      <div>
        <button>Heladeras</button>
        <button>Cocinas</button>
        <button>Televisores</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

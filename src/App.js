import Products from "./components/Products";
import ClientCard from "./components/ClientCard/ClientCard";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App() {

  return (
    <>
      <div>
        <h2>1.Бургер</h2>
        <BurgerMenu />
      </div>
      <div>
        <h2>2.Клиенты</h2>
        <ClientCard />
      </div>
      <div>
        <h2>3.Магазин</h2>
        <Products />
      </div>
    </>
  );
}

export default App;

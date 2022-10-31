import { ProductPage } from "./pages/Product";
import GlobalStyles from "./styles/global";
import { mockProductCard } from "./data";

function App() {
  return (
    <>
      <GlobalStyles />
      <ProductPage product={mockProductCard} />
    </>
  );
}

export default App;

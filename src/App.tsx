import { Modal } from "./components/Modal";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <header>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
        dignissimos saepe, veritatis repellat, minus ipsum dolorem voluptatibus
        asperiores eligendi sit cum est at hic nam laborum aliquam aut
        recusandae maxime.
      </header>
      <div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          aliquid, accusantium alias ipsa eius repellat dolore sed! Culpa sequi
          ducimus doloremque labore animi ipsa necessitatibus debitis corporis
          ratione, ea repellendus!
        </h1>
        <button>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat
          officia quos dolorum! Eaque adipisci vel ratione ab consequatur at
          explicabo est necessitatibus, quidem dolorum nostrum rerum vitae,
          maiores soluta.
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nihil tenetur deserunt, aliquid laudantium optio repudiandae.
          Provident aut atque quos a accusamus quam error perspiciatis quod,
          deserunt iure magni totam!
        </p>
      </div>
      <Modal title="Teste" children="Lorem" />
    </>
  );
}

export default App;

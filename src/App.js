import { useRef, useState } from "react";
import "./App.css";
import Mensagem from "./components/Mensagem";
import Dado from "./components/Dado";

function App() {
  const [indice, setIndice] = useState(-1);

  const [mensagem, setMensagem] = useState("");

  const lado1 = useRef();
  const lado2 = useRef();
  const lado3 = useRef();
  const lado4 = useRef();
  const lado5 = useRef();
  const lado6 = useRef();

  function lancarDado() {
    // gera numero entre 0 e 9
    const jogou = Math.trunc(Math.random() * 6) + 1;
    const marcado1 = lado1.current.checked;
    const marcado2 = lado2.current.checked;
    const marcado3 = lado3.current.checked;
    const marcado4 = lado4.current.checked;
    const marcado5 = lado5.current.checked;
    const marcado6 = lado6.current.checked;

    console.log(jogou);

    if (jogou === 1) { setIndice(0) }
    else if (jogou === 2) { setIndice(1) }
    else if (jogou === 3) { setIndice(2) }
    else if (jogou === 4) { setIndice(3) }
    else if (jogou === 5) { setIndice(4) }
    else if (jogou === 6) { setIndice(5) }

    if (jogou === 1 && marcado1 === true) {
      setMensagem('Voce acertou')
    } else if (jogou === 2 && marcado2 === true) {
      setMensagem('voce acertou')
    } else if (jogou === 3 && marcado3 === true) {
      setMensagem('voce acertou')
    } else if (jogou === 4 && marcado4 === true) {
      setMensagem('voce acertou')
    } else if (jogou === 5 && marcado5 === true) {
      setMensagem('voce acertou')
    } else if (jogou === 6 && marcado6 === true) {
      setMensagem('voce acertou')
    } else setMensagem('Voce errou')

  }

  function reiniciar() {
    setMensagem("");
    setIndice(-1);
  }

  return (
    <div>
      <div className="bg-blue-500 p-8 text-white font-bold text-3xl text-center">
        <h1>Jogue o dado</h1>
      </div>
      <div className="text-2xl p-4 text-center">
        <p>Escolha o valor do dado e pressione o botão</p>
      </div>
      <div className="flex justify-center space-x-4 text-2xl mx-96 text">
        <div>
          <input
            ref={lado1}
            type="radio"
            value="1"
            name="lado1"
            className="mr-2"
            onClick={reiniciar}
          />
          1
        </div>
        <div>
          <input
            ref={lado2}
            type="radio"
            value="2"
            name="lado2"
            className="mr-2"
            onClick={reiniciar}
          />
          2
        </div>
        <div>
          <input
            ref={lado3}
            type="radio"
            value="3"
            name="lado3"
            className="mr-2"
            onClick={reiniciar}
          />
          3
        </div>
        <div>
          <input
            ref={lado4}
            type="radio"
            value="4"
            name="lado4"
            className="mr-2"
            onClick={reiniciar}
          />
          4
        </div>
        <div>
          <input
            ref={lado5}
            type="radio"
            value="5"
            name="lado5"
            className="mr-2"
            onClick={reiniciar}
          />
          5
        </div>
        <div>
          <input
            ref={lado6}
            type="radio"
            value="6"
            name="lado6"
            className="mr-2"
            onClick={reiniciar}
          />
          6
        </div>

      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <div>
          <button
            onClick={lancarDado}
            className="bg-blue-500 text-white p-4 rounded-lg"
          >
            Lançar dado
          </button>
        </div>
        <Mensagem texto={mensagem} />
        <Dado indice={indice} />
      </div>
    </div>
  );
}

export default App;

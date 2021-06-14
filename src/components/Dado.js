function Dado(props) {
  const faces = ["1.jfif", "2.jfif","3.jfif","4.jfif","5.jfif","6.jfif"];

  const indice = props.indice;
  
  if (indice === -1) return null;
  else
    return (
      <div className="w-64 mt-4">
        <img src={faces[indice]} alt="dado" />
      </div>
    );
}

export default Dado;

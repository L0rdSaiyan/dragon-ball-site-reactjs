const Informacoes = ({ nome, idade, profissao }) => {
    return (
      <div>
        <h3>Essas são suas informações: </h3>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
      </div>
    );
  };
  
  export default Informacoes;
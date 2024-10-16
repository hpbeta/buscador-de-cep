import { CiSearch } from "react-icons/ci";
import { Container, ContainerCabecalho, Main, StyledIcons } from "./styles";
import { useState } from "react";
import { getCep } from "./service/api";

function Home() {

  const [ inputValue, setInputValue ] = useState('')
  const [ cep, setCep ] = useState({})

  async function getCepData () {

    if(inputValue === '') {
      alert('Preencha o campo com um cep')
      return
    }
    const cepData = await getCep(inputValue)
    setCep(cepData)
    setInputValue('')
  }
 
  return (
    <Container>
        <h1>Buscador de cep</h1>

        <ContainerCabecalho>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Digite seu cep..." />

          <StyledIcons onClick={getCepData}>
            <CiSearch />
          </StyledIcons>

        </ContainerCabecalho>

      {Object.keys(cep).length > 0 && (
        <Main>
          <h2><strong>Cep:</strong> {cep.cep}</h2>
          <span><strong>Logradouro:</strong> {cep.logradouro}</span>
          <span><strong>Complemento:</strong> {cep.complemento ? cep.complemento : 'Sem complemento'}</span>
          <span><strong>Bairro:</strong> {cep.bairro}</span>
          <span><strong>Localidade: </strong>{cep.localidade} - {cep.uf}</span>
        </Main>
      )}
    </Container>
  );
}

export default Home;

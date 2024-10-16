import axios from "axios";

export async function getCep (inputValue) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
        return response.data
    } catch {
        console.log('Erro ao buscar o cep')
    }
}
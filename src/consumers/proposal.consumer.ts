
import axios from 'axios'
export class ProposalConsumer  {

    

    // esta função recebe um usuário e persiste no banco de dados
    create = async function create(proposal:object){
    let result = await axios.post('https://projeto-final-omega.herokuapp.com/proposals',proposal)
       return result  
    }
     // esta função atualiza um usuário no banco de dados, ela recebe o id do usuário, os dados do usuario e o token
    update = async function update( id:string,proposal: object, token:string){
    axios.defaults.headers.common['authorization'] = token
    let result = await   axios.patch(`https://projeto-final-omega.herokuapp.com/proposals/${id}`,proposal)
        return result
    }
    // esta função deleta o usuário na base de dados
    delete = async function deletar(proposal: object, token:string){
        axios.defaults.headers.common['authorization'] = token
    let status = await  axios.delete('https://projeto-final-omega.herokuapp.com/proposal',proposal)
    return status
        
    }
    // esta função retorna todos os usuários cadastrados
    findAll = async function findAll(){
    let result = await  axios.get('https://projeto-final-omega.herokuapp.com/proposals')
    return result
    }
    //retorna todas as propostas com um id específico
    findAllById = async function findAllById(id:string){
        let result = await  axios.get(`https://projeto-final-omega.herokuapp.com/proposals/${id}`)
        return result
    } 
    //retorna todas as propostas com um id específico e uma data inicio e data final
    findAllBydataInicioDataFim = async function findAllById(id:string, dataInicio:Date, dataFim:Date){
        let result = await  axios.get(`https://projeto-final-omega.herokuapp.com/proposals/${id}/${dataInicio}/${dataFim}`)
        return result
    }



}
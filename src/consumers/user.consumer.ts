

import axios from 'axios'
import { NOMEM } from 'dns'
export class UserConsumer {



    // esta função recebe uma email e uma senha e tem que retornar um token se as credenciais estiverem certas
    login = async function login(email: string, senha: string) {
        let data = { email: email, senha: senha }
        let result = await axios.post('https://projeto-final-omega.herokuapp.com/auth/login', data)
        return result
    }
    // esta função recebe um usuário e persiste no banco de dados
    create = async function create(usuario: object) {
        let result = await axios.post('https://projeto-final-omega.herokuapp.com/users', usuario)
        return result
    }
    // esta função atualiza um usuário no banco de dados, ela recebe o id do usuário, os dados do usuario e o token
    update = async function update(id: string, usuario: object, token: string) {
        axios.defaults.headers.common['authorization'] = token
        let result = await axios.patch(`https://projeto-final-omega.herokuapp.com/users/${id}`, usuario)
        return result
    }
    // esta função deleta o usuário na base de dados
    delete = async function deletar(usuario: object, token: string) {
        axios.defaults.headers.common['authorization'] = token
        let status = await axios.delete('https://projeto-final-omega.herokuapp.com/users', usuario)
        return status

    }
    // esta função retorna todos os usuários cadastrados
    findAll = async function findAll() {
        let result = await axios.get('https://projeto-final-omega.herokuapp.com/users')
        return result
    }

    findAllById = async function findAllById(id: string) {
        let result = await axios.get(`https://projeto-final-omega.herokuapp.com/users/${id}`)
        return result
    }



}
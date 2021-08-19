import { Container, Title, SignButton, LoginButton, ButtonContainer } from "./styles";
import Olho from '../../assets/eye.svg'
import OlhoFechado from '../../assets/closeeye.svg'
import { useState } from "react";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";
import { Sucesso } from "../Sucesso";


export function Login() {
  const history = useHistory();
  const UserNotFound = () => { toast("Usuário não cadastrado", { transition: Slide }); }
  const [passVisible, setPassVisible] = useState(true);
  return (
    <div className="maincontent shadow-lg rounded-3xl">
      <Title>Login</Title>
      <Container>
        <input type="text" placeholder="E-mail" className=" h-full w-full outline-none" />
      </Container>
      <Container>
        <input type={passVisible ? 'password' : 'text'} placeholder="Senha" className=" h-full w-full outline-none" />
        <button className="w-6" onClick={() => setPassVisible(!passVisible)}>
          <img src={passVisible ? Olho : OlhoFechado} alt="" /></button>
      </Container>
      <ButtonContainer>
        <LoginButton type='submit' onClick={UserNotFound}>Entrar</LoginButton>
        <SignButton onClick={() => (<Sucesso />)}>Cadastrar</SignButton>
        <ToastContainer position="top-center" />
      </ButtonContainer>
    </div >
  )
}
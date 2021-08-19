import { Container, Title, SignButton, LoginButton, ButtonContainer } from "./styles";
import Olho from '../../assets/eye.svg'
import Invalid from '../../assets/invalid.svg'
import OlhoFechado from '../../assets/closeeye.svg'
import { FormEvent, useState } from "react";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";
import { Sucesso } from "../Sucesso";
import { useForm, SubmitHandler } from "react-hook-form";


export function Login() {

  const history = useHistory();
  const UserNotFound = () => { toast("Usuário não cadastrado", { transition: Slide }); }
  const [passVisible, setPassVisible] = useState(true);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value)
    let check = email
    console.log(check)

  };

  const handleInputSenha = (e: any) => {
    setSenha(e.target.value)
    console.log(senha.length + 1)
  };


  return (
    <div className="maincontent shadow-lg rounded-3xl">
      <Title>Login</Title>
      <form action="" className="justify-center">
        <Container>
          <input type="text" placeholder="E-mail" value={email} onChange={handleInputEmail} className=" h-full w-full outline-none" />
          <img src={Invalid} alt="" title="O e-mail digitado é inválido" className={emailInvalido ? "" : "hidden"} />
        </Container>

        <Container>
          <input type={passVisible ? 'password' : 'text'} value={senha} onChange={handleInputSenha} placeholder="Senha" className=" h-full w-full outline-none" />
          <button type="button" className="w-6" onClick={() => setPassVisible(!passVisible)}>
            <img src={passVisible ? Olho : OlhoFechado} alt="" /></button>
          <img src={Invalid} alt="" title="A senha digitada é inválida" className={senhaInvalida ? "" : "hidden"} />
        </Container>

        <ButtonContainer>
          <LoginButton type='button' onClick={UserNotFound}>Entrar</LoginButton>
          <SignButton onClick={() => (<Sucesso />)}>Cadastrar</SignButton>
          <ToastContainer position="top-center" />
        </ButtonContainer>
      </form>

    </div >
  )
}
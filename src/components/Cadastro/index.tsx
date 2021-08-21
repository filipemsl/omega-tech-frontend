import { Container, LoginText, SignButton, Title } from "./styles";
import Olho from '../../assets/eye.svg'
import Invalid from '../../assets/invalid.svg'
import OlhoFechado from '../../assets/closeeye.svg'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api";

interface HandleState {
  onRequestLogin: () => void;
  handleSuccess: () => void;
}
export function Cadastro({ onRequestLogin, handleSuccess }: HandleState) {

  function emailIsValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const SignNotMet = () => { toast("O nome de usuário precisa ter mais de 3 caracteres e a senha deve ter 8 ou mais caracteres", { transition: Slide }); }
  const invalidEmail = () => { toast("O nome de usuário precisa ter mais de 3 caracteres e a senha deve ter 8 ou mais caracteres", { transition: Slide }); }
  const [passVisible, setPassVisible] = useState(true);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);

  interface CadastroIFormInput {
    name: string;
    email: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<CadastroIFormInput>();
  const onSubmit: SubmitHandler<CadastroIFormInput> = data => {
    let res = data
    let emailTest = res.email;
    if (res.password.length >= 8 && res.name.length >= 3) {
      api.post('users', res)
      handleSuccess()
    }
    else {
      SignNotMet()
    }

  };

  return (
    <div className="maincontentCadastro shadow-lg rounded-3xl">

      <Title>Cadastre-se</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <input type="text" placeholder="Nome" {...register("name",)} className=" h-full w-full outline-none" />
          <img src={Invalid} alt="" title="O e-mail digitado é inválido" className={emailInvalido ? "" : "hidden"} />
        </Container>

        <Container>
          <input type="text" placeholder="E-mail" {...register("email",)} className=" h-full w-full outline-none" />
          <img src={Invalid} alt="" title="O e-mail digitado é inválido" className={emailInvalido ? "" : "hidden"} />
        </Container>

        <Container>
          <input type={passVisible ? 'password' : 'text'} {...register("password",  // JS only: <p>error message</p> TS only support string

          )} placeholder="Senha" className=" h-full w-full outline-none" />
          <button type="button" className="w-6" onClick={() => setPassVisible(!passVisible)}>
            <img src={passVisible ? Olho : OlhoFechado} alt="" /></button>
          <img src={Invalid} alt="" title="A senha digitada é inválida" className={senhaInvalida ? "" : "hidden"} />
        </Container>


        <div className="flex justify-center align-center">
          <SignButton type='submit'>Cadastrar</SignButton>
        </div>
        <LoginText>Já possui uma conta? <button onClick={onRequestLogin}>Fazer login</button></LoginText>
      </form>
      <ToastContainer position="top-center" />
    </div >
  )
}
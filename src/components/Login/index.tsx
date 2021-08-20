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
import { UserConsumer } from '../../consumers/user.consumer'
interface StartSignUp {
  onRequestSignUp: () => void;
}

export function Login({ onRequestSignUp }: StartSignUp) {

  const history = useHistory();
  const UserNotFound = () => { toast("Usuário não cadastrado", { transition: Slide }); }
  const [passVisible, setPassVisible] = useState(true);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value)
  };

  const handleInputSenha = (e: any) => {
    setSenha(e.target.value)
  };

  function testeSenha() {
    if (senha.length < 8) {
      setSenhaInvalida(true)
    }
  }

  interface IFormInput {
    email: string;
    password: string;
  }
  const userConsumer = new UserConsumer();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    const use = data;
    userConsumer.login(use.email, use.password)
    console.log(data)
  };

  return (
    <div className="maincontent shadow-lg rounded-3xl">
      <Title>Login</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <input type="text" placeholder="E-mail" {...register("email",)} className=" h-full w-full outline-none" />
          <img src={Invalid} alt="" title="O e-mail digitado é inválido" className={emailInvalido ? "" : "hidden"} />
        </Container>

        <Container>
          <input type={passVisible ? 'password' : 'text'} {...register("password", {
            minLength: {
              value: 8,
              message: 'A senha precisa de no mínimo 8 caracteres' // JS only: <p>error message</p> TS only support string
            }
          })} placeholder="Senha" className=" h-full w-full outline-none" />
          <button type="button" className="w-6" onClick={() => setPassVisible(!passVisible)}>
            <img src={passVisible ? Olho : OlhoFechado} alt="" /></button>
          <img src={Invalid} alt="" title="A senha digitada é inválida" className={senhaInvalida ? "" : "hidden"} />
        </Container>

        <div className="flex justify-center align-center">
          <LoginButton type='submit'>Entrar</LoginButton>
          <SignButton onClick={onRequestSignUp}>Cadastrar</SignButton>
          <ToastContainer position="top-center" />
        </div>
      </form>

    </div >
  )
}
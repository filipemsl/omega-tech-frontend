import { Container, LoginText, SignButton, Title } from "./styles";
import Olho from '../../assets/eye.svg'
import Invalid from '../../assets/invalid.svg'
import OlhoFechado from '../../assets/closeeye.svg'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface HandleState {
  onRequestLogin: () => void;
}
export function Cadastro({ onRequestLogin }: HandleState) {

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

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="maincontentCadastro shadow-lg rounded-3xl">
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <input type="text" placeholder="Nome" className=" h-full w-full outline-none" />
          <img src={Invalid} alt="" title="O e-mail digitado é inválido" className={emailInvalido ? "" : "hidden"} />
        </Container>
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
        <Container>
          <input type={passVisible ? 'password' : 'text'} {...register("password", {
            minLength: {
              value: 8,
              message: 'A senha precisa de no mínimo 8 caracteres' // JS only: <p>error message</p> TS only support string
            }
          })} placeholder="Confirmar senha" className=" h-full w-full outline-none" />
          <button type="button" className="w-6" onClick={() => setPassVisible(!passVisible)}>
            <img src={passVisible ? Olho : OlhoFechado} alt="" /></button>
          <img src={Invalid} alt="" title="A senha digitada é inválida" className={senhaInvalida ? "" : "hidden"} />
        </Container>

        <div className="flex justify-center align-center">
          <SignButton>Cadastrar</SignButton>
        </div>
        <LoginText>Já possui uma conta? <button onClick={onRequestLogin}>Fazer login</button></LoginText>
      </form>
      <ToastContainer position="top-center" />
    </div >
  )
}
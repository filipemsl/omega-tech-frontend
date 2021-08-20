import { Container, LoginButton } from "./styles";
import Success from '../../assets/sucesso.svg'
import { Title } from "../Sucesso/styles";

interface HandleLogin {
  requestLogin: () => void;
}
export function Sucesso({ requestLogin }: HandleLogin) {
  return (
    <Container className="shadow-lg">
      <Title className="leading-tight text-center ">Cadastro efetuado com sucesso</Title>
      <img src={Success} alt="Sucesso" />
      <LoginButton onClick={requestLogin}>Efetuar login</LoginButton>
    </Container>
  )
}
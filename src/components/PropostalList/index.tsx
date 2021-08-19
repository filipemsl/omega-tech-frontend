import { Texts } from "../../styles/DashboardStyle";
import { Container, Title, AddButton, CancelButton } from "./styles";
import { Admitted } from '../ProposalOptions/Admitted'
import { EditProposal } from "../ProposalOptions/Edit";

interface DashReturn {
  onRequestReturn: () => void;
}

export function ProposalList({ onRequestReturn }: DashReturn) {
  return (
    <>
      <section className='w-full'>
        <Title>Listar propostas</Title>
      </section>
      <div id="proposalContainer">
        <Container className="p-8 shadow-lg">
          <Texts>
            <h1>Nova proposta</h1>
            <p>Faça uma cotação e verifique o valor da proposta</p>
          </Texts>
          <Admitted />
          <EditProposal />
        </Container>

        <Container className="mt-8 p-8 shadow-lg">
          <Texts>
            <h1>Listar propostas</h1>
            <p>Verifique e/ou edite as propostas criadas</p>
          </Texts>

        </Container>

        <Container className="mt-8 p-8 shadow-lg">
          <Texts>
            <h1>Entrar em contato</h1>
            <p>Reporte erros ou entre em contato com a Omega</p>
          </Texts>
        </Container>
        <Container className="mt-8 p-8 shadow-lg">
          <Texts>
            <h1>Entrar em contato</h1>
            <p>Reporte erros ou entre em contato com a Omega</p>
          </Texts>
        </Container>
        <Container className="mt-8 p-8 shadow-lg">
          <Texts>
            <h1>Entrar em contato</h1>
            <p>Reporte erros ou entre em contato com a Omega</p>
          </Texts>
        </Container>
      </div>
      <div className="flex w-full justify-end gap-10">
        <AddButton>Adicionar</AddButton>
        <CancelButton onClick={onRequestReturn}>Voltar</CancelButton>
      </div>
    </>
  )
}
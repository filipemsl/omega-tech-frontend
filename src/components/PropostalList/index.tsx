import { Texts } from "../../styles/DashboardStyle";
import { Container, Title, AddButton, CancelButton } from "./styles";
import { Admitted } from '../ProposalOptions/Admitted'
import { EditProposal } from "../ProposalOptions/Edit";
import { ProposalItem } from "../Proposal";

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
        {<ProposalItem />}
        {<ProposalItem />}
        {<ProposalItem />}

      </div>

      {/* Botões de Ação */}
      <div className="flex w-full justify-end gap-10">
        <AddButton>Adicionar</AddButton>
        <CancelButton onClick={onRequestReturn}>Voltar</CancelButton>
      </div>

    </>
  )
}
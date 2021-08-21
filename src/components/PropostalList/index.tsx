import { Texts } from "../../styles/DashboardStyle";
import { Container, Title, AddButton, CancelButton } from "./styles";
import { Admitted } from '../ProposalOptions/Admitted'
import { EditProposal } from "../ProposalOptions/Edit";
import { ProposalItem } from "../Proposal";
import { useContext, useEffect, useState } from "react";
import { ProposalContext } from "../../contexts/ProposalContext";
import { api } from "../../services/api";

interface DashReturn {
  onRequestReturn: () => void;
}

interface Proposal {
  id: string;
  initialDate: Date;
  finalDate: Date;
  charges: [];
  totalconsumption: string;
  supplytype: string;
  hired: boolean;
  proposalvalue: number;
  submarket: string;
}
type ProposalInput = Omit<Proposal, 'id' | 'hired'>;

let token = localStorage.getItem('access_token'!)
let tokenData = token?.replace(/['"]+/g, '')

export function ProposalList({ onRequestReturn }: DashReturn) {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  useEffect(() => {

    api.get('/proposals',
      { headers: { Authorization: `Bearer ${tokenData}` } }
    ).then(response => setProposals(response.data))

  }, []);

  function createProposal(proposal: ProposalInput) {
    api.post('/proposals', proposal, { headers: { Authorization: `Bearer ${tokenData}` } })
  }
  return (
    <>
      <section className='w-full'>
        <Title>Listar propostas</Title>
      </section>

      <div id="proposalContainer">
        {proposals.map(proposal => {
          return (
            <ProposalItem key={proposal.id} id={proposal.id} initialDate={proposal.initialDate}
              finalDate={proposal.finalDate} charges={proposal.charges}
              totalconsumption={proposal.totalconsumption} supplytype={proposal.supplytype} hired={proposal.hired} proposalvalue={proposal.proposalvalue} submarket={proposal.submarket} />
          )
        })}



      </div>

      {/* Botões de Ação */}
      <div className="flex w-full justify-end gap-10">
        <CancelButton onClick={onRequestReturn}>Voltar</CancelButton>
      </div>

    </>
  )
}
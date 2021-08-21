import { useState } from "react";
import { Admitted } from "../ProposalOptions/Admitted"
import { EditProposal } from "../ProposalOptions/Edit"
import { Title, Container, Texts } from './style'

type ProposalProps = {
  id: string;
  initialDate: string;
  finalDate: string;
  charges: any;
  totalconsumption: string;
  supplytype: string;
  hired: boolean;
  proposalvalue: number;
  submarket: string;
}

export function ProposalItem({ id, initialDate, finalDate, charges, totalconsumption, supplytype, hired, proposalvalue, submarket }: ProposalProps) {
  const [contratada, setContratada] = useState(false);
  function setAdmit() {
    setContratada(true)
  }
  function setEdit(id: string) {

  }
  function deleteProposal(id: string) {

  }
  return (

    <Container className="p-8 shadow-lg">
      <div className="pt-5 flex gap-24">

        <div className="flex flex-col gap-5">
          <Texts>
            <h6>Cargas:</h6>
            <p>{charges.toString()}</p>
          </Texts>
          <Texts>
            <h6>Consumo total (kW):</h6>
            <p>{totalconsumption}</p>
          </Texts>
          <Texts>
            <h6>Fonte de Energia:</h6>
            <p>{supplytype}</p>
          </Texts>
        </div>

        <div className="flex flex-col gap-5">
          <Texts>
            <h6>Submercado</h6>
            <p>{submarket}</p>
          </Texts>
          <Texts>
            <h6>Data de Início:</h6>
            <p>{initialDate}</p>
          </Texts>
          <Texts>
            <h6>Data de Fim:</h6>
            <p>{finalDate}</p>
          </Texts>
        </div>

        <div className="flex flex-col gap-5">
          <Texts>
            <h6>ID da proposta:</h6>
            <p>{id}</p>
          </Texts>
          <Texts>
            <h6>Valor da proposta:</h6>
            <p>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(proposalvalue)}</p>
          </Texts>
        </div>
      </div>
      <div className="flex w-full justify-end">
        {hired ? <Admitted /> : <EditProposal admitButtonClick={setAdmit} />}
      </div>

    </Container>
  )
}
import { useState } from "react";
import { Admitted } from "../ProposalOptions/Admitted"
import { EditProposal } from "../ProposalOptions/Edit"
import { Title, Container, Texts } from './style'

const data = {
  nome: 'Santander',
  consumo: 68,
  consumoTotal: 28500,
  fonteEnergia: "Renovável",
  submercado: "Sul",
  dataInicio: '21/06/2021',
  dataFim: '21/06/2022',
  id: "d3a58e7f-a11f-449b-b910-0aabc597c6b7",
  valorProposta: 120000,
}

export function ProposalItem() {
  const [contratada, setContratada] = useState(false);
  function setAdmit() {
    setContratada(true)
  }
  return (

    <Container className="p-8 shadow-lg">
      <Title>{data.nome}</Title>
      <div className="pt-5 flex gap-24">

        <div className="flex flex-col gap-5">
          <Texts>
            <h6>Consumo (kWh):</h6>
            <p>{data.consumo}</p>
          </Texts>
          <Texts>
            <h6>Consumo total (kW):</h6>
            <p>{new Intl.NumberFormat('pt-BR', {
              style: 'decimal',
            }).format(data.consumoTotal)}</p>
          </Texts>
          <Texts>
            <h6>Fonte de Energia:</h6>
            <p>{data.fonteEnergia}</p>
          </Texts>
        </div>

        <div className="flex flex-col gap-5">
          <Texts>
            <h6>Submercado</h6>
            <p>{data.submercado}</p>
          </Texts>
          <Texts>
            <h6>Data de início:</h6>
            <p>{data.dataInicio}</p>
          </Texts>
          <Texts>
            <h6>Data de Fim:</h6>
            <p>{data.dataFim}</p>
          </Texts>
        </div>

        <div className="flex flex-col gap-5">
          <Texts>
            <h6>ID da proposta:</h6>
            <p>{data.id}</p>
          </Texts>
          <Texts>
            <h6>Valor da proposta:</h6>
            <p>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(data.valorProposta)}</p>
          </Texts>
        </div>
      </div>
      <div className="flex w-full justify-end">
        {contratada ? <Admitted /> : <EditProposal admitButtonClick={setAdmit} />}
      </div>

    </Container>
  )
}
import { Container, InputContainer, SmallContainer, RadioContainer, AddButton, CancelButton } from "./styles";
import logoOmega from '../../assets/logo-omega.svg'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import '../../styles/DatePicker.css';
import '../../styles/Calendar.css';
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
const valor: number = 1500;

export function AddModal({ isOpen, onRequestClose }: AddModalProps) {
  const [nome, setNome] = useState('')
  const [carga, setCarga] = useState(0)
  const [consumo, setConsumo] = useState(0)
  const [tipo, setTipo] = useState('')
  const [submercado, setSubmercado] = useState('')
  const [valueInicio, setValueInicio] = useState(new Date());
  const [valueFim, setValueFim] = useState(new Date());
  function handleCreateNewProposal(event: FormEvent) {
    event.preventDefault();
    const data = {
      nome,
      carga,
      consumo,
      tipo,
      submercado,
      valueInicio,
      valueFim,
    }
    api.post('/proposals', data)
  }
  return (
    <Container>
      <h1>Nova proposta</h1>
      <form onSubmit={handleCreateNewProposal}>
        <div className="flex flex-col justify-center align-center">
          <div className="flex items-center justify-center">
            <InputContainer className="mt-8">
              <input type="text" value={nome} onChange={event => setNome(event.target.value)} className="w-full" placeholder="Nome da empresa" />
            </InputContainer>
          </div>
          <div className='flex'>
            <div className="text-center pt-3 m-0">
              <h6 className="colorSelect">Carga contratada</h6>
              <SmallContainer>

                <input type="number" value={carga} onChange={event => setCarga(Number(event.target.value))} className="w-full" />
              </SmallContainer>
            </div>
            <div className="text-center pt-3 m-0">
              <h6 className="colorSelect">Consumo</h6>
              <SmallContainer>
                <input type="number" value={consumo} onChange={event => setConsumo(Number(event.target.value))} className="w-full align-center" />
              </SmallContainer>
            </div>
          </div>
          <div className='flex'>
            <div className='text-center p-0 m-0'>
              <h6 className="colorSelect">Data de início</h6>
              <SmallContainer>
                <DatePicker
                  onChange={setValueInicio}
                  value={valueInicio}
                  className="colorSelect"
                />
              </SmallContainer>
            </div>

            <div className='text-center p-0 m-0 mb-2'>
              <h6 className="colorSelect">Data final</h6>
              <SmallContainer>
                <DatePicker
                  onChange={setValueFim}
                  value={valueFim}
                  className="colorSelect"
                />
              </SmallContainer>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <InputContainer className=''>

              <select id="submercados" onChange={event => setSubmercado(event.target.value)} name="cars" className="colorSelect w-full">
                <option value="">Selecione o submercado</option>
                <option value="NORTE">Norte</option>
                <option value="NORDESTE">Nordeste</option>
                <option value="SUL">Sul</option>
                <option value="SUDESTE">Sudeste</option>
              </select>

            </InputContainer>
          </div>

          <div className='text-center p-0 mt-4'>
            <h6 className="colorSelect">Tipo de energia</h6>
            <div className='flex justify-center'>
              <RadioContainer>
                <div className=''>
                  <input type="radio" id="convencional" onChange={event => setTipo(event.target.value)} name="tipoenergia" value="convencional" className="m-5 " />
                  <label>Convencional</label><br />
                </div>
                <div>
                  <input type="radio" id="renovavel" onChange={event => setTipo(event.target.value)} name="tipoenergia" value="renovavel" className="m-5" />
                  <label>Renovável</label><br />
                </div>
              </RadioContainer>
            </div>
          </div>

          <div className=' flex items-center justify-center text-center p-0 mt-4'>
            <h6 className="colorSelect mr-2">Valor:</h6>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(valor)}
          </div>
          <div className='flex items-center justify-center text-center mt-5 gap-12'>
            <AddButton type="submit">Adicionar</AddButton>
            <CancelButton onClick={onRequestClose}>Cancelar</CancelButton>
          </div>
        </div>
      </form>
      <img src={logoOmega} alt="" width="120" className="mt-10" />
    </Container >
  )
}
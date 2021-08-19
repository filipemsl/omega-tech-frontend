import { Container, InputContainer, SmallContainer, RadioContainer, AddButton as AddButton, CancelButton } from "./styles";
import logoOmega from '../../assets/logo-omega.svg'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import '../../styles/DatePicker.css';
import '../../styles/Calendar.css';
import { useState } from "react";

interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
const valor: number = 1500;

export function AddModal({ isOpen, onRequestClose }: AddModalProps) {
  const [valueInicio, setValueInicio] = useState(new Date());
  const [valueFim, setValueFim] = useState(new Date());
  return (
    <Container>
      <h1>Nova proposta</h1>
      <InputContainer className="mt-8">
        <input type="text" className="w-full" placeholder="Nome da empresa" />
      </InputContainer>
      <div className='flex'>
        <SmallContainer>
          <input type="number" className="w-full" placeholder="Carga contratada" />
        </SmallContainer>
        <SmallContainer>
          <input type="type" className="w-full" placeholder="Consumo" />
        </SmallContainer>
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

        <div className='text-center p-0 m-0'>
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

      <InputContainer>
        <select id="submercados" name="cars" className="w-full colorSelect">
          <option value="">Selecione o submercado</option>
          <option value="norte">Norte</option>
          <option value="nordeste">Nordeste</option>
          <option value="sul">Sul</option>
          <option value="sudeste">Sudeste</option>
        </select>
      </InputContainer>

      <div className='text-center p-0 mt-4'>
        <h6 className="colorSelect">Tipo de energia</h6>
        <div className='flex justify-center'>
          <RadioContainer>
            <div className=''>
              <input type="radio" id="convencional" name="tipoenergia" value="convencional" className="m-5 " />
              <label>Convencional</label><br />
            </div>
            <div>
              <input type="radio" id="renovavel" name="tipoenergia" value="renovavel" className="m-5" />
              <label>Renovável</label><br />
            </div>
          </RadioContainer>
        </div>
      </div>

      <div className='text-center p-0 mt-4'>
        <h6 className="colorSelect">Valor</h6>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(valor)}
      </div>
      <div className='flex mt-5 gap-12'>
        <AddButton>Adicionar</AddButton>
        <CancelButton onClick={onRequestClose}>Cancelar</CancelButton>
      </div>
      <img src={logoOmega} alt="" width="120" className="mt-10" />
    </Container>
  )
}
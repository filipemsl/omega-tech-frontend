import { Container, InputContainer, SmallContainer, RadioContainer, AddButton, CancelButton } from "./styles";
import logoOmega from '../../assets/logo-omega.svg'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import '../../styles/DatePicker.css';
import '../../styles/Calendar.css';
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
// const valor: number = 1500;

export function AddModal({ isOpen, onRequestClose }: AddModalProps) {
  const ProposalSuccess = () => { toast("Proposta cadastrada com sucesso", { transition: Slide }); }
  const CargaSuccess = () => { toast("Carga adicionada com sucesso!", { transition: Slide }); }
  const ProposalError = () => { toast("Erro, tente novamente", { transition: Slide }); }
  let obj = []
  const [companyname, setCompanyname] = useState('')
  const [carga, setCarga] = useState(0);
  const [charges, setCharges] = useState([])
  const [kwhconsumption, setKwhconsumption] = useState(0)
  const [supplytype, setSupplytype] = useState('')
  const [submarket, setSubmarket] = useState('')
  const [initialdate, setInitialDate] = useState(new Date());
  const [finaldate, setFinalDate] = useState(new Date());

  function addValor() {
    obj.push({ carga, companyname })
    CargaSuccess()
  }

  console.log(companyname)
  function handleCreateNewProposal(event: FormEvent) {
    event.preventDefault();

    let token = localStorage.getItem('access_token'!)
    let tokenData = token?.replace(/['"]+/g, '')

    const data = {
      initialdate,
      finaldate,
      charges,
      supplytype,
      submarket,
    }

    api.post('/proposals', data, { headers: { Authorization: `Bearer ${tokenData}` } })
      .then(ProposalSuccess, onRequestClose)
      .catch(ProposalError)
  }

  return (
    <Container>
      <h1>Nova proposta</h1>
      <form onSubmit={handleCreateNewProposal}>
        <div className="flex flex-col justify-center align-center">

          <div className="flex items-center justify-center">

            <InputContainer className="mt-8">
              <input type="text" onChange={event => setCompanyname(event.target.value)} className="w-full" placeholder="Nome da empresa" />
            </InputContainer>

          </div>

          <div className='flex justify-center'>

            <div className=" flex text-center pt-3 m-0">
              <div className="flex align-center">
                <SmallContainer>
                  <input type="number" value={carga} onChange={event => setCarga(parseInt(event.target.value))} className="w-full" />
                </SmallContainer>
              </div>
              <AddButton type="button" onClick={addValor} className='flex self-center'>Adicionar carga</AddButton>
            </div>


          </div>
          <div className='flex justify-center align-center'>
            <div className="text-center pt-3 m-0">
              <h6 className="colorSelect">Consumo total</h6>
              <SmallContainer>
                <input type="number" value={kwhconsumption} onChange={event => setKwhconsumption(parseInt(event.target.value))} className="w-full align-center" />
              </SmallContainer>
            </div>
          </div>
          <div className='flex'>
            <div className='text-center p-0 m-0'>
              <h6 className="colorSelect">Data de início</h6>
              <SmallContainer>
                <DatePicker
                  onChange={setInitialDate}
                  value={initialdate}
                  className="colorSelect"
                />
              </SmallContainer>
            </div>

            <div className='text-center p-0 m-0 mb-2'>
              <h6 className="colorSelect">Data final</h6>
              <SmallContainer>
                <DatePicker
                  onChange={setFinalDate}
                  value={finaldate}
                  className="colorSelect"
                />
              </SmallContainer>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <InputContainer className=''>

              <select id="submercados" onChange={event => setSubmarket(event.target.value)} name="submercado" className="colorSelect w-full">
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
                  <input type="radio" id="convencional" onChange={event => setSupplytype(event.target.value)} name="tipoenergia" value="convencional" className="m-5 " />
                  <label>Convencional</label><br />
                </div>
                <div>
                  <input type="radio" id="renovavel" onChange={event => setSupplytype(event.target.value)} name="tipoenergia" value="renovavel" className="m-5" />
                  <label>Renovável</label><br />
                </div>
              </RadioContainer>
            </div>
          </div>

          <div className=' flex items-center justify-center text-center p-0 mt-4'>
            {/* <h6 className="colorSelect mr-2">Valor:</h6>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(valor)} */}
          </div>
          <div className='flex items-center justify-center text-center mt-5 gap-12'>
            <AddButton type="submit">Adicionar</AddButton>
            <CancelButton onClick={onRequestClose}>Cancelar</CancelButton>
          </div>
        </div>
      </form>
      <img src={logoOmega} alt="" width="120" className="mt-10" />
      <ToastContainer position="top-center" />
    </Container >
  )
}
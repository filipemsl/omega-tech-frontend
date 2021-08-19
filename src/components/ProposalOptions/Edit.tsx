import ToAdmit from '../../assets/toadmit.svg'
import Edit from '../../assets/edit.svg'
import Delete from '../../assets/delete.svg'
import { AdmitButton, EditButton, DeleteButton } from './EditStyle'

interface AdmitProposal {
  admitButtonClick: () => void;
}
export function EditProposal({ admitButtonClick }: AdmitProposal) {
  return (
    <div className="flex gap-5">
      <img src="" alt="" />
      <AdmitButton onClick={admitButtonClick}><img src={ToAdmit} alt="" />Contratar</AdmitButton>
      <EditButton><img src={Edit} alt="" />Editar</EditButton>
      <DeleteButton><img src={Delete} alt="" />Excluir</DeleteButton>
    </div>
  )
}
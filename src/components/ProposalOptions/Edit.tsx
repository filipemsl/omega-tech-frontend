import ToAdmit from '../../assets/toadmit.svg'
import Edit from '../../assets/edit.svg'
import Delete from '../../assets/delete.svg'
import { AdmitButton, EditButton, DeleteButton } from './EditStyle'

interface ButtonProposal {
  admitButtonClick: () => void;
}
// editButtonClick: (id: string) => void;
// deleteButtonClick: (id: string) => void;
// }editButtonClick, deleteButtonClick

export function EditProposal({ admitButtonClick, }: ButtonProposal,) {
  return (
    <div className="flex gap-5">
      <img src="" alt="" />
      <AdmitButton onClick={admitButtonClick}><img src={ToAdmit} alt="" />Contratar</AdmitButton>
      <EditButton ><img src={Edit} alt="" />Editar</EditButton>
      <DeleteButton ><img src={Delete} alt="" />Excluir</DeleteButton>
    </div>
  )
}
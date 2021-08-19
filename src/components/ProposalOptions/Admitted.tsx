import AdmittedCheck from '../../assets/admitted.svg'
import { AdmittedLabel } from './AdmittedStyle'
export function Admitted() {
  return (
    <div className="flex gap-3">
      <img src={AdmittedCheck} alt="Proposta contratada" title="Proposta contratada" />
      <AdmittedLabel>Contradada</AdmittedLabel>
    </div>
  )
}
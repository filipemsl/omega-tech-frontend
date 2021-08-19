import { api } from '../services/api';

interface Proposal {
  id: string;
  title: string;
  consumoTotal: number;
  tipoFonte: string;
  dataInicio: Date;
  dataFim: Date;
  submercado: string;
  valor: number;
}
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Proposal {
  id: string;
  initialDate: string;
  finalDate: string;
  charges: [];
  totalconsumption: string;
  supplytype: string;
  hired: boolean;
  proposalvalue: number;
}
type ProposalInput = Proposal;

interface ProposalsProviderProps {
  children: ReactNode;
}

interface ProposalContextData {
  transactions: Proposal[];
  createProposal: (proposal: ProposalInput) => void;
}
export const ProposalContext = createContext<ProposalContextData>({} as ProposalContextData);

export function ProposalsProvider({ children }: ProposalsProviderProps) {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  useEffect(() => {
    api.get('/proposals')
      .then(response => setProposals(response.data.transactions))
  }, []);

  function createProposal(proposal: ProposalInput) {
    api.post('/proposals', proposals)
  }

  return (
    <ProposalContext.Provider value={{ transactions: proposals, createProposal }}>
      {children}
    </ProposalContext.Provider>)
}

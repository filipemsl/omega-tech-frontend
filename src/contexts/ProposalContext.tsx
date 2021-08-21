import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { ProposalConsumer } from '../consumers/proposal.consumer'

const proposalInterface = new ProposalConsumer

interface Proposal {
  id: string;
  initialDate: string;
  finalDate: string;
  charges: [];
  totalconsumption: string;
  supplytype: string;
  hired: boolean;
  proposalvalue: number;
  submarket: string;
}
type ProposalInput = Omit<Proposal, 'id' | 'hired'>;

let token = localStorage.getItem('access_token'!)
let tokenData = token?.replace(/['"]+/g, '')

interface ProposalsProviderProps {
  children: ReactNode;
}

interface ProposalsContextData {
  proposals: Proposal[];
  createProposal: (proposal: ProposalInput) => void;
}
export const ProposalContext = createContext<ProposalsContextData>({} as ProposalsContextData);



export function ProposalsProvider({ children }: ProposalsProviderProps) {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  useEffect(() => {
    const requisition = api.get('/proposals',
      { headers: { Authorization: `Bearer ${tokenData}` } }
    )

    console.log(requisition);

  }, []);

  function createProposal(proposal: ProposalInput) {
    api.post('/proposals', proposal, { headers: { Authorization: `Bearer ${tokenData}` } })
  }

  return (
    <ProposalContext.Provider value={{ proposals, createProposal }}>
      {children}
    </ProposalContext.Provider>)
}

interface Proposal {
  id: string;
  initialDate: Date;
  finalDate: Date;
  charges: any[];
  totalconsumption: string;
  supplytype: string;
  hired: boolean;
  proposalvalue: number;
  submarket: string;
}

export default Proposal
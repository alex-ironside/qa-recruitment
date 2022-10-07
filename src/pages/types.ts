export interface IDetails {
  title: string;
  category: string;
  asset: string;
  comment: string;
  risk: string;
  quantity: number;
  deadline?: Date;
  impact: number;
  execProbability: number;
  severity: number;
}

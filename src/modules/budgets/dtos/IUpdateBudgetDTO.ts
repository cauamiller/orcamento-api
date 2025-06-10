export interface IUpdateBudgetDTO {
  clientId: string;
  items: {
    description: string;
    quantity: number;
    price: number;
  }[];
}

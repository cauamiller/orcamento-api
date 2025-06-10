export interface ICreateBudgetDTO {
  clientId: string;
  items: {
    description: string;
    quantity: number;
    price: number;
  }[];
}
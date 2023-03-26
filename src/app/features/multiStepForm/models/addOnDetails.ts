export class addOnDetails {
  constructor(
    name: string,
    description: string,
    monthlyCost: number,
    yearlyCost: number
  ) {
    this.addOnName = name;
    this.addOnDescription = description;
    this.addOnMonthlyCost = monthlyCost;
    this.addOnYearlyCost = yearlyCost;
  }

  public addOnName: string = '';
  public addOnDescription: string = '';
  public addOnMonthlyCost: number = 0;
  public addOnYearlyCost: number = 0;
}

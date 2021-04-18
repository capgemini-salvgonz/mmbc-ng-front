export class BudgetDashboard {
  
  public allowedExpensePercentage: number;
  
  public currentExpensePercentage: number;
​
  public availableBalance: number;
​
  public biweeklyBudget: number;

  public totalRevenues: number;
​
  public currentDate: string;
​
  public endOfPeriod: string;
​
  public monthlyBudget: number;
​
  public pendingFixedExpenses: number;
​
  public pendingWeeks: number;
​
  public weeklyBudget: number;
  
  constructor(){
    this.allowedExpensePercentage = 0;
    this.availableBalance = 0;
    this.biweeklyBudget = 0;
    this.monthlyBudget = 0;
    this.pendingFixedExpenses = 0;
    this.pendingWeeks = 0;
    this.weeklyBudget = 0;
    this.totalRevenues = 0;
    this.currentExpensePercentage = 0;
  }
}
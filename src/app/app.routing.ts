import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { AccountComponent } from './components/accounts/account.component';
import { InvestmentComponent } from './components/investments/investment.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { BudgetComponent } from './components/budget/budget.component';

const appRoutes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'expense', component:ExpenseComponent},
  {path:'accounts', component:AccountComponent},
  {path:'budget', component:BudgetComponent},
  {path:'investments', component:InvestmentComponent},
  {path:'configuration', component:ConfigurationComponent},
];

export const appRouingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

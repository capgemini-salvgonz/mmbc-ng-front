import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//routing
import { routing, appRouingProviders } from './app.routing';

//http client
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeEventComponent } from './components/home/home.event.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/accounts/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    HomeEventComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

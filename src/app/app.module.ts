import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
//
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

// Chart.js
import { ChartsModule } from 'ng2-charts';

// forms 
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

//routing
import { routing } from './app.routing';

//http client
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeEventComponent } from './components/home/home.event.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/accounts/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Pipes
import { AccountTypePipe } from 'src/app/components/accounts/account.type.pipe';
import { BalanceFormatPipe } from 'src/app/components/accounts/balance.format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    HomeEventComponent,
    
    // Pipes
    AccountTypePipe,
    BalanceFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    MatSliderModule,
    MatCardModule,
    MatTableModule,  
    MatProgressSpinnerModule,
    MatMenuModule,	 	 
    MatIconModule,	 	 
    MatToolbarModule,	 
    MatButtonModule,	 
    MatFormFieldModule,	 
    MatInputModule,	  	 
    MatSelectModule,	 
    MatSortModule,	 	 
    MatPaginatorModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

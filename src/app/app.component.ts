import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErpComponent } from "./components/products/erp/erp.component";
import { CrmComponent } from "./components/products/crm/crm.component";
import { EmployeesComponent } from "./components/platforms/employees/employees.component";
import { ClientsComponent } from "./components/platforms/clients/clients.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    PlatformsComponent,
    AboutComponent,
    ContactComponent,
    ErpComponent,
    CrmComponent,
    EmployeesComponent,
    ClientsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'techcorp';
}

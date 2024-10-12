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
import { DashboardComponent } from './components/platforms/employees/dashboard/dashboard.component';
import { TaskListComponent } from './components/platforms/employees/task-list/task-list.component';
import { ProjectsComponent } from './components/platforms/employees/projects/projects.component';
import { GithubRepoComponent } from './components/platforms/employees/github-repo/github-repo.component';

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
    ClientsComponent,
    DashboardComponent,
    TaskListComponent,
    ProjectsComponent,
    GithubRepoComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'techcorp';
}

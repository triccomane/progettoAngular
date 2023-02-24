import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { Pagina1Component } from './componenti/pagina1/pagina1.component';
import { Pagina2Component } from './componenti/pagina2/pagina2.component';
import { Pagina3Component } from './componenti/pagina3/pagina3.component';
import { RegisterComponent } from './componenti/register/register.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [ //creo canActivate per rendirizzare chi non è loggato al login
    {path: '', redirectTo: 'pagina1', pathMatch: 'full'}, //vengo sempre rimandato a pagina 1 di default
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    {path: 'pagina3', component: Pagina3Component},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pagina1', component: Pagina1Component},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'pagin3', component: Pagina3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

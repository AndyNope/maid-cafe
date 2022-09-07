import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'de/home' },
  // { path: ':language', redirectTo: '/de/home' },
  { path: 'login', pathMatch: 'full', redirectTo: 'de/login' },
  { path: ':language/home', component: HomeComponent }, //canActivate: [AuthGuard]
  { path: ':language/menu', component: MenuComponent }, //canActivate: [AuthGuard]
  { path: ':language/about-us', component: AboutUsComponent }, //canActivate: [AuthGuard]
  { path: ':language/login', component: LoginComponent }, //canActivate: [AuthGuard]
  // { path: 'de/login', component: LoginComponent },
  // { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

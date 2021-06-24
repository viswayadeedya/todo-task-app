import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthGaurd } from './login/auth.gaurd';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  { path: 'list/:id', component: ListComponent, canActivate: [AuthGaurd] },
  // { path: 'list/personal', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocation } from './housing-location';
import { DetailsComponent } from './details/details.component'
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }, 
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

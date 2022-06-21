import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RFormComponent } from './r-form/r-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: AppComponent },
  { path: 'rform', component: RFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

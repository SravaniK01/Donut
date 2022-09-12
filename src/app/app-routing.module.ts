import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DonutdetailsComponent } from './components/donutdetails/donutdetails.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
{path :'donutList' , component: HomepageComponent},
{path : 'donutList/:id', component: DonutdetailsComponent},
{path :'cart' , component: CartComponent},
{path: '', redirectTo: '/donutList', pathMatch: 'full'},
{path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLaoyutComponent } from './layout/signals-laoyut/signals-laoyut.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';

const routes: Routes = [
  {
    path:'',
    component: SignalsLaoyutComponent,
    children:[
      { path: 'counter', component: CounterPageComponent},
      { path: 'user-info', component: UserInfoPageComponent},
      { path: 'properties', component: PropertyPageComponent},
      { path: '**', redirectTo: 'counter', pathMatch: 'full'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }

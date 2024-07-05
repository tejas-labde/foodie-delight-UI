import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { appRoutes } from './constants/constants';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: HomePageComponent
      },
      {
        path: appRoutes.RESTAURANT_PAGE,
        component: RestaurantPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

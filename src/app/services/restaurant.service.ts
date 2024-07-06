import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants() {
    return this.httpClient.get(apiRoutes.GET_RESTAURANTS);
  }

  getRestaurantDetails(id: number) {
    return this.httpClient.get(`${apiRoutes.GET_RESTAURANTS}/${id}`);
  }

  addNewRestaurant(restaurantDetails:any){
    return this.httpClient.post(apiRoutes.GET_RESTAURANTS,restaurantDetails)
  }
  
}

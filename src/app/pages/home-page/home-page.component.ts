import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddRestaurantComponent } from 'src/app/components/add-restaurant/add-restaurant.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { appRoutes, CONSTANT_SUCCESS } from 'src/app/constants/constants';
import { IRestaurant } from 'src/app/constants/restaurant.interface';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  restaurantCards: Array<IRestaurant> = [];

  constructor(private matDialog: MatDialog,
    private router: Router,
    private restaurantService: RestaurantService

  ) { }

  ngOnInit(): void {
    this.getRestaurantsList();
  }

  getRestaurantsList() {
    this.restaurantService.getAllRestaurants().subscribe({
      next: (response: any) => {
        console.log(response);
        this.restaurantCards = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  addNewRestaurant() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.height='600px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    let dialogRef = this.matDialog.open(AddRestaurantComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((resp) => {
      if (resp === CONSTANT_SUCCESS) {
        //add that record to the DB
      }
    })
  }

  viewRestaurant(event: any) {
    console.log(event);
    this.router.navigate([`${appRoutes.RESTAURANT}/${event}`]);
    //route the user to the specific restaurant page
  }

  deleteRestaurant(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.data = {}
    let dialogRef = this.matDialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((resp) => {
      if (resp.status === CONSTANT_SUCCESS) {
        const restaurantData = resp.data;
        //delete that record from the DB
      }
    })
  }
}

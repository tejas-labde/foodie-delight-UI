import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IRestaurant } from 'src/app/constants/restaurant.interface';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  @Input() cardDetails!:IRestaurant;
  @Output() viewClicked = new EventEmitter<number>();
  @Output() deleteClicked = new EventEmitter<number>();

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.cardDetails);
  }

  onViewClick(){
    this.viewClicked.emit(this.cardDetails.id);
  }
  
  onDeleteClick(){
    this.deleteClicked.emit(this.cardDetails.id);
  }

}

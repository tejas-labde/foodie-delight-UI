import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CONSTANT_CANCEL, CONSTANT_SUCCESS } from 'src/app/constants/constants';
import { IRestaurant } from 'src/app/constants/restaurant.interface';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() restaurantDetails!: IRestaurant;

  constructor(private matDialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.matDialogRef.close(CONSTANT_CANCEL);
  }

  confirm() {
    this.matDialogRef.close({ status: CONSTANT_SUCCESS, data: this.restaurantDetails });
  }

}

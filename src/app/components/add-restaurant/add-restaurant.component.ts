import { DialogRef } from '@angular/cdk/dialog';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CONSTANT_CANCEL, CONSTANT_SUCCESS } from 'src/app/constants/constants';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  addRestaurantForm=new FormGroup({
    name: new FormControl('',[Validators.required]),
    locality: new FormControl('',[Validators.required]),
    openTiming: new FormControl('',[Validators.required]),
    closeTiming: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    facilities: new FormControl('',[Validators.required]),
    cuisines: new FormControl('',[Validators.required]),
  })
  constructor(private restaurant:RestaurantService,
    private dialogRef: MatDialogRef<AddRestaurantComponent>
  ) { }

  ngOnInit(): void {
  }

  addNewRestaurant(){
    console.log(this.addRestaurantForm);
    if(this.addRestaurantForm.valid){
      this.restaurant.addNewRestaurant(this.addRestaurantForm.value).subscribe({
        next:(response:any)=>{
          this.dialogRef.close(CONSTANT_SUCCESS);
        },
        error:(error:any)=>{
          console.log(error);
          this.dialogRef.close(CONSTANT_CANCEL);
        }
      })
    }
  }

  cancel(){
    //dialog closing
  }

}

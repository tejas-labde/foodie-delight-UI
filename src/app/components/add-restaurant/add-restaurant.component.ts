import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    // rating: new FormControl('',[Validators.required]),
    // image: new FormControl('',[Validators.required]),
    // facilities: new FormControl('',[Validators.required]),
    // cuisines: new FormControl('',[Validators.required]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  addNewRestaurant(){
    if(this.addRestaurantForm.valid){
      //API call to make to add a new restaurant
    }
  }

  cancel(){
    //dialog closing
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {
  cardId!:number;

  constructor(private activatedRoute:ActivatedRoute) {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.cardId= Number(id);
   }

  ngOnInit(): void {
      this.getCardDetails();
  }

  getCardDetails(){
    console.log(this.cardId);
    //get card details using card ID
  }

}

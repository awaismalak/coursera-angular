import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../service/promotion.service';
import { LeadersinfoService } from '../leadersinfo.service';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  leaders: Leader[] = [];

  dish:Dish;
  promotion :Promotion;

  constructor(private dishServes:DishService,
    private promotionService:PromotionService,
    private leaderInfo : LeadersinfoService ) { }

  ngOnInit() {
    this.dishServes.getFeatureDish().then((dish)=>{
      this.dish =dish;
    });

   // this.dish = this.dishServes.getFeatureDish();
   this.promotionService.getFeaturePromotion().then((promotion) =>{
    this.promotion = promotion
   });
    this.leaderInfo.getLeaders().then((leaders) => {
      this.leaders = leaders;
    });
    
  }

}

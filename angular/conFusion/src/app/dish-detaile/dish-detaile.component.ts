import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Location} from '@angular/common';
import { Params, ActivatedRoute} from '@angular/router';
import { DishService } from '../service/dish.service';





@Component({
  selector: 'app-dish-detaile',
  templateUrl: './dish-detaile.component.html',
  styleUrls: ['./dish-detaile.component.scss']
})
export class DishDetaileComponent implements OnInit {


meriDish:Dish;

  // commentss= DISHES[0].comments;


  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location :Location ) { }

  ngOnInit() {

let id = this.route.snapshot.params['id'];
this.dishService.getDish(id).then((dish: Dish)=>{
  this.meriDish=dish;
});


  }
  awais(){
    this.location.back();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishDetail';
import { from } from 'rxjs';




@Component({
  selector: 'app-dish-detaile',
  templateUrl: './dish-detaile.component.html',
  styleUrls: ['./dish-detaile.component.scss']
})
export class DishDetaileComponent implements OnInit {
@Input('selectedDish') selectedDish:Dish;

  // commentss= DISHES[0].comments;


  constructor() { }

  ngOnInit() {



  }

}

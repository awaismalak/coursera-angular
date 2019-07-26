import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishDetail';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes = DISHES;
  selectedDish: Dish;
  constructor() { }

  
  ngOnInit() {
  }
  // onSlect(dish:Dish){
  //   this.selectedDish= dish;

  // }

  loadProduct(dish:Dish){
    this.selectedDish = dish;
  }

}




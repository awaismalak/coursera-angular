import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishDetail';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Dish[]{
    console.log('fff');
    return DISHES;
  }


  getDish(id:string):Dish {
    return DISHES. filter((dish) => (dish.id === id))[0];
   }



  getFeatureDish(){
    return DISHES. filter((dish) => dish.featured)[0];

  }



  
}




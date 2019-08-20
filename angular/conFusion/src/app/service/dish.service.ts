import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishDetail';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }


  getDishes(): Promise<Dish[]>{
    console.log('fff');
    return Promise.resolve(DISHES);
  }


  getDish(id:string):Promise<Dish> {

    let dish: Dish;

    let newArr=DISHES.filter((dish) =>  (dish.id === id));

    dish = newArr[0];

    return Promise.resolve(dish);


    // return Promise.resolve(DISHES. filter((dish) => (dish.id === id))[0]);
   }



  getFeatureDish():Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);

  }



  
}




import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishDetail';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }


  // getDishes(): Promise<Dish[]>{
  //   return new Promise((resolve)=>{
  //     setTimeout(()=>resolve(DISHES),2000)
  //   })
  // }




  getDishes(): Promise<Dish[]>{
    return of(DISHES).pipe(delay(2000)).toPromise();
    }
  





  getDish(id:string):Promise<Dish> {

    let dish: Dish;

    let newArr=DISHES.filter((dish) =>  (dish.id === id));

    dish = newArr[0];

      return  of(dish).pipe(delay(5000)).toPromise();
     
   
   }




  getFeatureDish():Promise<Dish>{
   
var dish = DISHES.filter((dish) => dish.featured)[0];
    return of(dish).pipe(delay(2000)).toPromise();
     

    

  }



  
}







 // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    // var dish =  DISHES.filter((dish) => dish.featured)[0]
    // return of(dish).pipe(delay(2000)).toPromise();

import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishDetail';
import { of, Observable } from 'rxjs';
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




  getDishes():Observable<Dish[]>{
    return of(DISHES).pipe(delay(2000))
    }
  





  getDish(id:string):Observable<Dish> {

    let dish: Dish;

    let newArr=DISHES.filter((dish) =>  (dish.id === id));

    dish = newArr[0];

      return  of(dish).pipe(delay(5000));
     
   
   }




  getFeatureDish():Observable<Dish>{
   
var dish = DISHES.filter((dish) => dish.featured)[0];
    return of(dish).pipe(delay(2000));
     

    

  }



  
}







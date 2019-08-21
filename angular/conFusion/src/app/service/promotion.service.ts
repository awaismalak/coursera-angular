import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import { of, observable, from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Observable <Promotion[]>{
    return of(PROMOTIONS);
  }


  getPromotion(id:string):Observable <Promotion> {
    return of(PROMOTIONS. filter((promo) => (promo.id === id))[0]);
   }

  getFeaturePromotion():Observable<Promotion>{
    return of(PROMOTIONS. filter((promo) => promo.featured)[0]);
  }

}

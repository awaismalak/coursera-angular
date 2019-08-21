import { Injectable } from '@angular/core';
import { LeadersInfo } from './shared/leadersinfo';
import { from } from 'rxjs';
import { Leader } from './shared/leader';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadersinfoService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    let leadersInfoInstance = new LeadersInfo();
    return of(leadersInfoInstance.leader).pipe(delay(2000));
  };



}

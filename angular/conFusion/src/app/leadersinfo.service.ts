import { Injectable } from '@angular/core';
import { LeadersInfo } from './shared/leadersinfo';
import { from } from 'rxjs';
import { Leader } from './shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeadersinfoService {

  constructor() { }

  getLeaders(): Leader[]{
    let leadersInfoInstance = new LeadersInfo();
    return leadersInfoInstance.leader;

    // return (new LeadersInfo()).leader;

  };



}

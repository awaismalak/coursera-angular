import { Component, OnInit } from '@angular/core';
import { LeadersinfoService } from '../../../leadersinfo.service';
import { Leader } from '../../../shared/leader';

@Component({
  selector: 'app-corporate-leadership',
  templateUrl: './corporate-leadership.component.html',
  styleUrls: ['./corporate-leadership.component.scss']
})
export class CorporateLeadershipComponent implements OnInit {


  leaders: Leader[] = [];
  constructor(private leaderInfoService: LeadersinfoService) {

   }
   

  ngOnInit() {

 this.leaderInfoService.getLeaders().subscribe((leaders) => {
  this.leaders = leaders;

 });

  }

}


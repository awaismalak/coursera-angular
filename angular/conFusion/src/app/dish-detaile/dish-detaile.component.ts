import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Location } from '@angular/common';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../service/dish.service';
import { DISHES } from '../shared/dishDetail';





@Component({
  selector: 'app-dish-detaile',
  templateUrl: './dish-detaile.component.html',
  styleUrls: ['./dish-detaile.component.scss']
})
export class DishDetaileComponent implements OnInit {

  ids = [];
  meriDish: Dish;

  // commentss= DISHES[0].comments;


  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {

    this.ids = DISHES.map((dish: Dish) => dish.id);

    this.route.params.subscribe(() => {

      let id = this.route.snapshot.params['id'];
      this.dishService.getDish(id).subscribe((dish: Dish) => {
        this.meriDish = dish;

      });

    });




  }
  awais() {
    this.location.back();
  }

  next() {

    var currentId = this.meriDish.id;
    var currentIdIndex = this.ids.indexOf(currentId);
    var lastIdIndex = this.ids.length - 1;

    if(currentIdIndex>= lastIdIndex) return false;
    
    var nextIndex = currentIdIndex + 1;
    var nextId = this.ids[nextIndex];

    this.router.navigateByUrl('/dishdetail/'+nextId);
  }


  prev() {

    var currentId = this.meriDish.id;
    var currentIdIndex = this.ids.indexOf(currentId);
    var firstIdIndex = 0;

    if(currentIdIndex <= firstIdIndex) return false;
    
    var nextIndex = currentIdIndex - 1;
    var nextId = this.ids[nextIndex];

    this.router.navigateByUrl('/dishdetail/'+nextId);
  }

}

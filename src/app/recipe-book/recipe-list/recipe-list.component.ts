import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Corn", "corn", "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-corn-on-the-cob-1.jpg"),
    new Recipe("Corn", "corn", "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-corn-on-the-cob-1.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

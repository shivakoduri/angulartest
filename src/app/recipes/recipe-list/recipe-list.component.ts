import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Simply a test', 'http://coastguard.dodlive.mil/files/2014/04/unnamed-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

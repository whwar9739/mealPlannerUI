import { Component } from '@angular/core';
import { ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  ingredient: ingredient = {
    id: 1,
    name: 'Milk'
  };
}

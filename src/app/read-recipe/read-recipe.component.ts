import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-read-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './read-recipe.component.html',
  styleUrls: ['./read-recipe.component.css']
})
export class ReadRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipe = this.route.snapshot.data['recipe'];

    this.recipeForm = this.fb.group({
      name: [{ value: this.recipe.name, disabled: true }],
      prepTimeMinutes: [{ value: this.recipe.prepTimeMinutes, disabled: true }],
      cookTimeMinutes: [{ value: this.recipe.cookTimeMinutes, disabled: true }],
      cuisine: [{ value: this.recipe.cuisine, disabled: true }]
    });
  }
}
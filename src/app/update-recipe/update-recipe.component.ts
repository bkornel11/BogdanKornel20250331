import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipe = this.route.snapshot.data['recipe'];

    this.recipeForm = this.fb.group({
      name: [this.recipe.name, [Validators.required]],
      prepTimeMinutes: [this.recipe.prepTimeMinutes, [Validators.required, Validators.min(5)]],
      cookTimeMinutes: [this.recipe.cookTimeMinutes, [Validators.required, Validators.min(5)]],
      cuisine: [this.recipe.cuisine, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log('Form adatok:', this.recipeForm.value);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RecipesService, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  receptek: Recipe[] = [];
  betoltesFolyamatban = true;
  hibaUzenet: string | null = null;

  constructor(private router: Router, private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.betoltesFolyamatban = true;
    this.recipesService.getRecipes().subscribe({
      next: (response) => {
        this.receptek = response.recipes;
        this.betoltesFolyamatban = false;
      },
      error: (error) => {
        console.error('Hiba történt az adatok lekérésekor:', error);
        this.hibaUzenet = 'Nem sikerült betölteni a recepteket.';
        this.betoltesFolyamatban = false;
      }
    });
  }

  megtekintes(receptId: number): void {
    this.router.navigate(['/recipes/read', receptId]);
  }

  szerkesztes(receptId: number): void {
    this.router.navigate(['/recipes/update', receptId]);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recipe {
  id: number;
  name: string;
  difficulty: string;
  rating: number;
  cuisine: string;
  prepTimeMinutes: number; 
  cookTimeMinutes: number; 
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<{ recipes: Recipe[] }> {
    return this.http.get<{ recipes: Recipe[] }>(this.apiUrl);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, tap } from 'rxjs';
import { Heroes } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(this.heroUrl + '?limit=151').pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  getHero(id: string): Observable<Heroes> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Heroes>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError)
    );
  }

  private log(message: string) {
    message = 'Error';
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ColumnMode } from '@swimlane/ngx-datatable/public-api';
import { Subscription } from 'rxjs';
import { Heroes } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit, OnDestroy {
  reorderable: boolean = true;
  //ColumnMode = ColumnMode;
  subscription: Subscription | undefined;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router, private heroService: HeroService) {}
  heroes: Heroes[] = [];

  ngOnInit(): void {
    this.onGetHeroes();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onNavigateTo(name: string): void {
    this.router.navigate(['/heroes-detail', name]);
  }

  private onGetHeroes(): void {
    this.isLoading = true;
    this.subscription = this.heroService.getHeroes().subscribe({
      next: (heroes: any) => {
        this.heroes = heroes.results;        
        this.isLoading = false
      },
      error: (err) => (this.errorMessage = err)
    });
  }
}

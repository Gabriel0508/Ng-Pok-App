import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroes } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss'],
})
export class HeroesDetailComponent
  implements OnInit, OnDestroy, AfterContentInit
{
  heroes: Heroes[] = [];
  errorMessage = '';
  subscription: Subscription | undefined;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  hero: Heroes | undefined;

  ngOnInit(): void {    
    const id: string = '' + this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterContentInit(): void {
    //this.getHero('' +this.route.snapshot.paramMap.get('id'));
  }

  getHero(id: string): void {
    this.heroService.getHero(id).subscribe({
      next: (hero: any) => {
       // this.heroes = hero;        
        //this.hero = this.heroes.find((h: any) => h.name === id);    
        this.hero = hero; 
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/heroes-list']);
  }
}

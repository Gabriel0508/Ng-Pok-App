import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroesDetailComponent } from './features/heroes-detail/heroes-detail.component';
import { HeroesDetailModule } from './features/heroes-detail/heroes-detail.module';
import { HeroesListComponent } from './features/heroes-list/heroes-list.component';
import { HeroesListModule } from './features/heroes-list/heroes-list.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'heroes-detail/:id', component: HeroesDetailComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    DashboardModule,
    HeroesListModule,
    HeroesDetailModule,
    HttpClientModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

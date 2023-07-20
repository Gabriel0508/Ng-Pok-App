import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDetailComponent } from './heroes-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeroesDetailComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeroesDetailComponent],
})
export class HeroesDetailModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDetailComponent } from '../heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FirstLetterUppercase } from 'src/app/shared/pipe/first-letter-uppercase.pipe';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [CommonModule, SharedModule, NgxDatatableModule,],
  exports: [HeroesListComponent],
})
export class HeroesListModule {}

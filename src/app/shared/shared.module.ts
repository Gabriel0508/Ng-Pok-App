import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FirstLetterUppercase } from './pipe/first-letter-uppercase.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FirstLetterUppercase],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FirstLetterUppercase],
})
export class SharedModule {}

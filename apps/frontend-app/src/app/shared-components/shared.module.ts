import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Header } from '@nestjs/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const sharedComponents = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  imports: [RouterModule],
})
export class SharedModule {}

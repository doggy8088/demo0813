import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { NTDollarsPipe } from './ntdollars.pipe';

import { SearchService } from './search.service';

import { HttpModule } from '@angular/http';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SearchComponent, NTDollarsPipe, ArticleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}

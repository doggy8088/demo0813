import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword: string;

  doSearch(keyword: string) {
    this.keyword = keyword;
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  data: any;

  constructor(private http: Http) {
    http.get('/api/articles.json')
      .subscribe(
        (value) => {
          this.data = value.json();
        }
      );
  }

  keyword: string;
  keyword_default = 'TEST';

  doSearch(keyword: string) {
    this.keyword = keyword;

    http.get('/api/articles.json?q='+keyword)
      .subscribe(
        (value) => {
          this.data = value.json();
        }
      );
  }
}

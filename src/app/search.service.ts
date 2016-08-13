import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchService {

  data: any;
  error: any;

  constructor(private http: Http) {
    http.get('/api/articles.json')
      .subscribe(
        (value: Response) => {
          this.data = value.json();
        },
        (error) => {
          this.error = error;
        }
      );
  }

  keyword: string;
  keyword_default = 'TEST';

  doSearch(keyword: string) {
    this.keyword = keyword;

    this.http.get('/api/articles.json?q='+keyword)
      .subscribe(
        (value) => {
          this.data = value.json();
        }
      );
  }
}

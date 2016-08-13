import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  keyword: string;


  @Output()
  search = new EventEmitter<string>();

  doSearch(keyword: string) {
    this.keyword = keyword;
    this.search.emit(keyword);
  }

}

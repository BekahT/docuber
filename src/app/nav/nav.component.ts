import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() pageChanged = new EventEmitter<string>();
  currentPage: string = 'about';

  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(newPage: string) {
    this.currentPage = newPage;
    this.pageChanged.emit(this.currentPage);
  }

}

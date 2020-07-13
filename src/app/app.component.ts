import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DavidDocUber';
  currentPage: string = 'about';

  onChange(newPage: string) {
    this.currentPage = newPage;
  }  
}

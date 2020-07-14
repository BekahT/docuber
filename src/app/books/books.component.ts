import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    new Book("Placeholder Book 1", "This is a placeholder description for the placeholder book.", "https://images.unsplash.com/photo-1558287314-3047130e12a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80", "https://www.amazon.com"),
    new Book("Placeholder Book 2", "This is a placeholder description for the placeholder book.", "https://images.unsplash.com/photo-1520450578248-39f83d4c4cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80", "https://www.amazon.com"),
    new Book("Placeholder Book 3", "This is a placeholder description for the placeholder book.", "https://images.unsplash.com/photo-1540167828867-7e5020e0bc8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", "https://www.amazon.com"),
    new Book("Placeholder Book 4", "This is a placeholder description for the placeholder book.", "https://images.unsplash.com/photo-1490826212256-caefa02bc772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80", "https://www.amazon.com")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

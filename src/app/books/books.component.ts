import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    new Book("An Island Adventure: Reconciliation: A Jake Styles Novel",
      "On an island seven miles off the coast of Maine, Pastor Jake Styles, peacemaker and self-appointed island sleuth, was knee deep in a murder mystery. His skiff was missing and implicated in the transport of the body of a woman recently murdered. Adding to his complications, his fingerprints were on a knife thought to be the murder weapon. Pulling Pastor Jake deeper into trouble was his discovery of a second body. Time was running out to prove his innocence. The discovery of the secret life of a popular church elder was stirring up additional tension on the island. The faith of the inhabitants, including Pastor Jake's, was being tested. Attempting to keep a lid on the outbursts of anger and periodic violence, while encouraging reconciliation, was proving difficult.",
      "assets/islandAdventure1.jpg",
      "https://www.amazon.com/dp/B094T8MR1Z?ref_=pe_3052080_397514860"),
    //new Book("No Longer Dancing with the Percaline", "David 'Doc' Uber's Autobiography", "https://images.unsplash.com/photo-1520450578248-39f83d4c4cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80", "https://www.amazon.com"),
    //new Book("Placeholder Book 3", "This is a placeholder description for the placeholder book.", "https://images.unsplash.com/photo-1540167828867-7e5020e0bc8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", "https://www.amazon.com"),
    //new Book("Placeholder Book 4", "This is a placeholder description for the placeholder book.", "https://images.unsplash.com/photo-1490826212256-caefa02bc772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80", "https://www.amazon.com")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

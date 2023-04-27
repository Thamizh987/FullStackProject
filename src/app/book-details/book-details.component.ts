import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { Library } from '../library';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId: number = 0;
  library: any = [];
  constructor(private route: ActivatedRoute, private libraryService: LibraryService) { }

  /*It is called by default */
  ngOnInit(): void {
    console.log(this.route.snapshot.params['bookId']);
    this.bookId = this.route.snapshot.params['bookId'];

    this.library = new Library();
    /*Passing the BookId to the method searchById() in service class */
    this.libraryService.searchById(this.bookId).subscribe(data => {
      this.library = data;
    });
  }

}


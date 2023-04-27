import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  libraryRecords: Library[] = [];
  subjectName: string="";
  constructor(private libraryService: LibraryService,
    private router: Router) { }

    /*This method is called by default ..it will redirect to method getRecords() in this ts file*/
  ngOnInit(): void {
    this.getRecords();
  }

  /* It will get all the records present and goes to service class which is reffered by the
  reference variable libraryService. */
  private getRecords() {
    this.libraryService.getRecordsFromDb().subscribe(data => {
      this.libraryRecords = data;
    });
  }

  /*To view the book by it bookId,the bookId is passed to the method searchById() and 
  it navigate to the book-details component to take the book present in that bookID. */
  searchById(bookId: number) {
    this.router.navigate(['book-details', bookId]);
  }

  /*To search the book by its Subject name...the Subject name is passed to the method
  findBysubjectName() and goes to the service class */
  searchBysubjectName(){
      this.libraryService.findBysubjectName(this.subjectName)
      .subscribe(
        data =>{
         this.libraryRecords=data;
         console.log(data);
        },
        error=>{
          console.log(error);
        });
      }
  
      /*To update the book details,the bookId for which the details is to be updated is passed to the
      method updateBookDetails() and then it will be navigated to the update record component.*/
  updateBookDetails(bookId: number) {
    this.router.navigate(['update-record', bookId]);
  }

  
  /*To delete the book by its bookId...the  book's bookId which is to be deleted is passed to the
      method deleteRecord() and then it will goes to the service class which is reffered by the
  reference variable libraryService.*/
  deleteRecord(bookId: number) {
    this.libraryService.deleteRecord(bookId).subscribe(data => {
      console.log(data);
      this.getRecords();
    })
  }

  /*To confirm the deletion of the book record.If Yes..it will delete the record or else it will not*/
  confirmation(library: Library) {
    var status = confirm("Do You want to delete this record?");
    if (status == true) {
      this.deleteRecord(library.bookId);
    }
    else {
      this.getRecords();
    }
  }

  /*To remove all the records present in the list.If Yes..it will delete the records present or else it will not */
  removeAllRecords(): void {
    var status = confirm("Are You Sure to remove all the records present? Once it get deleted,You can't retrive it again");
    if (status == true) {
      this.libraryService.deleteAll().subscribe((data: any) => {
        console.log(data);
        this.getRecords();
      },
        (error: any) => {
          console.log(error);
        });
    }
    else {
      return;
    }
  }

  /* To view the book by its department Name .It will go to the service class*/
  ViewEEE(){
    this.libraryService.findByEEE().subscribe(
      data => {
        this.libraryRecords=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }
  ViewECE(){
    this.libraryService.findByECE().subscribe(
      data => {
        this.libraryRecords=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }
  ViewIT(){
    this.libraryService.findByIT().subscribe(
      data => {
        this.libraryRecords=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  ViewMech(){
    this.libraryService.findByMech().subscribe(
      data => {
        this.libraryRecords=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  ViewCSE(){
    this.libraryService.findByCSE().subscribe(
      data => {
        this.libraryRecords=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

}

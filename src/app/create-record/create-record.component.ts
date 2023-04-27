import { Component, OnInit } from '@angular/core';
import { Library } from '../library';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
  library: Library = new Library();
  constructor(private libraryService: LibraryService,
    private router: Router) { }

  deptId = '';
  deptName = '';
  subjectCode = '';
  subjectName = '';
  authorName = '';
  edition = '';
  noOfCopies = '';

  ngOnInit(): void {
  }

  /*The record which is inserted is passed to the method createLibraryRecords()
  present in the service class which is referred by the reference variable libraryService.*/
  addBooks() {
    this.libraryService.createLibraryRecords(this.library).subscribe(data => {
      console.log(data);
      this.bookList();
    },
      error => console.log(error));
  }
  /*After adding the new record,it will navigate to the booklist page */
  bookList() {
    this.router.navigate(['/libraryRecords']);
  }
  /*On submitting the form,the record inserted is passed to the method addBooks()*/
  onSubmit() {
    if (this.library.deptId === 0 || this.library.deptName === '' || this.library.subjectCode === '' || this.library.subjectName === '' || this.library.authorName === '' || this.library.edition === 0 || this.library.noOfCopies === 0) {
      var status = confirm("All the fields are mandatory to fill!");
    }
    else {
      var status = confirm("Do you want to submit your record?.If Yes,it will be added to the book list.");
      if (status == true) {
        console.log(this.library);
        this.addBooks();
      }
      else {
        this.router.navigate(['libraryRecords']);
      }
    }
  }
}



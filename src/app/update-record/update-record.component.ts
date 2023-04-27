import { Component, OnInit } from '@angular/core';
import { Library } from '../library';
import { LibraryService } from '../library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {
  bookId: number = 0;
  library: Library = new Library();

  constructor(private libraryService: LibraryService,
    private route: ActivatedRoute,
    private router: Router) { }

  /* ngOnInit() is the method in OnInit interface which is called by default if present */
  ngOnInit(): void {
    /*passing the bookId to the method searchById() which is present in the service class referenced by the 
    reference variable libraryService */
    this.bookId = this.route.snapshot.params['bookId'];
    this.libraryService.searchById(this.bookId).subscribe(data => {
      this.library = data;
    }, error => console.log(error));
  }


  

  /*After updating the records,it come back to the BookList */
  bookList() {
    this.router.navigate(['/libraryRecords']);
  }
  
  /* It is the method to confirm whether the record is to be updated or not if user tries to update
  any record.If Yes,the bookId along with the record updated is passed to the method updateBookDetails()
  present in the service class referenced by the reference variable libraryService.
  If No, it returns to the bookList itself without updating anything */
  onSubmit() {
    var status = confirm("Record updated successfully");
    if (status == true) {
    this.libraryService.updateBookDetails(this.bookId, this.library).subscribe(data => {
      this.bookList();
    }
      , error => console.log(error));
  }

else {
  this.router.navigate(['/libraryRecords']);
}
}
}
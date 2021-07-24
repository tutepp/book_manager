import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books :Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {this.getAllBook();
  }


  getAllBook(){
    this.bookService.getAll().subscribe(res => {
      this.books = res;
      console.log(res);
    })
  }
  deleteBook(id:any){
    if(confirm('Are you sure')){

    this.bookService.delete(id).subscribe(()=>{
      alert('delete success')
      this.getAllBook()


    })


  }
}


}

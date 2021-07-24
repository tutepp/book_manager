import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  books :any;
  constructor(private bookService:BookService,
    private activated: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.paramMap.get('id');
    this.bookService.findById(id).subscribe(res => {
    this.books = res;


  });
}
}

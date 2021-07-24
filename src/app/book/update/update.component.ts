import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  books :Book[] = [];
  updateForm:FormGroup | undefined;
  constructor(private bookService:BookService,
    private activated: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {

    const id = this.activated.snapshot.paramMap.get('id');
    this.bookService.findById(id).subscribe(res => {
      this.updateForm = this.fb.group({
        title: [res.title],
        author: [res.author],
        description: [res.description],

    })

  })
}
submit(){
  const id = this.activated.snapshot.paramMap.get('id');
  const book = this.updateForm?.value;
  this.bookService.update(book,id).subscribe(() => {
    this.route.navigate(['/books'])
  })

}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  createForm: FormGroup | undefined;

  constructor(private bookService:BookService,
    private activated: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    private navigate: Router ) { }

  ngOnInit(): void {

    this.createForm = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })



}
submit(){
    const book = this.createForm?.value;
    this.bookService.creat(book).subscribe((res) => {

    })
    console.log(book);
    this.route.navigate(['/books'])
  }


}

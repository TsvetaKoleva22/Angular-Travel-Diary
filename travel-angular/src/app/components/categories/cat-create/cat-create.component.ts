import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-cat-create',
  templateUrl: './cat-create.component.html',
  styleUrls: ['./cat-create.component.css']
})
export class CatCreateComponent implements OnInit {
  @ViewChild('createCatForm') createCatForm: NgForm;
  
  constructor(
    private catService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createCatFunc(){
    let body = this.createCatForm.value;
    this.catService
      .createCatS(body)
      .subscribe((data) => {
        // console.log(data);
        if(data['success']){
          this.createCatForm.reset();
          this.router.navigate([ '/category/all' ]);
        }
      });

  }

}

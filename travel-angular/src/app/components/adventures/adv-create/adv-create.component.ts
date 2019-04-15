import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AdventuresService } from 'src/app/core/services/adventures.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CategoryI } from 'src/app/core/models/cat.interface';

@Component({
  selector: 'app-adv-create',
  templateUrl: './adv-create.component.html',
  styleUrls: ['./adv-create.component.css']
})
export class AdvCreateComponent implements OnInit {
  @ViewChild('createAdvForm') createAdvForm: NgForm;
  $categoriesArr: Observable<CategoryI[]>;

  constructor(
    private advService: AdventuresService,
    private catService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(){
    this.$categoriesArr = this.catService.getAllCatS();
  }

  createAdvFunc() {
    let obj = this.createAdvForm.value;
    obj.author = localStorage.getItem('username');

    this.advService
      .createAdvS(obj)
      .subscribe((data) => {
        // console.log(data);
        if(data['success']){
          this.createAdvForm.reset();
          this.router.navigate([ '/' ]);
        }
      });
  }

}

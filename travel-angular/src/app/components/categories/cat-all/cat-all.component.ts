import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoryI } from 'src/app/core/models/cat.interface';
import { CategoriesService } from 'src/app/core/services/categories.service';


@Component({
  selector: 'app-cat-all',
  templateUrl: './cat-all.component.html',
  styleUrls: ['./cat-all.component.css']
})
export class CatAllComponent implements OnInit {
  $categoriesArr: Observable<CategoryI[]>;

  constructor(
    private catService: CategoriesService
  ) { }

  ngOnInit() {
    this.$categoriesArr = this.catService.getAllCatS(); 
  }

}

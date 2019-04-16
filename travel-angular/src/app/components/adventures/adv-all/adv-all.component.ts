import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CategoryI } from 'src/app/core/models/cat.interface';
import { AdventureI } from 'src/app/core/models/adv.interface';
import { AdventuresService } from 'src/app/core/services/adventures.service';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-adv-all',
  templateUrl: './adv-all.component.html',
  styleUrls: ['./adv-all.component.css']
})
export class AdvAllComponent implements OnInit {
  @ViewChild('searchForm') searchForm: NgForm;
  $categoriesArr: Observable<CategoryI[]>;
  $advToShow: Observable<AdventureI[]>;

  constructor(
    private advService: AdventuresService,
    private catService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.$categoriesArr = this.catService.getAllCatS();
    this.$advToShow = this.advService.getAllAdvS(); 
  }

  searchFunc(){
    let catid = this.searchForm.value['category'];
    this.router.navigateByUrl(`/adventure/found/${catid}`);
    this.searchForm.reset();
  }

}

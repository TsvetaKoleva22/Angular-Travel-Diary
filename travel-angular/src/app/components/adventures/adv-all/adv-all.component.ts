import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AdventuresService } from 'src/app/core/services/adventures.service';
import { AdventureI } from 'src/app/core/models/adv.interface';

@Component({
  selector: 'app-adv-all',
  templateUrl: './adv-all.component.html',
  styleUrls: ['./adv-all.component.css']
})
export class AdvAllComponent implements OnInit {
  $advToShow: Observable<AdventureI[]>;

  constructor(
    private advService: AdventuresService
  ) { }

  ngOnInit() {
    this.$advToShow = this.advService.getAllAdvS(); 
  }

}

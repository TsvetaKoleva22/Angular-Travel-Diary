import { Component, OnInit, Input } from '@angular/core';
import { AdventureI } from 'src/app/core/models/adv.interface';

@Component({
  selector: 'app-single-adv',
  templateUrl: './single-adv.component.html',
  styleUrls: ['./single-adv.component.css']
})
export class SingleAdvComponent implements OnInit {
  @Input() adv: AdventureI;
  constructor() { }

  ngOnInit() {
  }

}

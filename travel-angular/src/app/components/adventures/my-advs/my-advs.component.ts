import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AdventureI } from 'src/app/core/models/adv.interface';
import { AdventuresService } from 'src/app/core/services/adventures.service';

@Component({
  selector: 'app-my-advs',
  templateUrl: './my-advs.component.html',
  styleUrls: ['./my-advs.component.css']
})
export class MyAdvsComponent implements OnInit, OnDestroy {
  advToShow: AdventureI[];
  hasAdv = false;
  advSub: Subscription;

  constructor(
    private advService: AdventuresService
  ) { }

  ngOnInit() {
    this.advSub = this.advService.getAllAdvS()
      .subscribe((data) => {
        // console.log(data);
        this.advToShow = data.filter(adv => adv.author === localStorage.getItem('username'));
        if(this.advToShow.length > 0){
          this.hasAdv = true;
        }
      })
  }

  ngOnDestroy() {
    this.advSub.unsubscribe();
  }

}

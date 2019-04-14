import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import { AdventuresService } from 'src/app/core/services/adventures.service';
import { AdventureI } from 'src/app/core/models/adv.interface';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.css']
})
export class MostRecentComponent implements OnInit, DoCheck, OnDestroy {
  isAdmin: boolean;
  advToShow: AdventureI[];
  advSub: Subscription;

  constructor(
    private authService: AuthService,
    private advService: AdventuresService
  ) { }

  ngOnInit() {
    this.advSub = this.advService.getAllAdvS()
      .subscribe((data) => {
        // console.log(data);
        if (data.length > 3) {
          let maxLength = data.length - 3;
          this.advToShow = data.slice(maxLength);
        } else{
          this.advToShow = data;
        }
      })
  }

  ngDoCheck() {
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnDestroy(){
    this.advSub.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdventureI } from 'src/app/core/models/adv.interface';
import { Subscription } from 'rxjs';
import { AdventuresService } from 'src/app/core/services/adventures.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryI } from 'src/app/core/models/cat.interface';

@Component({
  selector: 'app-found-adv',
  templateUrl: './found-adv.component.html',
  styleUrls: ['./found-adv.component.css']
})
export class FoundAdvComponent implements OnInit, OnDestroy {
  foundAdvs: AdventureI[];
  hasAdv = false;
  advSub: Subscription;
  currCat: CategoryI;

  constructor(
    private advService: AdventuresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currCat = this.route.snapshot.data['singlecatResolver'];

    this.advSub = this.advService.getAllAdvS()
      .subscribe((data) => {
        this.route.params.subscribe(paramsObj => {
          let catid = paramsObj.catid;
          this.foundAdvs = data.filter(adv => adv.category.toString() === catid.toString());
          if (this.foundAdvs.length > 0) {
            this.hasAdv = true;
          }
        })
      })
  }

  ngOnDestroy() {
    this.advSub.unsubscribe();
  }

}

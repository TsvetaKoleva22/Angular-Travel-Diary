import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AdventuresService } from 'src/app/core/services/adventures.service';
import { AdventureI } from 'src/app/core/models/adv.interface';

@Component({
  selector: 'app-adv-delete',
  templateUrl: './adv-delete.component.html',
  styleUrls: ['./adv-delete.component.css']
})
export class AdvDeleteComponent implements OnInit {
  @ViewChild('deleteAdvForm') deleteAdvForm: NgForm;

  adv: AdventureI;

  constructor(
    private advService: AdventuresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.adv = this.route.snapshot.data['detailsResolver'];
  }

  deleteAdvFunc(id) {
    this.advService.delAdvS(id)
    .subscribe((data) => {
      // console.log(data);
      if(data['success']){
        this.deleteAdvForm.reset();
        this.router.navigate([ '/' ]);
      }
    });
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AdventuresService } from 'src/app/core/services/adventures.service';
import { AdventureI } from 'src/app/core/models/adv.interface';

@Component({
  selector: 'app-adv-edit',
  templateUrl: './adv-edit.component.html',
  styleUrls: ['./adv-edit.component.css']
})
export class AdvEditComponent implements OnInit {
  @ViewChild('editAdvForm') editAdvForm: NgForm;

  adv: AdventureI;

  constructor(
    private advService: AdventuresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.adv = this.route.snapshot.data['detailsResolver'];
  }

  editAdvFunc() {
    const body = this.editAdvForm.value;

    this.advService.editAdvS(this.adv['_id'], body)
      .subscribe((data) => {
        console.log(data);
        if (data['success']) {
          this.editAdvForm.reset();
          this.router.navigate(['/adventure/myposts']);
        }
      })
  }

}

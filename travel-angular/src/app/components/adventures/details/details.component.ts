import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdventureI } from 'src/app/core/models/adv.interface';
import { AdventuresService } from 'src/app/core/services/adventures.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currAdv: AdventureI;
  currLikes;
  isAuthor: boolean;
  isAdmin: boolean;
  isLoggedIn: boolean;

  constructor(
    private advService: AdventuresService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currAdv = this.route.snapshot.data['detailsResolver'];
    this.currLikes = this.currAdv.likes; 
    
    this.isAdmin = this.authService.isAdmin();
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isAuthor = this.currAdv.author === localStorage.getItem('username');
  }

  likeFunc(id, likes) {
    let newLikes = Number(likes) + 1;
    let obj = {
      likes: newLikes
    }
    this.advService.likeAdvS(id, obj)
      .subscribe(data => {
        // console.log(data);
        this.currLikes = newLikes;
      });
  }
}

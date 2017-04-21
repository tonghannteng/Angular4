import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private subscription: Subscription;
  id = 0;
  std = {};

  constructor(private activatedRoute: ActivatedRoute, private db: DbService) {

    this.subscription = activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.id = param['id'];
        this.std = db.getData()[this.id];
      }
    );
    this.id = activatedRoute.snapshot.params['id'];
    this.std = db.getData()[this.id - 1];

  }

  ngOnInit() {
  }

}

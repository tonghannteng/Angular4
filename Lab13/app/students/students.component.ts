import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  data = [];

  constructor(private db: DbService) {
    this.data = db.getData();
  }

  ngOnInit() {
  }

}

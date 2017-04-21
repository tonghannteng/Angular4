import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyhttpService} from './myhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 14';
  myForm: FormGroup;

  constructor(private myhttp: MyhttpService, private formbuilder: FormBuilder) {
    this.myForm = formbuilder.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'post': ['', [Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onGetData() {
    this.myhttp.getUser().subscribe(
      response => {

        this.myForm.value.name = response.json().name;
        this.myForm.value.email = response.json().email;

      },
      error => {
        console.log(error);
      },
      () => {
        console.log('succeed');
      }
    );
    this.myhttp.getPosts().subscribe(
      response => {
        this.myForm.value.post = response.json()[0].body;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('succeed');
      }
    );
  }


  onSubmit() {
    console.log(this.myForm.value);
  }
}



import {Injectable} from '@angular/core';

@Injectable()
export class DbService {

  constructor() {
  }

  getData() {
    return [
      {id: 1, name: 'Asaad Saad', email: 'asaad@mum.edu'},
      {id: 2, name: 'Tonghann', email: 'tteng@mum.edu'}
    ];
  }
}

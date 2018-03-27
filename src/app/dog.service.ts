import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {

  uri = 'http://localhost:3000/dogs/';

  constructor(private http: HttpClient) {}

  addDog(name, age, race) {
    const obj = {
      name: name,
      age: age,
      race: race,
    };
    this
      .http
      .post(this.uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getDog(id?) {
    const uriId: string = id || '';
    return this
      .http
      .get(this.uri + uriId)
      .map(res => {
        return res;
      });
  }

  updateDog(name, age, race, id) {
    const obj = {
      name: name,
      age: age,
      race: race,
    };
    this
      .http
      .put(this.uri + id, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteDog(id) {
    return this
      .http
      .delete(this.uri + id)
      .map(res => {
        return res;
      });
  }
}

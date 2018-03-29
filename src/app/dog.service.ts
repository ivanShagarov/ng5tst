import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {

  uri = 'http://localhost:3000/dogs/';

  constructor(private http: HttpClient) {}

  getFormObj() {
    return {
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z]{5,20}')]
      )],
      age: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(30)])],
      race: ['', Validators.required],
    };
  }

  addDog(name, age, race) {
    const obj = {
      name: name,
      age: age,
      race: race,
    };
    return this
      .http
      .post(this.uri, obj)
      .map(res => {
        return res;
      });
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
    return this
      .http
      .put(this.uri + id, obj)
      .map(res => {
        return res;
      });
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

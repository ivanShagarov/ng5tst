import { DogService } from './../../dog.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dog } from '../../Dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: any;

  constructor(private http: HttpClient, private service: DogService) {}

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.service.getDog().subscribe(res => {
      this.dogs = res;
    });
  }

  deleteDog(id) {
    this.service.deleteDog(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}

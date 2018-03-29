import { DogService } from './../../dog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private http: HttpClient, private service: DogService) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.getDogs();
    });
  }

  deleteDog(id) {
    this.service.deleteDog(id).subscribe(res => {
      this.getDogs();
    });
  }

  getDogs() {
    this.service.getDog().subscribe(res => {
      this.dogs = res;
    });
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DogService } from '../../dog.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Dog';
  angForm: FormGroup;
  constructor(private dogService: DogService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[a-z]') ],
      age: ['', Validators.required, Validators.min(0), Validators.max(30) ],
      race: ['', Validators.required ],
   });
  }
  addDog(name, age, race) {
      this.dogService.addDog(name, age, race);
      this.router.navigate(['dogs']);
  }
  ngOnInit() {
  }
}

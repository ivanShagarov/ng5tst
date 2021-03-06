import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogService } from './../../dog.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  dog: any;
  angForm: FormGroup;
  title = 'Edit Dog';

  constructor(private route: ActivatedRoute, private router: Router, private service: DogService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group(this.service.getFormObj());
  }

  updateDog(name, age, race) {
    this.route.params.subscribe(params => {
      this.service.updateDog(name, age, race, params['id']).subscribe(res => {
        this.router.navigate(['dogs']);
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dog = this.service.getDog(params['id']).subscribe(res => {
        this.dog = res;
      });
    });
  }
}

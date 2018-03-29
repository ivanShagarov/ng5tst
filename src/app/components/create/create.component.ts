import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DogService } from '../../dog.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  title = 'Add Dog';
  angForm: FormGroup;

  constructor(private service: DogService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group(this.service.getFormObj());
  }

  addDog(name, age, race) {
    this.service.addDog(name, age, race).subscribe(res => {
      this.router.navigate(['dogs']);
    });
  }
}

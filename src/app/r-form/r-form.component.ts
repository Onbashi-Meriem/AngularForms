import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.scss'],
})
export class RFormComponent implements OnInit {
  addForm: FormGroup;
  user: { email: string; password: string; check: boolean };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createAddForm();
  }
  createAddForm() {
    this.addForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      check: [false],
    });
    // this.addForm = new FormGroup({
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   check: new FormControl(false),
    // });
  }

  updateAddForm(){
    this.addForm.controls['email'].setValue('meryemonbasi5@gmail.com');
  }

  resetForm(){
    this.addForm.reset();
  }
  onSubmit() {
    if (this.addForm.valid) {
      this.user = this.addForm.value;
      this.addForm.reset();
    }

    console.log(this.user);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm) {
    if(form.valid){
      console.log(form);
    }
    else{
      alert('form da eksik bilgiler var')
    } 
  }
  onClick(){
    this.router.navigate(['/rform']);
    console.log('running')
  }

}

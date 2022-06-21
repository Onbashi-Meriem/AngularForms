import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularForms';
  

  onSubmit(form:NgForm) {
    if(form.valid){
      console.log(form);
    }
    else{
      alert('form da eksik bilgiler var')
    }
    
  }
}

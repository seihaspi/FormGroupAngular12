import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'validation';
  registerForm!: FormGroup;
  ngOnInit(){
    this.registerForm = new FormGroup(
      {
        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
      }
    );
  }

  onSubmit(form:FormGroup){
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    console.log(form.value.email);
    console.log(form.value.password);
  }
}

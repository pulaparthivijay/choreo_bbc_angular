import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PureAbility } from '@casl/ability';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  public able_to!: PureAbility;

  constructor( private fb:FormBuilder){
    
   
  }

  loginDetails = this.fb.group({
    userId:[null],
    password:[null]
  });

 
}

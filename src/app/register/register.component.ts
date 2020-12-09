import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterloginService } from '../registerlogin.service';
import { customValidation } from './customValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm : FormGroup;
  data;
  isAdded =false;
value;

  constructor(private fb:FormBuilder,private service:RegisterloginService,private router:Router) { }

  ngOnInit() {

    this.regForm = this.fb.group({

      username:this.fb.control('',[Validators.required]),
      emailid: this.fb.control('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:this.fb.control('',[Validators.required]),
      cpassword:this.fb.control('',[Validators.required]),
               
  
     },{validators:customValidation})
  }

  get emailid() {
    return this.regForm.get('emailid');
} 
onSubmit(){

  this.data = this.regForm.value;
  console.log(this.data);
  
   this.value = this.service.addUser(this.data).subscribe(data=>{
  
  //  alert('Product Added successfully');
        this.isAdded =true;
         this.regForm.reset();
      // this.router.navigate(['login']);
      setInterval(()=>{this.router.navigate(['login']);
    }, 2000);
  })  

 

}


}

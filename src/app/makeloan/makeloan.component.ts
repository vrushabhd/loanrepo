import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-makeloan',
  templateUrl: './makeloan.component.html',
  styleUrls: ['./makeloan.component.css']
})
export class MakeloanComponent implements OnInit {
  productForm : FormGroup;
  data;
  isAdded =false;
  constructor(private fb:FormBuilder,private service:RegisterloginService,private router:Router) {

  }
   

  ngOnInit() {

    this.productForm = this.fb.group({

      customername:this.fb.control('',[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(20)]),
      phonenumber:this.fb.control('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      emailid: this.fb.control('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      gender:this.fb.control('',[Validators.required]),
      dateofbirth:this.fb.control('',[Validators.required]),
      occupation:this.fb.control('',[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(30)]),
      annualincome:this.fb.control('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      address:this.fb.control('',[Validators.required,Validators.minLength(4)]),
      assurername:this.fb.control('',[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(20)]),
      assurercontactnum:this.fb.control('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      assureraddress:this.fb.control('',[Validators.required,Validators.minLength(4)]),
      loantype:this.fb.control('',[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(20)]),
      loanamount:this.fb.control('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      formstatus :"Pending",  
      interviewdate:"Pending",
  
     })
   console.log(this.productForm);
  }

  onSubmit(){
    this.data = this.productForm.value;

    console.log(this.data);
  
    this.service.addCustomer(this.data).subscribe(data=>{
   
   //  alert('Product Added successfully');
         this.isAdded =true;
          this.productForm.reset();
       // this.router.navigate(['login']);
    //    setInterval(()=>{this.router.navigate(['home']);
    //  }, 2000);
   })  
 
  
 
 }

//  get emailid() {
//   return this.productForm.get('emailid');
// } 


get f(){
  return this.productForm.controls;
}

  }





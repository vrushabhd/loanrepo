import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-updateloan',
  templateUrl: './updateloan.component.html',
  styleUrls: ['./updateloan.component.css']
})
export class UpdateloanComponent implements OnInit {
  productForm : FormGroup;
  data;
  isAdded =false;
  productToUpdate;
  constructor(private fb:FormBuilder,private service:RegisterloginService,private activatedrouter:ActivatedRoute) {

  }
   

  ngOnInit() {
    this.activatedrouter.params.subscribe(idData => {
      this.service.getApplicantById(idData.id).subscribe(data => {
        console.log(data);
         this.productToUpdate = data;
        console.log(this.productToUpdate.applicant.appid);
        
    this.productForm = this.fb.group({
      appid:this.productToUpdate.applicant.appid,
      customername:this.fb.control(this.productToUpdate.applicant.customername,[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(20)]),
      phonenumber:this.fb.control(this.productToUpdate.applicant.phonenumber,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      emailid: this.fb.control(this.productToUpdate.applicant.emailid,[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      gender:this.fb.control(this.productToUpdate.applicant.gender,[Validators.required]),
      dateofbirth:this.fb.control(this.productToUpdate.applicant.dateofbirth,[Validators.required]),
      occupation:this.fb.control(this.productToUpdate.applicant.occupation,[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(30)]),
      annualincome:this.fb.control(this.productToUpdate.applicant.annualincome,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      address:this.fb.control(this.productToUpdate.applicant.address,[Validators.required,Validators.minLength(4)]),
      assurername:this.fb.control(this.productToUpdate.applicant.assurername,[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(20)]),
      assurercontactnum:this.fb.control(this.productToUpdate.applicant.assurercontactnum,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      assureraddress:this.fb.control(this.productToUpdate.applicant.assureraddress,[Validators.required,Validators.minLength(4)]),
      loantype:this.fb.control(this.productToUpdate.applicant.loantype,[Validators.required,Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$"),Validators.minLength(4),Validators.maxLength(20)]),
      loanamount:this.fb.control(this.productToUpdate.applicant.loanamount,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
     
  
     })
   console.log(this.productForm);

       

      });
    });



  }
  get f(){
    return this.productForm.controls;
  }
  
  onSubmit(){
    this.data = this.productForm.value;

    console.log(this.data);
  
    this.service.updateCustomer(this.data).subscribe(data=>{
   
   //  alert('Product Added successfully');
         this.isAdded =true;
          this.productForm.reset();
       // this.router.navigate(['login']);
    //    setInterval(()=>{this.router.navigate(['home']);
    //  }, 2000);
   })  
}

}

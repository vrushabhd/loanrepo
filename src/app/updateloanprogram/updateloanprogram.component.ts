import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterloginService } from '../registerlogin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateloanprogram',
  templateUrl: './updateloanprogram.component.html',
  styleUrls: ['./updateloanprogram.component.css']
})
export class UpdateloanprogramComponent implements OnInit {

  loanForm : FormGroup;
  data;
  isAdded =false;
  productToUpdate;
  constructor(private fb:FormBuilder,private service:RegisterloginService,private activatedrouter:ActivatedRoute) {
    this.activatedrouter.params.subscribe(idData => {
      this.service.getLoanById(idData.id).subscribe(data => {
            console.log(data);
         this.productToUpdate = data;
        console.log(this.productToUpdate.loanprogram.loanid+"hello");
        
    this.loanForm = this.fb.group({
      loanid:this.fb.control(this.productToUpdate.loanprogram.loanid),

      typeofloan:this.fb.control(this.productToUpdate.loanprogram.typeofloan,[Validators.required,Validators.minLength(4),Validators.maxLength(25)]),
      duration:this.fb.control(this.productToUpdate.loanprogram.duration,[Validators.required,Validators.pattern('^[0-9]{1,3}$')]),
      details:this.fb.control(this.productToUpdate.loanprogram.details,[Validators.required,Validators.pattern(/^-?([1-9]\d*)?$/)]),
      rateofinterest:this.fb.control(this.productToUpdate.loanprogram.rateofinterest,[Validators.required,Validators.pattern(/^(100|[1-9][0-9]?)$/)]),
  
  
     })
   console.log(this.loanForm);

       

      });
    });

    
  }
   

  ngOnInit() {
   

  }




  

  get f(){
    return this.loanForm.controls;
  }



onSubmit(){
 
  this.data = this.loanForm.value;
  this.service.updateprogram(this.data).subscribe(data=>{
    console.log(this.data);

    //  alert('Product Added successfully');
           this.isAdded =true;
           this.loanForm.reset();


  })

}

}

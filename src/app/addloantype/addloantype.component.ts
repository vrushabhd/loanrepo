import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-addloantype',
  templateUrl: './addloantype.component.html',
  styleUrls: ['./addloantype.component.css']
})
export class AddloantypeComponent implements OnInit {

  loanForm : FormGroup;
  data;
  isAdded =false;



  constructor(private fb:FormBuilder,private service:RegisterloginService) { }

  ngOnInit() {


    this.loanForm = this.fb.group({

    typeofloan:this.fb.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]),
    duration:this.fb.control('',[Validators.required,Validators.pattern('^[0-9]{1,3}$')]),
    details:this.fb.control('',[Validators.required,Validators.pattern(/^-?([1-9]\d*)?$/)]),
    rateofinterest:this.fb.control('',[Validators.required,Validators.pattern(/^(100|[1-9][0-9]?)$/)]),

  


  })

}

onSubmit(){

  this.data = this.loanForm.value;
  this.service.addloanprogram(this.data).subscribe(data=>{
    console.log(this.data);

    //  alert('Product Added successfully');
           this.isAdded =true;
           this.loanForm.reset();


  })




}
get f(){
  return this.loanForm.controls;
}

}
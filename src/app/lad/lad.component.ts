import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-lad',
  templateUrl: './lad.component.html',
  styleUrls: ['./lad.component.css']
})
export class LadComponent implements OnInit {
myForm:FormGroup;
lad;
isdisable = false;
accepted='Accepted';
reject ='Rejected';
interval;
item;
loanapplicants;
productToUpdate;
applicant;
isAdded =false;
isrejected =false;
someid;

  constructor(private service:RegisterloginService,private router:Router,private activatedRouter:ActivatedRoute,private fb:FormBuilder) { 













    

  }

  ngOnInit() {



   
    this.refreshData();
     setInterval(() => { 
        this.refreshData(); 
    }, 18000);
    
console.log(this.loanapplicants);





  }
  isLad(){
    this.item = JSON.parse(localStorage.getItem('userDetails'));
    if(this.item.username =="himesh" && this.item.password =="123456") {
                this.lad =true;
               return true;
 
 
 
    }
     
    this.lad =false;
    return false;
 
 
   
 
 }
 refreshData(){


  this.service.getAllApplicants().subscribe(data=>{

    this.loanapplicants =data;
   console.log(this.loanapplicants);
   
    });

 }


accept(id){

  // this.service.getApplicantById(id).subscribe(data=>{

console.log("Request accepeted succesfully");
     this.isAdded =true;
  //   });
 



 this.service.updateFormStatus(id).subscribe(data =>{


        console.log("loanapplicants"+data);



 })
}





 decline(id){



  // this.service.deleteuserById(id).subscribe(data=>{

  //   this.applicant =data;
  //  console.log(this.applicant);

  //   })

  this.service.updateFormStatusR(id).subscribe(data =>{
            this.isrejected =true;

    console.log("loanapplicants"+data);



})



 }

// onSet(){


//  this.service.setdate(this.myForm.value).subscribe(data =>{

// console.log("loanapplicants"+data);

 



// })



// }






info(id){


this.someid =id;



}



}


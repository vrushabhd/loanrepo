import { Component, OnInit } from '@angular/core';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-formstatus',
  templateUrl: './formstatus.component.html',
  styleUrls: ['./formstatus.component.css']
})
export class FormstatusComponent implements OnInit {
  date;
  forminfo;
  searchstatus:string;

  constructor(private service:RegisterloginService) { 







    
  }

  ngOnInit() {

    this.service.getAllApplicants().subscribe(data=>{

      this.forminfo =data;
     console.log(this.forminfo);
     
      });

    //  this.date = randomTime(new Date("10-10-2015 10:30"), new Date("12-10-2015 02:10"));
       

  }



  // somemethod(id){

  //   this.service.getApplicantById(id).subscribe(data=>{

  //     this.forminfo =data;
  //    console.log(this.forminfo);
  
  //     });








  // }

}


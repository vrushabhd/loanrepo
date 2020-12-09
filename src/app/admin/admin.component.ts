import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
applicants;
item;
admin;
interval;
  constructor(private service:RegisterloginService,private router:Router) { }

  ngOnInit() {
    
      
    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 1000);
      
      this.item = JSON.parse(localStorage.getItem('userDetails'));


  }

isAdmin(){
   this.item = JSON.parse(localStorage.getItem('userDetails'));
   if(this.item.username =="vrushabh" && this.item.password =="123456") {
               this.admin =true;
              return true;



   }
    
   this.admin =false;
   return false;


  

}
onDelete(id){


  this.service.deleteuserById(id).subscribe(data=>{

    this.applicants =data;
   console.log(this.applicants);

    });
    


}





refreshData(){
  this.service.getAllApplicants().subscribe(data=>{

    this.applicants =data;
   console.log(this.applicants);
   
    });
}

onUpdate(id){


 this.router.navigateByUrl(`updateloan/${id}`);


}





}

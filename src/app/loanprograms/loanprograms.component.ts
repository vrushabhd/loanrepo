import { Router } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { RegisterloginService } from '../registerlogin.service';
import  jspdf from 'jspdf';



import html2canvas from 'html2canvas';



@Component({
  selector: 'app-loanprograms',
  templateUrl: './loanprograms.component.html',
  styleUrls: ['./loanprograms.component.css']
})
export class LoanprogramsComponent implements OnInit {
loanprograms;
search:string;



  constructor(private service:RegisterloginService,private router:Router) {
    //  this.download();
  
   
   }

  ngOnInit() {

    this.refreshData();
    setInterval(() => { 
      this.refreshData(); 
  }, 1000);
    
  }



  refreshData(){


    this.service.getloanprograms().subscribe(data=>{
  
      this.loanprograms =data;
     console.log(this.loanprograms);
     
      });
  
   }


   download(){

    var element = document.getElementById('table')
    html2canvas(element).then((canvas)=>{
    var imgHeight = canvas.height *208 /canvas.width;
      var doc = new jspdf();
    console.log(canvas);
    var imgData  = canvas.toDataURL("image/png");
    doc.addImage(imgData,0,40,208,imgHeight);

  doc.text("Loan Programs",85,20)
      doc.save("loanprograms.pdf")

  
   
  
    })
  
  
  
     }
  
     onDelete(id){


      this.service.deleteprogram(id).subscribe(data=>{
    
        this.loanprograms =data;
       console.log(this.loanprograms);
    
        });
        
    
    
    }
    onUpdate(id){

   this.router.navigateByUrl(`updateloanprogram/${id}`);


    }

}

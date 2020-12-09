import { RegisterloginService } from './../registerlogin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm : FormGroup;
   user= new User();
   valid: boolean;
   isSubmited: boolean;
   msg='';

  constructor(private fb :FormBuilder,private service:RegisterloginService,private router:Router) { }

  ngOnInit() {
    this.logForm = this.fb.group({


      password:this.fb.control('',[Validators.required]),
      username:this.fb.control('',[Validators.required]),
               
  
     })
  }
 
  onSubmit(){
//admin
         if(this.logForm.value.username ==="vrushabh" && this.logForm.value.password === "123456")
         {

          this.user.password = this.logForm.value.password;
          this.user.username = this.logForm.value.username;

          this.service.loginUser(this.user).subscribe(
            data=>{ console.log("response received")
            this.valid = true;
           this.router.navigate(['admin']);
           localStorage.setItem('userDetails', JSON.stringify(this.user));
      
            }
            ,
            error=>{console.log("exception occured")
               this.msg ="Credentials are Invalid Enter correct username and password";
          }
          )

         }
         //lad(loan approval department)
         else if(this.logForm.value.username ==="himesh" && this.logForm.value.password === "123456"){

          this.user.password = this.logForm.value.password;
          this.user.username = this.logForm.value.username;
       this.service.loginUser(this.user).subscribe(
         data=>{ console.log("response received")
         this.valid = true;
        this.router.navigate(['lad']);
        localStorage.setItem('userDetails', JSON.stringify(this.user));
   
         }
         ,
         error=>{console.log("exception occured")
            this.msg ="Credentials are Invalid Enter correct username and password";
       }
       )


         }
      else{
//normal user

        this.user.password = this.logForm.value.password;
        this.user.username = this.logForm.value.username;
     this.service.loginUser(this.user).subscribe(
       data=>{ console.log("response received")
       this.valid = true;
      this.router.navigate(['makeloan']);
      localStorage.setItem('userDetails', JSON.stringify(this.user));
 
       }
       ,
       error=>{console.log("exception occured")
          this.msg ="Credentials are Invalid Enter correct username and password";
     }
     )







      }


  }

}

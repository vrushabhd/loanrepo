import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
item;
  constructor(private router:Router) { }

  ngOnInit() {

    // this.item = JSON.parse(localStorage.getItem('userDetails'));


  }
  isLogedin() {
    return localStorage.getItem('userDetails') ? true : false;
    console.log(localStorage.getItem('userDetails'));
    
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }

  adminCheck(){


    this.item = JSON.parse(localStorage.getItem('userDetails'));
    if(this.item.username =="vrushabh" && this.item.password =="123456") {
               return true;
 
 
 
    }
     
    return false;




  }
  LadCheck(){
    this.item = JSON.parse(localStorage.getItem('userDetails'));
    if(this.item.username =="himesh" && this.item.password =="123456") {
               return true;
 
 
 
    }
     
    return false;
 
}

loginpage(){

  this.router.navigate(["login"]);



}

}
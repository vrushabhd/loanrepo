import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 

 


  }

  ngOnInit() {
  }



  isLogedin() {
    return localStorage.getItem('userDetails') ? false : true;
    console.log(localStorage.getItem('userDetails'));
    
  }
loginpage(){

  this.router.navigate(["login"]);



}
}

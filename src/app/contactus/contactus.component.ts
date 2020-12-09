import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterloginService } from '../registerlogin.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  FormData : FormGroup;
  data;
  constructor(private builder: FormBuilder,private service:RegisterloginService) { }

  ngOnInit() {

    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      message: new FormControl('', [Validators.required])
  })
  
}



get f(){
  return this.FormData.controls;
}

onSubmit(){

  this.data = this.FormData.value;

  this.service.PostMessage(this.data).subscribe(response=>{


  location.href ="https://mailthis.to/confirm";
  console.log(response);


  })



}


}
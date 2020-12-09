import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegisterloginService {

  constructor(private http:HttpClient) { }
private api ='https://mailthis.to/Vrushabh'

  addUser(data){


    return  this.http.post('http://localhost:8080/registeruser',data);
  
  
  
   }

   loginUser(user:User){


    return  this.http.post('http://localhost:8080/loginuser',user);
  
  
  
   }

   addCustomer(data){

    return this.http.post('http://localhost:8080/addcustomer',data);

   }

   getAllApplicants(){

    return this.http.get('http://localhost:8080/applicants');
  
  
    }

deleteuserById(id){


  return this.http.delete(`http://localhost:8080/delete/${id}`,{responseType:'text'});



}
getApplicantById(id) {
  return this.http.get(`http://localhost:8080/applicantById/${id}`);
}


updateFormStatus(id){

return this.http.put(`http://localhost:8080/applicantByStatus/${id}`,null);


}


updateFormStatusR(id){

  return this.http.put(`http://localhost:8080/applicantByStatusr/${id}`,null);
  
  
  }



addloanprogram(data){

  return this.http.post('http://localhost:8080/addloanprogram',data);

 }

getloanprograms(){

  return this.http.get('http://localhost:8080/getloanprograms');




}
  //  getUserByEmailId(id) {
  //   return this.http.get(`http://localhost:8080//productById/${id}`);
  // }

  setdate(data){

    return this.http.put(`http://localhost:8080/setdate`,data);
    
    
    }




PostMessage(input:any){


return this.http.post(this.api,input,{responseType:'text'});




}


updateCustomer(data){

  return this.http.put(`http://localhost:8080/update/`,data);
  
  
  }

  deleteprogram(id){


    return this.http.delete(`http://localhost:8080/deleteprogram/${id}`,{responseType:'text'});
  
  
  
  }


  getLoanById(id) {
    return this.http.get(`http://localhost:8080/getloanById/${id}`);
  }
  updateprogram(data){

    return this.http.put(`http://localhost:8080/updateprogram/`,data);



  }
}





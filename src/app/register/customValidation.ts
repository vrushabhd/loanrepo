import { FormGroup } from "@angular/forms";

 export function customValidation(group:FormGroup){

 let   pass =   group.value.password;
 let  cpass =  group.value.cpassword;

if( pass === cpass){

   return   null;

}else
{

  return {'custom':true}

}


}
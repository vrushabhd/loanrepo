import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statuspipe'
})
export class StatuspipePipe implements PipeTransform {

  transform(formnames,searchstatus:string): any {

    if(searchstatus){

      return formnames.filter(customer=>{
            //   console.log(product.customername);
            //  console.log(product);
         return customer.customername.toLowerCase().includes(searchstatus.toLowerCase());
      });

    }else{


    return formnames;


}
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(loanapplicants,search:string): any {

    if(search){

      return loanapplicants.filter(product=>{
             console.log(product.typeofloan);
             console.log(product);
         return product.typeofloan.toLowerCase().includes(search.toLowerCase());
      });

    }else{


    return loanapplicants;


    }




}

}

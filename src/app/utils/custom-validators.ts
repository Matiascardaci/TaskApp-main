import { AbstractControl } from "@angular/forms";


export class CustomValidators{

static mathValues(toCompare: AbstractControl){

return(control: AbstractControl) => {

    if(control.value !== toCompare.value) return { noMatch: true}
    return null
     }
   }
 }
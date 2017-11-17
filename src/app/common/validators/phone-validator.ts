import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[isPhoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true}]
})
export class PhoneNumberValidatorDirective implements Validator {

  public validate(control: FormControl): ValidationErrors {
    console.log('Howdy');
    let validPhoneNumberRegExp = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
    let valid = validPhoneNumberRegExp.test(control.value);
    return control.value < 1 || valid  ? null : {'isPhoneNumber': true};
  }

}
import { Component, Input } from '@angular/core';
import { Customer } from './model/customer';
import { NG_VALIDATORS} from '@angular/forms';
import { PhoneNumberValidatorDirective } from '../../common/validators/phone-validator';
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'eoc-body',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.scss', '../../styling/modal.scss'],
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true}]
})

export class FunnelComponent {
  customer: Customer;

  constructor(private modalService: ModalService) {
    this.customer = new Customer(0, '', '', '', '','','','','');
  }

  onSubmit() {
    console.log('Customer is gesubmit');
  }

  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
      this.modalService.close(id);
  }
}
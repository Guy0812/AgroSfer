import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GeneralserviceService } from '../../services/generalservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
  ];

  checkOptionsTwo = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear', checked: true },
  ];


  validateForm!: UntypedFormGroup;

  constructor(public generalservice:GeneralserviceService) {}

  
  ngOnInit(): void {
    
  }
  

}

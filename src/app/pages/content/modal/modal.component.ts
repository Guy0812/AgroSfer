import { Component, OnInit } from '@angular/core';
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
  constructor(public generalservice:GeneralserviceService) {}

  log(value: object[]): void {
    console.log(value);
  }

  ngOnInit(): void {
  }
  
  

}

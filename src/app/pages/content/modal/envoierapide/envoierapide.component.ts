import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-envoierapide',
  templateUrl: './envoierapide.component.html',
  styleUrls: ['./envoierapide.component.scss']
})
export class EnvoierapideComponent implements OnInit {
  // validateForm!: UntypedFormGroup;

  // submitForm(): void {
  //   console.log('submit', this.validateForm.value);
  // }

  constructor() {}

  ngOnInit(): void {
    // this.validateForm = this.fb.group({
    //   userName: [null, [Validators.required]],
    //   password: [null, [Validators.required]],
    //   remember: [true]
    // });
  }

}

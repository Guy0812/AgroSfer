import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  size: 'large' | 'small' | 'default' = 'default';


  isVisible = false;
  isConfirmLoading = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }



  handleCancel(): void {
    this.isVisible = false;
  }
  

  ngOnInit(): void {
  }

}

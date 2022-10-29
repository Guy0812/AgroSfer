import { Component, OnInit } from '@angular/core';
import { GeneralserviceService } from '../services/generalservice.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(public generalservice:GeneralserviceService) {}

  ngOnInit(): void {
  }

}

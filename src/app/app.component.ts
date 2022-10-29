import { Component } from '@angular/core';
import { GeneralserviceService } from './pages/services/generalservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isCollapsed = true;
  constructor(public generalservice:GeneralserviceService) {}

 
}

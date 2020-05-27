import { Component } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi cartera de acciones';

  constructor(public router: Router, private route: ActivatedRoute){
  }
}

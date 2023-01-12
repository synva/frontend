import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header: string = environment.header;

  constructor() {}
}

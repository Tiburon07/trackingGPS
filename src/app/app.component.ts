import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trackingGPS';

  topFunction() {
    document.documentElement.scrollTop = 0
  }
}

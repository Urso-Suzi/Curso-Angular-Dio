import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretiva_projects';
  isALiveCard = true;

  trocarCard() {
    if(this.isALiveCard == true) {
      this.isALiveCard = false
    } else {this.isALiveCard = true}
  }

}

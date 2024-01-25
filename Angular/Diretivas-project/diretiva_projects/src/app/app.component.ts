import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diretiva_projects';
  isALiveCard = false;

  ngOnInit(){

  }

  trocarCard() {
    if(this.isALiveCard == true) {
      this.isALiveCard = false
    } else {this.isALiveCard = true}
  }



}

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'api-key',
      authDomain: 'project-id.firebaseapp.com',
      databaseURL: 'https://project-id.firebaseio.com',
      projectId: 'project-id',
    });
  }

  onNavigate( feature: string ) {
    this.loadedFeature = feature;
  }
}

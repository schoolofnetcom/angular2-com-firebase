import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyAnDUkWLAOANoDbghYEjCHLvSGwLZ6lrvo",
  authDomain: "voting-son-1c844.firebaseapp.com",
  databaseURL: "https://voting-son-1c844.firebaseio.com",
  storageBucket: "voting-son-1c844.appspot.com",
  messagingSenderId: "389585160087"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Github,
  method: AuthMethods.Popup
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

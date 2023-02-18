import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase/compat/app';
import { envirnoment } from './environments/envirnoment';
import 'firebase/compat/auth';


import { AppModule } from './app/app.module';

firebase.initializeApp(envirnoment.firebase);
let appInit = false;


firebase.auth().onAuthStateChanged(() => {
  if(!appInit) {
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  }

  appInit = true;

})


import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { appGlobals } from 'src/app/global/app.globals';

@Injectable({
  providedIn: 'root'
})

export class BuzzService {
  constructor(public fb: AngularFirestore) {
  }

  createBuzz(params) {
    return this.fb.collection(appGlobals.collections.buzz).add(params);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { appGlobals } from 'src/app/global/app.globals';

@Injectable({providedIn: 'root'})
export class DashboardService {
  constructor(public fs: AngularFirestore) {
  }

  getBuzz() {
    return this.fs.collection(appGlobals.collections.buzz).snapshotChanges();
  }
}

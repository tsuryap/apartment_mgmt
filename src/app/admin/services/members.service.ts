import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { appGlobals } from '../../../app/global/app.globals';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(public fs: AngularFirestore) { }

  createMember(params) {
   return this.fs.collection(appGlobals.collections.member).add(params);
  }

  getMembersFromFb() {
    return this.fs.collection(appGlobals.collections.member).snapshotChanges();
  }

  updateMember(params) {
    return this.fs.collection(appGlobals.collections.member).doc(params.id).set(params, {merge: true});
  }

  deleteMember(id) {
    return this.fs.collection(appGlobals.collections.member).doc(id).delete();
  }


}

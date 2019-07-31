import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appGlobals } from '../../global/app.globals';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-flat-member',
  templateUrl: './flat-member.component.html',
  styleUrls: ['./flat-member.component.scss']
})
export class FlatMemberComponent implements OnInit {
  memberGroup;
  memberData;
  constructor(public fb: FormBuilder, public fs: AngularFirestore) { }
  ngOnInit() {
    console.log(appGlobals);
    this.memberGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(appGlobals.validationsInfo.email)]],
      // tslint:disable-next-line: max-line-length
      mobile: ['',  [Validators.required, Validators.min(appGlobals.validationsInfo.mobile.min),Validators.max(appGlobals.validationsInfo.mobile.max)]],
      // tslint:disable-next-line: max-line-length
      flatNo:  ['',  [Validators.required, Validators.min(appGlobals.validationsInfo.flat.min), Validators.max(appGlobals.validationsInfo.flat.max)]]

    });

    this.getMembers();
  }

  createMember() {
    if (this.memberGroup.invalid) {
      this.memberGroup.markAllAsTouched();
      return false;
    }
    const memberData =  this.memberGroup.getRawValue();
    this.fs.collection('members').add(memberData).then(
      res => {
        console.log(res);
        this.getMembers();
      },
       err => {
        console.log(err);
      }
    );
  }

  getMembers() {
    this.fs.collection('members').snapshotChanges().subscribe(res => {
      this.memberData =  res;
      console.log(this.memberData);
    });
  }
}

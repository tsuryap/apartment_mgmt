import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appGlobals } from '../../global/app.globals';

@Component({
  selector: 'app-flat-member',
  templateUrl: './flat-member.component.html',
  styleUrls: ['./flat-member.component.scss']
})
export class FlatMemberComponent implements OnInit {
  memberGroup: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    console.log(appGlobals);
    this.memberGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(appGlobals.validationsInfo.email)]],
      // tslint:disable-next-line: max-line-length
      mobile: ['',  [Validators.required]],
      // tslint:disable-next-line: max-line-length
      flatNo:  ['',  [Validators.required]]

    });
  }

  createMember() {
    console.log(this.memberGroup.getRawValue());
  }

}

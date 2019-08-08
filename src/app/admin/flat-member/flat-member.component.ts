import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { appGlobals } from "../../global/app.globals";
import { AngularFirestore } from "angularfire2/firestore";
import { MembersService } from "../services/members.service";
import { LoaderService } from "src/app/shared/loader/loader.service";
import { ModalService } from "src/app/shared/services/modal.service";
import { app } from "firebase";
import { UserService } from 'src/app/shared/services/user.service';
import { Directive,  ElementRef } from '@angular/core';
@Component({
  selector: "app-flat-member",
  templateUrl: "./flat-member.component.html",
  styleUrls: ["./flat-member.component.scss"]
})
export class FlatMemberComponent implements OnInit {
  memberGroup;
  memberData;
  constructor(
    public fb: FormBuilder,
    public fs: AngularFirestore,
    public memberServ: MembersService,
    public loader: LoaderService,
    public modalService: ModalService,
    public userServ: UserService
  ) {}

  ngOnInit() {
    this.memberGroup = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(appGlobals.validationsInfo.email)
        ]
      ],
      // tslint:disable-next-line: max-line-length
      mobile: [
        '',
        [
          Validators.required,
          Validators.min(appGlobals.validationsInfo.mobile.min),
          Validators.max(appGlobals.validationsInfo.mobile.max)
        ]
      ],
      // tslint:disable-next-line: max-line-length
      flatNo: [
        '',
        [
          Validators.required,
          Validators.min(appGlobals.validationsInfo.flat.min),
          Validators.max(appGlobals.validationsInfo.flat.max)
        ]
      ]
    });

    // tslint:disable-next-line: align
    this.getMembers();
  }

  createOrUpdateMember() {
    if (this.memberGroup.invalid) {
      this.memberGroup.markAllAsTouched();
      return false;
    }

    const memberData = this.memberGroup.getRawValue();
    if (memberData.id) {
      this.updateMember(memberData);
    } else {
      this.createMember(memberData);
    }
  }

  createMember(memberData) {
    this.loader.showLoader();
    this.memberServ.createMember(memberData).then(
      res => {
        this.loader.hideLoader();
        this.getMembers();
        this.modalService.show({
          title: appGlobals.labelNames.success,
          msg: appGlobals.msg.create
        });
      },
      error => {
        this.loader.hideLoader();
      }
    );
  }

  updateMember(memberData) {
    this.loader.showLoader();
    this.memberServ.updateMember(memberData).then(res => {
      this.resetPage();
      this.loader.hideLoader();
      this.modalService.show({
        title: appGlobals.labelNames.success,
        msg: appGlobals.msg.update
      });
    });
  }

  getMembers() {
    this.loader.showLoader();
    this.memberServ.getMembersFromFb().subscribe(res => {
      this.memberData = res;
      this.loader.hideLoader();
    });
  }

  editMember(member) {
    const flatMemberObj = member.data();
    flatMemberObj.id = member.id;
    this.memberGroup.setValue(flatMemberObj);
  }

  deleteFlatMember(member) {
    this.memberServ.deleteMember(member.id).then(res => {
      this.resetPage();
      this.modalService.show({
        title: appGlobals.labelNames.success,
        msg: appGlobals.msg.delete
      });
    });
  }

  resetPage() {
    this.memberGroup.reset();
    this.getMembers();
  }
}







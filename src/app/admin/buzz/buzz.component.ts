import { Component, OnInit } from '@angular/core';
import { appGlobals } from '../../../app/global/app.globals';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuzzService } from '../services/buzz.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent implements OnInit {
  readonly appGlobals = appGlobals;
  buzzForm: FormGroup;
  constructor(
     public fb: FormBuilder,
     public buzzServ: BuzzService,
     public modalService: ModalService) { }

  ngOnInit() {
    this.buzzForm = this.fb.group({
      annoucement: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  sumbitAnnoucement() {
    this.modalService.show({
      title: 'Success',
      msg: 'Buzz Saved successfully'
    });
    // this.buzzServ.createBuzz(this.buzzForm.getRawValue()).then(
    //   res => {
    //     this.modalService.show();
    //   },
    //   error => {

    //   }
    // );
  }

}

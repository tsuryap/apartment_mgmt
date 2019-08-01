import { Component, OnInit } from '@angular/core';
import { appGlobals } from '../../../app/global/app.globals';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuzzService } from '../services/buzz.service';

@Component({
  selector: 'app-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent implements OnInit {
  readonly appGlobals = appGlobals;
  buzzForm: FormGroup;
  constructor(public fb: FormBuilder, public buzzServ: BuzzService) { }

  ngOnInit() {
    this.buzzForm = this.fb.group({
      annoucement: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  sumbitAnnoucement() {
    console.log(this.buzzForm.getRawValue());
    this.buzzServ.createBuzz(this.buzzForm.getRawValue()).then(
      res => {
          alert('Annoucement save successfully');
      },
      error => {

      }
    );
  }

}

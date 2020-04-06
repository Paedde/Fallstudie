import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Semester } from '../../models/semester-models';
import { KursAnlegenService } from '../../services/kurs-anlegen.service';

@Component({
  selector: 'kurs-anlegen1',
  templateUrl: './kurs-anlegen1.component.html',
  styleUrls: ['./kurs-anlegen1.component.css']
})


export class Kursanlegen1Component {

  formKurs: FormGroup;
  formVorlesungen: FormGroup;
  Kursname: string;
  Jahr: number;
  Semester: number;
  Studiengangsleiter: string;

  constructor(private fb: FormBuilder,
    public kursService: KursAnlegenService) {
      this.formKurs = this.fb.group({
        kursData: this.fb.array([
        ])
      })
  }
  addInput() {
    const vlStunden = this.formKurs.controls.kursData as FormArray;
    vlStunden.push(this.fb.group({
      Kursname: '',
      Jahr: '',
      Studiengangsleiter: ''
    }))
  }

  onSubmit(form: NgForm) {

    console.log(form);
    console.log(form.name)
    // console.log(form.controls['Kursname'].value);
    // //TODO: Daten aus dem Formular in den kursService schreiben
    // // let updateKursData = {
    // //   name: form.controls['formKurs'].controls['Kursname']value,
    // //   year: form.controls['Jahr'].value,
    // //   semester: [
    // //       { value: this.Semester, viewValue: this.Semester }
    // //   ]
    // //   }
    // //   debugger;
    // this.kursService.kurs.push(form.value);
    console.log(this.kursService)
  }

  removeInput(index) {
    this.formKurs.controls.kursData["controls"].splice(index, 1)
  }

}
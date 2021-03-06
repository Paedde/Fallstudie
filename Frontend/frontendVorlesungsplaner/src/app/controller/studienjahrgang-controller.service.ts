import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Studienjahrgang } from '@app/models/studienjahrgang-models';

@Injectable({
  providedIn: 'root'
})
export class StudienjahrgangController {
  private backendUrl = environment.apiUrl;
  public studienjahrListe: BehaviorSubject<Studienjahrgang[]>;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.studienjahrListe = new BehaviorSubject<Studienjahrgang[]>(null);
  }

  loadData() {

    const temp: Studienjahrgang[] = [
      new Studienjahrgang(2016),
      new Studienjahrgang(2017),
      new Studienjahrgang(2018),
      new Studienjahrgang(2019),
      new Studienjahrgang(2020),
      new Studienjahrgang(2021),
    ];

    this.studienjahrListe.next(temp);
  }

  addKurs(studienjahr: Studienjahrgang) {
    this.studienjahrListe.next(this.studienjahrListe.getValue().concat([studienjahr]));
  }

}

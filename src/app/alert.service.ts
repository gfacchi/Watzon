import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  alert: string;
  alertSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.alertSubject.subscribe(value => this.alert = value);
  }

  push(msg: string) {
    this.alertSubject.next(msg);
  }
}

import { Component } from '@angular/core';
import { AlertService } from '../alert.service';
import { OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  dismissible = true;

  public alert: string;

  constructor(public alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.alertSubject.subscribe(value => this.alert = value);
  }

  reset(): void {
    this.alert = '';
  }
}


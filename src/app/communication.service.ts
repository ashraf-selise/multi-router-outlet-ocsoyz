import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommunicationService {

  count$ = new BehaviorSubject(0);
  constructor() { }

  up() {
    this.count$.next(this.count$.value + 1);
  }

  down() {
    this.count$.next(this.count$.value - 1);
  }

}
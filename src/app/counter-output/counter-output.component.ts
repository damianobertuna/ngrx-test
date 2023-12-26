import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { countSelector, doubleSelector } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  double$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select(countSelector);
    this.double$ = store.select(doubleSelector);
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges {

  private static counter = 1;

  @Input()
  public value: string;

  constructor() {
    console.log('constructor odpaliłem się jako:', LifecycleComponent.counter, this.value);
    LifecycleComponent.counter++;
  }

  ngOnInit() {
    console.log('ngOnInit odpaliłem się jako:', LifecycleComponent.counter, this.value);
    LifecycleComponent.counter++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges odpaliłem się jako:', LifecycleComponent.counter, this.value);
    LifecycleComponent.counter++;
  }
}

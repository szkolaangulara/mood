import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bad-mood',
  templateUrl: './bad-mood.component.html',
  styleUrls: ['./bad-mood.component.scss']
})
export class BadMoodComponent {

  public finalMood: string;

  @Input()
  public mood: string;

  constructor() {
    this.finalMood = 'Jestem nieszczęśliwy bo nie mam humoru :( Mój aktualny humor to: ' + this.mood;

  }
}

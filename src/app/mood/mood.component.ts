import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {

  public finalMood: string;

  @Input()
  public mood: string;

  ngOnInit() {
    this.finalMood = `W końcu jestem ${this.mood} :)`;
  }
}

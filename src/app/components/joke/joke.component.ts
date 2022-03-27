import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
})
export class JokeComponent {
  @Input() number!: number;
  @Input() joke!: Joke;
}

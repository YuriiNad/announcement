import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'preview-joke',
  templateUrl: './preview-joke.html',
})
export class PreviewJokeComponent implements OnInit {
  @Input() previewedJoke!: Joke;
  constructor() { }

  ngOnInit(): void {
  }

}

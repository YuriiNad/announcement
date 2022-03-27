import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { JokeService } from 'src/app/providers/joke';

@Component({
  selector: 'app-all-jokes',
  templateUrl: './all-jokes.component.html',
})
export class AllJokesComponent implements OnInit {
  jokes: Joke[] = [];
  loading = false;

  constructor(
    private _joke: JokeService,
  ) { }

  ngOnInit(): void {
    this.getJokes();
  }

  async getJokes(): Promise<void> {
    const jokes = await this._joke.getJokes();
    
    this.jokes = jokes;
    this.loading = true
  }

  async removeJoke(joke: Joke): Promise<void> {
    try {
      await  this._joke.removeJoke(joke);
      await this.getJokes();
    } catch (error) {
      console.log(error);
    }
  }
}

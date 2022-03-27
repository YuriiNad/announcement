import { Injectable } from '@angular/core';
import { Joke } from '../models/joke';
import { APIService } from './api';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokeGenerate = 'https://api.chucknorris.io/jokes/random';
  private jokeURL = 'https://announcement-task-default-rtdb.europe-west1.firebasedatabase.app/api/'
  constructor(
    private _api: APIService,
  ) { }

  async createRandomDescription(): Promise<string> {
    const joke =  await this._api.get(this.jokeGenerate)
    const description = joke.value;
    return description
  }

  async addJoke(joke: Joke): Promise<Joke> {
    // const resp =  await this._api.post('/api/jokes.json', joke);
    const resp =  await this._api.post(`${this.jokeURL}jokes.json`, joke);
    return {...joke, id: resp.name};
  }

  static checkValidity(joke: Joke): boolean {
    let title = joke.title?.trim() as string;
    let description = joke.title?.trim() as string;
    
    if (!title && !description) { return false; }
    
    return true;
  }

  async getJokes(): Promise<Joke[]> {
    // const responce = await this._api.get('/api/jokes.json');
    const responce = await this._api.get(`${this.jokeURL}jokes.json`);
    if(!responce) {
      return []
    }else {
      const jokes = Object.keys(responce).map((key: any) => ({ ...responce[key], id: key }));
      return jokes;
    }
  }

  async removeJoke(joke: Joke): Promise<Joke> {
    // const resp =  await this._api.delete(`/api/jokes/${joke.id}.json`);
    const resp =  await this._api.delete(`${this.jokeURL}jokes/${joke.id}.json`);
    return resp;
  }

}

import { Injectable } from '@angular/core';
import { APIService } from './api';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorURL = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private _api: APIService,
  ) { }

  private selectRandomAuthor(): number {
    return Math.floor(Math.random() * 10) + 1;
  }


  async generateRandomAuthor(): Promise<string> {
    try {
      const user = await this._api.get(this.authorURL); 
      const author = user[this.selectRandomAuthor()]?.name;
      return author;
    } catch (error) { throw error; }
  }
}

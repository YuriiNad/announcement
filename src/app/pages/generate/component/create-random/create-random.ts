import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Joke } from 'src/app/models/joke';
import { AuthorService } from 'src/app/providers/author';
import { DateService } from 'src/app/providers/date';
import { JokeService } from 'src/app/providers/joke';

@Component({
  selector: 'app-create-random',
  templateUrl: './create-random.html',
})
export class CreateRandomComponent implements OnInit {
  isReadyToPost = false;
  isInvalid= false;
  errorMessage?: string;
  joke!: FormGroup;
  generatedJoke!: Joke;

  constructor(
    private _date: DateService,
    private _joke: JokeService,
    private _author: AuthorService,
    public _router: Router,
  ) { }

  ngOnInit(): void {
    this.joke = new FormGroup({
      title: new FormControl('', Validators.required),
    })
  }

  async addJoke(): Promise<void> {
    try {
      const resp = await this._joke.addJoke(this.generatedJoke);
      
      setTimeout(()=>{
        this._router.navigate(['/all-jokes']);
      },1000);
     
    } catch(error) {
      this.errorMessage ='Unable to post your joke now. Please try again later.'
    }    
  }

  async generateJoke(): Promise<void> {
    if(this.joke.value.title) {
      try {
        const description = await this._joke.createRandomDescription()
        const author = await this._author.generateRandomAuthor();
        const joke: Joke = {
          ...this.joke.value,
          description: description,
          author: author || 'unknow',
          timeAdded: this._date.getTimeStamp(),
        } 
      
        if(JokeService.checkValidity(joke)) {
          this.isReadyToPost = true;
          this.generatedJoke = joke;
          return;
        }
      } catch (error) {        
        this.errorMessage ='Something went wrong. Please try again later.'
      }
    }

    this.isInvalid = true;
  }

  getRandomAuthor(): Promise<any> {
    return this._author.generateRandomAuthor()
  }

  clear(): void {
    this.isInvalid= false;
  }
}

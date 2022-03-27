import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Joke } from 'src/app/models/joke';
import { AuthorService } from 'src/app/providers/author';
import { DateService } from 'src/app/providers/date';
import { JokeService } from 'src/app/providers/joke';

@Component({
  selector: 'app-create-own',
  templateUrl: './create-own.html',
})
export class CreateOwnComponent implements OnInit {
  isReadyToPost = false;
  joke!: FormGroup;
  isInvalid= false;
  errorMessage?: string;
  generatedJoke!: Joke;

  constructor(
    private _date: DateService,
    private _joke: JokeService,
    private _author: AuthorService,
    public _router: Router,
  ) { }

  ngOnInit(): void {
    this.joke = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
    })
  }

  async addJoke(): Promise<void> {
    try {
      const resp = await this._joke.addJoke(this.generatedJoke);

      setTimeout(()=>{
        this._router.navigate(['/all-jokes']);
      },1000);
    } catch (error) {
      this.errorMessage ='Unable to post your joke now. Please try again later.'
    }
  }

  async generateJoke(): Promise<void> {
    if(this.joke.value.title && this.joke.value.description) {
      try {
        const author = await this._author.generateRandomAuthor();

        const joke: Joke = {
          ...this.joke.value,
          author: author || 'unknow',
          timeAdded: this._date.getTimeStamp(),
        }
        
        if(JokeService.checkValidity(joke)) {
          this.isReadyToPost = true;
          this.generatedJoke = joke;
          return
        }

      } catch (error) {
        this.errorMessage ='Something went wrong. Please try again later.'
      }
    }

    this.isInvalid = true;
  }


}

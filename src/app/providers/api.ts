import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  constructor(
    public _http: HttpClient,
  ) { }

  get(endpoint: string): Promise<any> {
    return this.listen('get', endpoint);
  }

  post(endpoint: string, body: any): Promise<any> {
    return this.listen('post', endpoint, body);
  }

  delete(endpoint: string): Promise<any> {
    return fetch(endpoint, {method: 'DELETE'});
  }

  private listen(method = 'get', endpoint: any, body?: any): Promise<any> {
    let request = this._http.request(method, endpoint, {body});
    
    return new Promise((resolve, reject)=> {
      request.subscribe(
        (responce) => {
          resolve(responce);
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

@Injectable()
export class ApiService {

  messages = [];
  users = [];
  path = 'http://localhost:3000';


  constructor( private http: HttpClient) { }

  getSubjects() {
    this.http.get<any>(this.path + '/subjects').subscribe(res => {
        this.messages = res;
        // console.log(res);
    });
  }

  getTopics() {
    this.http.get<any>(this.path + 'topics').subscribe(res => {
        console.log(res);
    });
  }
}

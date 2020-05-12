import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: any;

  constructor(
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private httpservice: HttpService) { }
  ngOnInit() {

    this.httpservice.getNews().subscribe((data) => {
      console.log(data);
      this.subjects = data;
      // this.articles = data['articles'];
    });
  }

  logout() {
    this.httpservice.logout();
  }

}

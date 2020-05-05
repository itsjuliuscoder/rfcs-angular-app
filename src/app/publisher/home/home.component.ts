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

  constructor(
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private httpservice: HttpService) { }
  ngOnInit() {
  }

  logout() {
    this.httpservice.logout();
  }

}

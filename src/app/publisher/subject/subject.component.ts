import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  id: string;
  subject: any;
  subjects: any;
  topics: any;

  constructor(private route: ActivatedRoute, private httpservice: HttpService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    // all subjects
    this.httpservice.getNews().subscribe((data) => {
      this.subjects = data;
      // this.articles = data['articles'];
    });
    // get single subject
    this.httpservice.getSubject(this.id).subscribe((data: any) => {
      this.subject = data.subject;
    });
    // get all topics related to the subject
    this.httpservice.listTopics(this.id).subscribe((data: any) => {
      this.topics = data;
    });
  }
  // logout button
  logout() {
    this.httpservice.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  id: string;
  subjects: any;
  topics: string;
  video: 'bH2KVsjMxHI';
  safeSrc: SafeResourceUrl;
  constructor(private route: ActivatedRoute, private httpservice: HttpService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    // all subjects
    this.httpservice.getNews().subscribe((data) => {
      this.subjects = data;
    });

    // get all topics related to the subject
    this.httpservice.getTopic(this.id).subscribe((data: any) => {
      this.topics = data;
      // tslint:disable-next-line: no-string-literal
      console.log(this.topics['topic_link']);
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.topics['topic_link']);
    });


  }

  logout() {
    this.httpservice.logout();
  }

}

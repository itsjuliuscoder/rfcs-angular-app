import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { FormBuilder } from '@angular/forms';

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
  constructor(private route: ActivatedRoute, private httpservice: HttpService, private router: Router, private fb: FormBuilder) { }

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
      console.log(this.topics);
    });
  }

  logout() {
    this.httpservice.logout();
  }

}

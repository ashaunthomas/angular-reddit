import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  /*
    The host is the element this component is attached to. We set
    properties on the host element using the @HostBinding decorator.
    In this case, we're asking Angular to keep the value of the host
    elements class in sync with the property cssClass 'row'
    --> The host element is the <app-article> tag.

    @HostBinging allows you to configure host element from WITHIN the
     component
  */
  @HostBinding('attr.class') cssClass = "row";
  votes:number;
  title:string;
  link:string;

  constructor() {
    this.title = "Angular 2";
    this.link = "http://angular.io";
    this.votes = 10;
  }

  voteUp() { this.votes++; }
  voteDown() { this.votes--; }

  ngOnInit() {
  }

}

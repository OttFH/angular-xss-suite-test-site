import {Component, OnInit} from '@angular/core';
import {SafeHtmlPipe} from '../../safeHtml.pipe';

@Component({
  selector: 'app-simple-comment-page',
  templateUrl: './simpleComment.component.html',
  styleUrls: ['./simpleComment.component.css'],
})
export class SimpleCommentComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  constructor(private safeHtml: SafeHtmlPipe) {
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = this.safeHtml.transform(`<!-- ${params.get('xss')} -->`);
  }

  loadExample(): void {
    // @ts-ignore
    window.location = '/simpleComment?xss=--><img src="/assets/xss-meme.jpg" onload=alert(1) /><!--';
  }
}

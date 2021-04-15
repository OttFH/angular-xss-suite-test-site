import {Component, OnInit} from '@angular/core';
import {SafeHtmlPipe} from '../../safeHtml.pipe';

@Component({
  selector: 'app-simple-tag-page',
  templateUrl: './simpleTag.component.html',
  styleUrls: ['./simpleTag.component.css'],
})
export class SimpleTagComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  constructor(private safeHtml: SafeHtmlPipe) {
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = this.safeHtml.transform(params.get('xss'));
  }

  loadExample(): void {
    // @ts-ignore
    window.location = '/simpleTag?xss=<img src=/assets/xss-meme.jpg onload=alert(1) />';
  }
}

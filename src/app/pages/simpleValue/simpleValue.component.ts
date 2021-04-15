import {Component, OnInit} from '@angular/core';
import {SafeHtmlPipe} from '../../safeHtml.pipe';

@Component({
  selector: 'app-simple-value-page',
  templateUrl: './simpleValue.component.html',
  styleUrls: ['./simpleValue.component.css'],
})
export class SimpleValueComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  constructor(private safeHtml: SafeHtmlPipe) {
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = this.safeHtml.transform(`<input name="xss" value="${params.get('xss')}">`);
  }

  loadExample(): void {
    // @ts-ignore
    window.location = '/simpleValue?xss="><img src="/assets/xss-meme.jpg" onload=alert(1) /><input value="';
  }
}

import {Component, OnInit} from '@angular/core';
import {SafeHtmlPipe} from '../../safeHtml.pipe';
import escape from 'escape-html';

@Component({
  selector: 'app-escaping-on-load-page',
  templateUrl: './escapingOnload.component.html',
  styleUrls: ['./escapingOnload.component.css'],
})
export class EscapingOnloadComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  constructor(private safeHtml: SafeHtmlPipe) {
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = this.safeHtml.transform(`<img src="/assets/xss-meme.jpg" onload="${escape(params.get('xss'))}" />`);
  }

  loadExample(): void {
    // @ts-ignore
    window.location = '/escapingOnload?xss=alert(1)';
  }
}

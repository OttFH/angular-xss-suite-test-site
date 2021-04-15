import {Component, OnInit} from '@angular/core';
import {SafeHtmlPipe} from '../../safeHtml.pipe';
import escape from 'escape-html';

@Component({
  selector: 'app-escaping-on-load-page',
  templateUrl: './escapingOnLoad.component.html',
  styleUrls: ['./escapingOnLoad.component.css'],
})
export class EscapingOnLoadComponent implements OnInit {
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
    window.location = '/escapingOnLoad?xss=alert(1)';
  }
}

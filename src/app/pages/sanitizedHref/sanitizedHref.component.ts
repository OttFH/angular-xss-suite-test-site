import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sanitized-href-page',
  templateUrl: './sanitizedHref.component.html',
  styleUrls: ['./sanitizedHref.component.css']
})
export class SanitizedHrefComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = `<a href="${params.get('xss')}">Here</a>`;
  }
}

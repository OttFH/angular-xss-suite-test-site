import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sanitized-tag-page',
  templateUrl: './sanitizedTag.component.html',
  styleUrls: ['./sanitizedTag.component.css']
})
export class SanitizedTagComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = params.get('xss');
  }
}

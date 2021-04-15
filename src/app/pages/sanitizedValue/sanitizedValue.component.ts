import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sanitized-value-page',
  templateUrl: './sanitizedValue.component.html',
  styleUrls: ['./sanitizedValue.component.css']
})
export class SanitizedValueComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = `<input name="xss" value="${params.get('xss')}">`;
  }
}

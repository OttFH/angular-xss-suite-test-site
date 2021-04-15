import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-escaping-value-page',
  templateUrl: './escapingValue.component.html',
  styleUrls: ['./escapingValue.component.css']
})
export class EscapingValueComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = params.get('xss');
  }
}

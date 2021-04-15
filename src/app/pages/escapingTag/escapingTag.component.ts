import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-escaping-tag-page',
  templateUrl: './escapingTag.component.html',
  styleUrls: ['./escapingTag.component.css']
})
export class EscapingTagComponent implements OnInit {
  title = 'angular-xss-suite-test-site';
  xss = '';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.xss = params.get('xss');
  }
}

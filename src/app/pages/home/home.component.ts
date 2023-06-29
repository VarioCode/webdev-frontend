import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private activeRoute: ActivatedRouteSnapshot) {}

  ngOnInit(): void {
    console.log(this.activeRoute.data);
  }
}

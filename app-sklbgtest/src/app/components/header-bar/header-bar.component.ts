import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  candidateName: string;

  constructor() { }

  ngOnInit(): void {
    this.candidateName = "Binara Goonawardana";
  }

}

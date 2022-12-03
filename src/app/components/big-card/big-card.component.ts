import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photo: string = "";
  @Input() date: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescrition: string = "";
  @Input() id: string = '0'

  constructor() { }

  ngOnInit(): void {
  }
}

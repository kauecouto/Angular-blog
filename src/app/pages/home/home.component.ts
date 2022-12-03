import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/fataFake'
import { News } from './news'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  news: News  = dataFake
  liveBigCard: boolean = true
  constructor() { }

  ngOnInit(): void {
    console.log(this.news)
  }

  isALiveBigCard(index: number | null){
    if(index = 3){
      this.liveBigCard = false
    }
  }
}

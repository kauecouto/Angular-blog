import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/fataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photo: string = ''
  date: string = ''
  newsTitle: string = ''
  newsDescription: string = ''
  private id: string | null = '0'
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))
    this.setDataToComponets(this.id)
  }

   setDataToComponets(id: string | null){
    const result = dataFake.filter( item => item.id.toString() == id)[0]

    this.photo = result.photo
    this.date = result.date
    this.newsTitle = result.title
    this.newsDescription = result.description
   }
}

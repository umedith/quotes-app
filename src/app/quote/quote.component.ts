import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[new Quote("Edith","Milan","He who loughs the last lough lasts longer",new Date(2020,10,5)),
new Quote("Green","Owell","Love lies",new Date(2019,3,5))]
  preNum:number
  lastNum:number
  counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
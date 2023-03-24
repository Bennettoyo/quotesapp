import { Component, Renderer2, ViewChild } from '@angular/core';
import { IonSlides, IonContent } from '@ionic/angular';
import * as _ from 'lodash';
import { DataService } from '../data.service';
import { author } from '../interfaces/author';
import { quote } from '../interfaces/quote';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides', { static: true }) slides!: IonSlides;
  @ViewChild('pageTop') pageTop!: IonContent;
  currentAuthor = {
    author: "",
    desc: "",
    info: "",
    img: "",
    initialBreakpoint: "",
  };
  slideOpts = {
    initialSlide: 0,
    speed: 100,
    pagination: false,
    autoHeight: true,
  };
  isModalOpen = false;
  quotes: quote[] = [];
  authors: author[] = [];
  shuffledCollection: any[] = [];

  constructor(private dataService: DataService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.dataService.authorsSubject.subscribe((authors: author[]) => {
      this.authors = authors;
      this.resetSlides();
    });
    this.dataService.quotesSubject.subscribe((quotes: quote[]) => {
      this.quotes = this.shuffle(quotes);
      this.shuffledCollection = this.shuffle(this.quotes);
      this.resetSlides();
    })
    this.dataService.getAuthors();
    this.dataService.getQuotes();
  }

  updateHeight() {
    this.pageTop.scrollToTop(400);
  }

  resetSlides() {
    this.slides.slideTo(0);
  }

  shuffle(quoteArray: any) {
    let matchedArray = quoteArray.map((quote: any) => {
      let author = this.authors.filter(author => author.authorId == quote.authorId);
      const mergedObject = { ...author[0], ...quote };
      return mergedObject;
    })
    return _.shuffle(matchedArray);
  }

  setOpen(isOpen: boolean, item?: any) {
    this.isModalOpen = isOpen;
    if (item) {
      this.currentAuthor = {
        author: item.author,
        desc: item.desc,
        info: item.info,
        img: item.img,
        initialBreakpoint: item.initialBreakpoint,
      }
    }
  }
}

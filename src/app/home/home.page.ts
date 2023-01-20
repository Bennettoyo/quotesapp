import { Component, ViewChild } from '@angular/core';
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
    img: ""
  };
  slideOpts = {
    initialSlide: 0,
    speed: 100,
    pagination: false,
    autoHeight: true,
  };
  isModalOpen = false;
  quotes: quote[] = this.dataService.quotes;
  authors: author[] = this.dataService.getAuthors();
  originalQuotes = [...this.quotes];
  shuffledCollection = this.shuffle(this.quotes);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.filterAuthors();
    this.dataService.authorsSubject.subscribe(
      (data) => {
        this.filterAuthors();
      }
    );
  }

  updateHeight() {
    this.pageTop.scrollToTop(400);
  }

  filterAuthors() {
    this.quotes = this.originalQuotes;
    this.authors.map((author) => {
      if (author.showQuotes == false) {
        this.quotes = this.quotes.filter(quote => quote.authorId !== author.authorId);
      }
    });
    this.shuffledCollection = this.shuffle(this.quotes);
  }

  shuffle(array: any) {
    let matchedArray = array.map((quote: any) => {
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
        img: item.img
      }
    }
  }
}

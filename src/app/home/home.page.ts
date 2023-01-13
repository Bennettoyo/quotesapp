import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  number = Math.floor(Math.random() * 10) + 1;
  slideOpts = {
    initialSlide: 0,
    speed: 500,
    pagination: false,
    autoHeight: true,
  };

  authors = [
    {
      authorId: "MarcusAurelius",
      author: "Marcus Aurelius",
      desc: "Roman Emperor",
      img: "assets/marcus-aurelius-avatar.jpg",
    },
    {
      authorId: "MiyamotoMusashi",
      author: "Miyamoto Musashi",
      desc: "Famous Samurai",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Miyamoto_Musashi-Portrait-Edo-period.png/1200px-Miyamoto_Musashi-Portrait-Edo-period.png",
    }
  ]

  quotes = [
    {
      authorId: "MarcusAurelius",
      quote: "Wedi Widi Wichi"
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "dolore quidem. Incidunt, adipisci. Atque, consequatur sequi exercitationem sunt, quos nobis voluptates debitis"
    },
  ]

  shuffledCollection = this.shuffle(this.quotes);

  constructor() { }

  shuffle(array: any) {
    let matchedArray = array.map((quote: any) => {
      let author = this.authors.filter(author => author.authorId == quote.authorId);
      const mergedObject = { ...author[0], ...quote };
      return mergedObject;
    })
    return _.shuffle(matchedArray);
  }
}

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
      desc: "Ronin",
      img: "assets/miyamoto-musashi-avatar.jpg",
    },
    {
      authorId: "Epictetus",
      author: "Epictetus",
      desc: "Slave Philosopher",
      img: "assets/epictetus-avatar.jpg",
    },
    {
      authorId: "Seneca",
      author: "Seneca",
      desc: "Roman Philosopher",
      img: "assets/seneca-avatar.jpg",
    }
  ]

  quotes = [
    {
      authorId: "MarcusAurelius",
      quote: "The happiness of your life depends upon the quality of your thoughts."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Accept everything just the way it is."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Reject your sense of injury and the injury itself disappears."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Waste no more time arguing about what a good man should be. Be one."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The soul becomes dyed with the colour of its thoughts."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Our life is what our thoughts make it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "If it is not right do not do it; if it is not true do not say it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Very little is needed to make a happy life; it is all within yourself in your way of thinking."
    },
    {
      authorId: "MarcusAurelius",
      quote: "How much more grievous are the consequences of anger than the causes of it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look."
    },
    {
      authorId: "Epictetus",
      quote: "Wealth consists not in having great possessions, but in having few wants."
    },
    {
      authorId: "Epictetus",
      quote: "Don't explain your philosophy. Embody it."
    },
    {
      authorId: "Epictetus",
      quote: "First say to yourself what you would be; and then do what you have to do."
    },
    {
      authorId: "Epictetus",
      quote: "It's not what happens to you, but how you react to it that matters."
    },
    {
      authorId: "Epictetus",
      quote: "If you want to improve, be content to be thought foolish and stupid."
    },
    {
      authorId: "Epictetus",
      quote: "He who laughs at himself never runs out of things to laugh at."
    },
    {
      authorId: "Epictetus",
      quote: "It is impossible for a man to learn what he thinks he already knows."
    },
    {
      authorId: "Epictetus",
      quote: "Circumstances don't make the man, they only reveal him to himself."
    },
    {
      authorId: "Epictetus",
      quote: "You are a little soul carrying around a corpse."
    },
    {
      authorId: "Epictetus",
      quote: "Seek not the good in external things;seek it in yourselves."
    },
    {
      authorId: "Epictetus",
      quote: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has."
    },
    {
      authorId: "MarcusAurelius",
      quote: "What we do now echoes in eternity."
    },
    {
      authorId: "MarcusAurelius",
      quote: "For it is in your power to retire into yourself whenever you choose."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The impediment to action advances action. What stands in the way becomes the way."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Remember that very little is needed to make a happy life."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The universe is change; our life is what our thoughts make it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Though you break your heart, men will go on as before."
    },
    {
      authorId: "Seneca",
      quote: "Sometimes even to live is an act of courage."
    },
    {
      authorId: "Seneca",
      quote: "Luck is what happens when preparation meets opportunity."
    },
    {
      authorId: "Seneca",
      quote: "All cruelty springs from weakness."
    },
    {
      authorId: "Seneca",
      quote: "Difficulties strengthen the mind, as labor does the body."
    },
    {
      authorId: "Seneca",
      quote: "You act like mortals in all that you fear, and like immortals in all that you desire."
    },
    {
      authorId: "Seneca",
      quote: "As is a tale, so is life: not how long it is, but how good it is, is what matters."
    },
    {
      authorId: "Seneca",
      quote: "It is not the man who has too little, but the man who craves more, that is poor."
    },
    {
      authorId: "Seneca",
      quote: "Begin at once to live, and count each separate day as a separate life."
    },
    {
      authorId: "Seneca",
      quote: "He who is brave is free."
    },
    {
      authorId: "Seneca",
      quote: "No man was ever wise by chance."
    },
    {
      authorId: "Seneca",
      quote: "Only time can heal what reason cannot."
    },
    {
      authorId: "Seneca",
      quote: "Most powerful is he who has himself in his own power."
    },
    {
      authorId: "Seneca",
      quote: "Life is like a play: it's not the length, but the excellence of the acting that matters."
    },
    {
      authorId: "Seneca",
      quote: "As long as you live, keep learning how to live."
    },
    {
      authorId: "Seneca",
      quote: "Wealth is the slave of a wise man. The master of a fool."
    },
    {
      authorId: "Seneca",
      quote: "The sun also shines on the wicked."
    },
    {
      authorId: "Seneca",
      quote: "While we wait for life, life passes."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "You must understand that there is more than one path to the top of the mountain."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "You can only fight the way you practice."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Today is victory over yourself of yesterday; tomorrow is your victory over lesser men."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Get beyond love and grief: exist for the good of Man."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Step by step walk the thousand-mile road."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Truth is not what you want it to be; it is what it is. And you must bend to its power or live a lie."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "It may seem difficult at first, but all things are difficult at first."
    },
    {
      authorId: "MarcusAurelius",
      quote: "You could leave life right now. Let that determine what you do and say and think."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Soon, you will have forgotten everything. Soon, everybody will have forgotten you."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The world is mere change, and this life, opinion."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The best revenge is not to do as they do."
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

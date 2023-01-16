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
    speed: 300,
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
    },
    {
      authorId: "CatoTheYounger",
      author: "Cato",
      desc: "Roman Senator",
      img: "assets/cato-avatar.jpg",
    },
    {
      authorId: "MusoniusRufus",
      author: "Musonius Rufus",
      desc: "Roman Philosopher",
      img: "assets/musonius-rufus-avatar.jpg",
    },
    {
      authorId: "Cleanthes",
      author: "Cleanthes",
      desc: "Greek philosopher",
      img: "assets/cleanthes-avatar.jpg",
    },
    {
      authorId: "Zeno",
      author: "Zeno of Citium",
      desc: "Greek philosopher",
      img: "assets/cleanthes-avatar.jpg",
    },
    {
      authorId: "Plato",
      author: "Plato",
      desc: "Greek philosopher",
      img: "assets/plato-avatar.jpg",
    },
    {
      authorId: "Epicurus",
      author: "Epicurus",
      desc: "Greek philosopher",
      img: "assets/epicurus-avatar.jpg",
    },
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
    {
      authorId: "CatoTheYounger",
      quote: "Bitter are the roots of study, but how sweet their fruit."
    },
    {
      authorId: "CatoTheYounger",
      quote: "Consider it the greatest of all virtues to restrain the tongue."
    },
    {
      authorId: "CatoTheYounger",
      quote: "In doing nothing men learn to do evil."
    },
    {
      authorId: "CatoTheYounger",
      quote: "Consider in silence whatever any one says: speech both conceals and reveals the inner soul of man."
    },
    {
      authorId: "CatoTheYounger",
      quote: "All have the gift of speech, but few are possessed of wisdom."
    },
    {
      authorId: "CatoTheYounger",
      quote: "Speak briefly and to the point."
    },
    {
      authorId: "CatoTheYounger",
      quote: "The best way to keep good acts in memory is to refresh them with new."
    },
    {
      authorId: "CatoTheYounger",
      quote: "Don't promise twice what you can do at once."
    },
    {
      authorId: "CatoTheYounger",
      quote: "Flee sloth; for the indolence of the soul is the decay of the body."
    },
    {
      authorId: "CatoTheYounger",
      quote: "The primary virtue is: hold your tongue; who knows how to keep quiet is close to God."
    },
    {
      authorId: "CatoTheYounger",
      quote: "An angry man opens his mouth and shuts his eyes."
    },
    {
      authorId: "CatoTheYounger",
      quote: "Old age isn't so bad when you consider the alternatives."
    },
    {
      authorId: "MusoniusRufus",
      quote: "If you accomplish something good with hard work, the labor passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasure passes quickly, but the shame endures."
    },
    {
      authorId: "MusoniusRufus",
      quote: "In order to protect ourselves we must live like doctors and be continually treating ourselves with reason."
    },
    {
      authorId: "MusoniusRufus",
      quote: "The human being is born with an inclination toward virtue."
    },
    {
      authorId: "MusoniusRufus",
      quote: "It is not possible to live well today unless you treat it as your last day."
    },
    {
      authorId: "MusoniusRufus",
      quote: "To relax the mind is to lose it."
    },
    {
      authorId: "MusoniusRufus",
      quote: "You will earn the respect of all if you begin by earning the respect of yourself."
    },
    {
      authorId: "MusoniusRufus",
      quote: "Virtue is not simply theoretical knowledge, but it is practical application as well."
    },
    {
      authorId: "MusoniusRufus",
      quote: "We will train both soul and body when we accustom ourselves to cold, heat, thirst, hunger, scarcity of food, hardness of bed, abstaining from pleasures, and enduring pains."
    },
    {
      authorId: "Cleanthes",
      quote: "Conduct me, God, and you, O Destiny, wherever your decrees have fixed my station."
    },
    {
      authorId: "Cleanthes",
      quote: "He has his wish, whose wish can be to have what is enough."
    },
    {
      authorId: "Cleanthes",
      quote: "Ignorant men differ from beasts only in their figure."
    },
    {
      authorId: "Cleanthes",
      quote: "Lead me, Zeus, and you, Fate, wherever you have assigned me. I shall follow without hesitation; but even if I am disobedient and do not wish to, I shall follow no less surely."
    },
    {
      authorId: "Cleanthes",
      quote: "The Fates lead the willing, but drag the unwilling."
    },
    {
      authorId: "Cleanthes",
      quote: "The Fates guide the person who accepts them and hinder the person who resists them."
    },
    {
      authorId: "Zeno",
      quote: "Better to trip with the feet than with the tongue."
    },
    {
      authorId: "Zeno",
      quote: "Fate is the endless chain of causation, whereby things are; the reason or formula by which the world goes on."
    },
    {
      authorId: "Zeno",
      quote: "Happiness is a good flow of life."
    },
    {
      authorId: "Zeno",
      quote: "Man conquers the world by conquering himself."
    },
    {
      authorId: "Zeno",
      quote: "Nothing is more hostile to a firm grasp on knowledge than self-deception."
    },
    {
      authorId: "Zeno",
      quote: "Steel your sensibilities, so that life shall hurt you as little as possible."
    },
    {
      authorId: "Zeno",
      quote: "The goal of life is living in agreement with nature."
    },
    {
      authorId: "Zeno",
      quote: "The reason why we have two ears and only one mouth is that we may listen the more and talk the less."
    },
    {
      authorId: "Zeno",
      quote: "Wellbeing is attained by little and little, and nevertheless is no little thing itself."
    },
    {
      authorId: "Plato",
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    },
    {
      authorId: "Plato",
      quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light"
    },
    {
      authorId: "Plato",
      quote: "Thinking - the talking of the soul with itself."
    },
    {
      authorId: "Plato",
      quote: "The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile."
    },
    {
      authorId: "Plato",
      quote: "If a man neglects education, he walks lame to the end of his life."
    },
    {
      authorId: "Plato",
      quote: "Books give a soul to the universe, wings to the mind, flight to the imagination, and life to everything."
    },
    {
      authorId: "Plato",
      quote: "Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds."
    },
    {
      authorId: "Plato",
      quote: "Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds."
    },
    {
      authorId: "Plato",
      quote: "And what, Socrates, is the food of the soul? Surely, I said, knowledge is the food of the soul."
    },
    {
      authorId: "Plato",
      quote: "The untrained mind keeps up a running commentary, labelling everything, judging everything. Best to ignore that commentary."
    },
    {
      authorId: "Epicurus",
      quote: "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for."
    },
    {
      authorId: "Epicurus",
      quote: "He who is not satisfied with a little is satisfied with nothing."
    },
    {
      authorId: "Epicurus",
      quote: "Why should I fear death? If I am, then death is not. If Death is, then I am not. Why should I fear that which can only exist when I do not?"
    },
    {
      authorId: "Epicurus",
      quote: "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist."
    },
    {
      authorId: "Epicurus",
      quote: "The art of living well and the art of dying well are one."
    },
    {
      authorId: "Epicurus",
      quote: "I was not, I was, I am not, I care not."
    },
    {
      authorId: "Epicurus",
      quote: "He who has peace of mind disturbs neither himself nor another."
    },
    {
      authorId: "Epicurus",
      quote: "Do not spoil what you have by desiring what you have not."
    },
    {
      authorId: "Epicurus",
      quote: "Empty is the argument of the philosopher which does not relieve any human suffering."
    },
    {
      authorId: "Epicurus",
      quote: "Nothing is sufficient for the person who finds sufficiency too little."
    },
    {
      authorId: "Epicurus",
      quote: "Be moderate in order to taste the joys of life in abundance."
    },
    {
      authorId: "Epicurus",
      quote: "The greater the difficulty, the more the glory in surmounting it."
    },
    {
      authorId: "Seneca",
      quote: "Brave men rejoice in adversity, just as brave soldiers triumph in war."
    },
    {
      authorId: "Seneca",
      quote: "We must indulge the mind and from time to time allow it the leisure which is its food and strength."
    },
    {
      authorId: "Seneca",
      quote: "O how many noble deeds of women are lost in obscurity!"
    },
    {
      authorId: "Seneca",
      quote: "The more a mind takes in the more it expands."
    },
    {
      authorId: "Seneca",
      quote: "Religion is regarded by the ignorant as true, by the wise as false, and by the rulers as useful."
    },
    {
      authorId: "Seneca",
      quote: "When a man does not know what harbor he is making for, no wind is the right wind."
    },
    {
      authorId: "Seneca",
      quote: "The bravest sight in the world is to see a great man struggling against adversity."
    },
    {
      authorId: "Seneca",
      quote: "No matter how many men you kill, you can't kill your successor."
    },
    {
      authorId: "Seneca",
      quote: "A guilty person sometimes has the luck to escape detection, but never to feel sure of it."
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

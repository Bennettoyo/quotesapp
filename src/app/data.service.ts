import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { author, authorCategoryEnum } from './interfaces/author';
import { quote } from './interfaces/quote';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  authors: author[] = [
    {
      authorId: "MarcusAurelius",
      author: "Marcus Aurelius",
      desc: "Roman Emperor",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Marcus Aurelius Antoninus was Roman emperor from 161 to 180 AD and a Stoic philosopher.", "He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace, calmness and stability for the Roman Empire lasting from 27 BC to 180 AD."],
      img: "assets/marcus-aurelius-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "HajimeNoIppo",
      author: "Hajime No Ippo",
      desc: "Boxer",
      category: authorCategoryEnum.show,
      info: ["He is a Featherweight boxer from the Kamogawa Boxing Gym, the former JBC Featherweight Champion, and 'unofficial champion' of the OPBF."],
      img: "assets/ippo-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "MiyamotoMusashi",
      author: "Miyamoto Musashi",
      desc: "Ronin",
      category: authorCategoryEnum.philosopher,
      info: ["Miyamoto Musashi, also known as Shinmen Takezō, Miyamoto Bennosuke or, by his Buddhist name, Niten Dōraku, was a Japanese swordsman, philosopher, strategist, writer and rōnin.", "He became renowned through stories of his unique double-bladed swordsmanship and undefeated record in his 61 duels."],
      img: "assets/miyamoto-musashi-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "Epictetus",
      author: "Epictetus",
      desc: "Slave Philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Epictetus was a Greek Stoic philosopher. He was born into slavery at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life.", "His teachings were written down and published by his pupil Arrian in his Discourses and Enchiridion."],
      img: "assets/epictetus-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "Seneca",
      author: "Seneca",
      desc: "Roman Philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Lucius Annaeus Seneca the Younger, usually known mononymously as Seneca, was a Stoic philosopher of Ancient Rome, a statesman, dramatist, and, in one work, satirist, from the post-Augustan age of Latin literature."],
      img: "assets/seneca-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "CatoTheYounger",
      author: "Cato",
      desc: "Roman Senator",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Marcus Porcius Cato 'Uticensis', also known as Cato the Younger, was an influential conservative Roman senator during the late Republic.", "His conservative principles were focused on the preservation of what he saw as old Roman values in decline."],
      img: "assets/cato-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "MusoniusRufus",
      author: "Musonius Rufus",
      desc: "Roman Philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Gaius Musonius Rufus was a Roman Stoic philosopher of the 1st century AD.", "He taught philosophy in Rome during the reign of Nero and so was sent into exile in 65 AD, returning to Rome only under Galba."],
      img: "assets/musonius-rufus-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "Cleanthes",
      author: "Cleanthes",
      desc: "Greek philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Cleanthes, of Assos, was a Greek Stoic philosopher and boxer who was the successor to Zeno of Citium as the second head of the Stoic school in Athens.", "Originally a boxer, he came to Athens where he took up philosophy, listening to Zeno's lectures. He supported himself by working as a water-carrier at night."],
      img: "assets/cleanthes-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "Zeno",
      author: "Zeno of Citium",
      desc: "Greek philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Zeno of Citium was a Hellenistic philosopher from Citium, Cyprus. Zeno was the founder of the Stoic school of philosophy, which he taught in Athens from about 300 BC."],
      img: "assets/zeno-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "Plato",
      author: "Plato",
      desc: "Greek philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Plato was a Ancient Greek philosopher born in Athens during the Classical period in Ancient Greece.", "He founded the Platonist school of thought and the Academy, the first institution of higher learning on the European continent."],
      img: "assets/plato-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "Epicurus",
      author: "Epicurus",
      desc: "Greek philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Epicurus was an ancient Greek philosopher and sage who founded Epicureanism, a highly influential school of philosophy.", "He was born on the Greek island of Samos to Athenian parents."],
      img: "assets/epicurus-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "Cicero",
      author: "Cicero",
      desc: "Roman Statesman",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Marcus Tullius Cicero was a Roman statesman, lawyer, scholar, philosopher, and academic skeptic.", "He tried to uphold optimate principles during the political crises that led to the establishment of the Roman Empire."],
      img: "assets/cicero-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "Socrates",
      author: "Socrates",
      desc: "Greek Philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought."],
      img: "assets/socrates-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "Diogenes",
      author: "Diogenes",
      desc: "Greek Philosopher",
      category: authorCategoryEnum.ancientPhilosopher,
      info: ["Diogenes, also known as Diogenes the Cynic or Diogenes of Sinope, was a Greek philosopher and one of the founders of Cynicism.", "He was born in Sinope, an Ionian colony on the Black Sea coast of Anatolia in 412 or 404 BC and died at Corinth in 323 BC. Diogenes was a controversial figure."],
      img: "assets/diogenes-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.70"
    },
    {
      authorId: "England",
      author: "England",
      desc: "West-European Country",
      category: authorCategoryEnum.country,
      info: ["England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north."],
      img: "assets/england.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "Jesus",
      author: "Jesus Christ",
      desc: "Son of God",
      category: authorCategoryEnum.religiousFigure,
      info: ["A first century Jewish preacher and religious leader. He is a central figure of Christianity, the world's largest religion."],
      img: "assets/jesus-avatar.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
    {
      authorId: "Bible",
      author: "The Bible",
      desc: "Religious Text",
      category: authorCategoryEnum.religiousFigure,
      info: ["The Bible is a collection of religious texts or scriptures that are held to be sacred in Christianity, and many other religions."],
      img: "assets/bible.jpg",
      showQuotes: true,
      initialBreakpoint: "0.60"
    },
  ];

  quotes: quote[] = [
    {
      authorId: "HajimeNoIppo",
      quote: "No matter how much talent you have, if you aren't the best, you're nothing because there can only be one king. If you're in his shadow, then history won't see you."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "Run until you can't run anymore, and then run again. Constant effort is life's greatest shortcut."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "Sometimes, no matter what kind of effort you put in, it just doesn't really pay off."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "There are times when working hard may not be enough. But those who succeed worked hard."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "Why are you punching? What are you chasing? You should already know the answer to that. To become strong."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "The brighter they shine, the darker their shadow grows."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "People with talent often have the wrong impression that things will go as they think."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "The difference between the novice and the master is that the master has failed more times than the novice has tried."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "Until I understand what true strength is, I'm the challenger! So I'll always stand up."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "Everyone around you is doing so well. You'll be easily forgotten if you idle around for too long."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "The reason we train so hard in the first place is so we can make it home in one piece."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "As long as I get up there's a chance!"
    },
    {
      authorId: "HajimeNoIppo",
      quote: "If having no talent makes it okay to give up then what was the point in ever trying?!"
    },
    {
      authorId: "HajimeNoIppo",
      quote: "Life's greatest shortcut is constant effort."
    },
    {
      authorId: "HajimeNoIppo",
      quote: "We each have our own lives. But everyone is the hero of their own story. And as the star of the show, we all have to go on our own adventure."
    },
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
      quote: "I want to lead an important life. I want to do it because I was born a human being."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Hold on to your life and make it honest and brave."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Think what you like. There are people who die by remaining alive and others who gain life by dying."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "The line between life and death is not thicker than an eyelid."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "To him, any place could serve as home - more than that: wherever he happened to be was the universe."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Whether people were great or not, there was not much variety in their inner life experience. Any difference lay merely in how they dealt with common human weaknesses."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "If the talents I was born with are the right ones, I may someday achieve my goal. If not, I may go through life being as stupid as I am now."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Danger was the grindstone on which the swordsman whetted his spirit. Enemies were teachers in disguise."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Those who love seek a philosophy and, because of this, are fond of solitude."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "I'm still an amateur. But the world's full of people who don't seem to be as good as I am."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "A wanderer with no ideal, no sense of gratitude for his independence, is no more than a beggar! The difference lies inside the heart!"
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "We human beings all look up at the same moon, but there are many roads we may travel to reach the top of the peak nearest to it."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "The human mouth is the gateway to catastrophe."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "The human mouth is the gateway to catastrophe."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "I want to dedicate myself to training and discipline. I want to spend every moment of every day working to improve myself."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Great character is forged through hardships."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Sincerity, even if it speaks with a stutter, will sound eloquent when inspired."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Every act is an expression of one's self."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Not only must a warrior be strong with his bow, but he must have a heart full of pity for all living creatures."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Don't yield! Keep up your courage! The same sun looks down on all of us!"
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "A serious student is concerned with training his mind and disciplining his spirit than with developing martial arts."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Instead of wanting to be like this or that, make yourself into a silent, immovable giant. That's what a mountain is."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "Don't waste your time trying to impress people. If you become the sort of man people respect, they'll respect you, without your doing anything."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "The truth of the scholar, alone in his study, does no always accord with what the world at large considers true."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "True courage knows fear."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "It's interesting isn't it? Being in the world."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "A wise man who cultivates wisdom may sometimes drown in it."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "You're safer out in the open than you are crouching in the woodshed listening for footsteps and going crazy."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "It's not just my body, I'm cold inside. Not disciplined properly. That's what it is. I still long to cling to warm flesh, like a baby, and I give in too quickly to sentimentality."
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "The world is always full of the sound of waves. The little fishes, abandoning themselves to the waves, dance and sing, and play, but who knows the heart of the sea, a hundred feet down? Who knows its depth?"
    },
    {
      authorId: "MiyamotoMusashi",
      quote: "If you become self-conscious about the proper way to drink, you won't enjoy the tea. When you use a sword, you can't let your body become too tense. That would break your harmony between the sword and your spirit, right?"
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
      quote: "Seek not the good in external things; seek it in yourselves."
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
      quote: "Thinking - the talking of the soul with itself."
    },
    {
      authorId: "Plato",
      quote: "The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile."
    },
    {
      authorId: "Plato",
      quote: "The untrained mind keeps up a running commentary, labelling everything, judging everything. Best to ignore that commentary. Don't argue or resist, just ignore. Deprived of attention and interest, this voice gets quieter and quieter and eventually just shuts up."
    },
    {
      authorId: "Plato",
      quote: "Truth is the beginning of every good to the gods, and of every good to man."
    },
    {
      authorId: "Plato",
      quote: "The measure of a man is what he does with power."
    },
    {
      authorId: "Plato",
      quote: "Wise men speak because they have something to say; Fools because they have to say something."
    },
    {
      authorId: "Plato",
      quote: "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers."
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
    {
      authorId: "MarcusAurelius",
      quote: "You have power over your mind - not outside events. Realize this, and you will find strength."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."
    },
    {
      authorId: "MarcusAurelius",
      quote: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment."
    },
    {
      authorId: "MarcusAurelius",
      quote: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love."
    },
    {
      authorId: "MarcusAurelius",
      quote: "It is not death that a man should fear, but he should fear never beginning to live."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Here is a rule to remember in future, when anything tempts you to feel bitter: not 'This is misfortune,' but 'To bear this worthily is good fortune.'"
    },
    {
      authorId: "MarcusAurelius",
      quote: "Here is a rule to remember in future, when anything tempts you to feel bitter: not 'This is misfortune,' but 'To bear this worthily is good fortune.'"
    },
    {
      authorId: "MarcusAurelius",
      quote: "How much time he gains who does not look to see what his neighbour says or does or thinks, but only at what he does himself, to make it just and holy."
    },
    {
      authorId: "MarcusAurelius",
      quote: "You always own the option of having no opinion. There is never any need to get worked up or to trouble your soul about things you can't control."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Perfection of character is this: to live each day as if it were your last, without frenzy, without apathy, without pretence."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too."
    },
    {
      authorId: "MarcusAurelius",
      quote: "A man's worth is no greater than the worth of his ambitions."
    },
    {
      authorId: "MarcusAurelius",
      quote: "A man's worth is no greater than the worth of his ambitions."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Your days are numbered. Use them to throw open the windows of your soul to the sun. If you do not, the sun will soon set, and you with it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Receive without conceit, release without struggle."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Life is neither good or evil, but only a place for good and evil."
    },
    {
      authorId: "MarcusAurelius",
      quote: "A person's worth is measured by the worth of what he values."
    },
    {
      authorId: "MarcusAurelius",
      quote: "If any man despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Whatever anyone does or says, I must be emerald and keep my colour."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The things you think about determine the quality of your mind."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Humans have come into being for the sake of each other, so either teach them, or learn to bear them."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Do what you will. Even if you tear yourself apart, most people will continue doing the same things."
    },
    {
      authorId: "MarcusAurelius",
      quote: "If someone can prove me wrong and show me my mistake in any thought or action, I shall gladly change. I seek the truth."
    },
    {
      authorId: "MarcusAurelius",
      quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Do not act as if you had ten thousand years to throw away. Death stands at your elbow. Be good for something while you live and it is in your power."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Accept whatever comes to you woven in the pattern of your destiny, for what could more aptly fit your needs?"
    },
    {
      authorId: "MarcusAurelius",
      quote: "Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Regain your senses, call yourself back, and once again wake up. Now that you realize that only dreams were troubling you, view this 'reality' as you view your dreams."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Regain your senses, call yourself back, and once again wake up. Now that you realize that only dreams were troubling you, view this 'reality' as you view your dreams."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The happiness of those who want to be popular depends on others."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The happiness of those who want to be popular depends on others."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The happiness of those who seek pleasure fluctuates with moods outside their control."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The happiness of the wise grows out of their own free acts."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The memory of everything is very soon overwhelmed in time."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Nowhere can man find a quieter or more untroubled retreat than in his own soul."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Observe always that everything is the result of change, and get used to thinking that there is nothing Nature loves so well as to change existing forms and make new ones like them."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Confine yourself to the present."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Death smiles at us all; all we can do is smile back."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Be like the cliff against which the waves continually break; but it stands firm and tames the fury of the water around it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Concentrate every minute like a Roman — like a man — on doing what's in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions."
    },
    {
      authorId: "MarcusAurelius",
      quote: "No one can lose either the past or the future - how could anyone be deprived of what he does not possess?"
    },
    {
      authorId: "MarcusAurelius",
      quote: "The art of living is more like wrestling than dancing."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Misfortune nobly born is good fortune."
    },
    {
      authorId: "MarcusAurelius",
      quote: "A man must stand erect, not be kept erect by others."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Do not disturb yourself by picturing your life as a whole."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Every living organism is fulfilled when it follows the right path for its own nature."
    },
    {
      authorId: "MarcusAurelius",
      quote: "I was once a fortunate man but at some point fortune abandoned me. But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions"
    },
    {
      authorId: "MarcusAurelius",
      quote: "What we cannot bear removes us from life; what remains can be borne."
    },
    {
      authorId: "MarcusAurelius",
      quote: "No man is happy who does not think himself so."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Life is opinion."
    },
    {
      authorId: "MarcusAurelius",
      quote: "The blazing fire makes flames and brightness out of everything thrown into it."
    },
    {
      authorId: "MarcusAurelius",
      quote: "All things fade and quickly turn to myth."
    },
    {
      authorId: "MarcusAurelius",
      quote: "All things of the body stream away like a river, all things of the mind are dreams and delusion; life is warfare, and a visit to a strange land; the only lasting fame is oblivion."
    },
    {
      authorId: "MarcusAurelius",
      quote: "At dawn, when you have trouble getting out of bed, tell yourself: 'I have to go to work as a human being.'"
    },
    {
      authorId: "MarcusAurelius",
      quote: "Be tolerant with others and strict with yourself."
    },
    {
      authorId: "MarcusAurelius",
      quote: "Everything - a horse, a vine - is created for some duty... For what task, then, were you yourself created?"
    },
    {
      authorId: "Cicero",
      quote: "Not for ourselves alone are we born."
    },
    {
      authorId: "Cicero",
      quote: "If we are not ashamed to think it, we should not be ashamed to say it."
    },
    {
      authorId: "Cicero",
      quote: "It is not by muscle, speed, or physical dexterity that great things are achieved, but by reflection, force of character, and judgment."
    },
    {
      authorId: "Cicero",
      quote: "We must not say every mistake is a foolish one."
    },
    {
      authorId: "Cicero",
      quote: "It is foolish to tear one's hair in grief, as though sorrow would be made less by baldness."
    },
    {
      authorId: "Cicero",
      quote: "It is a great thing to know your vices."
    },
    {
      authorId: "Cicero",
      quote: "I am not ashamed to confess I am ignorant of what I do not know."
    },
    {
      authorId: "Cicero",
      quote: "The function of wisdom is to discriminate between good and evil."
    },
    {
      authorId: "Cicero",
      quote: "Any man can make mistakes, but only an idiot persists in his error."
    },
    {
      authorId: "Cicero",
      quote: "It is the peculiar quality of a fool to perceive the faults of others and to forget his own."
    },
    {
      authorId: "Cicero",
      quote: "Diseases of the soul are more dangerous and more numerous than those of the body."
    },
    {
      authorId: "Cicero",
      quote: "It is our own evil thoughts which madden us."
    },
    {
      authorId: "Cicero",
      quote: "Cultivation of the mind is as necessary as food to the body."
    },
    {
      authorId: "Cicero",
      quote: "He only employs his passion who can make no use of his reason."
    },
    {
      authorId: "Cicero",
      quote: "The mind becomes accustomed to things by the habitual sight of them, and neither wonders nor inquires about the reasons for things it sees all the time."
    },
    {
      authorId: "Cicero",
      quote: "Silence is one of the great arts of conversation."
    },
    {
      authorId: "Socrates",
      quote: "The unexamined life is not worth living."
    },
    {
      authorId: "Socrates",
      quote: "To find yourself, think for yourself."
    },
    {
      authorId: "Socrates",
      quote: "He who is not contented with what he has, would not be contented with what he would like to have."
    },
    {
      authorId: "Socrates",
      quote: "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."
    },
    {
      authorId: "Socrates",
      quote: "Know thyself."
    },
    {
      authorId: "Socrates",
      quote: "Contentment is natural wealth, luxury is artificial poverty."
    },
    {
      authorId: "Socrates",
      quote: "Death may be the greatest of all human blessings."
    },
    {
      authorId: "Socrates",
      quote: "Do not do to others what angers you if done to you by others."
    },
    {
      authorId: "Socrates",
      quote: "I am not an Athenian or a Greek, but a citizen of the world."
    },
    {
      authorId: "Socrates",
      quote: "Every action has its pleasures and its price."
    },
    {
      authorId: "Socrates",
      quote: "Prefer knowledge to wealth, for the one is transitory, the other perpetual."
    },
    {
      authorId: "Socrates",
      quote: "We cannot live better than in seeking to become better."
    },
    {
      authorId: "Socrates",
      quote: "Beware the barrenness of a busy life."
    },
    {
      authorId: "Socrates",
      quote: "Be as you wish to seem."
    },
    {
      authorId: "Socrates",
      quote: "Thou shouldst eat to live; not live to eat."
    },
    {
      authorId: "Socrates",
      quote: "The greatest way to live with honour in this world is to be what we pretend to be."
    },
    {
      authorId: "Socrates",
      quote: "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us."
    },
    {
      authorId: "Socrates",
      quote: "From the deepest desires often come the deadliest hate."
    },
    {
      authorId: "Socrates",
      quote: "If you want to be a good saddler, saddle the worst horse; for if you can tame one, you can tame all."
    },
    {
      authorId: "Socrates",
      quote: "The easiest and noblest way is not to be crushing others, but to be improving yourselves."
    },
    {
      authorId: "Socrates",
      quote: "Be of good cheer about death, and know this of a truth, that no evil can happen to a good man, either in life or after death."
    },
    {
      authorId: "Socrates",
      quote: "The mind is everything; what you think you become."
    },
    {
      authorId: "Socrates",
      quote: "The misuse of language induces evil in the soul."
    },
    {
      authorId: "Socrates",
      quote: "Wisdom begins in wonder."
    },
    {
      authorId: "Diogenes",
      quote: "It is the privilege of the Gods to want nothing, and of Godlike men to want little."
    },
    {
      authorId: "Diogenes",
      quote: "I am a citizen of the world."
    },
    {
      authorId: "Diogenes",
      quote: "No man is hurt but by himself."
    },
    {
      authorId: "Diogenes",
      quote: "If I gained one thing from philosophy is that at the very least, I am well prepared to confront any change in fortune."
    },
    {
      authorId: "Diogenes",
      quote: "The insult dishonors the one who infers it, not the one who receives it."
    },
    {
      authorId: "Diogenes",
      quote: "We come into the world alone and we die alone. Why, in life, should we be any less alone?"
    },
    {
      authorId: "Diogenes",
      quote: "People who talk well but do nothing are like musical intruments; the sound is all they have to offer."
    },
    {
      authorId: "Diogenes",
      quote: "You will become a teacher of yourself when for the same things that you blame others, you also blame yourself."
    },
    {
      authorId: "Diogenes",
      quote: "To become self-educated you should condemn yourself for all those things that you would criticize others."
    },
    {
      authorId: "Diogenes",
      quote: "Even if I am but a pretender to wisdom, that in itself is philosophy."
    },
    {
      authorId: "Diogenes",
      quote: "When I look upon seamen, men of science and philosophers, man is the wisest of all beings; when I look upon priests and prophets nothing is as contemptible as man."
    },
    {
      authorId: "Diogenes",
      quote: "We have complicated every simple gift of the Gods."
    },
    {
      authorId: "Diogenes",
      quote: "Man is the most intelligent of the animals - and the most silly."
    },
    {
      authorId: "Epictetus",
      quote: "But it is within your power to avoid disappointment, by directing your desires to things that are rightfully yours to obtain and control."
    },
    {
      authorId: "Epictetus",
      quote: "It is a measure of the effort we are prepared to expend to guard against deception when accuracy is at a premium."
    },
    {
      authorId: "Epictetus",
      quote: "Two elements are combined in our creation, the body, which we have in common with the beasts; and reason and good judgement, which we share with the gods."
    },
    {
      authorId: "Epictetus",
      quote: "We must endure, and toil without complaining."
    },
    {
      authorId: "Epictetus",
      quote: "Practice saying to every harsh appearance, You are an appearance, and in no manner what you appear to be."
    },
    {
      authorId: "Epictetus",
      quote: "there is but one way to freedom - to despise what is not in our power."
    },
    {
      authorId: "Epictetus",
      quote: "True peace is characterized by nothing so much as steadiness and imperturbability."
    },
    {
      authorId: "Epictetus",
      quote: "Diogenes says somewhere that one way to guarantee freedom is to be ready to die."
    },
    {
      authorId: "Epictetus",
      quote: "This is the road that leads to liberty, the only road that delivers us from slavery: finally to be able to say, with meaning: Lead me, Zeus, lead me, Destiny, to the goal I was long ago assigned."
    },
    {
      authorId: "Epictetus",
      quote: "Consider at what price you sell your integrity; but please, for God's sake, don't sell it cheap."
    },
    {
      authorId: "Epictetus",
      quote: "Consider at what price you sell your integrity; but please, for God's sake, don't sell it cheap."
    },
    {
      authorId: "Epictetus",
      quote: "When the soul cries out, it is a sign that we have arrived at a necessary, mature stage of self-reflection. The secret is not to get stuck there dithering or wringing your hands, but to move forward by resolving to heal yourself."
    },
    {
      authorId: "Epictetus",
      quote: "'It's only my leg you will chain, not even God can conquer my will.' 'I will throw you into prison.' 'Correction - it is my body you will throw there."
    },
    {
      authorId: "Epictetus",
      quote: "Life is a piece of music, and you're supposed to be dancing"
    },
    {
      authorId: "Epictetus",
      quote: "If you learn that someone is speaking ill of you, don't try to defend yourself against the rumours; respond instead with, 'Yes, and he doesn't know the half of it, because he could have said more"
    },
    {
      authorId: "England",
      quote: "A little learning is a dangerous thing."
    },
    {
      authorId: "England",
      quote: "An apple a day keeps the doctor away."
    },
    {
      authorId: "England",
      quote: "It is a poor workman who blames his tools."
    },
    {
      authorId: "England",
      quote: "You can lead a horse to water, but you can't make him drink."
    },
    {
      authorId: "England",
      quote: "You can't make an omelet without breaking some eggs."
    },
    {
      authorId: "England",
      quote: "All that glitters is not gold."
    },
    {
      authorId: "England",
      quote: "Beggars can't be choosers."
    },
    {
      authorId: "England",
      quote: "Beggars can't be choosers."
    },
    {
      authorId: "England",
      quote: "A bird in the hand is worth two in the bush."
    },
    {
      authorId: "England",
      quote: "Better safe than sorry."
    },
    {
      authorId: "England",
      quote: "When in Rome, do as the Romans do."
    },
    {
      authorId: "England",
      quote: "Don't count your chickens before they hatch."
    },
    {
      authorId: "England",
      quote: "Every cloud has a silver lining."
    },
    {
      authorId: "England",
      quote: "A journey of a thousand miles begins with a single step."
    },
    {
      authorId: "England",
      quote: "Necessity is the mother of invention."
    },
    {
      authorId: "England",
      quote: "Two wrongs don't make a right."
    },
    {
      authorId: "England",
      quote: "Rome wasn't built in a day."
    },
    {
      authorId: "England",
      quote: "Time waits for no one."
    },
    {
      authorId: "England",
      quote: "Too many cooks spoil the broth."
    },
    {
      authorId: "England",
      quote: "When there's smoke, there's fire."
    },
    {
      authorId: "England",
      quote: "A dog is a man's best friend."
    },
    {
      authorId: "England",
      quote: "Action speaks louder than words."
    },
    {
      authorId: "England",
      quote: "A fool and his money are soon parted."
    },
    {
      authorId: "England",
      quote: "A jack of all trades is master of none."
    },
    {
      authorId: "England",
      quote: "A leopard doesn't change its spots."
    },
    {
      authorId: "England",
      quote: "All is well that ends well."
    },
    {
      authorId: "England",
      quote: "An empty vessel makes much noise."
    },
    {
      authorId: "England",
      quote: "An idle brain is devil's workshop."
    },
    {
      authorId: "England",
      quote: "A rolling stone gathers no moss."
    },
    {
      authorId: "England",
      quote: "As you sow, so you shall reap."
    },
    {
      authorId: "England",
      quote: "A thing begun is half done."
    },
    {
      authorId: "England",
      quote: "A tree is known by its fruit."
    },
    {
      authorId: "England",
      quote: "Barking dogs seldom bite."
    },
    {
      authorId: "England",
      quote: "Better late than never."
    },
    {
      authorId: "England",
      quote: "Cowards die many times before their death."
    },
    {
      authorId: "England",
      quote: "Different strokes for different folks."
    },
    {
      authorId: "England",
      quote: "Don't bite the hand that feeds you."
    },
    {
      authorId: "England",
      quote: "Don't cast pearls before swine."
    },
    {
      authorId: "England",
      quote: "Cross the bridge when you come to it."
    },
    {
      authorId: "England",
      quote: "Don't judge a book by its cover."
    },
    {
      authorId: "England",
      quote: "The early bird catches the worm."
    },
    {
      authorId: "England",
      quote: "Every dog has his day."
    },
    {
      authorId: "England",
      quote: "Every horse thinks its own pack is heaviest."
    },
    {
      authorId: "England",
      quote: "Familiarity breeds contempt."
    },
    {
      authorId: "England",
      quote: "Fools rush in where angels fear to tread."
    },
    {
      authorId: "England",
      quote: "Fortune favors the brave."
    },
    {
      authorId: "England",
      quote: "Get out while the going is good."
    },
    {
      authorId: "England",
      quote: "God helps those who help themselves."
    },
    {
      authorId: "England",
      quote: "God helps those who help themselves."
    },
    {
      authorId: "England",
      quote: "Home is where the heart is."
    },
    {
      authorId: "England",
      quote: "Honesty is the best policy."
    },
    {
      authorId: "England",
      quote: "Hope for the best, but prepare for the worst."
    },
    {
      authorId: "England",
      quote: "If you play with fire, you'll get burned."
    },
    {
      authorId: "England",
      quote: "If you want peace, prepare for war."
    },
    {
      authorId: "England",
      quote: "Imitation is the sincerest form of flattery."
    },
    {
      authorId: "England",
      quote: "It's better to be safe than sorry."
    },
    {
      authorId: "England",
      quote: "It's never too late to mend."
    },
    {
      authorId: "England",
      quote: "It takes two to make a quarrel."
    },
    {
      authorId: "England",
      quote: "Laughter is the best medicine."
    },
    {
      authorId: "England",
      quote: "Learn to walk before you run."
    },
    {
      authorId: "England",
      quote: "Let sleeping dogs lie."
    },
    {
      authorId: "England",
      quote: "Let sleeping dogs lie."
    },
    {
      authorId: "England",
      quote: "Look before you leap."
    },
    {
      authorId: "England",
      quote: "Make hay while the sun shines."
    },
    {
      authorId: "England",
      quote: "Money doesn't grow on trees."
    },
    {
      authorId: "England",
      quote: "Never put off until tomorrow what you can do today."
    },
    {
      authorId: "England",
      quote: "Night brings counsel."
    },
    {
      authorId: "England",
      quote: "No gain without pain."
    },
    {
      authorId: "England",
      quote: "Politeness costs little but yields much."
    },
    {
      authorId: "England",
      quote: "Practice makes perfect."
    },
    {
      authorId: "England",
      quote: "Practice what you preach."
    },
    {
      authorId: "England",
      quote: "Silence is half consent."
    },
    {
      authorId: "England",
      quote: "Slow and steady wins the race."
    },
    {
      authorId: "England",
      quote: "Smooth seas do not make skillful sailors."
    },
    {
      authorId: "England",
      quote: "Still water runs deep."
    },
    {
      authorId: "England",
      quote: "Strike while the iron is hot."
    },
    {
      authorId: "England",
      quote: "The only free cheese is in the mousetrap."
    },
    {
      authorId: "England",
      quote: "There are many paths to the top of the mountain, but the view is always the same."
    },
    {
      authorId: "England",
      quote: "There is no time like the present."
    },
    {
      authorId: "England",
      quote: "There is truth in wine."
    },
    {
      authorId: "England",
      quote: "The road to hell is paved with good intentions."
    },
    {
      authorId: "England",
      quote: "The tongue is but three inches long, yet it can kill a man six feet tall."
    },
    {
      authorId: "England",
      quote: "Time and tide wait for no man."
    },
    {
      authorId: "England",
      quote: "Where there's a will, there's a way."
    },
    {
      authorId: "England",
      quote: "While the cat's away, the mice will play."
    },
    {
      authorId: "England",
      quote: "Words must be weighed, not counted."
    },
    {
      authorId: "England",
      quote: "Hunger drives the wolf out of the wood."
    },
    {
      authorId: "England",
      quote: "A house divided cannot stand."
    },
    {
      authorId: "England",
      quote: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime."
    },
    {
      authorId: "England",
      quote: "Corporations have neither bodies to be punished nor souls to be damned."
    },
    {
      authorId: "England",
      quote: "One law for the rich and another for the poor."
    },
    {
      authorId: "England",
      quote: "It's no use crying over spilt milk."
    },
    {
      authorId: "England",
      quote: "Forgive and forget."
    },
    {
      authorId: "Jesus",
      quote: "Do not let your hearts be troubled. Trust in God; trust also in me."
    },
    {
      authorId: "Jesus",
      quote: "And know that I am with you always; yes, to the end of time."
    },
    {
      authorId: "Jesus",
      quote: "But I say to you, Love your enemies and pray for those who persecute you, so that you may be sons of your Father in heaven; for he makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust."
    },
    {
      authorId: "Jesus",
      quote: "For what shall it profit a man, if he gains the whole world, and suffers the loss of his soul?"
    },
    {
      authorId: "Jesus",
      quote: "A new command I give you: Love one another. As I have loved you, so you must love one another."
    },
    {
      authorId: "Jesus",
      quote: "For God so loved the World that he gave his only Son, that whoever believes in him should not perish but have eternal life."
    },
    {
      authorId: "Jesus",
      quote: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knows, the door will be opened."
    },
    {
      authorId: "Jesus",
      quote: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."
    },
    {
      authorId: "Jesus",
      quote: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."
    },
    {
      authorId: "Jesus",
      quote: "Love the Lord your God with all of your heart, all of your soul and all of your mind."
    },
    {
      authorId: "Jesus",
      quote: "For whoever does the will of my Father in heaven is my brother and sister and mother."
    },
    {
      authorId: "Jesus",
      quote: "Whoever wants to be first must be a slave of all."
    },
    {
      authorId: "Jesus",
      quote: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for the many."
    },
    {
      authorId: "Jesus",
      quote: "For those who exalt themselves will be humbled, and those who humble themselves will be exalted."
    },
    {
      authorId: "Jesus",
      quote: "When you stand praying, if you hold anything against anyone, forgive them, so that your Father in heaven may forgive you your sins."
    },
    {
      authorId: "Jesus",
      quote: "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."
    },
    {
      authorId: "Jesus",
      quote: "Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me."
    },
    {
      authorId: "Jesus",
      quote: "Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst. Indeed the water I give them will become in them a spring of water welling up to eternal life."
    },
    {
      authorId: "Jesus",
      quote: "I am the way, the truth, and the life."
    },
    {
      authorId: "Jesus",
      quote: "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."
    },
    {
      authorId: "Jesus",
      quote: "Whoever wants to be my disciple must deny themselves and take up their cross and follow me."
    },
    {
      authorId: "Jesus",
      quote: "It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners to repentance."
    },
    {
      authorId: "Jesus",
      quote: "So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets."
    },
    {
      authorId: "Jesus",
      quote: "Love your neigbour as yourself."
    },
    {
      authorId: "Jesus",
      quote: "Take heart; I have overcome the World."
    },
    {
      authorId: "Jesus",
      quote: "For my yoke is easy and my burden is light."
    },
    {
      authorId: "Jesus",
      quote: "With man this is impossible, but with God all things are possible."
    },
    {
      authorId: "Jesus",
      quote: "It is finished."
    },
    {
      authorId: "Jesus",
      quote: "He that is without sin among you, let him cast the first stone."
    },
    {
      authorId: "Jesus",
      quote: "My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."
    },
    {
      authorId: "Jesus",
      quote: "Except a man be born again, he cannot see the kingdom of God."
    },
    {
      authorId: "Jesus",
      quote: "Seek first the kingdom of God, and his righteousness; and all these things shall be added unto you."
    },
    {
      authorId: "Jesus",
      quote: "I am the good shepherd: the good shepherd gives his life for the sheep."
    },
    {
      authorId: "Jesus",
      quote: "I have told you these things, so that in me you may have peace. In this world, you will have trouble. But take heart! I have overcome the world."
    },
    {
      authorId: "Jesus",
      quote: "Don't worry about tomorrow, for tomorrow will bring its own worries. Today's trouble is enough for you today."
    },
    {
      authorId: "Jesus",
      quote: "You have said it, and in the future, you will see the Son of Man seated in the place of power at God's right hand and coming on the clouds of Heaven."
    },
    {
      authorId: "Jesus",
      quote: "My Kingdom is not an earthly kingdom. If it were, my followers would fight to keep me from being handed over to the Jewish leaders. But my Kingdom is not of this world."
    },
    {
      authorId: "Bible",
      quote: "He only is my rock and my salvaion, my fortress; I shall not be shaken."
    },
    {
      authorId: "Bible",
      quote: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
    },
    {
      authorId: "Bible",
      quote: "For we walk by faith, not by sight."
    },
    {
      authorId: "Bible",
      quote: "So be careful to live your life wisely, not foolishly."
    },
    {
      authorId: "Bible",
      quote: "Don't you know that you yourselves are God's temple and that God's spirit dwells in your midst?"
    },
    {
      authorId: "Bible",
      quote: "Cast all your anxiety on him because he cares for you."
    },
    {
      authorId: "Bible",
      quote: "I can do everything through him who gives me strength."
    },
    {
      authorId: "Bible",
      quote: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud."
    },
    {
      authorId: "Bible",
      quote: "You will seek me and find me, when you seek me with all your heart."
    },
    {
      authorId: "Bible",
      quote: "A time to love and a time to hate, a time for war and a time for peace."
    },
    {
      authorId: "Bible",
      quote: "Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the Lord will be my light."
    },
    {
      authorId: "Bible",
      quote: "Praise be to the Lord my Rock, who trains my hands for war, my fingers for battle."
    },
    {
      authorId: "Bible",
      quote: "He is my loving God and my fortress, my stronghold and my deliverer, my shield, in whom I take refuge, who subdues peoples under me."
    },
    {
      authorId: "Bible",
      quote: "Lord, what are human beings, that you care for them, mere mortals that you think of them? They are like a breath; their days are like a fleeting shadow."
    },
    {
      authorId: "Bible",
      quote: "When the time is right, I, the Lord, will make it happen."
    },
    {
      authorId: "Bible",
      quote: "I am he who will sustain you."
    },
    {
      authorId: "Bible",
      quote: "I am who I am."
    },
    {
      authorId: "Bible",
      quote: "So do not fear, for I am with you; do not be dismayed, for I am your God, I will strengthem you and help you; I will uphold you with my righteous right hand."
    },
    {
      authorId: "Bible",
      quote: "The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom."
    },
    {
      authorId: "Bible",
      quote: "He gives power to the faint, and to them that have no might he increases strength, even the youths shall falter and be weary, and the young man shall utterly fall: but they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run and not be weary; and they shall walk and not falter."
    },
    {
      authorId: "Bible",
      quote: "There is a time to speak and a time to be silent."
    },
    {
      authorId: "Bible",
      quote: "Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!"
    },
    {
      authorId: "Bible",
      quote: "When you go through deep waters, I will be with you."
    },
    {
      authorId: "Bible",
      quote: "Faith can move mountains."
    },
    {
      authorId: "Bible",
      quote: "If God is for us, who can be against us?"
    },
    {
      authorId: "Bible",
      quote: "God is our refuge and strength, a very present help in trouble."
    },
    {
      authorId: "Bible",
      quote: "He gives strength to the weary and increases the power of the weak."
    },

  ];

  quotesSubject: Subject<quote[]> = new Subject();
  authorsSubject: Subject<author[]> = new Subject();

  constructor() {
    let authors: any = localStorage.getItem("authors");
    if (authors) {
      this.authors = JSON.parse(authors);
    }
  }

  setAuthorsAsLocalStorage(authors: author[]) {
    localStorage.removeItem("authors");
    localStorage.setItem("authors", JSON.stringify(authors));
  }

  getAuthors() {
    this.authorsSubject.next(this.authors);
  }

  getQuotes() {
    this.quotesSubject.next(this.quotes);
  }
}

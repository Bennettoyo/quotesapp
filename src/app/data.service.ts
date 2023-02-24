import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { author } from './interfaces/author';
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
      info: ["Marcus Aurelius Antoninus was Roman emperor from 161 to 180 AD and a Stoic philosopher.", "He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace, calmness and stability for the Roman Empire lasting from 27 BC to 180 AD."],
      img: "assets/marcus-aurelius-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "MiyamotoMusashi",
      author: "Miyamoto Musashi",
      desc: "Ronin",
      info: ["Miyamoto Musashi, also known as Shinmen Takezō, Miyamoto Bennosuke or, by his Buddhist name, Niten Dōraku, was a Japanese swordsman, philosopher, strategist, writer and rōnin.", "He became renowned through stories of his unique double-bladed swordsmanship and undefeated record in his 61 duels."],
      img: "assets/miyamoto-musashi-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Epictetus",
      author: "Epictetus",
      desc: "Slave Philosopher",
      info: ["Epictetus was a Greek Stoic philosopher. He was born into slavery at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life.", "His teachings were written down and published by his pupil Arrian in his Discourses and Enchiridion."],
      img: "assets/epictetus-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Seneca",
      author: "Seneca",
      desc: "Roman Philosopher",
      info: ["Lucius Annaeus Seneca the Younger, usually known mononymously as Seneca, was a Stoic philosopher of Ancient Rome, a statesman, dramatist, and, in one work, satirist, from the post-Augustan age of Latin literature."],
      img: "assets/seneca-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "CatoTheYounger",
      author: "Cato",
      desc: "Roman Senator",
      info: ["Marcus Porcius Cato 'Uticensis', also known as Cato the Younger, was an influential conservative Roman senator during the late Republic.", "His conservative principles were focused on the preservation of what he saw as old Roman values in decline."],
      img: "assets/cato-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "MusoniusRufus",
      author: "Musonius Rufus",
      desc: "Roman Philosopher",
      info: ["Gaius Musonius Rufus was a Roman Stoic philosopher of the 1st century AD.", "He taught philosophy in Rome during the reign of Nero and so was sent into exile in 65 AD, returning to Rome only under Galba."],
      img: "assets/musonius-rufus-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Cleanthes",
      author: "Cleanthes",
      desc: "Greek philosopher",
      info: ["Cleanthes, of Assos, was a Greek Stoic philosopher and boxer who was the successor to Zeno of Citium as the second head of the Stoic school in Athens.", "Originally a boxer, he came to Athens where he took up philosophy, listening to Zeno's lectures. He supported himself by working as a water-carrier at night."],
      img: "assets/cleanthes-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Zeno",
      author: "Zeno of Citium",
      desc: "Greek philosopher",
      info: ["Zeno of Citium was a Hellenistic philosopher from Citium, Cyprus. Zeno was the founder of the Stoic school of philosophy, which he taught in Athens from about 300 BC."],
      img: "assets/zeno-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Plato",
      author: "Plato",
      desc: "Greek philosopher",
      info: ["Plato was a Ancient Greek philosopher born in Athens during the Classical period in Ancient Greece.", "He founded the Platonist school of thought and the Academy, the first institution of higher learning on the European continent."],
      img: "assets/plato-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Epicurus",
      author: "Epicurus",
      desc: "Greek philosopher",
      info: ["Epicurus was an ancient Greek philosopher and sage who founded Epicureanism, a highly influential school of philosophy.", "He was born on the Greek island of Samos to Athenian parents."],
      img: "assets/epicurus-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Cicero",
      author: "Cicero",
      desc: "Roman Statesman",
      info: ["Marcus Tullius Cicero was a Roman statesman, lawyer, scholar, philosopher, and academic skeptic.", "He tried to uphold optimate principles during the political crises that led to the establishment of the Roman Empire."],
      img: "assets/cicero-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Socrates",
      author: "Socrates",
      desc: "Greek Philosopher",
      info: ["Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought."],
      img: "assets/socrates-avatar.jpg",
      showQuotes: true
    },
    {
      authorId: "Diogenes",
      author: "Diogenes",
      desc: "Greek Philosopher",
      info: ["Diogenes, also known as Diogenes the Cynic or Diogenes of Sinope, was a Greek philosopher and one of the founders of Cynicism.", "He was born in Sinope, an Ionian colony on the Black Sea coast of Anatolia in 412 or 404 BC and died at Corinth in 323 BC. Diogenes was a controversial figure."],
      img: "assets/diogenes-avatar.jpg",
      showQuotes: true
    },
  ];

  quotes: quote[] = [
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
      quote: "If a man neglects education, he walks lame to the end of his life."
    },
    {
      authorId: "Plato",
      quote: "And what, Socrates, is the food of the soul? Surely, I said, knowledge is the food of the soul."
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
      quote: "Concentrate every minute like a Roman— like a man— on doing what's in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions."
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
      quote: "To be rather than to seem."
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
      quote: "Be slow to fall into friendship, but when you are in, continue firm and constant."
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
      quote: "My friend...care for your psyche...know thyself, for once we know ourselves, we may learn how to care for ourselves."
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
      quote: "Those who are hardest to love need it the most."
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
      quote: "I have nothing to ask but that you would remove to the other side, that you may not, by intercepting the sunshine, take from me what you cannot give."
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
      quote: "If only it was as easy to banish hunger by rubbing the belly as it is to masturbate."
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
      quote: "We are more curious about the meaning of dreams than about things we see when awake."
    },
    {
      authorId: "Diogenes",
      quote: "Man is the most intelligent of the animals - and the most silly."
    },
  ];

  quotesSubject: Subject<quote[]> = new Subject();
  authorsSubject: Subject<author[]> = new Subject();

  constructor() { }

  setAuthorsAsLocalStorage(authors: author[]) {
    localStorage.removeItem("authors");
    localStorage.setItem("authors", JSON.stringify(authors));
  }

  setQuotes(quotes: quote[]) {
    this.quotesSubject.next(quotes);
  }

  setAuthor(authors: author[]) {
    this.authorsSubject.next(authors);
  }

  getAuthors() {
    let authors: any = localStorage.getItem("authors");
    if (authors) {
      authors = JSON.parse(authors);
    } else {
      authors = this.authors;
    }
    return authors;
  }

}

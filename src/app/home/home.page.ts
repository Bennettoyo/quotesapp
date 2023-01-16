import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;
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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { book } from '@shared/api-interfaces';

@Injectable()
export class AppService {
  private books: book[] = books;

  getBooks(): book[] {
    return this.books;
  }

  getBook(id: number): book {
    const book = this.books.find((bookEl) => bookEl.id == id);
    if (book) {
      return book;
    }
    throw new BadRequestException('The book wasnt found in record');
  }
}

const books: book[] = [
  {
    id: 1,
    name: 'The Phoenix Project',
    description:
      'Bill is an IT manager at Parts Unlimited. Its Tuesday morning and on his drive into the office, Bill gets a call from the CEO. The companys new IT initiative, code named Phoenix Project, is critical to the future of Parts Unlimited, but the project is massively over budget and very late. The CEO wants Bill to report directly to him and fix the mess in ninety days or else Bills entire department will be outsourced. With the help of a prospective board member and his mysterious philosophy of The Three Ways, Bill starts to see that IT work has more in common with manufacturing plant work than he ever imagined. With the clock ticking, Bill must organize work flow streamline interdepartmental communications, and effectively serve the other business functions at Parts Unlimited. In a fast-paced and entertaining style, three luminaries of the DevOps movement deliver a story that anyone who works in IT will recognize. Readers will not only learn how to improve their own IT organizations, theyll never view IT the same way again.',
    price: 7.99,
    img: 'https://m.media-amazon.com/images/I/5170sr05QAL.jpg',
    rating: 3.5,
  },
  {
    id: 2,
    name: 'The Unicorn Project',
    description:
      'In The Unicorn Project, we follow Maxine, a senior lead developer and architect, as she is exiled to the Phoenix Project, to the horror of her friends and colleagues, as punishment for contributing to a payroll outage. She tries to survive in what feels like a heartless and uncaring bureaucracy and to work within a system where no one can get anything done without endless committees, paperwork, and approvals. One day, she is approached by a ragtag bunch of misfits who say they want to overthrow the existing order, to liberate developers, to bring joy back to technology work, and to enable the business to win in a time of digital disruption. To her surprise, she finds herself drawn ever further into this movement, eventually becoming one of the leaders of the Rebellion, which puts her in the crosshairs of some familiar and very dangerous enemies. The Age of Software is here, and another mass extinction event looms--this is a story about rebel developers and business leaders working together, racing against time to innovate, survive, and thrive in a time of unprecedented uncertainty...and opportunity.',
    price: 9.99,
    img: 'https://m.media-amazon.com/images/I/51jkkeU8HvL._SY346_.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Harry Potter and the Philosophers Stone',
    description:
      'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harrys eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
    price: 7.99,
    img: 'https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Harry Potter and the Prisoner of Azkaban',
    description:
      'When the Knight Bus crashes through the darkness and screeches to a halt in front of him, its the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harrys tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss... Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.',
    price: 5.99,
    img: 'https://m.media-amazon.com/images/I/51Dfqo6jR5L.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    name:
      'Egyptian Mythology: Explore The Mysterious Ancient Civilisation of Egypt',
    description:
      'And of all ancient civilizations, Egyptians rule supreme when it comes to mystery and fantasy...From the lavish colors of their papyruses to how they mastered building technology thousands of years before anyone else, and to the legends surrounding the lives and deaths of their kings. Egyptians are an eternal source of awe. Not only did they know how to build great structures, they also knew how to have fun. They loved beer and board games, they used makeup, and they allowed women more freedom than many other women in the ancient world. ',
    price: 11.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51YYjD8zS5L._SX331_BO1,204,203,200_.jpg',
    rating: 2.5,
  },
  {
    id: 6,
    name:
      'Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future',
    description:
      'South African born Elon Musk is the renowned entrepreneur and innovator behind PayPal, SpaceX, Tesla, and SolarCity. Musk wants to save our planet; he wants to send citizens into space, to form a colony on Mars; he wants to make money while doing these things; and he wants us all to know about it. He is the real-life inspiration for the Iron Man series of films starring Robert Downey Junior. The personal tale of Musk’s life comes with all the trappings one associates with a great, drama-filled story. He was a freakishly bright kid who was bullied brutally at school, and abused by his father. In the midst of these rough conditions, and the violence of apartheid South Africa, Musk still thrived academically and attended the University of Pennsylvania, where he paid his own way through school by turning his house into a club and throwing massive parties.',
    price: 13.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/5179mrE+WWL._SX312_BO1,204,203,200_.jpg',
    rating: 4,
  },
  {
    id: 7,
    name: 'Steve Jobs',
    description:
      'Based on more than forty interviews with Steve Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - this is the acclaimed, internationally bestselling biography of the ultimate icon of inventiveness. Walter Isaacson tells the story of the rollercoaster life and searingly intense personality of creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies,music, phones, tablet computing, and digital publishing. Although Jobs cooperated with this book, he asked for no control over what was written, nor even the right to read it before it was published. He put nothing off limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against.',
    price: 10.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41n1edvVlLL._SX317_BO1,204,203,200_.jpg',
    rating: 2,
  },
  {
    id: 8,
    name: 'What a Flanker',
    description:
      'In What A Flanker, Haskell sheds fresh light on the dynamics and the day-to-day of the game. Whether he’s recalling the most brutal team socials; dispelling the myths surrounding New Zealand’s dominance; introducing his Japanese teammates to manscaping or calling out play-acting in the modern game, no subject is off limits. Side-splittingly funny and ruthlessly honest, What A Flanker delves into the touring, drinking, training, eating and sometimes unconscionable antics of the professional rugby player. It’s an unforgettable read, even if there are some stories you’d rather forget…',
    price: 20.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41Mz510vwJL._SX323_BO1,204,203,200_.jpg',
    rating: 1,
  },
  {
    id: 9,
    name:
      'How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs',
    description:
      'Bill Gates has spent a decade investigating the causes and effects of climate change. With the help of experts in the fields of physics, chemistry, biology, engineering, political science, and finance, he has focused on what must be done in order to stop the planets slide toward certain environmental disaster. In this book, he not only explains why we need to work toward net-zero emissions of greenhouse gases, but also details what we need to do to achieve this profoundly important goal. He gives us a clear-eyed description of the challenges we face. Drawing on his understanding of innovation and what it takes to get new ideas into the market, he describes the areas in which technology is already helping to reduce emissions, where and how the current technology can be made to function more effectively, where breakthrough technologies are needed, and who is working on these essential innovations. Finally, he lays out a concrete, practical plan for achieving the goal of zero emissions-suggesting not only policies that governments should adopt, but what we as individuals can do to keep our government, our employers, and ourselves accountable in this crucial enterprise.',
    price: 3.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51A+RrABbJL._SX323_BO1,204,203,200_.jpg',
    rating: 1.5,
  },
  {
    id: 10,
    name:
      'The Little Book of Psychology: An Introduction to the Key Psychologists and Theories You Need to Know',
    description:
      'This illuminating little book will introduce you to the key thinkers, themes and theories you need to know to understand how the study of mind and behaviour has sculpted the world we live in and the way we think today.',
    price: 6.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41RSuF+RtsL._SY344_BO1,204,203,200_.jpg',
    rating: 3,
  },
  {
    id: 11,
    name:
      'The Curious Ape: The 25 Most Powerful Ideas from the Joe Rogan podcast',
    description:
      'How can we live longer? Do we live in a simulation? Does free will actually exist? The Curious Ape is an exploration of the most powerful ideas from guests on the Joe Rogan podcast. These guests include some of the world’s finest scientists, philosophers, investigative journalists, athletes and even whistle-blowers. These guests are often contrarians and their ideas challenge conventional wisdom. For too long we have been taught that the food pyramid is correct, the government does not read our messages and that antidepressants are the solution to depression. The ideas that lie within this book aim to disrupt big industry and big government. There are not only ideas about our society but the cosmos at large. Whether it be Neil deGrasse Tyson’s exploration of the cosmos to David Goggin’s exploration of the mind, this book navigates every domain you could imagine; nothing is off limits. Sex. Drugs. Power.',
    price: 12.99,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41RYg+IxMSL._SX331_BO1,204,203,200_.jpg',
    rating: 3,
  },
  {
    id: 12,
    name:
      'Essential Poker Math, Expanded Edition: Fundamental No-Limit Holdem Mathematics',
    description:
      ' Poker math is a vitally important aspect to No Limit Holdem poker, but its often overlooked or simply not used because many poker players fear it is too difficult to learn. Im here to tell you it is not. In fact, fundamental poker math is very easy to learn. More importantly, it can yield you a lot more profits at the poker table. Without using simple math at the poker table, you are simply playing a guessing game. In this book Ill teach you how to use simple arithmetic at the poker table to gain a huge skill advantage over your opponents that will allow you to win more and lose less. Poker players that dont use math are simply guessing and youll learn to no longer guess and know the correct mathematical move at the poker table. These simple mathematical concepts Ill be teaching you will drastically help improve your poker game and allow you to make the most profitable decisions at the poker.',
    price: 14.99,
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/51uZEZplCWL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    rating: 2,
  },
];

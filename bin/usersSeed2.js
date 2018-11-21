require('../dbmongo');
const mongoose = require('mongoose');
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;
  
const users = [
  {
    fullname: 'Rocío Lopez Quesada',
    username: 'hugo',
    password: 'hugo',
    email: 'BekmarzaMasaev@armyspy.com',
    city: 'Madrid',
    age: 29,
    category: 'Music',
    highlights: 'Food fan. Gamer. Alcoholaholic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Single Bed',
    transport: 'Seat Leon s.6',
    avatarUrl: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b703c6052b95e9f418a9025296bdc0c&auto=format&fit=crop&w=500&q=60',
    location: {
      type: {type: String},
      coordinates: [-3.709190, 40.416744]
    }
  },
  {
    fullname: 'Marta Campos Jijon',
    username: 'anna',
    password: 'anna',
    email: 'LukasFreud@rhyta.com',
    city: 'Madrid',
    age: 21,
    category: 'Other',
    highlights: 'Devoted twitter nerd. Gamer. Troublemaker. Music fanatic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Double Bed',
    transport: 'Seat Ibiza',
    avatarUrl: 'https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05f84c6cccdbace3c4b7d04fc85df9a6&auto=format&fit=crop&w=500&q=60',
    location: {
      type: {type: String},
      coordinates: [-3.711961, 40.412637]
    }
  },
  {
    fullname: 'Marina Martínez Casas',
    username: 'Luxual',
    password: 'ohch4ohXoo',
    email: 'Sages1934@jourrapide.com',
    city: 'Madrid',
    age: 23,
    category: 'Sports',
    highlights: 'Future teen idol. Pop culture specialist. Alcohol fanatic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Double Bed',
    transport: 'Seat Ibiza',
    avatarUrl: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=defcf01cd785ef042aa159c5b1681e14&auto=format&fit=crop&w=500&q=60',
    location: {
      type: {type: String},
      coordinates: [-3.710676, 40.409946]
    }
  },
  {
    fullname: 'Luisa Sánchez Perco',
    username: 'Blity1963',
    password: 'ohch4ohXoo',
    email: 'Sa323324@jourrapide.com',
    city: 'Madrid',
    age: 31,
    category: 'Culture',
    highlights: 'Certified alcohol guru. Avid introvert. Pop culture lover.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Couch',
    transport: 'Peugeot 307',
    avatarUrl: 'https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6b256ab85181b440dbd72eb4b1c297c&auto=format&fit=crop&w=500&q=60',
    location: {
      type: {type: String},
      coordinates: [-3.695133, 40.420818]
    }
  },
  {
    fullname: 'María Sánchez Agudo',
    username: 'Hathemand73',
    password: 'ahS5aex2S',
    email: 'MaximilianDahl@dayrep.com',
    city: 'Madrid',
    age: 33,
    category: 'Food',
    highlights: 'Internet lover. Extreme introvert. Wannabe beer geek.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 2,
    typeBeds: 'Couch',
    transport: 'Peugeot 206',
    avatarUrl: 'https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35fe1b3b9c76a4d39394697202e872e0&auto=format&fit=crop&w=500&q=60',
    location: {
      type: {type: String},
      coordinates: [-3.704483, 40.417168]
    }
  },
  {
    fullname: 'Aitana Agudo i Riera',
    username: 'jagu',
    password: 'law3lk5f',
    email: 'jagu@jagu.com',
    city: 'Barcelona',
    age: 25,
    category: 'Food',
    highlights: 'Extrovertido. Fiestero. Serio',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Double Bed',
    transport: 'Seat Ibiza',
    avatarUrl: 'https://images.unsplash.com/photo-1433954558247-ba7696b9af19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5224f7bddffe1086b76d2e480ab2444&auto=format&fit=crop&w=500&q=60',
    location: {
      type: {type: String},
      coordinates: [2.1905541, 41.3977417]
    }
  },
  {
    fullname: 'Monica Agudo i Riera',
    username: 'Monasdf',
    password: 'asldf34h65',
    email: 'mona@monica.com',
    city: 'Madrid',
    age: 25,
    category: 'Food',
    highlights: 'Internet lover. Extreme introvert. Wannabe beer geek.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Single Bed',
    transport: 'Seat Ibiza',
    avatarUrl: '/images/default-avatar.jpg',
    location: {
      type: {type: String},
      coordinates: [2.1905541, 41.3977417]
    }
  },
  {
    fullname: 'Nick Washington',
    username: 'Knounge',
    password: 'gaPee4eij',
    email: 'DagEngstrom@rhyta.com',
    city: 'Madrid',
    age: 19,
    category: 'Sports',
    highlights: 'Coffee lover. Bacon enthusiast. Devoted food practitioner.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 3,
    typeBeds: 'Single Bed',
    transport: 'Seat Leon',
    avatarUrl: '/images/default-avatar.jpg'
  },
  {
    fullname: 'Paul Newman',
    username: 'Pauli',
    password: 'jsfdgkjsfij',
    email: 'pauli@gmail.com',
    city: 'Barcelona',
    age: 40,
    category: 'Culture',
    highlights: 'Films lover. Extrovert. Love watching films',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Single Bed',
    transport: 'Renault Laguna',
    avatarUrl: '/images/default-avatar.jpg'
  },
  {
    fullname: 'Cristina González',
    username: 'Cristiviri',
    password: 'lkj4215hjkf',
    email: 'cristiviri@gmail.com',
    city: 'Barcelona',
    age: 28,
    category: 'Food',
    highlights: 'Tuna. Bacon. Cheese',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Couch',
    transport: 'Renault Laguna',
    avatarUrl: '/images/default-avatar.jpg'
  },
  {
    fullname: 'Luis López',
    username: 'Luisito',
    password: 'jlh564rwf',
    email: 'luisito@gmail.com',
    city: 'Barcelona',
    age: 23,
    category: 'Games',
    highlights: 'Age of empires II. Risk. Contact Strike',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 2,
    typeBeds: 'Couch',
    transport: 'Renault Laguna',
    avatarUrl: '/images/default-avatar.jpg'
  },
  {
    fullname: 'Anna Heshington',
    username: 'Annnn123',
    password: '2456ljfsf',
    email: 'anna1234j@gmail.com',
    city: 'Barcelona',
    age: 23,
    category: 'Culture',
    highlights: 'Architecture lover. Citysightseeing. ',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 2,
    typeBeds: 'Couch',
    transport: 'Renault Almera',
    avatarUrl: '/images/default-avatar.jpg'
  },
  {
    fullname: 'Anthony Hopkins',
    username: 'theSiLaBeR',
    password: '34HHJ6LKJ',
    email: 'anthonito@gmail.com',
    city: 'Barcelona',
    age: 26,
    category: 'Party',
    highlights: `Let's party dude!!!! `,
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNumber: 1,
    typeBeds: 'Single Bed',
    transport: 'Seat Ibiza',
    avatarUrl: '/images/default-avatar.jpg'
  }
];

users.forEach((user) => {
  const password = user.password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  user.password = hashedPassword;
});

User.create(users)
  .then((data) => {
    console.log('ok');
  })
  .then(data => mongoose.connection.close())
  .catch(error => {
    console.log(error);
  });

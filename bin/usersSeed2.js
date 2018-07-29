require('../dbmongo');
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;


const users = [
  {
    fullname: 'Hugo Lopez Jijon',
    username: 'Thimandind',
    password: 'Lo3eiChoo',
    email: 'BekmarzaMasaev@armyspy.com',
    city: 'Madrid',
    age: 29,
    category: 'Music',
    highlights: 'Food fan. Gamer. Alcoholaholic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNuber: 1,
    typeBeds: 'Single Bed',
    transport: 'Seat Leon s.6',
    avatarUrl: '../public/images/default-avatar.jpg'
  },
  {
    fullname: 'Raul Campos Jijon',
    username: 'Rauncam',
    password: 'Lhwh5sfhfsh3',
    email: 'LukasFreud@rhyta.com',
    city: 'Madrid',
    age: 21,
    category: 'Others',
    highlights: 'Devoted twitter nerd. Gamer. Troublemaker. Music fanatic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNuber: 1,
    typeBeds: 'Double Bed',
    transport: 'Seat Ibiza',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 1,
    typeBeds: 'Double Bed',
    transport: 'Seat Ibiza',
    avatarUrl: '../public/images/default-avatar.jpg'
  },
  {
    fullname: 'Luis Sánchez Perco',
    username: 'Blity1963',
    password: 'ohch4ohXoo',
    email: 'Sages1934@jourrapide.com',
    city: 'Madrid',
    age: 31,
    category: 'Culture',
    highlights: 'Certified alcohol guru. Avid introvert. Pop culture lover.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNuber: 1,
    typeBeds: 'Couch',
    transport: 'Peugeot 307',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 2,
    typeBeds: 'Couch',
    transport: 'Peugeot 206',
    avatarUrl: '../public/images/default-avatar.jpg'
  },
  {
    fullname: 'Joan Agudo i Riera',
    username: 'jagu',
    password: 'law3lk5f',
    email: 'jagu@jagu.com',
    city: 'Barcelona',
    age: 25,
    category: 'Food',
    highlights: 'Extrovertido. Fiestero. Serio',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNuber: 1,
    typeBeds: 'Double bed',
    transport: 'Seat Ibiza',
    avatarUrl: '../public/images/default-avatar.jpg'
  },
  {
    fullname: 'Monica Agudo i Riera',
    username: 'Mona',
    password: 'asldf34h65',
    email: 'mona@monica.com',
    city: 'Madrid',
    age: 25,
    category: 'Food',
    highlights: 'Internet lover. Extreme introvert. Wannabe beer geek.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    bedsNuber: 1,
    typeBeds: 'Single bed',
    transport: 'Seat Ibiza',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 3,
    typeBeds: 'Single bed',
    transport: 'Seat Leon',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 1,
    typeBeds: 'Single bed',
    transport: 'Renault Laguna',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 1,
    typeBeds: 'Couch',
    transport: 'Renault Laguna',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 2,
    typeBeds: 'Couch',
    transport: 'Renault Laguna',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 2,
    typeBeds: 'Couch',
    transport: 'Renault Almera',
    avatarUrl: '../public/images/default-avatar.jpg'
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
    bedsNuber: 1,
    typeBeds: 'Single Bed',
    transport: 'Seat Ibiza',
    avatarUrl: '../public/images/default-avatar.jpg'
  }
]


users.forEach((user) => {
  const password = user.password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  user.password = hashedPassword;
})


User.create(users)
  .then((data) => {
    console.log('ok')
    mongoose.connection.close()
  })
  .catch(error =>{
    console.log(error)
    mongoose.connection.close()
  })

require('../dbmongo');
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;


const users = [
  {
    username: 'Thimandind',
    password: 'Lo3eiChoo',
    email: 'BekmarzaMasaev@armyspy.com',
    city: 'Madrid',
    age: 29,
    highlights: 'Food fan. Gamer. Alcoholaholic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Lifer1987',
    password: 'kai1PeD8ph',
    email: 'LukasFreud@rhyta.com',
    city: 'Berlin',
    age: 23,
    highlights: 'Future teen idol. Pop culture specialist. Alcohol fanatic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  }, 
  {
    username: 'Reaver1933',
    password: 'pee7eeF5Boo',
    email: 'PorroSackville@dayrep.com',
    city: 'Barcelona',
    age: 25,
    highlights: 'Devoted twitter nerd. Gamer. Troublemaker. Music fanatic.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Sages1934',
    password: 'shaeVaeM9Ho',
    email: 'Sages1934@jourrapide.com',
    city: 'Paris',
    age: 28,
    highlights: 'Certified alcohol guru. Avid introvert. Pop culture lover.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Luxual',
    password: 'ohch4ohXoo',
    email: 'MohamedLindberg@jourrapide.com',
    city: 'Barcelona',
    age: 22,
    highlights: 'Certified alcohol guru. Avid introvert. Pop culture lover.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Blity1963',
    password: 'Jeemao6Do',
    email: 'AlenIvarsson@teleworm.us',
    city: 'Montreal',
    age: 21,
    highlights: 'Certified alcohol guru. Avid introvert. Pop culture lover.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Hathemand73',
    password: 'ahS5aex2S',
    email: 'MaximilianDahl@dayrep.com',
    city: 'Monaco',
    age: 29,
    highlights: 'Internet lover. Extreme introvert. Wannabe beer geek.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Knounge',
    password: 'gaPee4eij',
    email: 'DagEngstrom@rhyta.com',
    city: 'Madrid',
    age: 37,
    highlights: 'Coffee lover. Bacon enthusiast. Devoted food practitioner.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
  {
    username: 'Whered',
    password: 'Iem2aa0hah',
    email: 'AgatonSoderstrom@rhyta.com',
    city: 'Barcelona',
    age: 27,
    highlights: 'Coffee lover. Bacon enthusiast. Devoted food practitioner.',
    biography: 'Born in 1989 in Bulgaria and later immigrating to Canada, Nina Dobrev is a television and film actress. She got her start in the teen drama Degrassi: The Next Generation and left the show for an even bigger role as Elena Gilbert in the supernatural drama series The Vampire Diaries on The CW. On the big screen, Dobrev has appeared in The Perks of Being a Wallflower (2012), xXx: Return of Xander Cage (2017) and Flatliners (2017), among others. Dobrev famously dated her Vampire Diaries co-star Ian Somerhalder from 2010 to 2013.',
    avatar: '../public/images/default-avatar.jpg'
  },
]




users.forEach((user) => {
  const password = user.password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  user.password = hashedPassword;
})

console.log(users);




User.create(users)
  .then((data) => {
    console.log('ok')
    mongoose.connection.close()
  })
  .catch(error =>{
    console.log(error)
    mongoose.connection.close()
  })

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
  }
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

# LocalBuddy

## Description

Connect people to live experiences out of your city.

 ## User Stories

List of user stories in order of priority/importance.

Example:
 - **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
 - **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
 - **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
 - **sign up** - As a user I want to sign up on the webpage so that I can reserve a budy
 - **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
 - **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
 - **view profile** - As a user I want to see my profile so that I can check my info.
 - **see other users profile**- As a user I want to see other users profile so that I can check their info
 - **buddies list** - As a user I want to see all the buddies  available so that I can choose which ones I want to contact
 - **buddies detail** - As a user I want to see more information regarding one buddy so that I can decide if I want to contact him 
 - **buddy reservation** - As a user I want to be able to reserve a buddy so that I can meet him
 - **buddies favourites** - As a user I want to be able to mark a buddy as favourite so that I can see my favourites buddies 
 - **accept reservation** - As a user I want to be able to confirm a reservation from other user
 - **reject reservation** - As  a user I want to be able to reject a reservation from other user
 - **see reservations** - As a user I want to be able to see all reservations status 

## Backlog

List of other features outside of the MVPs scope

**User profile:**
- upload my profile picture

**Buddies Location**

- add geolocation to buddies when searching
- show buddies in a map in search page

**Events**

- buddies can create events
- travellers can subscribe/attend to an event
- travellers can search for an event
- list of events created by buddies
- list of events the traveller is attending

```

GET /events
POST /events/create - POST Body: name, date, location, description
GET /events/:id
POST /events/:id/attend - POST Body: nothing (the user is already stored in the session)
POST /events/:id/unattend - POST Body: nothing (the user is already stored in the session)
```



**Chat**

- buddies and travellers can chat before reservation

  


## ROUTES:
```

GET /auth/signup
POST auth/signup - POST Body: username, password
GET /auth/login
POST /auth/login - POST Body: username, password
POST /auth/logout - POST Body: nothing

GET / 
GET /search? query
GET /buddies/:id
POST /buddies/:id/favourite

GET /buddies/:id/reserve
POST /buddies/:id/reserve - Post: Body: date, user id

GET /buddies/me
GET /buddies/me/reservations

POST /buddies/me/reservations/:id/response

```

## MODELS

```

User
 - username: String
 - password: String
 - email: String
 - biography: String
 - city: String

 - age: Number
 - highlights: String
 - languages: String
 - favourites: Array
 - profile pic: String
```

```

Reservation
 - id buddy: ObjectID
 - id traveller: ObjectID
 - status: String Enum[Accepted, Rejected, Pending]
 - date: {start: Date, end: Date}
```

## Links

### Trello

https://trello.com/b/qPwy4hYr/localbuddy

### Git

The url to your repository and to your deployed project

https://github.com/annaclf/local-buddy

[Deploy Link](http://heroku.com)

### Slides.com

The url to your presentation slides

[Slides Link](http://slides.com)




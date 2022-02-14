## Table of Contents

- [My-Task](#My-Task)

- [Walk-through-video](#Walk-through-video)

- [User Story](#User-Story)

- [Acceptance Criteria](#Acceptance-Criteria)

- [Installation](#Installation)
- [Start-Command](#Start-Command)

## My-Task

```
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, I’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that I understand how to build and structure the API first.

This is a back-end application. It was built to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM to add raw datas. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages,  I also , Used [moment.js] (https://momentjs.com/) to Parse, validate, manipulate, and display dates and times in my JavaScript code.
No seed data is provided, so I seeded some values to my database collections using Insomnia after I’ve created my API.
```

## Walk-through-video

```
Because this application won’t be deployed, I have created a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met.
The vedeo will be found [here] (https://youtu.be/9ebgWfAst3w).
```

## User-Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance-Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

## Installation

```
- npm init -y
- npm install mongoose

- npm install express

- npm install moment

```

## Start-Command
To start the App; 
- Right click on server.js file
- Select the Open In Integrated Terminal option
- Then type ```node server.js```
- Or ```npm start```

Once the app is turned on, follow the link I have in the Console or go to any browser, Postman, or insomnia and type ```http://localhost:3001/api/users``` to get users
Or ```http://localhost:3001/api/thoughts``` to get thoughts

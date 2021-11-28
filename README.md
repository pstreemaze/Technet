# TECHNET

This application is submission for Microsoft Engage'21, which aims to give students and professors a professional and social tool to maintain a portfolio of their ideas and research work for easy collaboration and discussions.

## Objectives

- As it is not always easy to draft a research paper on partial ideas but we still want to a maintain record. This application allows you to write plogs(hybrid of blog and post) and maintain them on your profile and create a portfolio.
- Research community needs platform to have high ended discussions by resonating with people interested in similar areas. This platform allows connection to follow people according to their research work/institute/community/batch.
- Chat functonality to communicate and collaborate with other users.

## MVP Features

0. Safe Login and Register
    - Password is encrypted. 
    - Validation for confirm password
    - Validation and prompt for Password 
    - Validation and promt for email
1. Post Plog
    - Add media,link and description to a Plog
    - Like and Dislike Functionality
    - Posted ago time mentioned
    - Future scope: 
         - Collaborate for writing a plog - edit access and partnership
         - Add citation and Location
         - Comment and fork a Plog
         - Formatting options
2. Follow and UnFollow User
3. Chat 
    - Chat with other users in real time.
    - Message delivery time shown.
4. Connected
    - Connected to different third party applications until Technet develops its own solutions for Youtube, MSFT Teams, Figma and etc for user ease.
5. Profile
    - Profile contains all plogs posted till the date, all your research work(published/unpublished), institute, company and connected friends.


## Installation

1. Download the zip
2. Extract all files and open folder in visual studio code.
3. Create file in api folder named ".env" and paste following Mongo Cluster link after creating account on https://cloud.mongodb.com

```bash
mongodb+srv://<username>:<password>@cluster0.7exa3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
Replace <username> and <password> with the username and password for the . Replace myFirstDatabase with the name of the database that connections will use by default.

4. Open 3 terminals and run following commands

```bash
cd api
npm install
yarn start
```
```bash
cd client
npm install
yarn start
```
```bash
cd socket
npm install
yarn start
```

5. Click: http://localhost:3000 
 login details: 
 User 1:
   -username: demo 
    email: demo@gmail.com
    password: demo@123
 User 2:
   -username: shivam
    email: shivam2001@gmail.com
    password: qwerty@123

## Techstack
- Nodejs
- Reactjs
- Express
- MongoDB

Libraries - axios, bcrypt, mongoose and etc.
## Future Scope
- Real time collaboration for Plogs
- Technet Docs, for drafting research papers
- Technet Design tools to remove dependency on Figma
- Group chats
- Video calling facility
- Plog summarization for short read
- Conducting events and RSVPs





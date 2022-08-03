# MessagingProject

## Instructions for how to run your program:
(In termninal:)
1. npm install
2. node index.js

3. Type in the following URL and override the **bold parameters**
 http://localhost:5000/message/**checkin**/company/**1**/guests/**3**

The bold are parameters that can be passed in to reference an item from the Messages.json, Companies.json and Guests.json. If your word (id) for message doesn't match one from the Messages.json file, then it will just use that as your "custom" message to the guest.

## An overview of design decisions 
This is basically a node.js server where you can send get requests to an Express URL/endpoint.

## What language you picked and why 
Node.js, Express.js, Javascript. I choose these because this is what I am most familiar with.

## Your process for verifying the correctness of you program 
Running the app in the server and checking the console

## What didn't you get to, or what else might you do with more time? 

I did not build out the front end, so if I had more time I would build that out.
Also I will try to get a 'npm start' to work correctly

#Shelf Elves
What are your michievious elves up to? Keep track of them on a neatly-organized shelf.

###Built With
 - JavaScript
 - React
 - Redux
 - Material-UI
 - PostgreSQL


##Getting Started


###Installing
Steps to get the development environment running.
1. Download this repo from github (click the lime green clone or download button)

2. Create a .env file at the root of the project and paste this line into the file:
SERVER_SESSION_SECRET=superDuperSecret

3. While you're in your new .env file, take the time to replace superDuperSecret with some long random string like 25POUbVtx6RKVNWszd9ERB9Bb6 to keep your application secure. Here's a site that can help you: 

https://passwordsgenerator.net/. 

If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning.

4. run npm install in the terminal under this project (elves-on-a-shelf)

5. Start postgres if not running already by using `brew services start postgresql` (in terminal)

6. Set up your database:

First, create a database called "auth_shelf"

Second, run the following in postgreSQL:

```SQL
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "person_id" INT REFERENCES "person"
);

INSERT INTO "person" ("id", "username", "password") VALUES(1, 'sample', 'password');

INSERT INTO "item" ("id", "description", "image_url", "person_id")
VALUES (1, 'Will Farrell', 'https://images-na.ssl-images-amazon.com/images/I/51NTVJQuowL._SX342_.jpg', 1),
(2, 'Classic Elf', 'https://images-na.ssl-images-amazon.com/images/I/314q0Yqqe8L.jpg', 1),
(3, 'Evil Lego Elf', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7-aIly7vEQfDAnQqYYPkj3Z6L4hOpZ_0r03F8xHfXWVYgzXPYQ', 1);
```

7. Run `npm run server`

8. Run `npm run client`

9. Navigate to localhost:3000


## FEATURES

### View Shelf

All logged in users are able to view ALL items on the shelf (even items added by other users). On the view shelf page there is an option to delete items on the shelf.

### Add Items to the Shelf

This page should include a form that allows user to add items to the shelf. Each item should have a description and an image url.


### Total Number of Items by User

This page displays a list of users along with the total number of items they have added to the shelf.


###Authors
Built by the hottest hobgoblins in the development game: 

- Jennifer Petzoldt
- Lais Vang
- Sam Bahta
- Paul Heggeseth
- Kara Burnett



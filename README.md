# FUD FITE

**Project 1 - CPSC 473 Front-End Development course** <br />
Users are able to upload their food pictures and argue about whose food looks tastier.

## Installation/Configuration Documentation

**Clone** or **download** the repo

### Install

[`Node.js`](https://nodejs.org/en/) and follow the prompts.

## Front-End -> Run In Terminal

`cd/directory-of-Fud-Fite/FudFite-master/fud-fite-frontend` change _directory-of-Fud-Fite_ to the directory in which you downloaded the repo (i.e. Downloads)

### Install

[`Gulp.js`](https://gulpjs.com) a task management library for converting SASS files into a single CSS file.

[`Sass`](https://sass-lang.com) an extension for css that allows for nested rules.

`npm start` on terminal and **localhost:3000/index.html** will show up on your browser

## Back-End -> Run In Terminal

Open another terminal window (CMD+T or CNTRL+T) for the backend.

`cd/directory-of-Fud-Fite/FudFite-master/fud-fite-backend` change _directory-of-Fud-Fite_ to the directory in which you downloaded the repo (i.e. Downloads)

### Install

[`MongoDB`](https://docs.mongodb.com/manual/administration/install-community/) for backend.

[`Deployd`](https://github.com/deployd/deployd#install-from-npm) for backend.

`npm install forever` on terminal

`forever start run_dpd.js` on terminal

`sudo mongod` on terminal

In your browser, type in **localhost:2403/dashboard**

## User Documentation

### New Users

Click on **Sign up** and enter username, password, and email

Click the **Sign up** button to submit

Proceed to log in with newly created username and password

### Returning Users

Log in with username and password

### Food Categories

Allows users to view food images by categories {Breakfast, Lunch, Dinner, Dessert, Snack}

### Food Feed

Allows users to view all food images from newest to oldest

### My Foods

Allows users to view only the food images that they have posted

### Upload

Allows users to upload pictures of their Food

Pick a category from the dropdown menu

Click **Choose files** to pick an image to Upload

Click **Post** button, an "upload successful" message will appear

Exit out of the upload window to view newly posted image on feed

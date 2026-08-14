# NOVA Search

NOVA Search is a search website I made using HTML, CSS and JavaScript.

I wanted to make a search website with some extra features instead of just having a search bar. So I added different APIs for the background, music and news.

## Features

- Search the web using the search bar
- NASA's image of the day as the website background
- Top music using the Last.fm API
- Daily news using a News API
- Hover animations
- Dynamic content using JavaScript

## How to Run Locally

To run NOVA Search on your computer:

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your web browser.

You can also use VS Code with the Live Server extension:

1. Open the NOVA Search folder in VS Code.
2. Install the Live Server extension if you don't already have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. NOVA Search will open in your browser.

## APIs Used

### NASA API

I used NASA's Astronomy Picture of the Day API to set the background of the website.

The website fetches NASA's image of the day and uses it as the background.

### Last.fm API

I used the Last.fm API to fetch top music and display it on the website.

###Hacker News API

I used the free Hacker News API (by Firebase) to fetch trending tech stories and display them on the homepage.
I originally used a paid News API (GNews) for this, but it stopped working when the site was hosted on GitHub Pages (it failed with CORS/key restrictions on the live site even though it worked locally). I switched to the Hacker News API because it's free, doesn't need an API key, and works reliably with client-side requests on GitHub Pages.

## AI Used

I used ChatGPT while making this project to help me with some of the JavaScript, especially for working with the APIs.

I also used ChatGPT Codex to generate some of the hover animations and interactive effects.

I then added and changed the code to fit the design and features I wanted for NOVA Search.

## Technologies Used

- HTML
- CSS
- JavaScript
- NASA API
- Last.fm API
- News API
- Font Awesome

## Responsiveness

NOVA Search currently works only on desktop screens.

I haven't made it responsive for mobile yet. I will work on the mobile layout in the future so that it works properly on different screen sizes.

## What I Learned

While making this project, I learned how to:

- Work with JavaScript
- Use APIs in a website
- Fetch data using `fetch()`
- Work with JSON
- Add dynamic content to a website
- Create hover animations
- Connect different APIs to a website

## Future Improvements

I plan to:

- Make the website responsive for mobile
- Improve the news section
- Add more music features
- Add more animations
- Improve the overall design
- Add more features to the search

## About

This was mainly a project I made to practice HTML, CSS and JavaScript.

It helped me learn more about APIs and how JavaScript can be used to make a website more interactive.

This project is still a work in progress and I will keep improving it as I learn more.

Thanks for checking out NOVA Search.
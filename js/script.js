const NASA_API_KEY = "A2XnBglnr5vNA9OgdaFg9y3lbl3h0JCocEuvRg0k";

async function loadNASAImage() {

    try {

        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
        );

        const data = await response.json();

        console.log(data);

        if (data.media_type === "image") {

            document.body.style.backgroundImage =
                `url("${data.url}")`;

        }

    } catch (error) {

        console.log("NASA image failed:", error);

    }
}

loadNASAImage();


// Hacker News is used instead of a paid news API because its API is free,
// needs no API key, and works fine with client-side requests on GitHub Pages
// (the old news API blocked/failed on GitHub Pages, likely due to CORS or
// key/plan restrictions).
const HN_TOP_STORIES_URL =
    "https://hacker-news.firebaseio.com/v0/topstories.json";

function getDomainFromUrl(url) {

    try {

        return new URL(url).hostname.replace("www.", "");

    } catch (error) {

        return "news.ycombinator.com";
    }
}

async function loadNews() {

    const container = document.getElementById("news-container");

    try {

        const idsResponse = await fetch(HN_TOP_STORIES_URL);
        const storyIds = await idsResponse.json();

        const topIds = storyIds.slice(0, 6);

        const stories = await Promise.all(
            topIds.map(id =>
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            )
        );

        container.innerHTML = "";

        stories.forEach(story => {

            const link = story.url ||
                `https://news.ycombinator.com/item?id=${story.id}`;

            container.innerHTML += `
                <a href="${link}"
                   target="_blank"
                   class="news-card">

                    <h3>${story.title}</h3>

                    <p>
                        ${story.score} points by ${story.by}
                    </p>

                    <small>
                        ${getDomainFromUrl(link)}
                    </small>

                </a>
            `;

        });

    } catch (error) {

        console.error("News failed:", error);

        container.innerHTML =
            "<p>Unable to load news.</p>";
    }
}

loadNews();


// ============================
// 3. USEFUL APPS
// ============================

const apps = [

    {
        name: "Google",
        logo: "https://cdn-icons-png.flaticon.com/128/281/281764.png",
        url: "https://www.google.com"
    },

    {
        name: "YouTube",
        logo: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        url: "https://www.youtube.com"
    },

    {
        name: "GitHub",
        logo: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
        url: "https://github.com"
    },

    {
        name: "Canva",
        logo: "assets/canva.jpg",
        url: "https://www.canva.com"
    },

    {
        name: "ChatGPT",
        logo: "https://cdn-icons-png.flaticon.com/128/11865/11865326.png",
        url: "https://chatgpt.com"
    },

    {
        name: "Spotify",
        logo: "https://cdn-icons-png.flaticon.com/128/3669/3669986.png",
        url: "https://open.spotify.com"
    }

];


function loadApps() {

    const container = document.getElementById("apps-container");

    container.innerHTML = "";

    apps.forEach(app => {

        container.innerHTML += `
            <a href="${app.url}"
               target="_blank"
               class="app-card">

                <img
                    src="${app.logo}"
                    alt="${app.name} logo"
                    class="app-logo"
                >

                <h3>${app.name}</h3>

            </a>
        `;

    });
}

loadApps();

// ============================
// TOP MUSIC
// ============================

const LASTFM_API_KEY = "89b97b8f0ffb6d61b9029e5452ae5c6e";

async function loadMusic() {

    const container = document.getElementById("music-container");

    try {

        const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${LASTFM_API_KEY}&format=json&limit=6`
        );

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message);
        }

        container.innerHTML = "";

        for (let index = 0; index < data.tracks.track.length; index++) {

            const song = data.tracks.track[index];

            // Search iTunes for album artwork
            const searchQuery = encodeURIComponent(
                `${song.name} ${song.artist.name}`
            );

            const artworkResponse = await fetch(
                `https://itunes.apple.com/search?term=${searchQuery}&entity=song&limit=1`
            );

            const artworkData = await artworkResponse.json();

            let image = "";

            if (artworkData.results.length > 0) {

                image = artworkData.results[0].artworkUrl100
                    .replace("100x100", "300x300");

            }

            container.innerHTML += `

                <div class="music-card">

                    <img
                        src="${image}"
                        alt="${song.name}"
                        class="album-cover"
                    >

                    <div class="music-info">

                        <h3>${song.name}</h3>

                        <p>${song.artist.name}</p>

                        <small>
                            ${Number(song.listeners).toLocaleString()}
                            listeners
                        </small>

                    </div>

                    <a
                        href="${song.url}"
                        target="_blank"
                        class="listen-btn"
                    >
                        Listen
                    </a>

                </div>

            `;
        }

    } catch (error) {

        console.error("Music error:", error);

        container.innerHTML =
            "<p>Unable to load music.</p>";
    }
}

loadMusic();
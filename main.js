const birthday = new Date();
birthday.setMonth(9, 5);
birthday.setHours(0, 0, 0, 0);
const now = Date.now();

const nightsAway = Math.ceil(
  (birthday.getTime() - now) / (1000 * 60 * 60 * 24)
);

const no = document.getElementById("no");
const yes = document.getElementById("yes");
const gif = document.getElementById("gif");
const api_key = "bGAuVHS8aqfW5SfKw3uQNYZaPmizOmi7";

const fetchGif = async (query) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=1`
  );
  const body = await res.json();
  if (body && body.data) {
    const imageUrl = body.data[0].images.original.url;
    gif.innerHTML = `<img src=${imageUrl} />`;
  }
};

if (nightsAway > 0) {
  fetchGif("sleep");
  // not yet
  yes.style.display = "none";
  no.innerHTML = `Jen is <b>not</b> 30 yet. Only ${nightsAway} night's sleep. 🌙`;
} else {
  fetchGif("party");
  // yes!
  no.style.display = "none";
}

const birthdayJen = new Date();
const birthdayThomas = new Date();
birthdayThomas.setMonth(4, 7);
birthdayThomas.setHours(0, 0, 0, 0);

birthdayJen.setMonth(9, 5);
birthdayJen.setHours(0, 0, 0, 0);

const nightsAway = (date) => {
  const now = Date.now();

  return Math.ceil((date.getTime() - now) / (1000 * 60 * 60 * 24));
};

const no = document.getElementById("no");
const yes = document.getElementById("yes");
const gif = document.getElementById("gif");
const sleepyGifUrl =
  "https://media1.giphy.com/media/mguPrVJAnEHIY/giphy.gif?cid=019abbe5ucedt3bvtg9myvedpd0kqjgjfkqjnixucr0cs0ct&rid=giphy.gif&ct=g";
const partyGifUrl =
  "https://media4.giphy.com/media/eoRw2qFBIxk1q/giphy.gif?cid=019abbe5a8e8dytzr1dbjby5pag5kzag26af8751649l7uin&rid=giphy.gif&ct=g";

const setGif = (url) => {
  gif.innerHTML = `<img src=${url}/>`;
};
const nightsToJenBirthday = nightsAway(birthdayJen);
if (nightsToJenBirthday > 0) {
  setGif(sleepyGifUrl);
  // not yet
  yes.style.display = "none";
  no.innerHTML = `Nope. Jen is not 30 yet. Only ${nightsToJenBirthday} night's sleep. 🌙`;
  console.log(nightsAway(birthdayThomas));
  if (nightsAway(birthdayThomas) === 0) {
    no.append(" But Thomas is!");
    setGif(partyGifUrl);
  }
} else {
  yes.innerHTML = `YES! Woohooo, Party time!`;
  setGif(partyGifUrl);
  // yes!
  no.style.display = "none";
}

const URL = "https://api.genderize.io?name=";
const userName ="peter";
const gender = `https://api.genderize.io?name=${userName}`;

async function getData(URL) {
try{
const response = await fetch(URL);
if(response.status < 200 || response.status > 299) {
}else
}
}
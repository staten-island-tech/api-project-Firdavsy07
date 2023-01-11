const URL = "https://www.dnd5eapi.co/api/spells";

async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    console.log("common whalen W");
    return data;
  } catch (err) {
    console.error(err);
    console.log("common whalen L");
  }
}
fetchData(URL);

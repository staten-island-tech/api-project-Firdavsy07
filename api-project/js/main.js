const URL = "https://www.dnd5eapi.co/api/spells";

async function fetchSpellData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      console.log("common whalen W");
      data.index;
    }
  } catch (error) {
    console.log(error);
    console.log("common whalen L");
  }
}
fetchSpellData(URL);

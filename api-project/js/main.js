const URL = "https://www.dnd5eapi.co/api/spells";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
    }
  } catch (error) {
    console.log(error);
    console.log("L");
  }
}
getData(URL);

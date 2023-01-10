const URL = "https://www.dnd5eapi.co/api/spells";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      data.data[0].entry.forEach((anime) => {
        document.getElementById("api-response").insertAdjacentHTML();
      });
      console.log(data.data[0].entry[0].title);
    }
  } catch (error) {
    console.log(error);
    console.log("L");
    document.getElementById("api-response").textContent =
      "Sorry I couldn't find that one";
  }
}

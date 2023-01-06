const URL = "https://hp-api.onrender.com/api/spells";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
      console.log("common whalen W");
    }
  } catch (error) {
    console.log(error);
    console.log("common whalen L");
  }
}
getData(URL);

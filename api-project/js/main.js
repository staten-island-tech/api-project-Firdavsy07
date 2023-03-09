let URL = "https://www.dnd5eapi.co/api/spells/";

const DOMselectors = {
  spellName: document.querySelector(".spell-name"),
  button: document.getElementById("submit"),
};

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
      console.log(data.results[1].index);

      data.results.forEach((data) => {
        document.getElementById("api-response").insertAdjacentHTML(
          "afterbegin",
          `<div>
            <h2>${data.name}</h2>
            </div>`
        );
      });
    }
  } catch (error) {
    console.log(error);
    console.log("common whalen L");
    document.getElementById("api-response").insertAdjacentHTML(
      "afterbegin",
      `<div>
        <h2>Sorry, I hate to inform you that your spell request was stupid</h2>
        </div>`
    );
  }
}

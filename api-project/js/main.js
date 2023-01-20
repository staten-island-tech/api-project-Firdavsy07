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
      const array = Object.entries(data);
      console.log(array);
      console.log("common whalen W");
      data.index;
      array.forEach((array) => {
        array.forEach((spell) => {
          document
            .getElementById("api-response")
            .insertAdjacentHTML(
              "afterbegin",
              `<div class="card"> <h2> ${spell.index}</h2></div>`
            );
        });
      });
    }
  } catch (error) {
    console.log(error);
    console.log("common whalen L");
  }
}
fetchSpellData(URL);

const DOMselectors = {
  spellName: document.querySelector(".spell-name"),
  button: document.getElementById("submit"),
};

DOMselectors.button.addEventListener("click", function () {
  console.log(DOMselectors.spellName.value);
});

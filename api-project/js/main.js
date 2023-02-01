const URL = "https://www.dnd5eapi.co/api/spells";

const DOMselectors = {
  spellName: document.querySelector(".spell-name"),
  button: document.getElementById("submit"),
};
async function fetchSpellName(URL) {
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
        document
          .getElementById("api-response")
          .insertAdjacentHTML("afterbegin", `<h2>${data.name}</h2>`);
      });
    }
  } catch (error) {
    console.log(error);
    console.log("common whalen L");
  }
}

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
        document
          .getElementById("api-response")
          .insertAdjacentHTML(
            "afterbegin",
            `<h2>https://www.dnd5eapi.co/api/spells/${data.index}</h2>`
          );
      });
    }
  } catch (error) {
    console.log(error);
    console.log("common whalen L");
  }
}

DOMselectors.button.addEventListener("click", function () {
  console.log(DOMselectors.spellName.value);
  if (DOMselectors.spellName.value.includes("url")) {
    fetchSpellData(URL);
  }
});

DOMselectors.button.addEventListener("click", function () {
  console.log(DOMselectors.spellName.value);
  if (DOMselectors.spellName.value.includes("names")) {
    fetchSpellName(URL);
  }
});

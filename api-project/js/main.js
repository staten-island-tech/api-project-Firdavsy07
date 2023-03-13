let URL = "https://www.dnd5eapi.co/api/spells/";

const DOMselectors = {
  spellName: document.querySelector(".spell-name"),
  button: document.getElementById("submit"),
};

async function fetchData(URL) {
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
          ` 
          <div class="title" id="name"><h2 class="name">${data.name}</h2>
          <h3>${data.index}</h3></div>
      `
        );
      });
      DOMselectors.spellName.addEventListener("keyup", function (event) {
        let searchQuery = event.target.value.toLowerCase();

        console.log(searchQuery);

        let allNamesDOMCollection = document.getElementsByClassName("title"); // can also use getElementByTagName('li')

        for (let i = 0; i < allNamesDOMCollection.length; i++) {
          const currentName =
            allNamesDOMCollection[i].textContent.toLowerCase();

          if (currentName.includes(searchQuery)) {
            console.log(currentName);
            allNamesDOMCollection[i].style.display = "block";
          } else {
            allNamesDOMCollection[i].style.display = "none";
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    document.getElementById("api-response").insertAdjacentHTML(
      "afterbegin",
      `<div>
        <h2>Sorry, I hate to inform you that your spell request was stupid</h2>
        </div>`
    );
  }
}

fetchData(URL);

/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const everydayPack = {
  name: "Everyday Pack",
  color: "grey",
  volume: 30,
  pocketNum: 12,
};

const otherPack = {
  name: "Other Pack",
  color: "black",
  volume: 2,
  pocketNum: 1,
};

const addPack = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));
main.append(addPack(otherPack));
main.append(addPack(everydayPack));

console.log(`Bootstrap \t 5.1 \t\t ${!!bootstrap ? "LOADED" : "ERROR"}`);
console.log(`GSAP \t\t 3.10 \t\t ${!!gsap ? "LOADED" : "ERROR"}`);

const elemBody = document.body;
elemBody.style.position = "relative";

const elemBGContainer = document.createElement("div");
elemBody.appendChild(elemBGContainer);

elemBGContainer.style.position = "absolute";
elemBGContainer.style.inset = "0px";
elemBGContainer.style.zIndex = -1000;

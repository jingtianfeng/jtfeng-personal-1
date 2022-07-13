// ==========================================================================
// 1. Background
// --------------------------------------------------------------------------
const elemBody = document.body;
elemBody.style.position = "relative";
// --------------------------------------------------------------------------
const elemBGContainer = document.createElement("div");
elemBody.appendChild(elemBGContainer);
// --------------------------------------------------------------------------
elemBGContainer.style.position = "absolute";
elemBGContainer.style.inset = "0px";
elemBGContainer.style.zIndex = "-1000";
elemBGContainer.style.overflow = "hidden";
elemBGContainer.style.pointerEvents = "none";
elemBGContainer.style.userSelect = "none";
// --------------------------------------------------------------------------
elemBGContainer.tabIndex = "-1";
elemBGContainer.ariaDisabled = "true";
// --------------------------------------------------------------------------
let arrParticle = [];
const NBR_CANVAS_WIDTH = 7680;
const NBR_CANVAS_HEIGHT = 25000;
const NBR_PARTICLE_AMOUNT = 500;
const NBR_PARTICLE_DIAMETER_MIN = 100;
const NBR_PARTICLE_DIAMETER_MAX = 250;
const NBR_PARTICLE_STEP = 4;
// --------------------------------------------------------------------------
const randomizeStep = (nbrStep) => {
	return Math.trunc(Math.round(Math.random()*nbrStep)/nbrStep*100)/100;
}
// --------------------------------------------------------------------------
for (let i = 0; i < NBR_PARTICLE_AMOUNT; i++) {
	let elemParticle = document.createElement("div");
	elemParticle.style.position = "absolute";
	elemParticle.style.width = `${NBR_PARTICLE_DIAMETER_MAX - (NBR_PARTICLE_DIAMETER_MAX - NBR_PARTICLE_DIAMETER_MIN)*Math.random()}px`;
	elemParticle.style.height = elemParticle.style.width;
	elemParticle.style.border = "4px solid darkgrey";
	elemParticle.style.borderRadius = `${NBR_PARTICLE_DIAMETER_MAX / 2}px`;
	elemParticle.style.top = `${NBR_CANVAS_HEIGHT * Math.random()}px`;
	elemParticle.style.left = `${NBR_CANVAS_WIDTH * Math.random()}px`;
	arrParticle.push(elemParticle);
}
// --------------------------------------------------------------------------
for (let particle of arrParticle) {
	elemBGContainer.appendChild(particle);
}
// ==========================================================================
// 2. GSAP Animation
// --------------------------------------------------------------------------
if (!!gsap) {
	console.log(`GSAP \t\t ${gsap.version}`);
} else {
	console.log("GSAP \t\t ERROR");
}
// ==========================================================================
// 3. Bootstrap Plugins
// --------------------------------------------------------------------------
if (!!bootstrap) {
	console.log(`Bootstrap \t ${bootstrap.Alert.VERSION}`);
} else {
	console.log("Bootstrap \t ERROR");
}

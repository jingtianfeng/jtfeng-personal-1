// ==========================================================================
// Parameters
// --------------------------------------------------------------------------
const NBR_CANVAS_WIDTH = 7680;
const NBR_CANVAS_HEIGHT = 25000;
// --------------------------------------------------------------------------
const NBR_PARTICLE_AMOUNT = 500;
const NBR_PARTICLE_WIDTH_MIN = 50;
const NBR_PARTICLE_WIDTH_MAX = 500;
const NBR_PARTICLE_WIDTH_STEP = 50;
const NBR_PARTICLE_HEIGHT_MIN = 500;
const NBR_PARTICLE_HEIGHT_MAX = 1000;
const NBR_PARTICLE_HEIGHT_STEP = 50;
// --------------------------------------------------------------------------
const NBR_PARTICLE_BORDER_RADIUS = 4;
const STR_PARTICLE_BORDER = "2px solid darkgray";
const STR_PARTICLE_BG_COLOR = "rgba(0, 0, 0, 0.5)";
// --------------------------------------------------------------------------
const BOOL_PARTICLE_HAS_SIDES_EQUAL = true;
const BOOL_PARTICLE_IS_ROUNDED = true;
// ==========================================================================
// Background
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
const randomizeStep = (nbrStep) => {
	if (nbrStep <= 0) {
		return 0;
	} else if (nbrStep === 1) {
		return Math.round(Math.random());
	} else {
		nbrStep = Math.min(nbrStep, 100);
		return Math.trunc(Math.round(Math.random()*nbrStep)/nbrStep*100)/100;
	}
}
// --------------------------------------------------------------------------
let arrParticle = [];
// --------------------------------------------------------------------------
for (let i = 0; i < NBR_PARTICLE_AMOUNT; i++) {
	let elemParticle = document.createElement("div");
	elemParticle.style.position = "absolute";
	elemParticle.style.width = `${NBR_PARTICLE_WIDTH_MAX - (NBR_PARTICLE_WIDTH_MAX - NBR_PARTICLE_WIDTH_MIN)*randomizeStep(NBR_PARTICLE_WIDTH_STEP)}px`;
	elemParticle.style.height = BOOL_PARTICLE_HAS_SIDES_EQUAL? elemParticle.style.width : `${NBR_PARTICLE_HEIGHT_MAX - (NBR_PARTICLE_HEIGHT_MAX - NBR_PARTICLE_HEIGHT_MIN)*randomizeStep(NBR_PARTICLE_HEIGHT_STEP)}px`;
	elemParticle.style.backgroundColor = STR_PARTICLE_BG_COLOR;
	elemParticle.style.border = STR_PARTICLE_BORDER;
	elemParticle.style.borderRadius = `${BOOL_PARTICLE_IS_ROUNDED ? Math.max(NBR_PARTICLE_WIDTH_MAX, NBR_PARTICLE_HEIGHT_MAX)/2 : NBR_PARTICLE_BORDER_RADIUS}px`;
	elemParticle.style.top = `${Math.round(NBR_CANVAS_HEIGHT*Math.random())}px`;
	elemParticle.style.left = `${Math.round(NBR_CANVAS_WIDTH*Math.random())}px`;
	arrParticle.push(elemParticle);
}
// --------------------------------------------------------------------------
for (let particle of arrParticle) {
	elemBGContainer.appendChild(particle);
}
// ==========================================================================
// GSAP Animation
// --------------------------------------------------------------------------
if (!!gsap) {
	console.log(`GSAP \t\t ${gsap.version}`);
} else {
	console.log("GSAP \t\t ERROR");
}
// ==========================================================================
// Bootstrap Plugins
// --------------------------------------------------------------------------
if (!!bootstrap) {
	console.log(`Bootstrap \t ${bootstrap.Alert.VERSION}`);
} else {
	console.log("Bootstrap \t ERROR");
}

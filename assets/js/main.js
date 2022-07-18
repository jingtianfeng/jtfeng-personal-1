// ==========================================================================
// 1. Parameters
// --------------------------------------------------------------------------
const NBR_CANVAS_WIDTH = 7680;
const NBR_CANVAS_HEIGHT = 25000;
// --------------------------------------------------------------------------
const NBR_PARTICLE_AMOUNT = 350;
const NBR_PARTICLE_DEPTH_OFFSET = 500;
const NBR_PARTICLE_WIDTH_MIN = 25;
const NBR_PARTICLE_WIDTH_MAX = 50;
const NBR_PARTICLE_WIDTH_STEP = 10;
const NBR_PARTICLE_HEIGHT_MIN = 250;
const NBR_PARTICLE_HEIGHT_MAX = 750;
const NBR_PARTICLE_HEIGHT_STEP = 50;
// --------------------------------------------------------------------------
const NBR_PARTICLE_BORDER_RADIUS_MIN = 8;
const NBR_PARTICLE_BORDER_RADIUS_MAX = 32;
const NBR_PARTICLE_BORDER_WIDTH_MIN = 16;
const NBR_PARTICLE_BORDER_WIDTH_MAX = 48;
const STR_PARTICLE_BORDER_STYLE = "dashed";
const ARR_PARTICLE_BORDER_COLOR = ["blue", "yellow", "red"];
const STR_PARTICLE_BG_COLOR = "gray";
const NBR_PARTICLE_OPACITY_MIN = 0.10;
const NBR_PARTICLE_OPACITY_MAX = 0.95;
// --------------------------------------------------------------------------
const BOOL_PARTICLE_HAS_SIDES_EQUAL = false;
const BOOL_PARTICLE_IS_ROUNDED = false;
const BOOL_PARTICLE_IS_OPAQUE = false;
// ==========================================================================
// 2. Background
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
const randomizeMinMaxStep = (nbrMin, nbrMax, nbrStep) => {
	if (nbrStep <= 0) {
		return nbrMin;
	} else if (nbrStep === 1) {
		return Math.random() < 0.5 ? nbrMin : nbrMax;
	} else {
		nbrStep = Math.min(nbrStep, 100);
		return nbrMin + Math.trunc(
			Math.round(Math.random()*nbrStep) / nbrStep * 
			100
		) / 100 * (nbrMax - nbrMin);
	}
}
// --------------------------------------------------------------------------
let arrParticle = [];
// --------------------------------------------------------------------------
for (let i = 0; i < NBR_PARTICLE_AMOUNT; i++) {
	let elemParticle = document.createElement("div");
	elemParticle.style.position = "absolute";
	elemParticle.style.width = `${
		Math.round(
			randomizeMinMaxStep(
				NBR_PARTICLE_WIDTH_MIN, 
				NBR_PARTICLE_WIDTH_MAX, 
				NBR_PARTICLE_WIDTH_STEP
			) + 
			i / NBR_PARTICLE_AMOUNT * NBR_PARTICLE_DEPTH_OFFSET * 
			(NBR_PARTICLE_WIDTH_MAX - NBR_PARTICLE_WIDTH_MIN) / 
			(
				NBR_PARTICLE_WIDTH_MAX - NBR_PARTICLE_WIDTH_MIN + 
				NBR_PARTICLE_HEIGHT_MAX - NBR_PARTICLE_HEIGHT_MIN
			)
		)
	}px`;
	elemParticle.style.height = BOOL_PARTICLE_HAS_SIDES_EQUAL? elemParticle.style.width : `${
		Math.round(
			randomizeMinMaxStep(
				NBR_PARTICLE_HEIGHT_MIN, 
				NBR_PARTICLE_HEIGHT_MAX, 
				NBR_PARTICLE_HEIGHT_STEP
			) + 
			i / NBR_PARTICLE_AMOUNT * NBR_PARTICLE_DEPTH_OFFSET * 
			(NBR_PARTICLE_HEIGHT_MAX - NBR_PARTICLE_HEIGHT_MIN) / 
			(
				NBR_PARTICLE_WIDTH_MAX - NBR_PARTICLE_WIDTH_MIN + 
				NBR_PARTICLE_HEIGHT_MAX - NBR_PARTICLE_HEIGHT_MIN
			)
		)
	}px`;
	elemParticle.style.backgroundColor = STR_PARTICLE_BG_COLOR;
	elemParticle.style.borderWidth = `${
		Math.round(
			NBR_PARTICLE_BORDER_WIDTH_MIN + 
			i / NBR_PARTICLE_AMOUNT * 
			(NBR_PARTICLE_BORDER_WIDTH_MAX - NBR_PARTICLE_BORDER_WIDTH_MIN)
		)
	}px`;
	elemParticle.style.borderStyle = STR_PARTICLE_BORDER_STYLE;
	elemParticle.style.borderColor = ARR_PARTICLE_BORDER_COLOR[
		Math.round(
			Math.random() * ARR_PARTICLE_BORDER_COLOR.length
		)
	];
	elemParticle.style.borderRadius = `${BOOL_PARTICLE_IS_ROUNDED ? 
			(
				Math.max(NBR_PARTICLE_WIDTH_MAX, NBR_PARTICLE_HEIGHT_MAX) + 
				NBR_PARTICLE_DEPTH_OFFSET
			) / 2 : 
			Math.round(
				i / NBR_PARTICLE_AMOUNT * 
				(NBR_PARTICLE_BORDER_RADIUS_MAX - NBR_PARTICLE_BORDER_RADIUS_MIN) + 
				NBR_PARTICLE_BORDER_RADIUS_MIN
			)
	}px`;
	elemParticle.style.opacity = `${BOOL_PARTICLE_IS_OPAQUE ? 
			1 : 
			Math.trunc(
				(
					i / NBR_PARTICLE_AMOUNT * 
					(NBR_PARTICLE_OPACITY_MAX - NBR_PARTICLE_OPACITY_MIN) + 
					NBR_PARTICLE_OPACITY_MIN) * 
				100
			) / 100
	}`;
	elemParticle.style.top = `${Math.round(NBR_CANVAS_HEIGHT*Math.random())}px`;
	elemParticle.style.left = `${Math.round(NBR_CANVAS_WIDTH*Math.random())}px`;
	arrParticle.push(elemParticle);
}
// --------------------------------------------------------------------------
for (let particle of arrParticle) {
	elemBGContainer.appendChild(particle);
}
// ==========================================================================
// 3. GSAP Animation
// --------------------------------------------------------------------------
if (!!gsap) {
	console.log(`GSAP \t\t ${gsap.version}`);
} else {
	console.log("GSAP \t\t ERROR");
}
// ==========================================================================
// 4. Bootstrap Plugins
// --------------------------------------------------------------------------
if (!!bootstrap) {
	console.log(`Bootstrap \t ${bootstrap.Alert.VERSION}`);
} else {
	console.log("Bootstrap \t ERROR");
}

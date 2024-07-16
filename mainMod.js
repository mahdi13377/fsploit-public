"use strict";

const fsploitVersion = "5.1.3";
const knownClientVersion = "9fcb82c9,e40a671d";

const currentScript = GM_getValue("mainModule");

if (!GM_getValue("logo")) {
	fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/logo-base64")
		.then((response) => response.text())
		.then((data) => {
			const loadingCover = document.createElement("div");
			loadingCover.id = "loadingCover";
			loadingCover.style.cssText =
				"position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgb(30, 30, 30); z-index: 9999; opacity: 1; transition: opacity 0.5s ease-out; display: flex; justify-content: center; align-items: center;";
			const logoImage = document.createElement("img");
			logoImage.style.cssText = "max-width: 80%; max-height: 80%;";
			logoImage.src = `data:image/png;base64,${data}`;
			loadingCover.appendChild(logoImage);
			document.documentElement.appendChild(loadingCover);
			setTimeout(() => {
				loadingCover.style.opacity = "0";
			}, 1000);
			setTimeout(() => {
				loadingCover.remove();
			}, 1550);
			GM_setValue("logo", data.trim());
		});
} else {
	const logoData = GM_getValue("logo");
	const loadingCover = document.createElement("div");
	loadingCover.id = "loadingCover";
	loadingCover.style.cssText =
		"position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgb(30, 30, 30); z-index: 9999; opacity: 1; transition: opacity 0.5s ease-out; display: flex; justify-content: center; align-items: center;";
	const logoImage = document.createElement("img");
	logoImage.style.cssText = "max-width: 80%; max-height: 80%;";
	logoImage.src = `data:image/png;base64,${logoData}`;
	loadingCover.appendChild(logoImage);
	document.documentElement.appendChild(loadingCover);
	setTimeout(() => {
		loadingCover.style.opacity = "0";
	}, 1000);
	setTimeout(() => {
		loadingCover.remove();
	}, 1550);
}

let game;
let gameState;
let currentScene;

let betterVisionx = false;
let quickDisconnectx = false;
let aimLinex = false;
let clearChatx = false;
let boostHacksx = false;
let humpbackAutosongsx = false;

const encodeBytePacket = (t, e, n = "") => {
	const silly = ["ode", "eat", "fr", "bite", "eng", "enc", "the", "code", "rep", "L", "en", "setter"];
	if (!t) return null;
	const a = ((A, B) => {
		const enc = new TextEncoder();
		const a = enc[silly[5] + silly[0]](A);
		const i = enc[silly[10] + silly[7]](B);
		const r = new Uint8Array(a[`l${silly[4]}${silly[6].slice(0, 2)}`]);
		for (let o = 0; o < a.length; o++) r[o] = a[o] ^ i[o % i[`${silly[9].toLowerCase()}${silly[10]}g${silly[6].slice(0, 2)}`]];
		return btoa(String.fromCharCode(...r));
	})(String.fromCharCode(e)[silly[8] + silly[1]](3) + n, t);
	const i = new TextEncoder()[silly[5] + silly[0]](a);
	const r = 1 + i.byteLength + 1;
	const o = new ArrayBuffer(r);
	const l = new DataView(o);
	l.setUint8(0, 25);
	new Uint8Array(o)[silly[11].slice(0, (0o11 / 0x1b) * 0b1001)](i, 1);
	l.setUint8(r - 1, e);
	return o;
};

const boostData = {
	10: {
		hasSec: true,
	},
	11: {
		hasSec: true,
		secLoadTime: 350,
	},
	21: {
		hasSec: true,
		secLoadTime: 1000,
	},
	22: {
		hasSec: true,
		secLoadTime: 600,
	},
	25: {
		hasSec: true,
		secLoadTime: 350,
	},
	27: {
		hasSec: true,
		secLoadTime: 350,
	},
	34: {
		hasSec: true,
		secLoadTime: 350,
	},
	38: {
		hasSec: true,
		secLoadTime: 750,
	},
	40: {
		hasSec: true,
		secLoadTime: 1000,
	},
	41: {
		hasSec: true,
	},
	42: {
		hasSec: true,
		secLoadTime: 300,
	},
	43: {
		hasSec: true,
		secLoadTime: 350,
	},
	49: {
		hasSec: true,
		secLoadTime: 350,
	},
	56: {
		hasSec: true,
	},
	61: {
		hasSec: true,
		secLoadTime: 400,
	},
	62: {
		hasSec: true,
		secLoadTime: 2000,
	},
	68: {
		hasSec: true,
	},
	70: {
		hasSec: true,
		secLoadTime: 250,
	},
	71: {
		hasSec: true,
		secLoadTime: 350,
	},
	73: {
		hasSec: true,
		secLoadTime: 1000,
	},
	74: {
		hasSec: true,
	},
	76: {
		hasSec: true,
		secLoadTime: 200,
	},
	80: {
		hasSec: true,
		secLoadTime: 350,
	},
	82: {
		hasSec: true,
		secLoadTime: 1500,
		hasScaling: true,
	},
	83: {
		hasSec: true,
	},
	86: {
		hasSec: true,
		secLoadTime: 1000,
	},
	87: {
		hasSec: true,
		secLoadTime: 150,
	},
	90: {
		hasSec: true,
	},
	91: {
		hasSec: true,
		secLoadTime: 800,
	},
	92: {
		hasSec: true,
		secLoadTime: 300,
	},
	93: {
		hasSec: true,
		secLoadTime: 750,
	},
	94: {
		hasSec: true,
	},
	95: {
		hasSec: true,
	},
	96: {
		hasSec: true,
		secLoadTime: 750,
	},
	97: {
		hasSec: true,
		hasWalking: true,
	},
	98: {
		hasSec: true,
	},
	99: {
		hasSec: true,
		secLoadTime: 400,
	},
	100: {
		hasSec: true,
		secLoadTime: 750,
	},
	101: {
		hasSec: true,
		secLoadTime: 750,
	},
	102: {
		hasSec: true,
		secLoadTime: 1000,
		hasScaling: true,
	},
	103: {
		hasSec: true,
		hasWalking: true,
	},
	105: {
		hasSec: true,
		hasScaling: true,
		hasWalking: true,
	},
	106: {
		hasSec: true,
	},
	107: {
		hasSec: true,
		secLoadTime: 750,
		hasScaling: true,
	},
	108: {
		hasSec: true,
	},
	109: {
		hasSec: true,
		secLoadTime: 600,
	},
	110: {
		hasSec: true,
	},
	111: {
		hasSec: true,
		secLoadTime: 600,
	},
	112: {
		hasSec: true,
	},
	113: {
		hasSec: true,
		hasWalking: true,
	},
	114: {
		hasSec: true,
		secLoadTime: 300,
	},
	115: {
		hasSec: true,
	},
	116: {
		hasSec: true,
	},
	117: {
		hasSec: true,
		secLoadTime: 600,
	},
	119: {
		hasSec: true,
		secLoadTime: 250,
	},
	120: {
		hasSec: true,
	},
	121: {
		hasWalking: true,
	},
	123: {
		hasSec: true,
		secLoadTime: 750,
		hasWalking: true,
	},
	124: {
		hasSec: true,
	},
	126: {
		hasSec: true,
	},
	127: {
		hasSec: true,
	},
	default: {
		hasSec: false,
		secLoadTime: 500,
		hasWalking: false,
		walkingLoadTime: 250,
		hasScaling: false,
	},
};
const sendBoost = (type, time = "") => {
	game[obfuscatedNameTranslator.socketManager].sendBytePacket(encodeBytePacket(gameState.token, type, time));
};
const handleLongPress = (t) => {
	const Boost = 1;
	const SecondaryAbility = 4;
	const ScalingBoost = 5;
	try {
		const data = {
			...boostData.default,
			...(boostData[currentScene?.myAnimals?.[0]?.visibleFishLevel] || {}),
		};
		if (t < (currentScene?.myAnimals?.[0]?._standing ? 40 : 100)) {
			return sendBoost(Boost);
		}
		if (currentScene?.myAnimals?.[0]?._standing) {
			return sendBoost(ScalingBoost, t);
		}
		if (data.hasScaling) {
			return sendBoost(ScalingBoost, t);
		}
		if (data.hasSec) {
			return sendBoost(SecondaryAbility, t);
		}
		return sendBoost(Boost);
	} catch {}
};

const randInt = (min, max) => Math.floor(min + Math.random() * (max - min));

const ui = {
	message: {
		info: (message, options) => {
			return document.getElementById("app").__vue_app__._context.config.globalProperties.$message({
				message: message,
				...options,
			});
		},
		success: (message, options) => {
			return document.getElementById("app").__vue_app__._context.config.globalProperties.$message.success({
				message: message,
				...options,
			});
		},
		warning: (message, options) => {
			return document.getElementById("app").__vue_app__._context.config.globalProperties.$message.warning({
				message: message,
				...options,
			});
		},
		error: (message, options) => {
			return document.getElementById("app").__vue_app__._context.config.globalProperties.$message.error({
				message: message,
				...options,
			});
		},
	},
	confirm: ({ title, message, type, dangerouslyUseHTMLString, confirmButtonText, cancelButtonText, onConfirm, onCancel }) => {
		return document
			.getElementById("app")
			.__vue_app__._context.config.globalProperties.$msgbox({
				title: title || "fsploit",
				message: message || "",
				type: type || "",
				dangerouslyUseHTMLString: dangerouslyUseHTMLString || false,
				confirmButtonText: confirmButtonText || "OK",
				cancelButtonText: cancelButtonText || "Cancel",
				showCancelButton: true,
				showClose: false,
			})
			.then(onConfirm)
			.catch(onCancel);
	},
	alert: ({ title, message, type, dangerouslyUseHTMLString, dismissButtonText, onDismiss }) => {
		return document
			.getElementById("app")
			.__vue_app__._context.config.globalProperties.$msgbox({
				title: title || "FSploit",
				message: message || "",
				type: type || "",
				dangerouslyUseHTMLString: dangerouslyUseHTMLString || false,
				confirmButtonText: dismissButtonText || "OK",
				showCancelButton: false,
				showClose: false,
			})
			.then(onDismiss);
	},

	registerGameUiButton: ({ id, svgIcon, onClick }) => {
		gameUiButtons.push({ id, svgIcon, onClick });
		console.log(gameUiButtons);
	},

	nukeDOM: () => {
		const domObserver = new MutationObserver(() => {
			for (const child of document.querySelectorAll("#app > *")) {
				child.remove();
			}
		});
		domObserver.observe(document.querySelector("html"), { childList: true, subtree: true });
	},
};

const applyStyles = () => {
	document.title = `fsploit ${fsploitVersion}`;
	for (const favicon of document.querySelectorAll("link[rel*='icon']")) {
		favicon.remove();
	}
	document.getElementsByTagName("head")[0].appendChild(
		Object.assign(document.createElement("link"), {
			href: "https://raw.githubusercontent.com/mahdi13377/deeeepio_api_wrapper/main/favicon.ico",
			rel: "shortcut icon",
			type: "image/x-icon",
		})
	);
	document.getElementsByTagName("head")[0].appendChild(
		Object.assign(document.createElement("link"), {
			href: "https://raw.githubusercontent.com/mahdi13377/deeeepio_api_wrapper/main/favicon.ico",
			rel: "icon",
			type: "image/x-icon",
		})
	);
	const customTheme = `
		img[src*="img/badges/"] {
			display: none;
		}

		.el-input__wrapper {
			background-color: rgba(17, 24, 39, 0) !important;
		}

		.el-input__inner {
			color: rgba(255, 255, 255, 1) !important;
		}

		* {
			text-decoration: none !important;
		}

		.dark .modal-content {
			background-color: #202020 !important;
			border-color: #3c3c3c !important;
		}

		.dark .forum-post-page .inner,
		.dark .profile .content {
			background-color: #2b2b2b !important;
		}

		.dark body .el-input__wrapper,
		.dark body .el-textarea__wrapper {
			background-color: rgba(17, 24, 39, 0) !important;
			border-color: rgba(55, 65, 81, 1) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.dark .forum-page,
		.dark .social-modal .main .content,
		.dark .social-modal .main .sidebar--left {
			background-color: #2b2c2f !important;
		}

		.forum-page .inner .forum-posts .forum-post-summary {
			border-color: rgba(209, 213, 219, 1) !important;
			border-bottom-width: 1px !important;
			cursor: pointer !important;
			padding-top: 0.5rem !important;
			padding-left: 0.75rem !important;
			padding-right: 0.75rem !important;
		}

		.dark .forum-page .inner .forum-posts .forum-post-summary:hover {
			background-color: rgba(77, 77, 77, 0.1) !important;
		}

		.dark .forum-page .inner .forum-posts .forum-post-summary {
			border-color: rgb(64 68 72) !important;
		}

		.dark .social-modal .main .sidebar--left .tabs .tab.active {
			background-color: rgba(65, 65, 65, 0) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.dark .friends-view .nav .button-container .nice-button.active {
			background-color: rgb(62 66 70) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.all-friends .friends .friend:hover,
		.friend-requests .requests .request.is-new,
		.friend-requests .requests .request:hover {
			background-color: rgb(62 66 70) !important;
			border-radius: 10px !important;
		}

		.btn.square.el-button--mini {
			border-radius: 0.9rem !important;
			width: 2rem !important;
			height: 2rem !important;
		}

		.dark .animals-container .animals .animal {
			background-color: rgba(17, 24, 39, 0) !important;
		}

    .dark .skins-container .skins .skin {
        --tw-bg-opacity: 0!important;
    }
.dark .emotes .emote {
    --tw-bg-opacity: 0!important;
}
.dark .pets .pet {
    --tw-bg-opacity: 0!important;
}

body .el-popover.el-popper.popover--dark {
    border-color: #3c3c3c!important;
}
.dark .leaderboard-popover-details .right .header {
    --tw-bg-opacity: 1!important;
    background-color: #2b2b2b!important
}

body .el-popover.el-popper.popover--dark {
    background-color: #2b2b2b!important
}

.el-col-xs-12 {
    display: block;
    max-width: 49%;
    flex: 0 0 50%
}

html.dark .el-select__popper .el-select-dropdown {
    --tw-bg-opacity: 1;
    background-color: #2b2b2b
}

html.dark .el-select__popper .el-select-dropdown {
    --tw-bg-opacity: 1;
    background-color: #2b2b2b
}

html.dark .el-select__popper .el-select-dropdown__item:focus,html.dark .el-select__popper .el-select-dropdown__item:not(.is-disabled):hover {
    --tw-bg-opacity: 1;
    background-color: #1f1f1f
}

html.dark .el-dropdown-menu__item:focus,html.dark .el-dropdown-menu__item:not(.is-disabled):hover {
    --tw-bg-opacity: 1;
    background-color: #1f1f1f
}

html.dark .el-popper__arrow::before {
    --tw-bg-opacity: 1;
    background-color: rgba(55,65,81,var(--tw-bg-opacity));
    background: #ffffff!important;
    border-color: #565656!important
}

html.dark .el-popper {
    --tw-bg-opacity: 1;
    background-color: #1f1f1f
    --tw-border-opacity: 1;
    border-color: #1f1f1f
    border-radius: .375rem;
    --tw-text-opacity: 1;
}

.dark .create-comment .nav-bar {
    --tw-bg-opacity: 1;
    background-color: #202121;
}

.el-textarea__inner {
    box-shadow: none!important;
}

.el-col.el-col-24.el-col-xs-12.is-guttered:nth-of-type(2) {
    background-color: rgba(32, 32, 33, 0.1);
    padding-right: 15px;
    padding-left: 5px;
    border-width: 1px;
    border-radius: 0.5rem;
    border-color: rgba(255, 255, 255, 0.1);
}

.dark body .el-textarea__inner {
    background-color: #1c1c1c!important;

}

.dark .leaderboard-popover-details .left {
    --tw-bg-opacity: 0!important;
    background-color: rgba(31,41,55,var(--tw-bg-opacity))!important;
}
		.user-widget {
			border-bottom-right-radius: 1rem !important;
			display: -webkit-box !important;
			display: -ms-flexbox !important;
			display: -webkit-flex !important;
			display: flex !important;
			-webkit-box-orient: horizontal !important;
			-webkit-box-direction: normal !important;
			-ms-flex-direction: row !important;
			-webkit-flex-direction: row !important;
			flex-direction: row !important;
			-webkit-box-align: stretch !important;
			-ms-flex-align: stretch !important;
			-webkit-align-items: stretch !important;
			align-items: stretch !important;
			padding: 1rem !important;
		}

		/* Common styles for all buttons */
		.btn:not(.el-button--text) {
      border-bottom-width: 4px!important;
			background-color: rgba(27, 59, 67, 1) !important;
			border-color: rgba(1, 35, 46, 1) !important;
			color: rgba(255, 255, 255, 1) !important;
		}

		.btn:not(.el-button--text):hover {
			background-color: rgba(31, 41, 55, 1) !important;
			border-color: rgba(17, 24, 39, 1) !important;
		}

		.coins.pb-2 {
			background-color: rgba(0, 0, 0, 0) !important;
			border-color: rgba(0, 0, 0, 0) !important;
		}

		html.dark .el-dropdown-menu {
			background-color: #2b2b2b !important;
		}

		.el-popper.is-light .el-popper__arrow::before {
			opacity: 0 !important;
		}

		.el-dropdown-menu__item:not(.is-disabled):focus {

			color: rgba(255, 255, 255, 1) !important;
		}

		.el-dropdown-menu__item i {
			margin-right: 5px !important;
		}

		.user-widget .user__data .username {
			cursor: pointer !important;
			margin-right: 0.25rem !important;
			overflow: hidden !important;
			-o-text-overflow: ellipsis !important;
			text-overflow: ellipsis !important;
			max-width: 16rem !important;
			font-size: 1.1em !important;
			line-height: 1.2em !important;
			margin-left: 1.5rem !important;
		}

		.el-button.el-button--small.el-tooltip__trigger.btn.nice-button.yellow.has-icon.square.only-icon.el-tooltip__trigger {
			display: none !important;
		}

		.el-image:nth-of-type(2).el-image__inner {
			content: url("https://i.ibb.co/84gjfCt/image-4.png") !important;
		}

		.divider {
			display: none !important;
		}

		.btn {
			outline: 2px solid transparent !important;
		}

		.home-page .header .left {
			background-color: rgba(17,24,39, 0.4)!important;
		}

		.top-right-nav {
			background-color: rgba(17,24,39, 0.4)!important;
		}

        div.sidebar.left > div.ad-block {
            opacity: 0 !important;
            pointer-events: none !important;
            display: none !important;
        }
        div.sidebar.left > a {
            display: none !important;
        }
        div.sidebar.left {
            max-width: 30vw;
            width: 21rem;
            bottom: 0 !important;
        }
.dark .profile .content[data-v-60d99b2d] {
    --tw-bg-opacity: 0.5!important;
    background-color: #242424!important;
    backdrop-filter: blur(10px)!important;
    border-radius: 8px!important;
    border: 1px solid rgba(255, 255, 255, 0.1)!important;
}

.el-button {
    transition: .3s!important;
}
		`;
	document.body.appendChild(Object.assign(document.createElement("style"), { innerHTML: customTheme }));

	const versionText = document.querySelector(".client-version");
	versionText.innerHTML = `<p>fsploit v${fsploitVersion}</p><p>Vast Softworks LLC.</p>`;
	versionText.style.display = "flex";
	versionText.style.justifyContent = "space-between";
	versionText.style.left = ".25rem";

	if (!GM_getValue("background")) {
		fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/background-base64")
			.then((response) => response.text())
			.then((data) => {
				document.body.appendChild(
					Object.assign(document.createElement("style"), {
						innerHTML: `.home-bg {background-image: url('data:image/png;base64,${data.trim()}') !important;}`,
					})
				);
				GM_setValue("background", data.trim());
			});
	} else {
		const backgroundData = GM_getValue("background");
		document.body.appendChild(
			Object.assign(document.createElement("style"), {
				innerHTML: `.home-bg {background-image: url('data:image/png;base64,${backgroundData}') !important;}`,
			})
		);
	}

	if (!GM_getValue("banner")) {
		fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/banner-base64")
			.then((response) => response.text())
			.then((data) => {
				document.body.appendChild(
					Object.assign(document.createElement("style"), {
						innerHTML: `.play-game img {opacity: 0 !important;} .play-game > div:first-of-type {background-image: url('data:image/png;base64,${data.trim()}') !important; background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;}`,
					})
				);
				GM_setValue("banner", data.trim());
			});
	} else {
		const bannerData = GM_getValue("banner");
		document.body.appendChild(
			Object.assign(document.createElement("style"), {
				innerHTML: `.play-game img {opacity: 0 !important;} .play-game > div:first-of-type {background-image: url('data:image/png;base64,${bannerData}') !important; background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;}`,
			})
		);
	}
	document.querySelector(".play-game img").setAttribute("draggable", "false");

	const left_widget_container = document.querySelector("div.sidebar.left");

	const tutorial_box = document.querySelector("div.sidebar.right > div:nth-child(3)").cloneNode(true);
	tutorial_box.setAttribute("id", "tutorial-box");
	left_widget_container.appendChild(tutorial_box);

	document.querySelector("#tutorial-box > div.title").innerText = "How to play";
	document.querySelector("#tutorial-box > div:nth-child(2)").outerHTML = '<div id="tutorial"></div>';

	const tutorial = document.getElementById("tutorial");
	tutorial.style.maxHeight = "30vh";
	tutorial.style.overflow = "scroll";
	tutorial.style.overflowX = "hidden";
	tutorial.style.padding = "10px";
	tutorial.style.fontSize = "small";

	const tut = `<b>Welcome to fsploit!</b>
<p>Scroll down for instructions on hacks</p>
<br />
<b>Controls</b>
<p><b>ESC</b> to hide/show menu</p>
<p><b>Hold CTRL</b> to see an aim line (only on certain animals)</p>
<p><b>Scroll</b> with your mouse to zoom in and out of the map. This client allows you to do so without limit.</p>
<p><b>M</b> to hide/show chat messages</p>
<p><b>B</b> to clear chat messages</p>
<p><b>N</b> to hide/show large map</p>
<p><b>Y</b> to view the evolution tree</p>
<p><b>S</b> to open settings</p>

<br />
<hr />
<br />

<b>Boost hacks</b>
<p>Hold <b>CTRL</b> and <b>CLICK</b> to use a long charged boost</p>
<p>Hold <b>ALT</b> and <b>CLICK</b> to use a short charged boost</p>
<p>Hold <b>CTRL</b>, <b>SHIFT</b>, and <b>CLICK</b> to use a special charged boost:</p>
<ul>
	<li>Walking animals: jump higher than normal</li>
	<li>Beluga and beaked whale: shoot super speed projectile (uses 2 boosts)</li>
	<li>Thresher: go nyoom (uses 2 boosts)</li>
</ul>

<b>Goblin shark 210 dmg</b>
<p>It is possible to glitch goblin shark's charged shot mechanism and fire bullets that deal 210 damage without having to charge for 2 seconds.</p>
<p>Steps:</p>
<ol>
	<li>Charge boost to max. Make sure you reach the -50% speed.</li>
	<li>Cancel the charge boost by right clicking.</li>
	<li>Hold the control key and click once to fire a shot.</li>
</ol>
<p>Note that if you long press to manually do a charged boost, it will cancel the glitch and you will have to do the steps above again.</p>`;
	tutorial.innerHTML = tut;
};

const evoTree = () => {
	const overlay = document.createElement("div");
	overlay.style.cssText =
		"position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0); z-index: 1000; display: none;";
	const img = document.createElement("img");
	function isInputActive() {
		const e = document.activeElement;
		return e.matches("input") || e.matches("textarea");
	}
	img.src = "https://i.ibb.co/djBZ520/image.png";
	img.style.cssText = "display: block; max-width: 100%; height: auto; ";
	overlay.appendChild(img);
	document.body.appendChild(overlay);
	window.addEventListener("keydown", (e) => {
		if (!isInputActive() && e.code === "KeyY") {
			overlay.style.display = "block";
		}
	});
	window.addEventListener("keyup", (e) => {
		if (!isInputActive() && e.code === "KeyY") {
			overlay.style.display = "none";
		}
	});
};

const quickDisconnect = () => {
	if (!quickDisconnectx) {
		document.body.addEventListener("keydown", (e) => {
			if (e.ctrlKey && e.shiftKey && e.code === "KeyQ" && document.activeElement !== document.querySelector("div.chat-input input")) {
				try {
					game[obfuscatedNameTranslator.socketManager].disconnect();
				} catch {}
			}
		});
		quickDisconnectx = true;
	}
};

const betterVision = () => {
	try {
		currentScene[obfuscatedNameTranslator.setFlash] = () => true;
	} catch {}
	try {
		currentScene[obfuscatedNameTranslator.terrainManager].shadow.setShadowSize(1000000);
		currentScene[obfuscatedNameTranslator.terrainManager].shadow.setShadowSize = () => true;
	} catch {}
	if (!betterVisionx) {
		setInterval(() => {
			try {
				currentScene[obfuscatedNameTranslator.foodGlowContainer].zOrder = 996;
				currentScene[obfuscatedNameTranslator.foodContainer].zOrder = 997;
				currentScene[obfuscatedNameTranslator.namesLayer].zOrder = 998;
				currentScene[obfuscatedNameTranslator.animalsContainer].zOrder = 999;
				currentScene[obfuscatedNameTranslator.barsLayer].zOrder = 1000;
				currentScene[obfuscatedNameTranslator.chatContainer].zOrder = 1001;
			} catch {}
			try {
				game.viewport.clampZoom({
					minWidth: 0,
					maxWidth: 1e7,
				});
				game.viewport.plugins.plugins.clamp = null;
				game.viewport.plugins.plugins["clamp-zoom"] = null;
			} catch {}
			try {
				currentScene[obfuscatedNameTranslator.viewingGhosts] = true;
				currentScene[obfuscatedNameTranslator.ceilingsContainer].alpha = 0.3;
			} catch {}
		}, 300);

		let p = [];
		setInterval(() => {
			for (
				let i = 0;
				i < currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList]?.length || 0;
				i++
			) {
				try {
					if (currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i].alpha < 0.5) {
						currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i].alpha = 0.5;
					}
					if (currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i].inner.alpha < 0.5) {
						currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i].inner.alpha = 0.5;
					}

					if (p.length === 0) {
						const temp = getAllProperties(
							currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i]
						);
						p = temp.filter(
							(e) =>
								e.startsWith("_0x") &&
								typeof currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i][e] ===
									"object"
						);
					}
					for (const e of p) {
						if (currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i][e].visible != null)
							currentScene[obfuscatedNameTranslator.entityManager][obfuscatedNameTranslator.entityManagerProps.animalsList][i][e].visible = true;
					}
				} catch {}
			}
		}, 50);
		betterVisionx = true;
	}
};

const aimLine = () => {
	const overlayAnimals = [13, 61, 93, 94, 113];

	function createAimOverlay() {
		try {
			document.getElementById("aim-overlay").remove();
		} catch {}
		const aim_overlay = document.createElement("hr");
		document.querySelector("div.game").insertBefore(aim_overlay, document.querySelector("div.game").children[0]);
		aim_overlay.outerHTML =
			'<hr id="aim-overlay" style="border: 1px #f55d dotted;border-image: linear-gradient(to right, #f55d, #f550) 1;transform-origin: left;position: absolute;top: 50%;left: 50%;width: 40vw;display:none;pointer-events:none;">';
	}
	createAimOverlay();
	if (!aimLinex) {
		document.addEventListener("mousemove", () => {
			try {
				if (currentScene != null) {
					if (currentScene?.myAnimals?.[0] != null) {
						document.getElementById("aim-overlay").style.transform = `rotate(${
							(currentScene?.myAnimals?.[0]?.inner?.rotation * 180) / Math.PI +
							(currentScene?.myAnimals?.[0]?.visibleFishLevel === 101 ? 90 : -90)
						}deg)`;
					}
				}
			} catch {}
		});
		window.addEventListener(
			"keydown",
			(e) => {
				try {
					if (e.ctrlKey && overlayAnimals.includes(currentScene.myAnimals[0].visibleFishLevel)) {
						document.getElementById("aim-overlay").style.display = "block";
					}
				} catch {}
			},
			false
		);
		window.addEventListener(
			"keyup",
			(e) => {
				try {
					if (!e.ctrlKey) {
						document.getElementById("aim-overlay").style.display = "none";
					}
				} catch {}
			},
			false
		);
		window.addEventListener("focus", () => {
			try {
				document.getElementById("aim-overlay").style.display = "none";
			} catch {}
		});
		aimLinex = true;
	}
};

const clearChat = () => {
	if (!clearChatx) {
		document.addEventListener("keydown", (event) => {
			if (event.code === "KeyB" && document.activeElement !== document.querySelector("div.chat-input input")) {
				for (const b of currentScene[obfuscatedNameTranslator.chatMessages]) {
					b.renderable = false;
					b.render = () => undefined;
				}
			}
		});
		clearChatx = true;
	}
};

const boostHacks = () => {
	function showCtrlOverlay(e) {
		if (!document.getElementById("ctrl-overlay")) {
			createCtrlOverlay();
		}
		if (e.ctrlKey || e.altKey) {
			try {
				if (currentScene != null) {
					if (currentScene?.myAnimals?.[0] != null) {
						if (currentScene?.myAnimals?.[0]?.visibleFishLevel !== 101) {
							document.getElementById("ctrl-overlay").style.pointerEvents = "all";
						} else if (!e.shiftKey) {
							if (currentScene?.myAnimals?.[0]?.visibleFishLevel === 101) document.getElementById("ctrl-overlay").style.pointerEvents = "all";
						} else {
							document.getElementById("ctrl-overlay").style.pointerEvents = "none";
						}
					}
				}
			} catch {}
		}
	}

	function superShot() {
		try {
			handleLongPress(1);
			setTimeout(() => {
				handleLongPress(5000);
			}, 50);
			setTimeout(() => {
				handleLongPress(5000);
			}, 100);
			setTimeout(() => {
				handleLongPress(5000);
			}, 150);
		} catch {}
	}

	function createCtrlOverlay() {
		try {
			document.getElementById("ctrl-overlay").remove();
		} catch {}
		const ctrl_overlay = document.createElement("div");
		document.querySelector("div.game").insertBefore(ctrl_overlay, document.querySelector("div.game").children[0]);
		ctrl_overlay.outerHTML =
			'<div id="ctrl-overlay" style="width: 100%;height: 100%;position: absolute;display: block;z-index:10000;pointer-events:none;"></div>';
		document.getElementById("ctrl-overlay").addEventListener("contextmenu", (e) => e.preventDefault());
	}
	createCtrlOverlay();
	if (!boostHacksx) {
		window.addEventListener(
			"keydown",
			(e) => {
				try {
					showCtrlOverlay(e);
				} catch {}
			},
			false
		);
		window.addEventListener(
			"click",
			(e) => {
				try {
					const b = {
						...boostData.default,
						...boostData[currentScene?.myAnimals?.[0]?.visibleFishLevel],
					};
					if (e.ctrlKey) {
						if (e.shiftKey && currentScene?.myAnimals?.[0]?.visibleFishLevel === 107) {
							superShot();
						} else if (e.shiftKey && currentScene?.myAnimals?.[0]?.visibleFishLevel !== 101 && currentScene?.myAnimals?.[0]?._standing) {
							handleLongPress(randInt(5e8, 2 ** 31 - 1));
						} else {
							let inputManager = Object.getOwnPropertyNames(game)
								.map((v) => game[v])
								.find((v) => v.keys instanceof Array);
							inputManager.pointerDown = true;
							inputManager.pressElapsed = Infinity;
							inputManager.setPointerDown(false);
						}
					} else if (e.altKey) {
						handleLongPress(currentScene?.myAnimals?.[0]?._standing ? 41 : Math.floor(b.secLoadTime / 2));
					}
				} catch {}
			},
			false
		);
		window.addEventListener(
			"keyup",
			(e) => {
				try {
					if (!e.ctrlKey && !e.altKey) {
						document.getElementById("ctrl-overlay").style.pointerEvents = "none";
					}
				} catch {}
			},
			false
		);
		window.addEventListener("focus", () => {
			try {
				document.getElementById("ctrl-overlay").style.pointerEvents = "none";
			} catch {}
		});
		boostHacksx = true;
	}
};

const humpbackAutosongs = () => {
	if (!humpbackAutosongsx) {
		const songs = [
			[5, 5, 5],
			[5, 5000, 5],
			[5000, 5000, 5000],
			[5000, 5000, 5],
		];
		const humpbackUiStyle = document.createElement("style");
		humpbackUiStyle.innerHTML = `
#humpback-ui * {
  font-family:Quicksand;
  color:#fff;
}
#humpback-ui .hb-button p {
  margin:5px 0 0 0;
  font-size:12px;
}
#humpback-ui {
  display:flex;
  gap:8px;
  width:100%;
  justify-content:center;
  pointer-events:none;
  user-select:none;
}
#humpback-ui .hb-button {
  background:#0004;
  padding:10px 0;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
#humpback-ui .hb-song {
  display:flex;
  flex-direction:row;
  gap:2px;
  width:81px;
  justify-content:center;
}
#humpback-ui .war {
  background:#ae3e41;
}
#humpback-ui .heal {
  background:#1aff00;
}
#humpback-ui .blast {
  background:#f6ff00;
}
#humpback-ui .ruin {
  background:#db7c00;
}
#humpback-ui .small {
  width:10px;
  height:10px;
  margin:2.5px 0;
  border-radius:999px;
}
#humpback-ui .large {
  width:15px;
  height:15px;
  border-radius:999px;
}

  `;
		document.head.appendChild(humpbackUiStyle);
		setInterval(() => {
			try {
				if (currentScene?.myAnimals?.[0]?.visibleFishLevel != 87) {
					if (document.querySelector("#humpback-ui")) {
						document.querySelector("#humpback-ui").remove();
					}
					return;
				} else if (document.querySelector("#humpback-ui")) {
					return;
				}
				const humpbackUI = document.createElement("div");
				const parent = document.querySelector(".stats .middle");

				humpbackUI.innerHTML = `
<div id="humpback-ui">
  <div class="hb-button">
    <div class="hb-song">
      <div class="war small"></div>
      <div class="war small"></div>
      <div class="war small"></div>
    </div>
    <p>War | 1</p>
  </div>

  <div class="hb-button">
    <div class="hb-song">
      <div class="heal small"></div>
      <div class="heal large"></div>
      <div class="heal small"></div>
    </div>
    <p>Heal | 2</p>
  </div>

  <div class="hb-button">
    <div class="hb-song">
      <div class="blast large"></div>
      <div class="blast large"></div>
      <div class="blast large"></div>
    </div>
    <p>Blast | 3</p>
  </div>

  <div class="hb-button">
    <div class="hb-song">
      <div class="ruin large"></div>
      <div class="ruin large"></div>
      <div class="ruin small"></div>
    </div>
    <p>Ruin | 4</p>
  </div>
</div>
    `;
				parent.prepend(humpbackUI);
			} catch {}
		}, 100);
		document.addEventListener("keydown", (e) => {
			try {
				if (!["1", "2", "3", "4"].includes(e.key)) return;
				if (currentScene?.myAnimals?.[0]?.visibleFishLevel !== 87) return;
				for (const i in [0, 1, 2]) {
					setTimeout(() => {
						handleLongPress(songs[parseInt(e.key) - 1][i]);
					}, Math.max(document.querySelector("div.top-right div.latency > span.value")?.innerText * 3 || 100, 100) * i);
				}
			} catch {}
		});
		humpbackAutosongsx = true;
	}
};

const obfuscatedNameTranslator = {};
const getAllProperties = (obj) => {
	return [...Object.getOwnPropertyNames(Object.getPrototypeOf(obj)), ...Object.getOwnPropertyNames(obj)];
};
const throttle = (func, delay) => {
	let prev = 0;
	return (...args) => {
		const now = Date.now();
		if (now - prev > delay) {
			prev = now;
			return func(...args);
		}
	};
};
const injector = () => {
	const reflect = {};
	for (const v of Object.getOwnPropertyNames(Reflect)) {
		reflect[v] = Reflect[v];
	}

	const proxy = Proxy;

	const spoof = new WeakMap();
	spoof.set = spoof.set;
	spoof.get = spoof.get;
	spoof.has = spoof.has;

	const proxies = new WeakSet();
	proxies.add = proxies.add;
	proxies.has = proxies.has;
	proxies.delete = proxies.delete;

	const lookupGetter = Object.prototype.__lookupGetter__;

	const hook = (obj, name, handler) => {
		const hooked = new proxy(obj[name], handler);
		spoof.set(hooked, obj[name]);
		obj[name] = hooked;
	};

	hook(Function.prototype, "toString", {
		apply(f, th, args) {
			return reflect.apply(f, spoof.get(th) || th, args);
		},
	});

	hook(window, "Proxy", {
		construct(f, args) {
			const result = reflect.construct(f, args);
			proxies.add(result);
			return result;
		},
	});

	hook(proxy, "revocable", {
		apply(f, th, args) {
			const result = reflect.apply(f, th, args);
			proxies.add(result.proxy);
			return result;
		},
	});

	let lastInjectionSuccessTime = 0;
	hook(Function.prototype, "bind", {
		apply(f, th, args) {
			if (proxies.has(args[0])) return reflect.apply(f, th, args);
			try {
				try {
					if (lookupGetter.call(args[0], "aboveBgPlatformsContainer") != null) return reflect.apply(f, th, args);
				} catch {}
				if (args[0] && args[0].aboveBgPlatformsContainer != null) {
					currentScene = args[0];
					game = args[0].game;

					const currentSceneKeys = getAllProperties(currentScene);
					const obCurrentSceneKeys = currentSceneKeys.filter((e) => e.startsWith("_0x"));
					obfuscatedNameTranslator.setFlash =
						Object.getOwnPropertyNames(currentScene.__proto__.__proto__)
							.filter((v) => v.startsWith("_0x"))
							.find((v) => currentScene[v] instanceof Function) || obfuscatedNameTranslator.setFlash;
					obfuscatedNameTranslator.terrainManager =
						obCurrentSceneKeys.find((e) => typeof currentScene[e]?.shadow !== "undefined") || obfuscatedNameTranslator.terrainManager;

					const foodContainerInter = setInterval(() => {
						obfuscatedNameTranslator.foodGlowContainer =
							obCurrentSceneKeys.find(
								(e) =>
									typeof currentScene[e]?.children?.[0]?.texture?.textureCacheIds?.[0] !== "undefined" &&
									currentScene[e].children?.[0].texture.textureCacheIds[0] === "food_glow.png"
							) || obfuscatedNameTranslator.foodGlowContainer;
						obfuscatedNameTranslator.foodContainer =
							obCurrentSceneKeys.find(
								(e) =>
									typeof currentScene[e]?.children?.[0]?.texture?.textureCacheIds?.[0] !== "undefined" &&
									[
										"food.png",
										"flappy.png",
										"meat.png",
										"man.png",
										"algae.png",
										"apple.png",
										"fruit.png",
										"volcanofood.png",
										"bubble.png",
										"coconut.png",
										"coldfood.png",
										"coldalgae.png",
										"reeffood.png",
										"reefalgae.png",
									].includes(currentScene[e].children?.[0].texture.textureCacheIds?.[0])
							) || obfuscatedNameTranslator.foodContainer;

						if (typeof obfuscatedNameTranslator.foodGlowContainer !== "undefined" && typeof obfuscatedNameTranslator.foodContainer !== "undefined")
							clearInterval(foodContainerInter);
					}, 1000);

					obfuscatedNameTranslator.ceilingsContainer =
						obCurrentSceneKeys.find(
							(e) =>
								typeof currentScene[e]?.children?.[0]?.settings?.layerId !== "undefined" &&
								currentScene[e].children?.[0].settings.layerId === "ceilings"
						) || obfuscatedNameTranslator.ceilingsContainer;

					obfuscatedNameTranslator.viewingGhosts =
						obCurrentSceneKeys.find((e) => typeof currentScene[e] === "boolean") || obfuscatedNameTranslator.viewingGhosts;

					obfuscatedNameTranslator.entityManager =
						obCurrentSceneKeys.find((e) => typeof currentScene[e]?.entitiesList !== "undefined") || obfuscatedNameTranslator.entityManager;
					obfuscatedNameTranslator.entityManagerProps = {};
					const entityManagerKeys = getAllProperties(currentScene[obfuscatedNameTranslator.entityManager]);

					const animalListInter = setInterval(() => {
						obfuscatedNameTranslator.animalsContainer =
							obCurrentSceneKeys.find((e) => typeof currentScene[e]?.children?.[0]?.isHiding !== "undefined") ||
							obfuscatedNameTranslator.animalsContainer;

						obfuscatedNameTranslator.entityManagerProps.animalsList =
							entityManagerKeys
								.filter((e) => e.startsWith("_0x"))
								.find((e) => typeof currentScene?.[obfuscatedNameTranslator.entityManager]?.[e]?.[0] !== "undefined") ||
							obfuscatedNameTranslator.entityManagerProps.animalsList;
						if (
							typeof obfuscatedNameTranslator.animalsContainer !== "undefined" &&
							typeof obfuscatedNameTranslator.entityManagerProps.animalsList !== "undefined"
						)
							clearInterval(animalListInter);
					}, 1000);

					obfuscatedNameTranslator.chatMessages =
						obCurrentSceneKeys.find((e) => typeof currentScene[e] === "object" && typeof currentScene[e]?.length === "number") ||
						obfuscatedNameTranslator.chatMessages;

					obfuscatedNameTranslator.barsLayer =
						obCurrentSceneKeys.find((e) => typeof currentScene[e] === "object" && currentScene[e]?.zIndex === 15) ||
						obfuscatedNameTranslator.barsLayer;
					obfuscatedNameTranslator.namesLayer =
						obCurrentSceneKeys.find((e) => typeof currentScene[e] === "object" && currentScene[e]?.zIndex === 18) ||
						obfuscatedNameTranslator.namesLayer;
					obfuscatedNameTranslator.chatContainer =
						obCurrentSceneKeys.find((e) => typeof currentScene[e] === "object" && currentScene[e]?.zIndex === 50) ||
						obfuscatedNameTranslator.chatContainer;

					const gameKeys = getAllProperties(game);
					obfuscatedNameTranslator.socketManager =
						gameKeys.find((e) => typeof game[e]?.sendBytePacket !== "undefined") || obfuscatedNameTranslator.socketManager;

					quickDisconnect();
					betterVision();
					aimLine();
					clearChat();
					boostHacks();
					humpbackAutosongs();
					try {
						gameState = document
							.getElementById("app")
							._vnode.appContext.config.globalProperties.$simpleState.states.find((v) => v._storeMeta.id === "game");
					} catch {}

					if (lastInjectionSuccessTime < Date.now() - 3000) {
						ui.message.success("fsploit - Loaded client modifications");
						lastInjectionSuccessTime = Date.now();
					}
				}
			} catch {}
			return reflect.apply(f, th, args);
		},
	});
};

window.addEventListener("load", () => {
	setTimeout(() => {
		fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/mainMod.js", { cache: "no-cache" })
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				if (currentScript !== data) {
					ui.nukeDOM();
					ui.alert({
						title: "fsploit",
						message: "fsploit has been updated. Please reload the page.",
						type: "info",
						dismissButtonText: "Reload",
						onDismiss: () => location.reload(),
					});
				}
				GM_setValue("mainModule", data);
			})
			.catch(() => {
				location.reload();
			});
	}, 1000);

	const main = () => {
		injector();
		applyStyles();
		evoTree();
		const { close } = ui.message.success(`fsploit v${fsploitVersion} - Initialized`);
		setTimeout(() => {
			close();
			ui.message.info("Brought to you by Vast Softworks LLC.");
		}, 3000);
	};

	let sourceVersion = "unknown,unknown";
	try {
		sourceVersion = [
			document.querySelector("head script[type='module'][src*='index']").src.match(/index\.(?<name>[0-9a-z]*)\.js/i).groups.name,
			document.querySelector("head link[rel='modulepreload'][href*='vendor']").href.match(/vendor\.(?<name>[0-9a-z]*)\.js/i).groups.name,
		].join(",");
	} catch {}
	if (sourceVersion === knownClientVersion) {
		main();
	} else {
		ui.confirm({
			title: "Untested Deeeep.io version",
			message: `Anti-cheat bypass features may not work as expected and get your account banned.
					<br>
					Do you want to proceed anyway?
					<br>
					<p style="font-size:smaller;margin-top: 12px;">
						Debug info:
						<span style="background: #0004;border: 1px solid #fff3;padding: 1px 3px;border-radius: 4px;user-select: auto;">
							index: ${sourceVersion.split(",")[0]}, vendor: ${sourceVersion.split(",")[1]}
						</span>
					</p>`,
			dangerouslyUseHTMLString: true,
			type: "warning",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
			onConfirm: main,
			onCancel: () => {},
		});
	}
});

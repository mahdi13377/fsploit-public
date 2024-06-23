// ==UserScript==
// @name         fsploit - deeeep.io
// @namespace    http://tampermonkey.net/
// @version      2024-01-27
// @description  best deeeep.io cheat ever
// @run-at       document-start
// @author       mahdi1337 & noam01 & .pi3141
// @match        https://*.deeeep.io/*
// @icon         https://beta.deeeep.io/favicon-32x32.png
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

let cached = GM_getValue("mainModule", false);
try {
	if (cached) eval(cached);
} catch {
	cached = false;
}
const ce = () => {
	const a = setInterval(() => {
		try {
			document
				.getElementById("app")
				.__vue_app__._context.config.globalProperties.$msgbox({
					title: "Error",
					message: "Couldn't load fsploit.",
					"close-on-click-modal": false,
					"close-on-press-escape": false,
					confirmButtonText: "Retry",
					type: "error",
				})
				.then(() => {
					location.reload();
				});
			clearInterval(a);
		} catch {}
	}, 25);
};
fetch("https://raw.githubusercontent.com/mahdi13377/fsploit-public/main/mainMod.js")
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		GM_setValue("mainModule", data);
		if (!cached) {
			try {
				eval(data);
			} catch {
				ce();
			}
		}
	})
	.catch(ce);

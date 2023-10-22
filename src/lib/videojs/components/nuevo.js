/**
 * Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
 * Version 11.3.0 for Video.js
 */
/*eslint no-inner-declarations: "off"*/ import videojs from 'video.js';
const nuevodef = {
	zoomMenu: !0,
	rate: 1,
	pipButton: !0,
	ccButton: !0,
	relatedMenu: !0,
	settingsButton: !0,
	filtersMenu: !1,
	downloadButton: !1,
	rateMenu: !0,
	hdicon: !0,
	shareMenu: !0,
	zoomInfo: !0,
	chapterMarkers: !0,
	contextMenu: !0,
	contextLink: !0,
	timetooltip: !1,
	captionsSettings: 'undefined',
	mousedisplay: !0,
	related: {},
	logoposition: 'LT',
	logooffsetX: 10,
	logooffsetY: 10,
	logourl: '',
	url: '',
	title: '',
	description: '',
	embed: '',
	endAction: '',
	pubid: '',
	slideWidth: 160,
	slideHeight: 90,
	slideType: 'vertical',
	limit: 0,
	limitmessage: 'Watch full video on',
	resume: !1,
	video_id: '',
	playlistID: 'undefined',
	playlistMaxH: 'undefined',
	playlistUI: !0,
	playlistShow: !0,
	playlistAutoHide: !0,
	playlist: !1,
	currentSlide: '',
	infoIcon: '',
	target: '_blank',
	buttonRewind: !0,
	metatitle: '',
	metasubtitle: '',
	qualityMenu: !1,
	captionsSize: 1.25,
	tooltips: !0,
	singlePlay: !1,
	rewindforward: 10,
	snapshot: !1,
	snapshotType: 'jpg',
	snapshotWatermark: '',
	ghostThumb: !1,
	minhd: 1080,
	liveReconnect: !1,
	paused: !1,
	controlbar: !0,
	touchRewindForward: !0,
	touchControls: !0,
	iosFullscreen: 'native',
	androidLock: !1,
	playsinline: !0,
	chapters: !1,
	log: !1
};
var vjs_skins = [
	'nuevo',
	'treso',
	'chrome',
	'flow',
	'jwlike',
	'mockup',
	'party',
	'pinko',
	'roundal',
	'shaka',
	'slategrey'
];
if ('undefined' !== typeof window)
	if (document.body) {
		var skin_el = document.createElement('div'),
			doc = document.body;
		doc.appendChild(skin_el);
		skin_el.className = 'vjs-skin';
		var skn = guessSkin(skin_el);
		if ('' !== skn) {
			setSkin(skn);
			videojs.options.skin = skn;
			doc.removeChild(skin_el);
		} else
			setTimeout(function () {
				skn = guessSkin(skin_el);
				if ('' !== skn) {
					setSkin(skn);
					videojs.options.skin = skn;
					doc.removeChild(skin_el);
				}
			}, 50);
	}
function guessSkin(e) {
	var i = getComputedStyle(e, ':before').getPropertyValue('content');
	i = i.replace(/^["'](.+(?=["']$))["']$/, '$1');
	if (vjs_skins.includes(i)) return i;
	else return '';
}
if ('undefined' !== typeof window) if (void 0 !== window.nuevoskin) setSkin(window.nuevoskin);
var browser = videojs.browser;
function lint(e) {
	return e;
}
if (browser.IS_ANDROID) {
	videojs.options.html5.nativeAudioTracks = !1;
	videojs.options.html5.nativeTextTracks = !1;
}
if ('undefined' !== typeof window)
	if (browser.IS_IPAD && 'MediaSource' in window) videojs.options.html5.nativeTextTracks = !1;
try {
	videojs.options.vhs.overrideNative = !0;
} catch (e) {
	lint(e);
}
function setSkin(e) {
	var i = 'progressControl',
		t = 'playToggle',
		s = 'liveDisplay',
		n = 'seekToLive',
		a = 'currentTimeDisplay',
		o = 'timeDivider',
		l = 'durationDisplay',
		r = 'customControlSpacer',
		d = 'volumePanel',
		v = 'chaptersButton',
		f = 'descriptionsButton',
		c = 'subsCapsButton',
		u = 'audioTrackButton',
		h = 'pictureInPictureToggle',
		p = 'fullscreenToggle',
		m = null;
	if ('treso' === e) m = { children: [i, t, s, n, a, l, d, r, v, f, c, u, h, p] };
	else if ('chrome' === e) m = { children: [t, s, n, a, o, l, r, i, d, v, f, c, u, h, p] };
	else if ('party' === e) m = { children: [t, s, n, i, a, o, l, r, d, v, f, c, u, h, p] };
	else if ('roundal' === e || 'pinko' === e)
		m = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [t, s, n, a, i, o, l, r, d, v, f, c, u, h, p]
		};
	else if ('shaka' === e || 'slategrey' === e)
		m = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [t, s, n, a, o, l, i, r, d, v, f, c, u, h, p]
		};
	else if ('flow' === e) m = { children: [t, s, n, a, o, l, i, r, d, v, f, c, u, h, p] };
	else if ('jwlike' === e)
		m = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [i, t, s, n, d, a, o, l, r, v, f, c, u, h, p]
		};
	else if ('mockup' === e) m = { children: [i, t, s, n, d, a, o, l, r, v, f, c, u, h, p] };
	else if ('nuevo' === e)
		m = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [t, s, n, a, o, i, l, r, d, v, f, c, u, h, p]
		};
	if (null !== m) videojs.options.controlBar = m;
}
var sortByKey = function (e, i) {
		return e.sort(function (e, t) {
			var s = e[i],
				n = t[i];
			return s < n ? -1 : s > n ? 1 : 0;
		});
	},
	vjs_find = function (e, i) {
		try {
			return e.querySelector(i);
		} catch (e) {
			return !1;
		}
	},
	vjs_mfind = function (e, i) {
		try {
			return e.querySelectorAll(i);
		} catch (e) {
			return !1;
		}
	},
	vjs_El = function (e, i, t) {
		var s = document.createElement(e);
		if (void 0 !== i) if ('' !== i) s.className = i;
		if (void 0 !== t) if ('' !== t) s.innerHTML = t;
		return s;
	};
videojs.plan = 'g0ld';
function dg13(e) {
	return (e + '').replace(/[a-z]/gi, function (e) {
		return String.fromCharCode(e.charCodeAt(0) + (e.toLowerCase() < 'n' ? 13 : -13));
	});
}
var doms = [
		'lgvahzzbp.xrugnvqrz',
		'znwbri',
		'gfbuynpby',
		'1.0.0.721',
		'rupnp',
		'bv.acqp',
		'zbp.avofw',
		'gra.yyrufw',
		'ccn.ofp',
		'kboqanfrqbp',
		'bv.mgvyoxpngf',
		'yrperi',
		'bv.mgvyoxpngf'
	],
	initPlugin = function (e, i) {
		let t = [];
		try {
			t = videojs.obj.merge(nuevodef, i);
		} catch (e) {
			t = videojs.mergeOptions(nuevodef, i);
		}
		var s = videojs.dom,
			n = e.el(),
			a = e.$('.vjs-tech'),
			o = !1,
			l = !1,
			r = vjs_find(n, '.vjs-play-control');
		vjs_find(r, '.vjs-control-text').ariaLive = 'off';
		if (videojs.options.skin) t.skin = videojs.options.skin;
		var d = function (i) {
				return e.localize(i);
			},
			v = parseInt(t.rewindforward, 10);
		if (v < 1) v = 10;
		if (v > 90) v = 90;
		t.rewindforward = v;
		if (!1 === t.log) videojs.log.level('off');
		var f,
			c,
			u,
			h,
			p = 0,
			m = 0,
			j = 0,
			g = 0,
			y = 1;
		e.shadowSlide = t.ghostThumb;
		if (e.el_.querySelector('.vjs-b-p-b')) return;
		document.addEventListener('pointermove', _);
		function b(e) {
			return e.touches[0].pageX || null;
		}
		function _(e) {
			if ('mouse' === e.pointerType) {
				o = !0;
				n.classList.remove('vjs-touch-inactive');
				n.classList.remove('vjs-touch-active');
				w(!1);
			}
		}
		e.on('dispose', function () {
			window.removeEventListener('touchstart', C);
			document.removeEventListener('pointermove', _);
			e.$('.vjs-tech').removeEventListener('touchstart', Ji);
		});
		window.addEventListener('touchstart', C, { passive: !0 });
		function C() {
			n.classList.remove('vjs-has-mouse');
			w(!0);
		}
		function w(e) {
			var i = vjs_find(n, '.vjs-rewind-control'),
				a = vjs_find(n, '.vjs-forward-control'),
				o = vjs_find(n, '.vjs-extend-zoom'),
				l = vjs_find(n, '.vjs-related'),
				r = vjs_find(n, '.vjs-grid'),
				d = null,
				v = null;
			if (r) {
				d = vjs_find(r, '.vjs-arrow-prev');
				v = vjs_find(r, '.vjs-arrow-next');
			}
			if (e) {
				n.classList.remove('vjs-has-mouse');
				if (i)
					if (t.touchRewindForward && t.touchControls) s.addClass(i, 'vjs-hidden');
					else i.setAttribute('style', 'display:block!important');
				if (a)
					if (t.touchRewindForward && t.touchControls) s.addClass(a, 'vjs-hidden');
					else a.setAttribute('style', 'display:block!important');
				if (o) s.addClass(o, 'vjs-hidden');
				if (l) s.addClass(l, 'vjs-scroll');
				if (d) s.addClass(d, 'vjs-hidden');
				if (v) s.addClass(v, 'vjs-hidden');
			} else {
				n.classList.add('vjs-has-mouse');
				if (i) s.removeClass(i, 'vjs-hidden');
				if (a) s.removeClass(a, 'vjs-hidden');
				if (o) s.removeClass(o, 'vjs-hidden');
				if (l) s.removeClass(l, 'vjs-scroll');
				if (d) s.removeClass(d, 'vjs-hidden');
				if (v) s.removeClass(v, 'vjs-hidden');
			}
		}
		var k = function () {
			if (o) return !0;
			if (matchMedia('(pointer:fine)').matches) {
				w(!0);
				return !0;
			}
			return !1;
		};
		k();
		function x(e) {
			for (var i = document.activeElement, t = 0; t < e.children.length; t++)
				if (e.children[t] === i) return t;
			return 0;
		}
		function T(e) {
			let i = x(e);
			if (i < e.children.length) e.children[i + 1].focus();
		}
		function E(e) {
			let i = x(e);
			if (i > 0) e.children[i - 1].focus();
		}
		var L = ">vid/<deretsiger ton tcudorP>'ncl-sjv'=ssalc vid<";
		if (t.playsinline) a.setAttribute('playsinline', 'true');
		var I,
			M,
			H,
			S,
			B,
			q = [],
			D = !1,
			N = !1;
		const P = n.querySelector('.vjs-big-play-button');
		var A = vjs_find(n, '.vjs-progress-holder'),
			W = vjs_find(n, '.vjs-loading-spinner'),
			z = vjs_find(n, '.vjs-control-bar'),
			R = vjs_find(n, '.vjs-poster');
		if (!0 === videojs.dispose) {
			e.qualities = [];
			e.qualityIndex = -1;
			if (
				'pseudo' === t.iosFullscreen &&
				videojs.browser.IS_IOS &&
				videojs.browser.IOS_VERSION > 9 &&
				!e.el_.ownerDocument.querySelector('.bc-iframe')
			) {
				e.tech_.el_.setAttribute('playsinline', 'playsinline');
				e.tech_.supportsFullScreen = function () {
					return !1;
				};
			}
			e.on('fullscreenchange', function () {
				if (videojs.browser.IS_ANDROID && t.androidLock)
					if ('undefined' !== typeof window)
						if (e.isFullscreen()) window.screen.orientation.lock('landscape-primary');
						else window.screen.orientation.lock('any');
			});
			if (t.touchControls) {
				var O = e.addChild('button', {
					el: s.createEl(
						'button',
						{ className: 'vjs-big-button vjs-b-p-b' },
						{ type: 'button', 'aria-label': d('Play'), 'aria-disabled': 'false', tabindex: '0' }
					)
				});
				n.insertBefore(O.el_, P);
				O.el_.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					Gi();
					if (e.paused()) e.play();
					else e.pause();
				};
				P.ontouchend = R.ontouchend = function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					if (!0 !== D) s.addClass(n, 'vjs-touch-inactive');
				};
			}
			if (t.touchRewindForward && t.touchControls) {
				var F = e.addChild('button', {
					el: s.createEl(
						'button',
						{ className: 'vjs-big-button vjs-b-r-b' },
						{ type: 'button', title: d('Rewind'), 'aria-disabled': 'false' }
					)
				});
				F.el_.innerHTML = '<span>' + t.rewindforward + '</span>';
				n.insertBefore(F.el_, P);
				var U = e.addChild('button', {
					el: s.createEl(
						'button',
						{ className: 'vjs-big-button vjs-b-f-b' },
						{ type: 'button', title: d('Forward'), 'aria-disabled': 'false' }
					)
				});
				U.el_.innerHTML = '<span>' + t.rewindforward + '</span>';
				n.insertBefore(U.el_, P);
				U.el_.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					Gi();
					e.forward();
				};
				F.el_.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					Gi();
					e.rewind();
				};
			}
			var $ = e.options_.inactivityTimeout,
				X = 4e3;
			if (e.options_.inactivityTouchTimeout) X = e.options_.inactivityTouchTimeout;
			z.addEventListener('touchstart', Gi, { passive: !0 });
			z.addEventListener('touchmove', Gi, { passive: !0 });
			e.on('dispose', function () {
				z.removeEventListener('touchstart', Gi);
				z.removeEventListener('touchmove', Gi);
			});
			e.resetTech = function () {
				e.$('.vjs-tech').addEventListener('touchstart', Ji, { passive: !0 });
				e.on('chromecastConnected', function () {
					e.$('.vjs-tech').removeEventListener('touchstart', Ji);
				});
				e.on('chromecastDisconnected', function () {
					setTimeout(function () {
						e.$('.vjs-tech').addEventListener('touchstart', Ji, { passive: !0 });
					}, 200);
				});
			};
			e.$('.vjs-tech').addEventListener('enterpictureinpicture', () => {
				Zi();
			});
			e.on('dispose', function () {
				e.$('.vjs-tech').removeEventListener('touchstart', Ji);
				e.$('.vjs-tech').removeEventListener('enterpictureinpicture', Zi);
			});
			e.resetTech();
			e.setQuality = function (i, t) {
				if (e.qualities.length)
					if ('boolean' === typeof t) {
						e.qualities[i].enabled = t;
						if (e.tech_.vhs) {
							e.tech_.vhs.representations()[i].enabled(t);
						}
					}
			};
			if (!0 !== t.controlbar) s.addClass(n, 'vjs-controls-none');
			e.video_id = function () {
				for (var i = e.currentSources(), s = 0; s < i.length; s++)
					if (void 0 !== i[s].video_id) {
						t.video_id = i[s].video_id;
						break;
					}
				return t.video_id || '';
			};
			e.video_title = function () {
				for (var i = e.currentSources(), s = 0; s < i.length; s++)
					if (void 0 !== i[s].title) {
						t.title = i[s].title;
						break;
					}
				return t.title || '';
			};
			e.textTracksStyle = function (i) {
				if (e.textTrackSettings) {
					var t = e.textTrackSettings,
						s = t.getValues(),
						n = e.captionsSettings;
					t.setDefaults();
					var a = [];
					for (const [e] of Object.entries(s))
						if (i[e]) a[e] = i[e];
						else a[e] = s[e];
					for (const [e] of Object.entries(n)) if (i[e]) a[e] = i[e];
					for (const [e] of Object.entries(i)) a[e] = i[e];
					e.captionsSettings = a;
					t.setValues(e.captionsSettings);
					t.updateDisplay();
				}
			};
			e.captionsSettings = { backgroundOpacity: '0', edgeStyle: 'raised' };
			e.textTracksStyle(e.captionsSettings);
			if (!0 !== t.ccButton) {
				var Y = vjs_find(z, '.vjs-subs-caps-button');
				if (Y) s.addClass(Y, 'vjs-abs-hidden');
			}
			e.forward = function () {
				var i = e.duration(),
					s = e.currentTime();
				if (i > 0) {
					var n = s + t.rewindforward;
					if (n > i) e.currentTime(i);
					else e.currentTime(n);
				}
				e.trigger('forward', { oldTime: s, newTime: n });
			};
			e.rewind = function () {
				if (e.duration() > 0) {
					var i = e.currentTime(),
						s = i - t.rewindforward;
					if (s < 0) s = 0;
					e.currentTime(s);
					e.trigger('rewind', { oldTime: i, newTime: s });
				}
			};
			e.related = function () {
				if (t.settingsButton && t.related.length > 1 && t.relatedMenu && !0 !== e.seeking()) {
					et(I, !1);
					et(H, !1);
					tt('');
					et(M, !0);
					ut();
					e.trigger('related');
					e.pause();
				}
			};
			e.snapshot = function () {
				var e = n.querySelector('video'),
					i = e.videoWidth,
					s = e.videoHeight,
					a = s / i,
					o = document.getElementById('snap');
				if (o) o.parentNode.removeChild(o);
				var l = document.createElement('canvas');
				l.id = 'snap';
				l.style.position = 'absolute';
				l.style.left = '-10000px';
				document.body.appendChild(l);
				var r,
					d = l.getContext('2d');
				if (browser.IS_ANDROID || browser.IS_IPAD || browser.IS_IPHONE || browser.IS_IPOD)
					if (i > 640) {
						s = parseInt(640 * a, 10);
						i = 640;
					}
				l.width = i;
				l.height = s;
				d.fillRect(0, 0, i, s);
				d.drawImage(e, 0, 0, i, s);
				if ('' !== t.snapshotWatermark)
					if (t.snapshotWatermark.length > 2) {
						var v = t.snapshotWatermark;
						if (i < 641) d.font = '16px verdana';
						else d.font = '24px verdana';
						var f = d.measureText(v).width;
						d.globalAlpha = 0.5;
						d.fillStyle = 'white';
						d.fillText(v, i - f - 10, s - 20);
						d.fillStyle = 'black';
						d.fillText(v, i - f - 10 + 2, s - 20 + 2);
					}
				var c = 'snapshot.jpg';
				r = l.toDataURL('image/jpeg', 0.9);
				if ('png' === t.snapshotType) {
					c = 'snapshot.png';
					r = l.toDataURL('image/png');
				}
				var u = document.createElement('a');
				u.href = r;
				u.download = c;
				document.body.appendChild(u);
				setTimeout(function () {
					u.click();
				}, 200);
			};
			e.on('filters', function () {
				et(I, !1);
				et(M, !1);
				Zi();
			});
			e.share = function () {
				if (t.settingsButton && t.shareMenu && !0 !== e.seeking()) {
					et(M, !1);
					et(H, !1);
					tt('');
					e.trigger('share');
					var i = t.url || 'N/A',
						s = t.embed || 'N/A';
					vjs_find(n, '.embed-code').value = s;
					vjs_find(n, '.perma').value = i;
					et(I, !0);
					e.pause();
				}
			};
			if (!0 !== t.contextMenu && 'default' !== t.contextMenu)
				n.oncontextmenu = function (e) {
					e.preventDefault();
				};
			var K = vjs_find(n, '.vjs-custom-control-spacer');
			if (K) K.innerHTML = '';
			var Q = e.addChild('button', {
				el: s.createEl(
					'button',
					{ className: 'vjs-replay-button' },
					{ type: 'button', title: d('Replay'), 'aria-disabled': 'false' }
				)
			});
			n.insertBefore(Q.el_, P);
			Q.el_.onclick = Q.el_.ontouchend = function (i) {
				i.preventDefault();
				i.stopImmediatePropagation();
				e.currentTime(0);
				e.play();
				e.trigger('replay');
			};
			var V = vjs_find(n, '.vjs-picture-in-picture-control');
			if (!0 !== t.pipButton) a.disablePictureInPicture = !0;
			var Z = e.controlBar.el().lastChild;
			if ((document.pictureInPictureEnabled && t.pipButton) || V)
				Z = e.controlBar.getChild('pictureInPictureToggle').el_;
			var G = e.controlBar.addChild('button', {
					el: s.createEl(
						'div',
						{ className: 'vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden' },
						{
							tabindex: 0,
							role: 'button',
							type: 'button',
							'aria-live': 'off',
							'aria-haspopup': 'true',
							'aria-disabled': 'false',
							'aria-expanded': 'false',
							'aria-label': d('Quality menu')
						}
					)
				}),
				J = e.controlBar.addChild('button', {
					el: s.createEl(
						'div',
						{ className: 'vjs-control vjs-button vjs-cog-button vjs-cog-menu-button vjs-hidden' },
						{
							tabindex: 0,
							role: 'button',
							type: 'button',
							'aria-haspopup': 'true',
							'aria-live': 'off',
							'aria-disabled': 'false',
							'aria-expanded': 'false',
							'aria-label': d('Settings menu')
						}
					)
				});
			z.insertBefore(G.el_, Z);
			z.insertBefore(J.el_, Z);
			B = J.el_;
			if (t.snapshot) {
				var ee = e.controlBar.addChild('button', {
					el: s.createEl(
						'button',
						{ className: 'vjs-snap-control vjs-control vjs-button' },
						{ type: 'button' }
					)
				});
				ee.el_.innerHTML =
					'<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
					d('Snapshot') +
					'</span>';
				e.controlBar.el_.insertBefore(ee.el_, J.el_);
				ee.el_.onclick = ee.el_.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					e.snapshot();
				};
			}
			if (t.controlbar) {
				var ie = s.createEl('div', { className: 'vjs-background-bar' });
				n.insertBefore(ie, z);
			}
			S = G.el_;
			var te =
				'<span class="quality-span vjs-no-pointer"></span><span class="vjs-control-text" aria-live="polite">' +
				d('Quality') +
				'</span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
			S.innerHTML = te;
			if (t.buttonForward) {
				if (t.buttonRewind) it(!0);
				var se = 'vjs-forward-control',
					ne = e.controlBar.addChild('button', {
						el: s.createEl(
							'button',
							{ className: se + ' vjs-control vjs-button' },
							{ title: d('Forward'), type: 'button', 'aria-disabled': 'false' }
						)
					});
				ne.el_.innerHTML =
					'<span class="num">' +
					t.rewindforward +
					'</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
					d('Forward') +
					'</span>';
				if ('party' === t.skin && t.buttonRewind)
					e.controlBar.el_.insertBefore(ne.el_, vjs_find(n, '.vjs-rewind-control').nextSibling);
				else
					e.controlBar.el_.insertBefore(
						ne.el_,
						e.controlBar.getChild('playToggle').el_.nextSibling
					);
				ne.el_.onclick = ne.el_.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					e.forward();
				};
			} else if (t.buttonRewind) it();
			var ae = s.createEl('div', { className: 'vjs-vast-label' });
			ae.innerHTML = d('Advertisement');
			var oe = 'playToggle';
			if ('party' === t.skin) oe = 'progressControl';
			if ('treso' === t.skin) oe = 'volumePanel';
			z.insertBefore(ae, e.controlBar.getChild(oe).el_.nextSibling);
			if (t.theaterButton) {
				var le = e.controlBar.addChild('button', {
						el: s.createEl(
							'div',
							{ className: 'vjs-control vjs-button vjs-control-button vjs-mode-control' },
							{ type: 'button', 'aria-live': 'polite', 'aria-disabled': 'false' }
						)
					}),
					re = d('Theater mode'),
					de = d('Exit theater mode'),
					ve = document.createElement('span');
				ve.ariaHidden = 'true';
				ve.className = 'vjs-icon-placeholder';
				var fe = document.createElement('span');
				fe.ariaLive = 'polite';
				fe.className = 'vjs-control-text';
				le.el_.appendChild(ve);
				le.el_.appendChild(fe);
				fe.innerHTML = re;
				z.insertBefore(le.el_, e.controlBar.getChild('fullscreenToggle').el_);
				var ce = le.el_;
				if ('large' === t.theaterButton) {
					s.addClass(ce, 'vjs-mode');
					fe.innerHTML = de;
				}
				ce.onclick = ce.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					if (s.hasClass(ce, 'vjs-mode')) {
						s.removeClass(ce, 'vjs-mode');
						fe.innerHTML = re;
						e.trigger('mode', 'normal');
					} else {
						s.addClass(ce, 'vjs-mode');
						e.trigger('mode', 'large');
						fe.innerHTML = de;
					}
				};
			}
			var ue = vjs_El('div', 'vjs-menu-settings'),
				he = vjs_El('div', 'vjs-menu-div vjs-settings-div');
			ue.appendChild(he);
			var pe = vjs_El('div', 'vjs-submenu vjs-settings-home');
			he.appendChild(pe);
			pe.innerHTML = '<div class="vjs-menu-title">' + d('Settings') + '</div>';
			var me = vjs_El('ul', 'vjs-menu-content vjs-settings-list');
			pe.appendChild(me);
			me.role = 'menu';
			me.tabIndex = '-1';
			B.innerHTML =
				'<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-hd vjs-hidden">HD</span><span class="vjs-control-text" aria-live="polite">' +
				d('Settings') +
				'</span>';
			B.appendChild(ue);
			if (t.downloadButton) {
				var je = e.controlBar.addChild('button', {
					el: videojs.dom.createEl(
						'button',
						{ className: 'vjs-download-control vjs-control vjs-button', title: d('Download') },
						{ type: 'button', 'aria-disabled': 'false' }
					)
				});
				z.insertBefore(je.el_, e.controlBar.getChild('fullscreenToggle').el_);
				je.el_.innerHTML =
					'<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
					d('Download') +
					'</span>';
				je.el_.onclick = je.el_.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					var t = e.video_id();
					e.trigger('downloadVideo', { source: e.currentSrc(), id: t });
				};
			}
			at();
			vjs_mfind(n, '.vjs-control').forEach((e) => {
				nt(e);
			});
			z.querySelectorAll('.vjs-button').forEach((e) => {
				nt(e);
			});
			e.on('playerresize', function () {
				ot();
			});
			e.on('dispose', function () {
				window.removeEventListener('click', lt);
				window.removeEventListener('touchstart', rt);
				if (window.parent) {
					window.parent.removeEventListener('click', lt);
					window.parent.removeEventListener('touchstart', rt);
				}
				l = !0;
			});
			window.addEventListener('click', lt);
			window.addEventListener('touchstart', rt);
			if (window.parent)
				try {
					window.parent.addEventListener('click', lt);
					window.parent.addEventListener('touchstart', rt);
				} catch (e) {
					lint(e);
				}
			A.addEventListener('touchend', function (e) {
				Zi(e);
			});
			if ('' === t.title) t.title = t.metatitle = document.title;
			if ('' === t.infoText) t.infoText = t.metatitle;
			if (!t.timetooltip) {
				var ge = vjs_find(n, '.vjs-play-progress'),
					ye = vjs_find(ge, '.vjs-time-tooltip');
				if (ge && ye) s.addClass(ye, 'vjs-abs-hidden');
			}
			try {
				if (!t.mousedisplay) s.addClass(vjs_find(n, '.vjs-mouse-display'), 'vjs-abs-hidden');
			} catch (e) {
				lint(e);
			}
			if (t.logocontrolbar) {
				var be = vjs_El('img');
				be.src = t.logocontrolbar;
				be.onload = function () {
					if (this.height > 0) {
						var i = vjs_El('div', 'vjs-logo-bar');
						if ('' !== t.logourl) {
							var s = vjs_El('a');
							s.href = t.logourl;
							s.target = t.target;
							if (t.logotitle) s.title = t.logotitle;
							s.appendChild(be);
							i.appendChild(s);
						} else i.appendChild(be);
						z.insertBefore(i, e.controlBar.getChild('fullscreenToggle').el_);
					}
				};
			}
			if (t.contextMenu && 'default' !== t.contextMenu) {
				var _e = vjs_El('div', 'vjs-context-menu vjs-hidden'),
					Ce = vjs_El('ul'),
					we = vjs_El('li', 'cplay', d('Play')),
					ke = vjs_El('li', 'cmute', d('Mute')),
					xe = vjs_El('li', 'cfull', d('Fullscreen')),
					Te = vjs_El('li', 'curi vjs-hidden', d('Copy video URL'));
				Ce.append(we, ke, xe, Te);
				var Ee = null;
				if (void 0 !== t.contextUrl && void 0 !== t.contextText)
					if (t.contextIcon)
						Ee = vjs_El(
							'li',
							'link',
							'<a target="' +
								t.target +
								'" href="' +
								t.contextUrl +
								'"><img src="' +
								t.contextIcon +
								'">' +
								t.contextText +
								'</a>'
						);
					else
						Ee = vjs_El(
							'li',
							'link',
							'<a target="' + t.target + '" href="' + t.contextUrl + '">' + t.contextText + '</a>'
						);
				else if (t.contextLink)
					Ee = vjs_El(
						'li',
						'link',
						'<a target="_blank" href="//www.nuevodevel.com/nuevo/">&copy; Nuevo v.11.3.0</a>'
					);
				if (Ee) Ce.appendChild(Ee);
				_e.appendChild(Ce);
				n.appendChild(_e);
				we.onclick = function () {
					if (e.paused()) e.play();
					else e.pause();
				};
				ke.onclick = function () {
					if (e.muted()) e.muted(!1);
					else e.muted(!0);
				};
				xe.onclick = function () {
					if (e.isFullscreen()) e.exitFullscreen();
					else e.requestFullscreen();
				};
				Te.onclick = function () {
					if (navigator && navigator.clipboard && navigator.clipboard.writeText)
						navigator.clipboard.writeText(t.url);
				};
				function Le() {
					s.addClass(_e, 'vjs-hidden');
					window.removeEventListener('scroll', Le);
					window.removeEventListener('mouseup', Le);
				}
				e.on('dispose', function () {
					window.removeEventListener('scroll', Le);
					window.removeEventListener('mouseup', Le);
					window.removeEventListener('mousedown', Le);
				});
				n.oncontextmenu = function (i) {
					i.preventDefault();
					if (Te && '' === t.url) s.addClass(Te, 'vjs-hidden');
					else s.removeClass(Te, 'vjs-hidden');
					if (e.paused()) we.innerHTML = 'Play';
					else we.innerHTML = 'Pause';
					if (e.muted()) ke.innerHTML = 'Unmute';
					else ke.innerHTML = 'Mute';
					if (e.isFullscreen()) xe.innerHTML = 'Exit Fullscreen';
					else xe.innerHTML = 'Fullscreen';
					s.removeClass(_e, 'vjs-hidden');
					var a = _e.offsetWidth,
						o = _e.offsetHeight,
						l = null,
						r = null;
					if (i.clientY) l = i.clientY;
					if (i.clientX) r = i.clientX;
					if (null !== l && null !== r) {
						var d = n.getBoundingClientRect(),
							v = l - d.top,
							f = r - d.left;
						if (v + o > n.offsetHeight) v = n.offsetTop + n.offsetHeight - o;
						if (f + a > n.offsetWidth) f = n.offsetWidth - a;
						_e.style.top = v + 'px';
						_e.style.left = f + 'px';
						window.addEventListener('scroll', Le);
						window.addEventListener('mouseup', Le);
					}
				};
			}
			if (t.logo) {
				var Ie = vjs_El('img');
				Ie.src = t.logo;
				Ie.onload = function () {
					if (this.height > 0) {
						var e = vjs_El('div', 'vjs-logo');
						if (t.logomin) e.className = 'vjs-logo vjs-logo-min';
						n.appendChild(e);
						var i = t.logooffsetX,
							s = t.logooffsetY;
						if ('RT' === t.logoposition) {
							e.style.right = i + 'px';
							e.style.top = s + 'px';
						} else if ('LB' === t.logoposition) {
							e.style.left = i + 'px';
							e.className += ' vjs-logo-bottom';
						} else {
							e.style.left = i + 'px';
							e.style.top = s + 'px';
						}
						if ('' !== t.logourl) {
							var a = vjs_El('a');
							a.href = t.logourl;
							a.target = t.target;
							if (t.logotitle) a.title = t.logotitle;
							a.appendChild(Ie);
							e.appendChild(a);
						} else e.appendChild(Ie);
					}
				};
			}
			if ('treso' === t.skin) {
				var Me = vjs_find(n, '.vjs-current-time'),
					He = vjs_find(n, '.vjs-duration');
				z.removeChild(Me);
				var Se = vjs_find(n, '.vjs-progress-control');
				Se.insertBefore(Me, Se.childNodes[0]);
				z.removeChild(He);
				Se.appendChild(He);
			}
			e.resetNuevo = function () {
				var i,
					a,
					o = [],
					l = [];
				dt();
				ht();
				if (e.options_.sources.length > 0) l = o = e.options_.sources;
				vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = '';
				s.addClass(S, 'vjs-hidden');
				if (o.length < 2) return o[0];
				if (o.length > 1) {
					var r = 0,
						v = 0,
						f = [],
						c = [],
						u = [],
						h = '',
						p = 0,
						m = 0,
						j = 0,
						y = 0,
						b = !1;
					for (r = 0; r < o.length; r++) if (o[r].res || o[r].label) v++;
					if (o.length >= 1) {
						t.dash = !1;
						t.hls = !1;
						var _ = 'MediaSource' in window,
							C = browser.IOS;
						for (p = 0; p < l.length; p++) {
							var w = '';
							try {
								w = l[p].type;
							} catch (e) {
								lint(e);
							}
							if (void 0 !== w) {
								if (-1 !== w.indexOf('x-mpegURL') || -1 !== w.indexOf('apple')) {
									if (_ || C) return l[p];
									f[m] = l[p];
									m++;
								}
								if (-1 !== w.indexOf('dash')) if (_) return l[p];
							}
							if (l[p].res && l[p].label) {
								if (!0 !== b) {
									b = !0;
									a = { res: l[p].res, type: l[p].type, src: l[p].src, label: l[p].label };
								}
								var k = l[p].type;
								if (void 0 === k) k = '';
								if (
									-1 !== k.indexOf('mpeg') ||
									-1 !== k.indexOf('apple') ||
									-1 !== k.indexOf('dash')
								);
								else {
									u[j] = l[p];
									j++;
								}
							}
						}
					}
					var x = [];
					if (f.length > 0 && (_ || C)) return;
					if (c.length > 0 && _) return;
					if (v < 2) return;
					x = (x = u).sort(mt);
					var T = '',
						E = ' vjs-checked';
					T = ' class="vjs-menu-item item-quality"';
					E = ' class="vjs-menu-item item-quality vjs-checked"';
					for (p = 0; p < x.length; p++) {
						var L = x[p].res,
							I = parseInt(L, 10),
							M = '';
						if (t.hdicon && I > t.minhd - 1) {
							var H = 'HD';
							if (I > 1079 && t.minhd < 1080) H = 'FullHD';
							if (I > 2159) H = '4K';
							M = '<i class="vjs-hd-icon">' + H + '</i>';
						}
						var q =
							'tabindex="0" role="menuitemradio" aria-live="off" aria-disabled="false" aria-label="' +
							d('Set quality to ' + x[p].label) +
							'" ';
						if (x[p].default) {
							i = x[p];
							h += '<li ' + q + E + ' data-height="' + p + '">' + x[p].label + M + '</li>';
						} else h += '<li ' + q + T + ' data-height="' + p + '">' + x[p].label + M + '</li>';
						y++;
					}
					if (y > 1) {
						g = y;
						if (t.qualityMenu) {
							Ht();
							var D = vjs_find(n, '.vjs-menu-quality .vjs-menu-content');
							D.innerHTML = D.innerHTML + h;
							s.removeClass(vjs_find(n, '.vjs-extend-quality'), 'vjs-hidden');
							s.removeClass(B, 'vjs-hidden');
						} else {
							var P = vjs_find(S, '.vjs-menu'),
								A = vjs_find(P, '.vjs-menu-title');
							if (A) P.removeChild(A);
							var W = vjs_El('div', 'vjs-menu-title', d('Quality'));
							P.prepend(W);
							vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = h;
							s.removeClass(S, 'vjs-hidden');
						}
						ht();
						var z = vjs_mfind(n, '.item-quality');
						ht();
						var R = function (i) {
							for (var n, a = 0; a < z.length; a++) {
								s.removeClass(z[a], 'vjs-checked');
								if (z[a] === i.target) n = a;
							}
							s.addClass(z[n], 'vjs-checked');
							var o = i.target.getAttribute('data-height');
							pt(x[o].res, x[o].label);
							var l = e.video_id();
							e.trigger('resolutionchange', { id: l, res: x[o].res });
							var r = x[o];
							yt();
							var d = e.remoteTextTracks ? e.remoteTextTracks() : [];
							if (d && Array.isArray(d.tracks_)) d = d.tracks_;
							var v = [];
							d.forEach(function (e) {
								if (e.kind && e.src) {
									var i = { kind: e.kind, src: e.src, mode: e.mode };
									if (e.srclang) i.srclang = e.srclang;
									if (e.language) i.srclang = e.language;
									if (e.label) i.label = e.label;
									v.push(i);
								}
							});
							kt();
							U(r);
							t.chapters = !1;
							e.one('loadeddata', function () {
								if (v.length > 0) e.loadTracks(v);
							});
						};
						for (p = 0; p < z.length; p++) {
							var O = z[p];
							O.onclick = function (e) {
								e.preventDefault();
								e.stopPropagation();
								R(e);
							};
							var F = !1;
							O.addEventListener(
								'touchstart',
								function () {
									F = !1;
								},
								{ passive: !0 }
							);
							O.addEventListener(
								'touchmove',
								function () {
									F = !0;
								},
								{ passive: !0 }
							);
							O.ontouchend = function (e) {
								e.stopPropagation();
								if (!F) R(e);
							};
						}
						ct();
						if (void 0 !== i || void 0 !== a)
							if (void 0 !== i && i !== a) {
								pt(i.res, i.label);
								e.src(i);
							} else if (void 0 !== a) pt(a.res, a.label);
						function U(i) {
							N = !0;
							var s = e.currentTime(),
								n = e.paused();
							e.src(i);
							e.load();
							if (s > 0) e.currentTime(s);
							if (n) e.pause();
							else e.play();
							if (1 !== t.rate) e.setRate(t.rate);
						}
					}
				}
			};
			e.on('loadeddata', function () {
				if (s.hasClass(n, 'vjs-ad-playing') || s.hasClass(n, 'vjs-dai')) return !1;
				wt();
				if (!N) {
					if (t.startTime || e.options_.startTime || e.$('.vjs-tech').getAttribute('startTime')) {
						var i = e.$('.vjs-tech').getAttribute('startTime') || 0;
						if (t.startTime) i = t.startTime;
						if (e.options_.startTime) i = e.options_.startTime;
						t.startTime = i;
						if (i > 5 && i < e.duration() - 5) {
							W.style.opacity = 0;
							e.currentTime(i);
						}
					} else bt();
					wt();
					if (e.isAudio()) {
						s.addClass(n, 'vjs-audio');
						t.is_audio = !0;
					}
					var a = vjs_mfind(n, '.vjs-menu-button-popup');
					for (ni = 0; ni < a.length; ni++) {
						a[ni].onclick = a[ni].ontouchend = function (e) {
							o(e);
						};
						a[ni].onmousemove = function (e) {
							var i = vjs_find(e.target, '.vjs-menu') || vjs_find(e.target.parentNode, '.vjs-menu');
							if (i)
								if (s.hasClass(i, 'vjs-lock-showing'));
								else {
									var t =
										e.target.querySelector('.vjs-control-text') ||
										e.target.parentNode.querySelector('.vjs-control-text');
									if (t) t.removeAttribute('style');
								}
						};
						function o(e) {
							n.querySelectorAll('.vjs-control-text').forEach((e) => {
								e.removeAttribute('style');
							});
							var i = vjs_find(e.target, '.vjs-control-text');
							if ('true' === e.target.getAttribute('aria-expanded')) i.style.opacity = '0';
							else i.removeAttribute('style');
							var a = vjs_find(e.target, '.vjs-menu') || vjs_find(e.target.parentNode, '.vjs-menu');
							if (a) if (!s.hasClass(a, 'vjs-lock-showing')) tt(e.target);
							var o =
									vjs_find(e.target, '.vjs-menu-content') ||
									vjs_find(e.target.parentNode, '.vjs-menu-content'),
								l = 0;
							if ('shaka' === t.skin || 'treso' === t.skin) l = 10;
							if ('roundal' === t.skin || 'mockup' === t.skin) l = 5;
							var r = n.offsetHeight - z.offsetHeight - 10;
							if (n.offsetWidth < 480) r = n.offsetHeight - 8;
							else r -= l;
							if (s.hasClass(n, 'vjs-cast-fixed') && o) o.style.maxHeight = 'none';
							else o.style.maxHeight = r + 'px';
						}
					}
					Tt();
					g = 0;
					e.qualityIndex = -1;
					e.off('mediachange');
					e.qualities = [];
					e.one('playing', d);
					e.one('levelsLoaded', d);
					e.on('dashlevelChange', function () {
						e.trigger('mediachange');
					});
				} else N = !1;
				function l() {
					if (e.tech_.vhs) {
						e.qualities = [];
						var i = e.tech_.vhs.representations();
						if (i.length > 0)
							for (ni = 0; ni < i.length; ni++) {
								var t = i[ni],
									s = 'vjs_' + ni,
									n = {
										id: s,
										index: s,
										label: s,
										width: t.width,
										height: t.height,
										bandwidth: t.bandwidth,
										bitrate: t.bandwidth,
										enabled: !1
									};
								n.enabled = r.bind(this, ni);
								e.qualities.push(n);
							}
					}
				}
				function r(i, t) {
					if (e.qualities) {
						var s = e.tech_.vhs.representations();
						if ('boolean' === typeof t) {
							e.qualities[i].enabled = t;
							s[i].enabled(t);
						}
						return e.qualities[i].enabled;
					}
					return !1;
				}
				function d() {
					l();
					e.on('mediachange', function () {
						if (e.tech_.vhs) {
							var i = e.tech_.vhs,
								t = i.representations(),
								s = i.playlists.media();
							if (s) {
								for (
									var n = s.attributes.BANDWIDTH, a = s.attributes.HEIGHT, o = 0;
									o < t.length;
									o++
								) {
									if (n === t[o].bandwidth) {
										e.qualityIndex = o;
										break;
									}
									if (a === t[o].height) {
										e.qualityIndex = o;
										break;
									}
								}
								e.trigger('qualityChange');
							}
						}
					});
					if (e.qualities.length > 0) {
						Ht();
						g = e.qualities.length;
						setTimeout(function () {
							e.trigger('mediachange');
						}, 500);
						gt(e.qualities);
					}
				}
			});
			if (t.timetooltip) {
				var Be = vjs_find(n, '.vjs-play-progress'),
					qe = vjs_find(Be, '.vjs-time-tooltip');
				if (qe) qe.className = 'vjs-time-tooltip';
			}
			if (t.mousedisplay) {
				var De = vjs_find(n, '.vjs-mouse-display');
				if (De) De.className = 'vjs-mouse-display';
			}
			var Ne = vjs_find(n, '.vjs-info');
			if (Ne) n.removeChild(Ne);
			e.audioInfo = function () {
				if (t.audioInfo && (t.audioInfo.artist || t.audioInfo.title)) return t.audioInfo;
				else return !1;
			};
			_t();
			Ct();
			if (e.options_.sources.length > 0) {
				e.resetNuevo(!1);
				wt();
				Tt();
			}
			e.on('ratechange', function () {
				var i = e.playbackRate();
				n.querySelectorAll('.vjs-speed').forEach((e) => {
					var t = Number(e.innerHTML.replace('x', ''));
					s.removeClass(e, 'vjs-checked');
					if (i === t) s.addClass(e, 'vjs-checked');
				});
				if ('1' === i) i = d('Normal');
				vjs_find(n, '.vjs-extend-speed span').innerHTML = i + 'x';
			});
			e.setRate = function (i) {
				if (parseFloat(i) > 0) {
					e.trigger('ratechanged', { oldRate: e.playbackRate(), newRate: i });
					e.playbackRate(i);
					t.rate = i;
				}
			};
			e.setSource = function (i) {
				e.changeSource(i);
			};
			e.changeSource = function (i) {
				if (!s.hasClass(n, 'vjs-ad-playing') && !s.hasClass(n, 'vjs-dai'))
					if (!e.adPlaying) {
						e.item = i;
						t.chapters = !1;
						if (i) {
							if ('string' === typeof i) i = { sources: [{ src: i }] };
							if (i.src) i = { sources: [i] };
							if (i.source) {
								i.sources = [];
								i.sources.push(i.source);
							}
							if (i.sources) {
								var a = 1;
								if (e.paused()) a = 2;
								e.pause();
								e.changeSrc(i);
								if (1 === a) e.play();
								e.trigger('sourceChanged');
							}
						}
					}
			};
			e.changeSrc = function (i) {
				if (!s.hasClass(n, 'vjs-ad-playing') && !s.hasClass(n, 'vjs-dai')) {
					e.item = i;
					t.url =
						t.video_id =
						t.infoTitle =
						t.infoDescription =
						t.metatitle =
						t.metasubtitle =
						t.audioInfo =
						t.infoUrl =
							null;
					t.title = t.url = t.description = t.slideImage = '';
					if (i) {
						if ('string' === typeof i) i = { sources: [{ src: i }] };
						if (i.src) i = { sources: [i] };
						if (i.source) {
							i.sources = [];
							i.sources.push(i.source);
						}
						if (i.sources) {
							t.rate = 1;
							e.setRate(1);
							e.trigger('medialoaded');
							t.video_id = void 0;
							if (i.video_id) t.video_id = i.video_id;
							if (i.audioInfo) t.audioInfo = i.audioInfo;
							if (i.slideImage) t.slideImage = i.slideImage;
							if (i.slideWidth) t.slideWidth = i.slideWidth;
							if (i.slideHeight) t.slideHeight = i.slideHeight;
							if (void 0 !== i.title) t.metatitle = t.title = i.title;
							if (void 0 !== i.description) t.description = i.infoDescription = i.description;
							if (void 0 !== i.embed) t.embed = i.embed;
							if (void 0 !== i.infoTitle) t.infoTitle = i.infoTitle;
							if (void 0 !== i.infoDescription) t.infoDescription = i.infoDescription;
							if (void 0 !== i.infoUrl) t.infoUrl = i.infoUrl;
							if (void 0 !== i.infoIcon) t.infoIcon = i.infoIcon;
							if (void 0 !== i.url) t.url = i.url;
							i.sources.forEach((e) => {
								if (i.title) {
									e.title = i.title;
									e.metaTitle = i.title;
								}
								if (i.metatitle) e.metaTitle = i.metatitle;
								if (i.metaTitle) e.metaTitle = i.metaTitle;
								if (i.metasubtitle) e.metaSubtitle = i.metasubtitle;
								if (i.metaSubtitle) e.metaSubtitle = i.metaSubtitle;
								if (i.metaThumbnail) e.metaThumbnail = i.metaThumbnail;
							});
							e.captions = null;
							if (void 0 !== i.tracks) {
								var a = i.tracks;
								a.forEach((e) => {
									if (void 0 !== e.src && 'captions' === e.kind) {
										if (e.default) e.mode = 'showing';
										e.language = e.srclang;
									}
								});
								if (a.length > 0) e.captions = a;
							}
							if (void 0 !== i.poster) e.poster(i.poster);
							setTimeout(function () {
								t.firstplay = !0;
							}, 200);
							t.currentSlide = '';
							e.options_.sources = i.sources;
							var o = e.resetNuevo(!0, i);
							e.src(o);
							e.trigger('newSource');
							Ct();
							_t();
							It();
							if (void 0 !== i.track) {
								i.tracks = [];
								i.tracks.push(i.track);
							}
							if (void 0 !== i.tracks)
								if (i.tracks.length > 0)
									e.one('loadeddata', function () {
										kt();
										for (var i = [], t = e.item.tracks, s = 0; s < t.length; s++)
											if (void 0 !== t[s].src) {
												if (t[s].default && ('captions' === t[s].kind || 'subtitles' === t[s].kind))
													e.currentTrack = t[s].src;
												if (t[s].src)
													if ('metadata' === t[s].kind) e.trigger('medialoaded', { xml: t[s].src });
													else {
														i[s] = e.addRemoteTextTrack(t[s], !1);
														i[s].addEventListener('load', function () {
															if ('chapters' === this.kind) Tt();
														});
													}
											}
									});
						}
					}
				}
			};
			e.loadTracks = function (i) {
				kt();
				var t,
					s = [];
				if (!Array.isArray(i)) (t = [])[0] = i;
				else t = i;
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					if (a.kind && a.src)
						if ('metadata' === a.kind) e.trigger('medialoaded', { xml: a.src });
						else {
							s[n] = e.addRemoteTextTrack(a, !1);
							s[n].addEventListener('load', function () {
								if ('captions' === this.kind || 'subtitles' === this.kind)
									if (this.default) this.track.mode = 'showing';
								if ('chapters' === this.kind) Tt();
							});
						}
				}
			};
			e.newPlaylist = function (i) {
				for (
					var s = n.className,
						a = vjs_find(e.playlistParent, '.vjs-vlist ul'),
						o = vjs_mfind(a, '.vjs-item'),
						l = 0;
					l < o.length;
					l++
				) {
					o[l].onclick = null;
					o[l].ontouchend = null;
					a.removeChild(o[l]);
				}
				a.innerHTML = '';
				for (var r = 0; r < i.length; r++) {
					var d = Et(i[r], r);
					a.appendChild(d);
				}
				if ('undefined' === t.playlistID) {
					var v = vjs_El('div', 'vjs-last');
					a.appendChild(v);
				}
				e.playlist.currentItem(0);
				e.pause();
				e.changeSrc(i[0]);
				if (s.indexOf('vjs-has-started') > -1)
					e.one('canplay', function () {
						e.play();
					});
			};
			e.removeFromPlaylist = function (i) {
				if (t.playlist && t.playlistUI) {
					var s = vjs_find(e.playlistParent, '.vjs-vlist ul'),
						n = s.childNodes[i];
					s.removeChild(n);
					for (var a = 0; a < s.childNodes.length; a++) s.childNodes[a].setAttribute('data-id', a);
				}
			};
			e.addToPlaylist = function (i, s, a) {
				if (t.playlist && t.playlistUI) {
					var o,
						l = vjs_find(e.playlistParent, '.vjs-vlist ul'),
						r = l.childNodes.length;
					if ('number' === typeof a && 'string' === typeof s) {
						if ('after' === s) {
							o = Et(i, a + 1);
							l.insertBefore(o, l.childNodes[a].nextSibling);
						} else if ('before' === s) {
							o = Et(i, a);
							l.insertBefore(o, l.childNodes[a]);
						}
						for (var d = 0; d < l.childNodes.length; d++)
							l.childNodes[d].setAttribute('data-id', d);
					} else {
						if (r > 0) o = Et(i, r - 1);
						else o = Et(i, 0);
						if (r > 1 && e.playlistParent === n) l.insertBefore(o, l.childNodes[r - 2].nextSibling);
						else l.appendChild(o);
					}
				}
			};
			e.on('playlistready', function () {
				if (t.playlistRepeat) e.playlist.repeat(!0);
				Lt();
			});
			var Pe = vjs_find(A, '.vjs-play-progress');
			A.addEventListener('mousedown', St, !1);
			A.addEventListener('touchstart', St, { passive: !0 });
			if (localStorage && localStorage.volume && !0 !== e.muted())
				if (localStorage.volume > 0) e.volume(localStorage.volume);
			var Ae = !1;
			if (
				t.settingsButton &&
				(t.relatedMenu || t.shareMenu || t.rateMenu || t.zoomMenu || t.filtersMenu)
			) {
				Ae = !0;
				t.menus = !0;
				s.removeClass(vjs_find(n, '.vjs-cog-menu-button'), 'vjs-hidden');
			} else {
				t.menus = !1;
				s.addClass(vjs_find(n, '.vjs-cog-menu-button'), 'vjs-abs-hidden');
			}
			if (Ae) {
				var We = '',
					ze = !1,
					Re = !1;
				if (t.shareMenu)
					We +=
						'<li class="vjs-settings-item vjs-share-button" tabindex="0" aria-label="' +
						d('Open sharing container') +
						'" role="menuitem" aria-disabled="false">' +
						d('Share') +
						'<span class="vjs-share-icon"></span></li>';
				if (t.relatedMenu && t.related.length > 1)
					We +=
						'<li class="vjs-settings-item vjs-related-button" tabindex="0" aria-label="' +
						d('Open related container') +
						'" role="menuitem" aria-disabled="false">' +
						d('Related') +
						'<span class="vjs-related-icon"></span></li>';
				if (t.zoomMenu) {
					We =
						We +
						'<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward" tabindex="0" aria-label="' +
						d('Open zoom container') +
						'" role="menuitem" aria-disabled="false">' +
						d('Zoom') +
						'<span class="zoom-label">100%</span></li>';
					Re = vjs_El(
						'div',
						'vjs-submenu vjs-zoom-menu vjs-sub-menu vjs-hidden',
						'<div class="vjs-settings-back vjs-return">' +
							d('Zoom') +
							'</div><div tabindex="0" aria-label="Zoom" class="vjs-zoom-slider" role="slider" aria-live="polite" aria-valuemin="0" aria-valuemax="500" aria-valuetext="0%"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div role="button" tabindex="0" aria-disabled="false" aria-label="' +
							d('Zoom reset') +
							'" class="vjs-zoom-reset">' +
							d('Reset') +
							'</div>'
					);
				}
				if (t.rateMenu) {
					We =
						We +
						'<li aria-disabled="false" class="vjs-settings-item vjs-extend-speed vjs-menu-forward" tabindex="0" aria-label="' +
						d('Open media speed menu') +
						'" role="menuitem" aria-disabled="false">' +
						d('Speed') +
						'<span>' +
						d('Normal') +
						'</span></li>';
					ze = vjs_El('div', 'vjs-submenu vjs-menu-speed vjs-hidden');
					var Oe =
							'<div class="vjs-settings-back">' +
							d('Speed') +
							'</div><ul class="vjs-menu-content vjs-sub-menu">',
						Fe = [0.5, 1, 1.25, 1.5, 2];
					if (e.playbackRates().length > 0) Fe = e.playbackRates();
					e.playbackRates(Fe);
					Fe.forEach((e) => {
						var i = 'vjs-speed';
						if (1 === e) i = 'vjs-speed vjs-checked';
						Oe +=
							'<li aria-label="' +
							d('Set Speed ') +
							e +
							'" tabindex="0" role="menuitemradio" class="vjs-menu-item ' +
							i +
							'">' +
							e +
							'x</li>';
					});
					ze = vjs_El('div', 'vjs-submenu vjs-menu-speed vjs-hidden', (Oe += '</ul>'));
				}
				var Ue = vjs_find(n, '.vjs-settings-list');
				if ('' !== We) {
					Ue.innerHTML = We + Ue.innerHTML;
					if (ze) he.appendChild(ze);
					if (Re) he.appendChild(Re);
					s.removeClass(B, 'vjs-hidden');
					var $e = function (i) {
						var t = i.target.innerHTML;
						t = t.replace('x', '');
						e.setRate(t);
						tt('');
					};
					setTimeout(function () {
						vjs_mfind(n, '.vjs-speed').forEach((e) => {
							var i = !1;
							e.addEventListener(
								'touchstart',
								function () {
									i = !1;
								},
								{ passive: !0 }
							);
							e.onclick = function (e) {
								e.preventDefault();
								e.stopImmediatePropagation();
								if (!i) $e(e);
							};
							e.ontouchend = function (e) {
								e.preventDefault();
								e.stopImmediatePropagation();
								if (!i) $e(e);
							};
							e.addEventListener(
								'touchmove',
								function () {
									i = !0;
								},
								{ passive: !0 }
							);
						});
					}, 200);
				}
				if (t.related.length > 1 && t.relatedMenu) {
					var Xe = t.related.length;
					M = vjs_El('div');
					var Ye = vjs_El('p');
					Ye.tabIndex = '0';
					Ye.innerHTML = d('Related');
					M.appendChild(Ye);
					Ye.addEventListener('click', function (e) {
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					var Ke =
							'<div tabindex="0" role="button" aria-label="Previous related" aria-disabled="false" class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div role="button" tabindex="0" aria-label="Next related" aria-disabled="false" class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>',
						Qe = vjs_El('div', 'vjs-related');
					M.innerHTML = M.innerHTML + Ke;
					M.className = 'vjs-grid vjs-hidden';
					M.ariaLabel = 'Related dialog';
					M.ariaHidden = 'true';
					var Ve = vjs_El('div', 'vjs-close-btn');
					Ve.role = 'button';
					Ve.tabIndex = '0';
					Ve.ariaDisabled = 'false';
					Ve.ariaLabel = d('Close related');
					Qe.className = 'vjs-related vjs-scroll';
					Qe.tabindex = '-1';
					var Ze = n.offsetWidth,
						Ge = 0.8 * Ze;
					if (!0 !== k()) Ge = 0.9 * Ze;
					M.appendChild(Ve);
					M.appendChild(Qe);
					n.appendChild(M);
					var Je = vjs_find(M, '.vjs-arrow-prev'),
						ei = vjs_find(M, '.vjs-arrow-next');
					Je.onkeydown =
						ei.onkeydown =
						Ve.onkeydown =
							function (e) {
								if (13 === e.which) e.target.click();
							};
					var ii = parseInt(vjs_find(n, '.vjs-prev').offsetWidth, 10) + 5;
					if (Je) Je.style.left = parseInt(Qe.style.left, 10) - ii + 'px';
					if (ei) ei.style.left = Ge + parseInt(Qe.style.left, 10) + 'px';
					var ti = vjs_El('div', 'rel-block rel-anim');
					Qe.appendChild(ti);
					var si = t.related;
					p = 1;
					for (var ni = 0; ni < Xe; ni++) {
						var ai = vjs_El('div', 'rel-parent'),
							oi = vjs_El('div', 'rel-item');
						ai.appendChild(oi);
						ti.appendChild(ai);
						oi.innerHTML =
							'<a class="rel-url" target="' +
							t.target +
							'" href="' +
							si[ni].url +
							'" alt="' +
							si[ni].title +
							'"><span class="rel-bg" style="background-image:url(' +
							si[ni].thumb +
							');"></span><label>' +
							si[ni].title +
							'</label><i>' +
							si[ni].duration +
							'</i></a>';
					}
					if (Xe < 7 && k()) {
						if (Je) s.addClass(Je, 'vjs-hidden');
						if (ei) s.addClass(ei, 'vjs-hidden');
					}
					var li = function (e) {
						e.stopPropagation();
						if (!s.hasClass(ei, 'vjs-disabled')) {
							var i = Qe.offsetWidth;
							p++;
							s.removeClass(ei, 'vjs-disabled');
							var t = (p - 1) * i;
							ti.style.left = '-' + t + 'px';
							if (p === m) s.addClass(ei, 'vjs-disabled');
							s.removeClass(Je, 'vjs-disabled');
						}
					};
					if (ei)
						ei.onclick = function (e) {
							li(e);
						};
					var ri = function (e) {
						e.stopPropagation();
						if (!s.hasClass(Je, 'vjs-disabled')) {
							var i = Qe.offsetWidth,
								t = ((p -= 1) - 1) * i;
							vjs_find(n, '.rel-block').style.left = '-' + t + 'px';
							if (Je && ei) {
								if (1 === p) s.addClass(Je, 'vjs-disabled');
								s.removeClass(ei, 'vjs-disabled');
							}
						}
					};
					if (Je)
						Je.onclick = function (e) {
							ri(e);
						};
					var di = vjs_find(n, '.vjs-related-button');
					di.onclick =
						di.ontouchend =
						di.onkeydown =
							function (i) {
								i.preventDefault();
								i.stopPropagation();
								if ('keydown' === i.type) {
									if (13 === i.which) {
										e.related();
										M.children[0].focus();
									}
								} else {
									e.related();
									M.children[0].focus();
								}
							};
					M.onclick = function () {
						s.addClass(M, 'vjs-hidden');
						e.play();
					};
				}
				if (t.shareMenu) {
					(I = vjs_El('div', 'vjs-sharing-overlay vjs-hidden')).ariaLabel = 'Sharing Dialog';
					I.ariaHidden = 'true';
					var vi = vjs_El('div', 'vjs-sharing-container'),
						fi = vjs_El('div', 'vjs-sharing-body'),
						ci = vjs_El('div', 'vjs-close-btn vjs-share-close');
					ci.tabIndex = '0';
					ci.ariaLive = 'polite';
					ci.ariaDisabled = 'false';
					ci.ariaLabel = 'Close share container';
					ci.onkeydown = function (e) {
						if (13 === e.which) e.target.click();
					};
					var ui = vjs_El('p');
					ui.innerHTML = d('Share');
					ui.tabIndex = '0';
					ui.ariaLive = 'polite';
					ui.ariaLabel = 'Share section';
					ui.onclick = function (e) {
						e.preventDefault();
						e.stopPropagation();
					};
					var hi =
						'<div class="vjs-inputs-body"><h2>' +
						d('Link') +
						'</h2><input  aria-live="polite" aria-label="Copy video link" type="text" readonly class="perma"><h2>' +
						d('Embed') +
						'</h2><input aria-label="Copy video embed code" aria-live="polite" class="embed-code" readonly type="text"></div>';
					hi += '<div class="vjs-inputs-body"><h2>' + d('Social') + '</h2></div>';
					hi +=
						'<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>';
					hi +=
						'<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>';
					hi +=
						'<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>';
					hi +=
						'<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>';
					fi.innerHTML = hi;
					vi.appendChild(fi);
					I.appendChild(ui);
					I.appendChild(vi);
					I.appendChild(ci);
					var pi = t.url || document.location.href,
						mi = !1;
					n.appendChild(I);
					var ji = vjs_find(n, '.vjs-share-button');
					ji.onclick =
						ji.ontouchend =
						ji.onkeydown =
							function (i) {
								i.preventDefault();
								i.stopPropagation();
								if ('keydown' === i.type) {
									if (13 === i.which) {
										e.share();
										ui.focus();
									}
								} else e.share();
							};
					var gi = function (i) {
							i.stopPropagation();
							var s,
								n = t.title || t.metatitle || document.title,
								a = encodeURIComponent(pi);
							n = encodeURIComponent(n);
							switch (i.target.id.split('_')[1]) {
								case 'facebook':
									s = '//www.facebook.com/sharer/sharer.php?u=' + a + '&t=' + n;
									break;
								case 'twitter':
									s = '//twitter.com/intent/tweet?url=' + a + '&text=' + n;
									break;
								case 'pinterest':
									if (e.poster())
										s =
											'//pinterest.com/pin/create/button/?media=' +
											encodeURIComponent(e.poster()) +
											'&url=' +
											a +
											'&description=' +
											n;
									break;
								case 'linkedin':
									s = '//www.linkedin.com/shareArticle?mini=true&url=' + a + '&ttitle=' + n;
									break;
								default:
							}
							if ('' !== s)
								window.open(
									s,
									'Share',
									'height=450,width=550,modal=yes,alwaysRaised=yes,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
								);
						},
						yi = n.querySelectorAll('.vjs-share-icon');
					for (ni = 0; ni < yi.length; ni++)
						yi[ni].onclick = yi[ni].onkeydown = function (e) {
							if ('keydown' === e.type) {
								if (13 === e.which) gi(e);
							} else gi(e);
						};
					vjs_find(I, '.embed-code').onclick = function (e) {
						e.stopImmediatePropagation();
						this.select();
					};
					vjs_find(I, '.perma').onclick = function (e) {
						e.stopImmediatePropagation();
						this.select();
					};
					I.onclick = function () {
						s.addClass(I, 'vjs-hidden');
						if (!0 !== mi) e.play();
					};
				}
				if (t.zoomMenu) {
					var bi,
						_i,
						Ci,
						wi = e.$('.vjs-tech');
					if (t.zoomInfo) {
						var ki = vjs_El('div', 'vjs-zoom-parent vjs-hidden'),
							xi = vjs_El('div', 'vjs-reset-zoom');
						xi.innerHTML = '100%';
						ki.appendChild(xi);
						var Ti = vjs_El('div', 'vjs-reset-center'),
							Ei = vjs_El('div', 'vjs-reset-cancel'),
							Li = vjs_El('div', 'vjs-reset-info');
						ki.appendChild(Ti);
						ki.appendChild(Ei);
						ki.appendChild(Li);
						var Ii = d('Drag zoomed area using your mouse.'),
							Mi = d('Use ZOOM slider or mouse wheel to ZOOM in video.'),
							Hi = d('ZOOM HELP'),
							Si = vjs_El('div', 'vjs-zoom-help vjs-hidden');
						if (t.zoomWheel)
							Si.innerHTML =
								'<div class="zoom-close">x</div><div>' +
								Hi +
								'</div>' +
								Mi +
								'<div>' +
								Ii +
								'</div>';
						else
							Si.innerHTML = '<div class="zoom-close">x</div><div>' + Hi + '</div>' + Ii + '</div>';
						ki.appendChild(Li);
						Li.onclick = function (e) {
							Bi(e);
						};
						function Bi(e) {
							e.preventDefault();
							if (s.hasClass(Si, 'vjs-hidden')) s.removeClass(Si, 'vjs-hidden');
						}
						vjs_find(Si, '.zoom-close').onclick = function () {
							s.addClass(Si, 'vjs-hidden');
						};
						n.appendChild(Si);
						Ei.onmouseup = function () {
							Nt();
						};
						Ti.onmouseup = function (e) {
							Dt(e);
						};
						n.appendChild(ki);
					}
					var qi = vjs_find(n, '.vjs-zoom-reset');
					if (qi)
						qi.onmouseup = function () {
							Nt();
						};
					if (!n.hasAttribute('tabIndex')) n.tabIndex = '-1';
					if (t.zoomWheel && !0 !== browser.TOUCH_ENABLED) {
						wi.addEventListener('mousewheel', Di, { passive: !0 });
						wi.addEventListener('DOMMouseScroll', Di, { passive: !0 });
						function Di(e) {
							e.preventDefault();
							e.stopPropagation();
							var i = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
							y = (100 * y + 20 * i) / 100;
							if (y < 1) y = 1;
							if (y > 5) y = 5;
							if (1 === y) {
								Nt();
								if (t.zoomInfo) s.addClass(ki, 'vjs-hidden');
							} else {
								if (t.zoomInfo) s.removeClass(ki, 'vjs-hidden');
								Wt(wi, y);
							}
							var a = vjs_find(n, '.vjs-zoom-menu');
							if (!0 !== s.hasClass(a, 'vjs-hidden')) {
								var o = ((y - 1) / 4) * 100;
								vjs_find(n, '.vjs-zoom-level').style.height = o + '%';
							}
							vt(100 * y);
							return !1;
						}
					}
					function Ni(e) {
						if (y > 1) {
							e.preventDefault();
							e.stopPropagation();
							bi = !0;
							Ci = [wi.offsetLeft - e.clientX, wi.offsetTop - e.clientY];
							wi.style.pointerEvents = 'none';
							document.addEventListener('mouseup', Ai, !0);
							document.addEventListener('mousemove', Pi, !0);
						}
					}
					function Pi(e) {
						e.preventDefault();
						if (bi) {
							var i = (_i = { x: e.clientX, y: e.clientY }).x + Ci[0],
								t = _i.y + Ci[1],
								s = (n.offsetWidth / 2) * (y - 1),
								a = (n.offsetHeight / 2) * (y - 1);
							if (i > s) i = s;
							if (i < -1 * s) i = -1 * s;
							if (t > a) t = a;
							if (t < -1 * a) t = -1 * a;
							wi.style.left = i + 'px';
							wi.style.top = t + 'px';
						}
					}
					function Ai() {
						wi.style.pointerEvents = 'auto';
						bi = !1;
						document.removeEventListener('mouseup', Ai, !0);
						document.removeEventListener('mousemove', Pi, !0);
					}
					wi.onmousedown = function (e) {
						Ni(e);
					};
					var Wi = vjs_find(n, '.vjs-zoom-slider');
					function zi(i, t) {
						wi.style.pointerEvents = 'auto';
						var a = vjs_find(n, '.vjs-zoom-parent'),
							o = i.pageY,
							l = t.offsetHeight,
							r = o - zt(t);
						if (r > l) r = l;
						if (r < 0) r = 0;
						var d = parseInt(100 - (r / l) * 100, 10);
						if (d < 0) d = 0;
						if (d > 100) d = 100;
						try {
							vjs_find(n, '.vjs-zoom-level').style.height = d + '%';
						} catch (i) {
							lint(i);
						}
						try {
							vjs_find(n, '.zoom-thumb').style.height = d + '%';
						} catch (i) {
							lint(i);
						}
						var v = 1 + (4 * d) / 100;
						y = v;
						Wi.setAttribute('aria-valuetext', 100 * v + '%');
						Wt(e.$('.vjs-tech'), v);
						vt(100 * v);
						if (v > 1) {
							videojs.options.blockKeys = !0;
							s.removeClass(a, 'vjs-hidden');
						} else {
							Nt();
							videojs.options.blockKeys = !1;
							s.addClass(a, 'vjs-hidden');
						}
					}
					Wi.onclick = function (e) {
						e.stopImmediatePropagation();
					};
					Wi.onmousedown = function (e) {
						Ri(e);
					};
					function Ri(e) {
						e.stopImmediatePropagation();
						var i = Wi;
						zi(e, i);
						document.addEventListener('mousemove', t, !1);
						document.addEventListener('mouseup', s, !1);
						function t(e) {
							zi(e, i);
						}
						function s() {
							document.removeEventListener('mouseup', s);
							document.removeEventListener('mousemove', t);
						}
					}
				}
				Ue.onkeydown = function (e) {
					var i = e.which;
					if (40 === i || 38 === i || 13 === i || 39 === i || 27 === i) {
						e.preventDefault();
						e.stopImmediatePropagation();
						if (40 === i) T(Ue);
						if (38 === i) E(Ue);
						if (13 === i) e.target.click();
						if (39 === i && s.hasClass(e.target, 'vjs-menu-forward')) e.target.click();
						if (27 === i) B.click();
					}
				};
				if (vjs_find(n, '.vjs-extend-speed')) {
					var Oi = vjs_find(n, '.vjs-menu-speed'),
						Fi = vjs_find(Oi, '.vjs-menu-content');
					Fi.onkeydown = function (e) {
						let i = e.which;
						if (40 === i || 38 === i || 27 === i || 37 === i || 13 === i) {
							e.preventDefault();
							e.stopImmediatePropagation();
							if (40 === i) T(Fi);
							if (38 === i) E(Fi);
							if (27 === i || 37 === i) vjs_find(Oi, '.vjs-settings-back').click();
							if (13 === i) {
								var t = x(Fi);
								Fi.children[t].click();
							}
						}
					};
				}
				var Ui = vjs_find(n, '.vjs-zoom-menu');
				if (Ui) {
					Ui.onkeydown = function (e) {
						if (27 === e.which || 37 === e.which) {
							e.preventDefault();
							e.stopImmediatePropagation();
							vjs_find(Ui, '.vjs-settings-back').click();
						}
					};
					var $i = vjs_find(Ui, '.vjs-zoom-reset');
					$i.onkeydown = function (e) {
						if (13 === e.which) {
							e.preventDefault();
							e.stopImmediatePropagation();
							Nt();
							$i.click();
						}
					};
				}
				ct();
				ft();
				ht();
				e.trigger('menusReady');
			}
			var Xi,
				Yi,
				Ki = !1;
			e.on('timeupdate', function () {
				if (s.hasClass(n, 'vjs-ad-playing') || s.hasClass(n, 'vjs-dai')) return !1;
				var i = e.duration();
				if (0 !== i && i !== 1 / 0) {
					var a = e.video_id(),
						o = e.currentTime();
					if (t.limit && (t.limiturl || '' !== t.url) && parseInt(e.duration(), 10) > 0) {
						if (t.startTime)
							if (Number(t.startTime) > 0 && Number(t.limit) > 0)
								t.limit = Number(t.startTime) + Number(t.limit);
						if (o > t.limit) {
							e.pause();
							if (!0 !== Ki) {
								if (!t.limiturl) t.limiturl = t.url;
								Ki = !0;
								var l = vjs_El('div', 'vjs-limit-overlay'),
									r = vjs_El('a', 'vjs-limit');
								r.href = t.limiturl;
								r.target = t.target;
								r.style.textDecoration = 'none';
								l.appendChild(r);
								if (t.limitimage) {
									vjs_El('img').src = t.limitimage;
									r.innerHTML = '<img src="' + t.limitimage + '" />';
								} else {
									var d = vjs_El('span');
									d.innerHTML = t.limitmessage + '<span>' + t.limiturl + '</span>';
									r.appendChild(d);
								}
								n.appendChild(l);
							}
						}
					}
					if (null !== a)
						if (t.resume && void 0 !== a) {
							o = parseFloat(o);
							var v = String('vjs_resume-' + a);
							if (o > 5 && o < i - 20) {
								localStorage.removeItem(v);
								At(v, o);
							}
							if (o > i - 10) localStorage.removeItem(v);
						}
				}
			});
			e.on('volumechange', function () {
				if (e.volume() > 0) At('volume', e.volume());
			});
			e.on('seeked', function () {
				if (s.hasClass(n, 'vjs-ad-playing') || s.hasClass(n, 'vjs-dai')) return !1;
			});
			e.on('ended', function () {
				if (
					!(
						s.hasClass(n, 'vjs-ad-playing') ||
						s.hasClass(n, 'vjs-dai') ||
						s.hasClass(n, 'vjs-up-next')
					)
				) {
					var i = !0;
					if (t.playlist) {
						i = !1;
						if (e.playlist.currentIndex() === e.playlist.lastIndex() && !0 !== e.playlist.repeat())
							i = !0;
					}
					if (i) {
						var a = e.video_id();
						if (t.resume && null != a)
							try {
								localStorage.removeItem(String('vjs_resume-' + a));
							} catch (e) {
								lint(e);
							}
						if (t.customEnd) {
							var o = vjs_El('div', 'vjs-cend'),
								l = vjs_El('div', 'cend-inner');
							o.appendChild(l);
							l.innerHTML = t.customEnd;
							s.addClass(Q.el_, 'vjs-hidden');
							e.el().appendChild(o);
							e.one('play', function () {
								e.el().removeChild(o);
							});
						} else if ('' !== t.endAction) {
							if (t.settingsButton && 'share' === t.endAction && t.shareMenu) e.share();
							else if (t.settingsButton && 'related' === t.endAction && t.relatedMenu && M)
								e.related();
						} else s.removeClass(Q.el_, 'vjs-hidden');
					}
				}
			});
			e.on('playing', function () {
				if (s.hasClass(n, 'vjs-ad-playing') || s.hasClass(n, 'vjs-dai')) return !1;
				if (M) et(M, !1);
				if (I) et(I, !1);
				s.removeClass(W, 'vjs-hidden');
				s.removeClass(W, 'vjs-abs-hidden');
				if ((e.remoteTextTracks ? e.remoteTextTracks() : []).length < 1 && browser.IS_IOS)
					s.addClass(vjs_find(n, '.vjs-subs-caps-button'), 'vjs-hidden');
			});
			e.on('userinactive', function () {
				e.textTrackSettings.updateDisplay();
			});
			e.on('useractive', function () {
				e.textTrackSettings.updateDisplay();
			});
			e.reconnect = function () {
				var i = e.currentSource();
				e.poster('');
				e.src(i);
				e.play();
			};
			Xi = function () {
				clearTimeout(Yi);
				Yi = setTimeout(function () {
					e.userActive(!1);
				}, 100);
			};
			e.on('mouseleave', function () {
				Xi();
			});
			e.one('canplay', function () {
				if (e.$('.vjs-tech').autoplay)
					setTimeout(function () {
						if (e.paused()) {
							e.muted(!0);
							e.play();
							var i = vjs_El('button', 'vjs-auto-mute');
							i.type = 'button';
							i.title = 'Unmute';
							n.appendChild(i);
							i.onclick = i.ontouchend = function (t) {
								t.preventDefault();
								t.stopPropagation();
								e.muted(!1);
								n.removeChild(i);
							};
							e.on('volumechange', function () {
								if (!0 !== e.muted()) n.removeChild(i);
							});
						}
					}, 500);
			});
			e.on('play', function () {
				var i = vjs_find(n, '.vjs-picture-in-picture-control');
				if (!0 !== t.pipButton && i) i.parentNode.removeChild(i);
				if (s.hasClass(n, 'vjs-ad-playing') || s.hasClass(n, 'vjs-dai')) return !1;
				var a = s.hasClass(n, 'vjs-live');
				if (e.paused() && a && t.liveReconnect) e.reconnect();
				if (t.singlePlay) {
					var o = vjs_mfind(document, 'video');
					if (o.length > 1)
						for (var l = 0; l < o.length; l++) {
							var r = e.$('.vjs-tech');
							if (o[l] !== r) o[l].pause();
						}
				}
				t.currentSlide = '';
				It();
				W.style.opacity = 1;
				if (!D) {
					at();
					D = !0;
					if (!0 !== e.isAudio()) s.addClass(R, 'vjs-no-pointer');
				}
			});
			if (t.mirrorButton) {
				e.controlBar.mirrorButton = e.controlBar.addChild('button', {
					el: s.createEl(
						'button',
						{ text: 'Mirror view', className: 'vjs-mirror-button vjs-control vjs-button' },
						{ role: 'button', 'aria-live': 'polite', 'aria-disabled': 'false' }
					)
				});
				e.controlBar.mirrorButton.el_.innerHTML =
					'<span class="vjs-control-text" aria-live="polite">' + d('Mirror View') + '</span>';
				e.controlBar.el_.insertBefore(e.controlBar.mirrorButton.el_, J.el_);
				var Qi = function (i) {
					var t = n.className,
						a = !1;
					if (t.indexOf('vjs-has-started') > 0) a = !0;
					if (t.indexOf('vjs-ended') > 0) a = !1;
					if (a) {
						var o = 'rotateY(0)';
						if (s.hasClass(i.target, 'vjs-mirrored')) s.removeClass(i.target, 'vjs-mirrored');
						else {
							s.addClass(i.target, 'vjs-mirrored');
							o = 'rotateY(180deg)';
						}
						var l = e.$('.vjs-tech');
						l.style.transform = o;
						l.style.webkitTransform = o;
						l.style.msTransform = o;
					}
				};
				e.controlBar.mirrorButton.el_.onclick = e.controlBar.mirrorButton.el_.ontouchend =
					function (e) {
						e.preventDefault();
						e.stopPropagation();
						Qi(e);
					};
			}
			if (!0 !== videojs.nuevo) n.parentNode.removeChild(n);
			n.style.visibility = 'visible';
			e.trigger('nuevoReady');
		} else n.innerHTML = L.split('').reverse().join('');
		function Vi() {
			if (n.className.includes('vjs-touch-active')) Zi();
			else {
				if (document.pictureInPictureElement) return;
				s.removeClass(n, 'vjs-touch-inactive');
				s.addClass(n, 'vjs-touch-active');
				s.removeClass(n, 'vjs-user-inactive');
				s.addClass(n, 'vjs-user-active');
				tt('');
				Gi();
			}
		}
		function Zi() {
			clearTimeout(e.touchtimer);
			s.removeClass(n, 'vjs-touch-active');
			s.addClass(n, 'vjs-touch-inactive');
			s.removeClass(n, 'vjs-user-active');
			s.addClass(n, 'vjs-user-inactive');
		}
		function Gi() {
			clearTimeout(e.touchtimer);
			e.touchtimer = setTimeout(Zi, X);
		}
		function Ji(i) {
			e.options_.inactivityTimeout = X;
			Vi();
		}
		function et(e, i) {
			if (e)
				if (i) {
					s.removeClass(e, 'vjs-hidden');
					e.ariaHidden = 'false';
				} else {
					s.addClass(e, 'vjs-hidden');
					e.ariaHidden = 'true';
				}
		}
		function it(i) {
			var n = 'vjs-rewind-control';
			if (i) n = 'vjs-rewind-control vjs-rewind-first';
			var a = e.controlBar.addChild('button', {
				el: s.createEl(
					'button',
					{ className: n + ' vjs-control vjs-button' },
					{ title: d('Rewind'), type: 'button', 'aria-disabled': 'false' }
				)
			});
			a.el_.innerHTML =
				'<span class="num">' +
				t.rewindforward +
				'</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
				d('Rewind') +
				'</span>';
			if (i)
				if ('party' === t.skin)
					z.insertBefore(a.el_, e.controlBar.getChild('playToggle').el_.nextSibling);
				else z.insertBefore(a.el_, e.controlBar.getChild('playToggle').el_);
			else
				e.controlBar.el_.insertBefore(a.el_, e.controlBar.getChild('playToggle').el_.nextSibling);
			a.el_.onclick = a.el_.ontouchend = function (i) {
				i.preventDefault();
				i.stopImmediatePropagation();
				e.rewind();
			};
		}
		function tt(i) {
			if (!e.isDisposed())
				if (!l) {
					if ('' === i) i = vjs_find(n, '.vjs-play-control');
					if (s.hasClass(i, 'vjs-cast')) return !1;
					var t = i.className;
					if ('string' === typeof t || t instanceof String) {
						if (t.indexOf('vjs-settings-item') > -1) return;
						if (t.indexOf('vjs-quality-button') < 0) {
							var a = vjs_find(S, '.vjs-menu');
							if (s.hasClass(a, 'vjs-lock-showing')) s.removeClass(a, 'vjs-lock-showing');
						}
						if (t.indexOf('vjs-chapters-button') < 0)
							e.controlBar.getChild('chaptersButton').unpressButton();
						if (t.indexOf('vjs-descriptions-button') < 0)
							e.controlBar.getChild('descriptionsButton').unpressButton();
						if (t.indexOf('vjs-subs-caps-button') < 0)
							e.controlBar.getChild('subsCapsButton').unpressButton();
						if (t.indexOf('vjs-audio-button') < 0)
							e.controlBar.getChild('audioTrackButton').unpressButton();
						if (t.indexOf('vjs-cog-button') < 0) st();
					}
				}
		}
		function st() {
			for (var e = pe, i = vjs_mfind(n, '.vjs-submenu'), t = 0; t < i.length; t++) {
				s.addClass(i[t], 'vjs-hidden');
				if (i[t] === e) s.removeClass(e, 'vjs-hidden');
			}
			s.removeClass(ue, 'vjs-lock-showing');
			s.addClass(ue, 'vjs-hidden');
			B.ariaExpanded = 'false';
		}
		function nt(e) {
			if (e.title) {
				e.onmouseover = function () {
					e.tmptitle = e.title;
					e.title = '';
				};
				e.onmouseleave = function () {
					e.title = e.tmptitle;
				};
			}
		}
		function at() {
			var i = e.el_.offsetWidth;
			['vjs-1600', 'vjs-1080', 'vjs-920', 'vjs-600', 'vjs-640', 'vjs-480', 'vjs-360'].forEach(
				(e) => {
					s.removeClass(n, e);
				}
			);
			if (i < 360) {
				s.addClass(n, 'vjs-360');
				s.addClass(n, 'vjs-480');
			} else if (i < 480) s.addClass(n, 'vjs-480');
			else if (i < 640) {
				s.addClass(n, 'vjs-640');
				if (i < 600) s.addClass(n, 'vjs-600');
			} else if (i < 920) s.addClass(n, 'vjs-920');
			else if (i < 1080) {
				s.addClass(n, 'vjs-1080');
				s.addClass(n, 'vjs-1080');
			} else {
				s.addClass(n, 'vjs-920');
				s.addClass(n, 'vjs-1080');
				s.addClass(n, 'vjs-1600');
			}
		}
		function ot() {
			at();
			ut();
			ht();
			tt('');
		}
		function lt(i) {
			e.options_.innactivityTimeout = $;
			i.stopImmediatePropagation();
			tt(i.target);
		}
		function rt(e) {
			if (!n.contains(e.target)) Zi();
		}
		function dt() {
			var e = 0,
				i = vjs_mfind(n, '.item-quality');
			if (Array.isArray(i))
				i.forEach((e) => {
					e.onclick = null;
				});
			var t = vjs_mfind(n, '.item-quality');
			for (e = 0; e < t.length; e++) t[e].parentNode.removeChild(t[e]);
			var a = vjs_find(n, '.vjs-extend-quality');
			if (a) s.addClass(a, 'vjs-hidden');
			vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = '';
			s.addClass(S, 'vjs-hidden');
		}
		function vt(e) {
			try {
				vjs_find(n, '.vjs-reset-zoom').innerHTML = parseInt(e, 10) + '%';
				vjs_find(n, '.zoom-label').innerHTML = parseInt(e, 10) + '%';
			} catch (e) {
				lint(e);
			}
		}
		function ft() {
			var e = vjs_find(n, '.vjs-menu-speed'),
				i = vjs_find(n, '.vjs-zoom-menu'),
				t = vjs_find(n, '.vjs-menu-quality'),
				a = n.querySelector('.vjs-settings-list'),
				o = function (n, a, o) {
					s.addClass(pe, 'vjs-hidden');
					s.removeClass(a, 'vjs-hidden');
					setTimeout(function () {
						if (e) if (e === a) vjs_find(e, '.vjs-menu-content').children[0].focus();
						if (i)
							if (i !== a) s.addClass(i, 'vjs-hidden');
							else vjs_find(i, '.vjs-zoom-slider').focus();
						if (t) if (t !== a) s.addClass(t, 'vjs-hidden');
						he.style.width = q[o].width + 'px';
						he.style.height = q[o].height + 'px';
					}, 10);
				},
				l = function (n) {
					if (i) s.addClass(i, 'vjs-hidden');
					if (e) s.addClass(e, 'vjs-hidden');
					if (t) s.addClass(t, 'vjs-hidden');
					s.removeClass(pe, 'vjs-hidden');
					he.style.width = q.cogMenu.width + 'px';
					he.style.height = q.cogMenu.height + 'px';
					vt(100 * y);
					setTimeout(function () {
						a.children[0].focus();
					}, 100);
				};
			if (e) {
				var r = vjs_find(n, '.vjs-extend-speed');
				r.onclick = r.ontouchend = function (i) {
					i.preventDefault();
					i.stopImmediatePropagation();
					o(i, e, 'speedMenu');
				};
				var d = vjs_find(e, '.vjs-settings-back');
				d.onclick = d.ontouchend = function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					l(e);
				};
			}
			if (i) {
				var v = vjs_find(n, '.vjs-extend-zoom');
				v.onclick = v.ontouchend = function (e) {
					e.stopPropagation();
					o(e, i, 'zoomMenu');
				};
				var f = vjs_find(i, '.vjs-settings-back');
				f.onclick = f.ontouchend = function (e) {
					e.stopPropagation();
					l(e);
				};
			}
			var c = function (t) {
				if (!vjs_find(n, '.vjs-tech-chromecast')) {
					ht();
					if (i) s.addClass(i, 'vjs-hidden');
					if (e) s.addClass(e, 'vjs-hidden');
					if (!0 !== s.hasClass(ue, 'vjs-lock-showing')) {
						t.target.ariaExpanded = 'true';
						tt(t.target);
						s.addClass(ue, 'vjs-lock-showing');
						vjs_find(B, '.vjs-control-text').style.opacity = 0;
						s.removeClass(ue, 'vjs-hidden');
						s.removeClass(pe, 'vjs-hidden');
						he.style.width = q.cogMenu.width + 'px';
						he.style.height = q.cogMenu.height + 'px';
						vt(100 * y);
						setTimeout(function () {
							a.children[0].focus();
						}, 100);
					} else st();
				}
			};
			B.onclick = B.ontouchend = function (e) {
				e.preventDefault();
				e.stopPropagation();
				c(e);
			};
			B.onkeydown = function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (13 === e.which) c(e);
			};
			B.onmouseover = function () {
				if (!0 !== s.hasClass(ue, 'vjs-lock-showing'))
					vjs_find(B, '.vjs-control-text').removeAttribute('style');
			};
		}
		function ct() {
			var e = S,
				i = vjs_find(e, '.vjs-menu'),
				a = vjs_find(i, '.vjs-menu-content');
			if (g > 1) {
				var o = function (i) {
					if (s.hasClass(i.target, 'vjs-quality-button')) {
						if (s.hasClass(i.target, 'vjs-cast')) return !1;
						var t = vjs_find(i.target, '.vjs-control-text'),
							o = vjs_find(e, '.vjs-menu');
						if (s.hasClass(o, 'vjs-lock-showing')) {
							i.target.ariaExpanded = 'false';
							s.removeClass(o, 'vjs-lock-showing');
							if (t) t.removeAttribute('style');
						} else {
							tt(i.target);
							var l = n.offsetHeight - z.offsetHeight - 10;
							if (n.offsetWidth < 480) l = n.offsetHeight - 40;
							if (!s.hasClass(n, 'vjs-casting')) a.style.maxHeight = l + 'px';
							s.addClass(o, 'vjs-lock-showing');
							i.target.ariaExpanded = 'true';
							t.style.opacity = '0';
							var r = vjs_find(o, 'ul');
							setTimeout(function () {
								r.children[0].focus();
							}, 100);
						}
					}
				};
				e.onclick = e.ontouchend = function (e) {
					e.stopPropagation();
					o(e);
				};
				e.onkeydown = function (e) {
					if (13 === e.which) o(e);
				};
				e.onmouseover = function (e) {
					var i = vjs_find(e.target, '.vjs-menu');
					if (i)
						if (!0 !== s.hasClass(i, 'vjs-lock-showing')) {
							var t = vjs_find(e.target, '.vjs-control-text');
							if (t) t.removeAttribute('style');
						}
				};
			}
			var l = vjs_find(n, '.vjs-menu-quality'),
				r = function (e, i, t) {
					s.addClass(pe, 'vjs-hidden');
					s.removeClass(i, 'vjs-hidden');
					if (Re) if (Re !== i) s.addClass(Re, 'vjs-hidden');
					if (l) if (l !== i) s.addClass(l, 'vjs-hidden');
					he.style.width = q[t].width + 'px';
					he.style.height = q[t].height + 'px';
					vjs_find(l, '.vjs-menu-content').children[0].focus();
				},
				d = function (e) {
					if (Re) s.addClass(Re, 'vjs-hidden');
					if (ze) s.addClass(ze, 'vjs-hidden');
					if (l) s.addClass(l, 'vjs-hidden');
					s.removeClass(pe, 'vjs-hidden');
					he.style.width = q.cogMenu.width + 'px';
					he.style.height = q.cogMenu.height + 'px';
					vt(100 * y);
				};
			if (l && t.qualityMenu) {
				s.removeClass(vjs_find(n, '.vjs-cog-menu-button'), 'vjs-hidden');
				l.onclick = function (e) {
					e.stopPropagation();
				};
				var v = vjs_find(n, '.vjs-extend-quality');
				v.onclick = v.ontouchend = function (e) {
					e.preventDefault();
					e.stopPropagation();
					r(e, l, 'qualityMenu');
				};
				var f = vjs_find(l, '.vjs-settings-back');
				f.onclick = f.ontouchend = function (e) {
					e.preventDefault();
					e.stopPropagation();
					d(e);
				};
			}
		}
		function ut() {
			if (!0 === t.menus) {
				var e = t.related.length,
					i = 0.8,
					a = 800;
				if (vjs_find(n, '.rel-block')) {
					s.removeClass(vjs_find(n, '.rel-block'), 'rel-anim');
					var o = n.offsetWidth,
						l = o * i;
					if (l > a) l = a;
					var r = parseInt(vjs_find(n, '.vjs-related').style.maxWidth, 10);
					if (isNaN(r)) r = 0;
					if (parseInt(r, 10) < 100) r = a;
					if (l > r) l = r;
					var d = vjs_find(n, '.vjs-related');
					if (a < r) d.style.maxWidth = a + 'px';
					else d.style.maxWidth = '800px';
					d.style.width = 100 * i + '%';
					var v = 3,
						f = 2;
					if (e < 5 && 3 !== e) v = 2;
					if (e < 4) f = 1;
					if (l < 480) {
						v = 2;
						f = 1;
					}
					var c = (l / v) * 0.5625,
						u = l / v,
						h = Math.ceil(e / 6);
					if (p > h) p = h;
					m = h;
					if (2 === v && 2 === f) m = Math.ceil(e / 4);
					if (2 === v && 1 === f) m = Math.ceil(e / 2);
					var j = c * f;
					d.style.height = j + 'px';
					var g = o / 2 - l / 2;
					d.style.top = 0.55 * n.offsetHeight - j / 2 + 'px';
					d.style.left = o / 2 - l / 2 + 'px';
					var y = vjs_find(n, '.vjs-arrow-prev'),
						b = vjs_find(n, '.vjs-arrow-next');
					if (k() && y && b) {
						var _ = parseInt(vjs_find(n, '.vjs-prev').offsetWidth + 5, 10);
						y.style.left = g - _ + 'px';
						b.style.left = l + g + 'px';
						s.removeClass(b, 'vjs-disabled');
						s.removeClass(y, 'vjs-disabled');
						if (p === m) s.addClass(b, 'vjs-disabled');
						if (1 === p) s.addClass(y, 'vjs-disabled');
					}
					if (p > 1) {
						var C = d.offsetWidth,
							w = (p - 1) * C;
						vjs_find(n, '.rel-block').style.left = '-' + w + 'px';
					}
					for (var x = 0, T = 0, E = n.querySelectorAll('.rel-parent'), L = 0; L < E.length; L++) {
						var I = E[L];
						I.style.left = x + 'px';
						if (1 === T && f > 1) {
							I.style.top = c + 'px';
							x += u;
						} else I.style.top = 0;
						if (1 === f) x += u;
						I.style.width = u + 'px';
						I.style.height = c + 'px';
						if (f > 1) {
							if (2 === ++T) T = 0;
						} else T = 0;
					}
					s.addClass(vjs_find(n, '.rel-block'), 'rel-anim');
				}
			}
		}
		function ht() {
			if (!0 === t.menus) {
				var e = vjs_find(n, '.vjs-menu-speed'),
					i = vjs_find(n, '.vjs-zoom-menu'),
					a = vjs_find(n, '.vjs-menu-quality');
				he.style.width = 'auto';
				he.style.height = 'auto';
				var o = 5;
				if ('pinko' === t.skin || 'roundal' === t.skin || 'mockup' === t.skin) o = 15;
				if ('shaka' === t.skin) o = 15;
				if ('treso' === t.skin) o = 30;
				if ('jwlike' === t.skin) o = 10;
				var l = n.offsetHeight - z.offsetHeight;
				if (n.offsetWidth < 480) l = n.offsetHeight - 8;
				else l -= o;
				if (l > 300) l = 300;
				he.style.maxHeight = l + 'px';
				if (e) s.addClass(e, 'vjs-hidden');
				if (i) s.addClass(i, 'vjs-hidden');
				if (a) s.addClass(a, 'vjs-hidden');
				s.removeClass(ue, 'vjs-hidden');
				q.cogMenu = { width: ue.clientWidth, height: ue.clientHeight };
				if (e) {
					s.addClass(pe, 'vjs-hidden');
					if (i) s.addClass(i, 'vjs-hidden');
					if (a) s.addClass(a, 'vjs-hidden');
					s.removeClass(e, 'vjs-hidden');
					s.addClass(e, 'vjs-invisible');
					q.speedMenu = { width: e.clientWidth, height: e.clientHeight };
					s.removeClass(e, 'vjs-invisible');
					s.addClass(e, 'vjs-hidden');
				}
				if (a && t.qualityMenu) {
					s.addClass(pe, 'vjs-hidden');
					if (i) s.addClass(i, 'vjs-hidden');
					if (e) s.addClass(e, 'vjs-hidden');
					s.removeClass(a, 'vjs-hidden');
					s.addClass(a, 'vjs-invisible');
					q.qualityMenu = { width: a.offsetWidth + 10, height: a.offsetHeight };
					s.removeClass(a, 'vjs-invisible');
					s.addClass(a, 'vjs-hidden');
					s.removeClass(vjs_find(n, '.vjs-cog-menu-button'), 'vjs-hidden');
				}
				if (i) {
					s.addClass(pe, 'vjs-hidden');
					if (e) s.addClass(e, 'vjs-hidden');
					if (a) s.addClass(a, 'vjs-hidden');
					s.removeClass(i, 'vjs-hidden');
					s.addClass(i, 'vjs-invisible');
					i.style.width = 'auto';
					q.zoomMenu = { width: i.clientWidth, height: i.clientHeight + 1 };
					s.removeClass(i, 'vjs-invisible');
					s.addClass(i, 'vjs-hidden');
				}
				var r = vjs_mfind(n, '.vjs-submenu');
				if (r) for (var d = 0; d < r.length; d++) s.addClass(r[d], 'vjs-hidden');
				s.removeClass(pe, 'vjs-hidden');
				s.removeClass(ue, 'vjs-invisible');
				s.removeClass(pe, 'vjs-hidden');
				if (t.speedMenu || t.zoomMenu || t.relatedMenu || t.shareMenu || t.qualityMenu)
					s.removeClass(vjs_find(n, '.vjs-cog-menu-button'), 'vjs-hidden');
			}
		}
		function pt(e, i) {
			var a = parseInt(e, 10),
				o = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden"></i>',
				l = '';
			if (t.hdicon) {
				l = 'HD';
				if (a > 2159) l = '4K';
				if (a > t.minhd - 1) o = '<i class="vjs-hd-icon vjs-hd-home">' + l + '</i>';
			}
			if (t.qualityMenu) {
				vjs_find(n, '.quality-label').innerHTML = i + o;
				var r = vjs_find(n, '.vjs-hd');
				if (a > t.minhd - 1) s.removeClass(r, 'vjs-hidden');
				else s.addClass(r, 'vjs-hidden');
			} else vjs_find(S, '.quality-span').innerHTML = i + o;
		}
		function mt(e, i) {
			if (!e.res || !i.res) return 0;
			else return +i.res - +e.res;
		}
		function jt(e) {
			if (t.hdicon)
				if (t.qualityMenu) {
					var i = vjs_find(n, '.vjs-hd');
					if (e > t.minhd - 1) {
						var a = 'HD';
						if (e > 2159) a = '4K';
						i.innerHTML = a;
						s.removeClass(i, 'vjs-hidden');
					} else s.addClass(i, 'vjs-hidden');
				}
		}
		function gt(i) {
			var a = null,
				o = null;
			try {
				a = e.dash.mediaPlayer || null;
			} catch (e) {
				lint(e);
			}
			var l = e.options().html5.hlsjsConfig || null,
				r = !0;
			if (l) if (!1 === l.smoothQualityChange) r = !1;
			dt();
			ht();
			for (var v = [], f = !1, c = 0; c < i.length; c++) {
				f = !1;
				for (var u = 0; u < v.length; u++)
					if (i[c].height === v[u].height && i[c].bitrate === v[u].bitrate) f = !0;
				if (!0 !== f) v.push(i[c]);
			}
			if (!(v.length < 2)) {
				t.is_auto = !0;
				var h = 0,
					p = 0,
					m = 'bitrate';
				v.forEach((e) => {
					if (e.height > 0) h++;
					if (e.bitrate > 0) p++;
				});
				if (h > p) m = 'height';
				v = (v = sortByKey(v, m)).reverse();
				g = v.length + 1;
				var j = 'vjs-menu-item item-quality',
					y = 'vjs-menu-item item-quality vjs-checked',
					b = '';
				v.forEach((e) => {
					var i = '';
					if (e.height) {
						var s = parseInt(e.height, 10);
						if (t.hdicon && s > t.minhd - 1) {
							var n = 'HD';
							if (s > 1079 && t.minhd < 1080) n = 'FullHD';
							if (s > 2159) n = '4K';
							i = '<i class="vjs-hd-icon">' + n + '</i>';
							jt(s);
						}
					}
					var a = parseInt(e.bitrate, 10) || 0,
						o = parseInt(e.height, 10) || 0,
						l = 0;
					if (a > 0) l = Math.round(a / 1e3);
					if (o > 0 || a > 0) {
						var r = j,
							v = l + ' kbps',
							f = '',
							c = '';
						if (h === p) {
							if (t.resOnly) f = o + 'p' + i + '</li>';
							else f = o + 'p <i>(' + v + ')</i>' + i + ' </li>';
							c = d('set quality to ') + o.toString() + 'p';
						} else if (h > p) {
							f = o + 'p' + i + '</li>';
							c = d('Set quality to') + o.toString() + 'p';
						} else {
							f = l + ' kbps</li>';
							c = d('Set quality to') + l.toString() + ' kbps';
						}
						var u =
							'<li aria-label="' +
							c +
							'" data-id="' +
							e.index +
							'" class="' +
							r +
							'" data-bitrate="' +
							a +
							'" data-height="' +
							o +
							'" tabindex="0" role="menuitemradio" aria-live="off" aria-disabled="false">';
						b += u + f;
					}
				});
				b +=
					'<li id="auto" class="vjs-menu-item item-quality auto-res vjs-checked" data-height="Autores"' +
					y +
					' tabindex="0" aria-label="' +
					d('Set quality automatic') +
					'" role="menuitem" aria-live="off" aria-disabled="false">Auto<i class="autores"></i></li>';
				var _,
					C = vjs_find(n, '.quality-span');
				if (t.qualityMenu) C = vjs_find(n, '.quality-label');
				C.innerHTML = 'Auto';
				if (t.qualityMenu) {
					Ht();
					(_ = vjs_find(n, '.vjs-menu-quality .vjs-menu-content')).innerHTML = _.innerHTML + b;
					s.removeClass(vjs_find(n, '.vjs-extend-quality'), 'vjs-hidden');
					s.removeClass(B, 'vjs-hidden');
				} else {
					_ = vjs_find(S, '.vjs-menu');
					var w = vjs_find(_, '.vjs-menu-title');
					if (w) _.removeChild(w);
					var k = vjs_El('div', 'vjs-menu-title', d('Quality'));
					_.prepend(k);
					vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = b;
					s.removeClass(S, 'vjs-hidden');
				}
				var L = vjs_mfind(n, '.item-quality');
				ct();
				ht();
				_.onkeydown = function (e) {
					let i = e.target.parentNode;
					var s = e.which;
					if (40 === s || 27 === s || 38 === s || 13 === s || 27 === s || 37 === s) {
						e.preventDefault();
						e.stopPropagation();
						if (40 === s) T(i);
						if (38 === s) E(i);
						if (13 === s) i.children[x(i)].click();
						if (27 === s || 37 === s)
							if (t.qualityMenu) {
								var a = vjs_find(n, '.vjs-menu-quality');
								vjs_find(a, '.vjs-settings-back').click();
							} else S.click();
					}
				};
				e.on('qualityChange', function (e, i) {
					if (a) o = { height: i.height, bitrate: i.bitrate };
					var t = vjs_find(n, '.auto-res');
					if (t) {
						if (t.className.indexOf('vjs-checked') > -1) D();
					}
				});
				for (
					var I = function (e) {
							L.forEach((e) => {
								s.removeClass(e, 'vjs-checked');
							});
							s.removeClass(vjs_find(n, '.auto-res'), 'vjs-checked');
							s.addClass(e.target, 'vjs-checked');
							var i = e.target.getAttribute('id');
							yt();
							if ('auto' === i) D(!0);
							else N(e.target);
						},
						M = 0;
					M < L.length;
					M++
				) {
					var H = L[M];
					H.onclick = function (e) {
						e.preventDefault();
						e.stopPropagation();
						I(e);
					};
					var q = !1;
					H.addEventListener(
						'touchstart',
						function () {
							q = !1;
						},
						{ passive: !0 }
					);
					H.addEventListener(
						'touchmove',
						function () {
							q = !0;
						},
						{ passive: !0 }
					);
					H.ontouchend = function (e) {
						if (!q) {
							e.stopPropagation();
							I(e);
						}
					};
				}
				if ('undefined' !== t.startLevel) P(parseInt(t.startLevel, 10));
				else D(!1);
			}
			function D(i) {
				if (s.hasClass(n, 'vjs-has-started')) s.addClass(W, 'vjs-hidden');
				if (a) {
					a.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: !0 } } } });
					var l = vjs_find(n, '.auto-res');
					if (l) l.className = 'vjs-menu-item item-quality auto-res vjs-checked';
					vjs_find(n, '.quality-span').innerHTML = 'Auto';
				}
				if (i && !a)
					if (e.hlsjs)
						if (r) e.hlsjs.nextLevel = -1;
						else e.hlsjs.currentLevel = -1;
					else for (var d = 0; d < e.qualities.length; d++) e.setQuality(d, !0);
				l = vjs_find(n, '.auto-res');
				if (l) l.className = 'vjs-menu-item item-quality auto-res vjs-checked';
				var v = null;
				if (a) v = o;
				else v = e.qualities[e.qualityIndex];
				var f = '',
					c = '',
					u = 0;
				if (v) {
					if (v.height) u = parseInt(v.height, 10);
					if (u > 0) c = v.height + 'p';
					else c = Math.round(v.bitrate / 1e3) + 'kbps';
					if (l) l.innerHTML = 'Auto<i class="autores">' + c + '</i>';
					if (t.hdicon) {
						if (u >= t.minhd - 1) f = 'HD';
						if (u > 2159) f = '4K';
						jt(u);
					}
				}
				if ('' === f) se = 'vjs-hd-icon vjs-hd-home vjs-hidden';
				else se = 'vjs-hd-icon vjs-hd-home';
				var h = vjs_find(n, '.quality-span');
				if (t.qualityMenu) h = vjs_find(n, '.quality-label');
				h.innerHTML = 'Auto<i class="' + se + '">' + f + '</i>';
			}
			function N(i) {
				vjs_find(n, '.auto-res').innerHTML = 'Auto<i class="autores"></i>';
				var o = parseInt(i.getAttribute('data-height'), 10),
					l = o,
					d = parseInt(i.getAttribute('data-bitrate'), 10),
					v = e.qualities;
				vjs_mfind(n, '.item-quality').forEach((e) => {
					s.removeClass(e, 'vjs-checked');
				});
				s.addClass(i, 'vjs-checked');
				var f = e.video_id();
				if (0 === l) l = d;
				e.trigger('resolutionchange', { id: f, res: l });
				for (var c = 0; c < v.length; c++) {
					if (!e.hlsjs) e.setQuality(c, !1);
					if (v[c].height === l || v[c].bitrate === d)
						if (e.hlsjs)
							if (r) e.hlsjs.nextLevel = c;
							else e.hlsjs.currentLevel = c;
						else if (a) {
							a.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: !1 } } } });
							a.setQualityFor('video', v[c].id);
						} else e.setQuality(c, !0);
				}
				var u = '',
					h = '',
					p = vjs_find(n, '.quality-span');
				if (t.qualityMenu) p = vjs_find(n, '.quality-label');
				if (o > 0) {
					u = 'HD';
					if (o > 2159) u = '4K';
					if (o > t.minhd - 1) h = '<i class="vjs-hd-icon vjs-hd-home">' + u + '</i>';
					else h = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden">' + u + '</i>';
					p.innerHTML = o + 'p' + h;
				} else if (d > 0) p.innerHTML = Math.round(d / 1e3) + 'kbps';
				jt(o);
			}
			function P(i) {
				var t = e.qualities;
				L.forEach((e) => {
					var s = parseInt(e.getAttribute('data-height'), 10),
						n = parseInt(e.getAttribute('data-bitrate'), 10);
					if (s === t[i].height || n === t[i].bitrate) e.click();
				});
			}
		}
		function yt() {
			if (t.qualityMenu) {
				s.addClass(vjs_find(n, '.vjs-menu-quality'), 'vjs-hidden');
				s.removeClass(vjs_find(n, '.vjs-settings-home'), 'vjs-hidden');
				s.removeClass(ue, 'vjs-lock-showing');
				s.addClass(ue, 'vjs-hidden');
			} else if (S) {
				var e = vjs_find(S, '.vjs-menu'),
					i = vjs_find(S, '.vjs-control-text');
				if (e) {
					s.removeClass(e, 'vjs-lock-showing');
					if (i) i.removeAttribute('style');
				}
			}
		}
		function bt() {
			if (
				!(
					s.hasClass(n, 'vjs-ad-playing') ||
					s.hasClass(n, 'vjs-dai') ||
					s.hasClass(n, 'vjs-up-next')
				)
			)
				if (e.duration() !== 1 / 0)
					if ('8' !== browser.IOS_VERSION || 0 !== e.duration()) {
						var i = e.video_id();
						if (null !== i) {
							var a = 0;
							if (t.resume && void 0 !== i) {
								var o = String('vjs_resume-' + i);
								if (localStorage && localStorage.key) a = Number(localStorage.getItem(o));
							}
							if (a > 0 && a < e.duration() - 20)
								setTimeout(function () {
									e.currentTime(a);
								}, 200);
						}
					}
		}
		function _t() {
			var e = vjs_find(n, '.vjs-audio-info');
			if (e) n.removeChild(e);
			if (t.audioInfo && (t.audioInfo.artist || t.audioInfo.title)) {
				var i = vjs_El('span', 'vjs-audio-info'),
					s = '';
				if (t.audioInfo.cover)
					s += '<span class="vjs-cover"><img src="' + t.audioInfo.cover + '"/></span>';
				s += '<span class="vjs-audio-item vjs-text">';
				if (t.audioInfo.artist) s += '<span class="audio-artist">' + t.audioInfo.artist + '</span>';
				if (t.audioInfo.title)
					s += '<span class="vjs-audio-item vjs-song">' + t.audioInfo.title + '</span>';
				if (t.audioInfo.genre || t.audioInfo.album || t.audioInfo.year) {
					s += '<span class="vjs-audio-item audio-id">';
					if (t.audioInfo.genre) s += '<span>Genre: ' + t.audioInfo.genre + '</span>';
					if (t.audioInfo.album) s += '<span>Album: ' + t.audioInfo.album + '</span>';
					if (t.audioInfo.year) s += '<span>Year: ' + t.audioInfo.year + '</span>';
					s += '</span>';
				}
				s += '</span>';
				i.innerHTML = s;
				n.appendChild(i);
				i.onclick = function () {
					if (t.audioInfo.url) window.open(t.audioInfo.url, t.target);
				};
			}
		}
		function Ct() {
			var e = vjs_find(n, '.vjs-info');
			if (e) n.removeChild(e);
			if (t.videoInfo && (t.infoText || t.infoTitle || '' !== t.title)) {
				var i = vjs_El('span', 'vjs-info'),
					s = '';
				n.appendChild(i);
				var a = vjs_find(n, '.vjs-cast-big'),
					o = '';
				if (t.infoTitle) o = t.infoTitle;
				else if ('' !== t.title) o = t.title;
				var l = '';
				if ('' !== t.infoIcon) l = '<span class="vjs-icon"><img src="' + t.infoIcon + '"/></span>';
				s += l;
				if (a) s += '<span class="vjs-text" style="padding-left:50px">';
				else s += '<span class="vjs-text">';
				s += '<span class="vjs-ttl">' + o + '</span>';
				if (t.infoDescription) s += '<span class="vjs-dsc">' + t.infoDescription + '</span>';
				s += '</span>';
				i.innerHTML = s;
				i.onclick = function () {
					if (t.infoUrl) window.open(t.infoUrl, t.target);
				};
			}
		}
		function wt() {
			var i,
				t = [],
				s = !1;
			if (e.textTracks().length > 0) {
				i = e.textTracks();
				for (var n = 0; n < i.length; n++) {
					var a = {},
						o = i[n];
					if ('captions' === o.kind || 'subtitles' === o.kind) {
						a.kind = o.kind;
						a.src = o.src;
						a.language = o.language;
						a.label = o.label;
						if (o.default) a.mode = 'showing';
						t.push(a);
					}
					if ('metadata' === o.kind && !0 !== s)
						if (void 0 !== o.src) {
							s = !0;
							e.trigger('medialoaded', { xml: o.src });
						}
				}
			}
			if (t.length > 0) e.captions = t;
		}
		function kt() {
			for (var i = e.textTracks(), t = i.length || 0; t--; ) i[t].mode = 'disabled';
			for (var s = e.remoteTextTracks(), n = s.length || 0; n--; ) e.removeRemoteTextTrack(s[n]);
		}
		function xt(e) {
			var i = vjs_find(n, '.vjs-thumbnail-holder'),
				a = vjs_find(n, '.vjs-progress-slide .vjs-thumb');
			if (i) {
				if ('shaka' === t.skin) {
					var o = Number(i.style.height.replace(/px$/, '')),
						l = i.computedStyleMap().get('bottom').value + o + 5;
					e.style.bottom = l + 'px';
				} else s.addClass(i, 'vjs-vtt');
				s.addClass(e, 'vjs-chapter-mix');
			} else if (a) {
				if ('shaka' === t.skin) {
					var r = Number(a.style.height.replace(/px$/, ''));
					e.style.bottom = r + 32 + 'px';
				} else s.addClass(a, 'vjs-sld');
				s.addClass(e, 'vjs-chapter-mix');
			}
			return 0;
		}
		function Tt() {
			var i = e.remoteTextTracks(),
				a = vjs_find(n, '.vjs-chapter'),
				o = !1;
			if (a) a.parentNode.removeChild(a);
			A.removeEventListener('mousemove', l, !1);
			A.removeEventListener('mouseout', d, !1);
			A.removeEventListener('touchstart', r);
			function l(e) {
				Mt(!0);
				if (vjs_find(n, '.vjs-chapter')) {
					var i,
						a = vjs_find(n, '.vjs-thumbnail-holder');
					if (a && 'slategrey' === t.skin) s.addClass(a, 'vjs-thumb-mix');
					if ('mousemove' === e.type) i = e.pageX;
					else if ('touchmove' === e.type) i = b(e);
					var o = i - A.getBoundingClientRect().left;
					if (!(o < 0)) {
						var l = (o / A.offsetWidth) * j;
						xt(g);
						g.style.left = o + 'px';
						for (var r = u.length - 1; r >= 0; r--) {
							var d = u[r];
							if (l >= d.startTime) {
								if (g.innerHTML !== d.text) {
									g.innerHTML = d.text;
									g.style.maxWidth = 0.9 * A.offsetWidth + 'px';
								}
								var v = g.offsetWidth / 2,
									f = A.offsetWidth - g.offsetWidth / 2;
								if (o < v) g.style.left = v + 'px';
								if (o > f) g.style.left = f + 'px';
								g.style.opacity = '1';
								g.style.visibility = 'visible';
								break;
							}
						}
					}
				}
			}
			function r(e) {
				l(e);
				document.addEventListener('touchmove', l);
				document.addEventListener('touchend', d);
			}
			function d() {
				Mt(!1);
				if (!videojs.holderdown) {
					document.removeEventListener('touchmove', l);
					document.removeEventListener('touchend', d);
					g.style.opacity = '0';
					g.style.visibility = 'visible';
				}
			}
			if (t.chapterMarkers) {
				var v = n.getElementsByClassName('vjs-marker');
				if (v) for (; v.length > 0; ) v[0].parentNode.removeChild(v[0]);
				if (t.chapters) return;
				for (var f = 0; f < i.length; f++) {
					if ('chapters' === i[f].kind) i[f].mode = 'showing';
					if (i[f].cues)
						if ('chapters' === i[f].kind && i[f].cues.length > 0 && !0 !== o) {
							o = !0;
							var c = i[f];
						}
				}
				if (o) {
					var u = c.cues;
					if (u.length > 0) t.chapters = !0;
					c.mode = 'hidden';
					if (u) {
						var h = vjs_find(n, '.vjs-progress-control'),
							p = vjs_find(h, '.vjs-mouse-display');
						if (p) s.addClass(p, 'vjs-abs-hidden');
						var m = [],
							j = e.duration(),
							g = vjs_El('div');
						g.className = 'vjs-chapter';
						A.appendChild(g);
						A.addEventListener('touchstart', r, { passive: !0 });
						A.addEventListener('mousemove', l, !1);
						A.addEventListener('mouseout', d, !1);
						for (f = 0; f < u.length; f++)
							if (j > 0)
								if (u[f].startTime > 0) {
									m[f] = u[f].startTime;
									var y = vjs_El('div', 'vjs-marker'),
										_ = vjs_El('div', 'vjs-marker-inn');
									y.appendChild(_);
									y.style.left = (m[f] / j) * 100 + '%';
									A.appendChild(y);
								}
					}
				}
			}
		}
		function Et(i, s) {
			var n = vjs_El('li', 'vjs-item');
			n.setAttribute('data-id', s);
			n.tabIndex = '0';
			var a = vjs_El('div', 'vjs-tmb');
			if (i.thumb) a.style.backgroundImage = 'url(' + i.thumb + ')';
			n.appendChild(a);
			var o = vjs_El('p');
			if (i.title) o.innerHTML = i.title;
			else {
				var l = '';
				if (i.audioInfo)
					if (i.audioInfo.title) {
						l = i.audioInfo.title;
						if (i.audioInfo.artist) l = i.audioInfo.artist + ' - ' + l;
					}
				if ('' !== l) o.innerHTML = l;
				else {
					var r = i.sources[0].src,
						d = r.substring(r.lastIndexOf('/') + 1);
					if (i.sources.length > 0)
						for (var v = 0; v < i.sources.length; v++)
							if (i.sources[v].default)
								d = (r = i.sources[v].src).substring(r.lastIndexOf('/') + 1);
					d = d.replace(/(\.[^/.]+)+$/, '');
					o.innerHTML = d;
				}
			}
			n.appendChild(o);
			if ('undefined' !== t.playlistID) var f = document.getElementById(t.playlistID);
			if (f) {
				var c = vjs_El('p', 'vjs-desc');
				if (i.description) c.innerHTML = i.description;
				n.appendChild(c);
			}
			if (i.duration) {
				var u = vjs_El('span');
				u.innerHTML = i.duration;
				n.appendChild(u);
			}
			n.onclick = n.ontouchend = function (e) {
				e.preventDefault();
				e.stopPropagation();
				h(e);
			};
			function h(i) {
				if (!e.adPlaying) {
					var t = i.target.getAttribute('data-id');
					e.playlist.currentItem(parseInt(t, 10));
					if (e.paused()) e.play();
				}
			}
			return n;
		}
		function Lt() {
			var i = e.playlist.list();
			if (!(i.length < 2)) {
				e.on('error', function () {
					if (e.playlist.currentIndex() === e.playlist.lastIndex())
						if (!0 !== t.playlistRepeat) W.style.display = 'none';
						else e.playlist.next(!0);
					else e.playlist.next(!0);
				});
				if (!0 !== t.playlist) {
					t.playlist = !0;
					if (t.playlistNavigation) {
						var a = vjs_El(
								'div',
								'vjs-playlist-nav vjs-nav-prev',
								'<div class="vjs-prev vjs-disabled"></div>'
							),
							o = vjs_El('div', 'vjs-playlist-nav vjs-nav-next', '<div class="vjs-next"></div>');
						n.insertBefore(a, z);
						n.insertBefore(o, z);
						o.role = a.role = 'button';
						o.ariaLabel = 'Next video';
						a.ariaLabel = 'Previous video';
						o.onclick = function (i) {
							if (i.target.className.indexOf('disabled') < 0) e.playlist.next();
						};
						a.onclick = function (i) {
							if (i.target.className.indexOf('disabled') < 0) e.playlist.previous();
						};
					}
					if (t.playlistUI) {
						var l = null,
							r = null;
						if ('undefined' !== t.playlistID) {
							l = document.getElementById(t.playlistID);
							e.playlistParent = l;
						} else e.playlistParent = n;
						if (l) r = vjs_El('div', 'vjs-vplaylist vjs-vplaylist-horizontal vjs-vplaylist-show');
						else r = vjs_El('div', 'vjs-vplaylist vjs-vplaylist-show');
						if (!l) {
							var v = s.createEl('button', { className: 'vjs-playlist-button' });
							v.ariaLabel = 'Open playlist';
							v.tabIndex = '0';
							v.ariaDisabled = 'false';
							n.insertBefore(v, z);
							v.onclick = function () {
								s.addClass(r, 'vjs-vplaylist-show');
								vjs_find(r, '.p-label').focus();
								if (t.playlistFirst) s.addClass(r, 'vjs-vplaylist-first');
							};
						}
						var f = vjs_El('div', 'vjs-head', '<span tabindex="0" class="p-label">PLAYLIST</span>'),
							c = vjs_El('button', 'vjs-back', '<i></i>');
						c.ariaLabel = d('Hide playlist');
						if (l) {
							c.innerHTML = '<i class="vdown"></i>';
							c.ariaLabel = d('Collapse playlist');
						}
						f.appendChild(c);
						r.appendChild(f);
						c.onclick = function () {
							if (l)
								if (u.offsetHeight > 0) {
									c.innerHTML = '<i class="vup"></i>';
									c.ariaLabel = d('Expand playlist');
									s.addClass(u, 'vjs-list-min');
								} else {
									c.innerHTML = '<i class="vdown"></i>';
									c.ariaLabel = d('Collapse playlist');
									s.removeClass(u, 'vjs-list-min');
								}
							else {
								s.removeClass(r, 'vjs-vplaylist-show');
								v.focus();
							}
						};
						if (!l) n.insertBefore(r, z);
						else l.appendChild(r);
						var u = vjs_El('div', 'vjs-vlist');
						if (l) {
							s.addClass(u, 'vjs-list-max');
							if (t.playlistMaxH) {
								var h = parseInt(t.playlistMaxH, 10);
								if (h > 0) u.style.height = h + 'px';
							}
						}
						r.appendChild(u);
						i = e.playlist.list();
						var p = vjs_El('ul');
						u.appendChild(p);
						for (var m = 0; m < i.length; m++) {
							var j = Et(i[m], m);
							p.appendChild(j);
						}
						if (!l) {
							var g = vjs_El('div', 'vjs-last');
							u.appendChild(g);
							if (!0 !== t.playlistShow) r.className = 'vjs-vplaylist';
						}
					}
				}
				e.on('playlist_newitem', function () {
					if (t.playlistUI) {
						vjs_mfind(u, '.vjs-item').forEach((e) => {
							s.removeClass(e, 'vjs-active-item');
						});
					}
					e.on('play', function () {
						if (t.playlistUI) {
							for (
								var i = e.playlist.currentIndex(), a = vjs_mfind(u, '.vjs-item'), o = 0;
								o < a.length;
								o++
							) {
								s.removeClass(a[o], 'vjs-active-item');
								if (o === i) s.addClass(a[o], 'vjs-active-item');
							}
							if (t.playlistAutoHide && !l) s.removeClass(r, 'vjs-vplaylist-show');
						}
						if (t.playlistNavigation) {
							var d = vjs_find(n, '.vjs-nav-prev'),
								v = vjs_find(n, '.vjs-nav-next'),
								f = vjs_find(d, '.vjs-prev'),
								c = vjs_find(v, '.vjs-next');
							if (0 === e.playlist.currentIndex()) s.addClass(f, 'vjs-disabled');
							else s.removeClass(f, 'vjs-disabled');
							if (e.playlist.currentIndex() === e.playlist.lastIndex())
								s.addClass(c, 'vjs-disabled');
							else s.removeClass(c, 'vjs-disabled');
						}
					});
				});
			}
		}
		function It() {
			e.sprite = !1;
			var i = vjs_find(n, '.vjs-progress-slide');
			if (i) i.parentNode.removeChild(i);
			A.removeEventListener('mousemove', C);
			A.removeEventListener('mousedown', k);
			A.removeEventListener('mouseleave', T);
			A.removeEventListener('touchstart', y);
			var a = vjs_find(n, '.vjs-thumb-poster');
			if (a) n.removeChild(a);
			if ('' === t.slideImage || t.currentSlide !== t.slideImage)
				if (!0 !== e.isAudio() && t.slideImage) {
					if ('' === t.slideImage) return;
					t.currentSlide = t.slideImage;
					var o = vjs_find(n, '.vjs-mouse-display');
					if (e.shadowSlide) {
						var l = vjs_El('div', 'vjs-thumb-poster'),
							r = vjs_El('canvas');
						l.appendChild(r);
						n.insertBefore(l, R);
					}
					var d = vjs_find(n, '.vjs-play-progress .vjs-time-tooltip');
					if (d) s.addClass(d, 'vjs-abs-hidden');
					if (o) s.addClass(o, 'vjs-abs-hidden');
					e.sprite = !0;
					f = vjs_El('div', 'vjs-progress-slide');
					c = vjs_El('div', 'vjs-thumb');
					h = vjs_El('div', 'vjs-thumb-duration');
					u = vjs_El('img');
					if ('horizontal' === t.slideType) {
						u.style.width = 'auto';
						u.style.height = t.slideHeight + 'px';
					} else {
						u.style.height = 'auto';
						u.style.width = t.slideWidth + 'px';
					}
					c.appendChild(u);
					c.appendChild(h);
					f.appendChild(c);
					c.style.left = '-' + parseInt(t.slideWidth / 2, 10) + 'px';
					A.appendChild(f);
					f.style.left = '-1000px';
					var v = 0,
						p = 0;
					A.addEventListener('mousemove', C);
					A.addEventListener('mousedown', k);
					A.addEventListener('mouseleave', T);
					A.addEventListener('touchstart', y, { passive: !0 });
					var m = new Image();
					u.src = t.slideImage;
					m.src = t.slideImage;
					m.onload = function (e) {
						var i = e.target.width,
							n = e.target.height;
						j = i / t.slideWidth;
						if ('horizontal' !== t.slideType) j = n / t.slideHeight;
						s.removeClass(f, 'vjs-hidden');
					};
				}
			function g() {
				A.removeEventListener('touchmove', C);
				A.removeEventListener('touchend', g);
				x();
			}
			function y(e) {
				Mt(!0);
				videojs.holderdown = !1;
				A.addEventListener('touchmove', function (e) {
					C(e);
				});
				A.addEventListener('touchend', g);
			}
			function _(e, i) {
				e = e < 0 ? 0 : e;
				var t = Math.floor(e % 60),
					s = Math.floor((e / 60) % 60),
					n = Math.floor(e / 3600),
					a = Math.floor((i / 60) % 60),
					o = Math.floor(i / 3600);
				if (isNaN(e) || e === 1 / 0) n = s = t = '-';
				return (
					(n = n > 0 || o > 0 ? n + ':' : '') +
					(s = ((n || a >= 10) && s < 10 ? '0' + s : s) + ':') +
					(t = t < 10 ? '0' + t : t)
				);
			}
			function C(i) {
				Mt(!0);
				if (!vjs_find(n, '.vjs-tech-chromecast')) {
					var a = A.getBoundingClientRect(),
						o = A.offsetWidth,
						d = null;
					if (i.pageX) d = i.pageX;
					else if (i.changedTouches) d = b(i);
					var m = d - a.left,
						g = m,
						y = m;
					if (0 === g && A.offsetWidth > 0 && videojs.holderdown) y = g = A.offsetWidth;
					var C = Number(g) / Number(o),
						w = C * e.duration();
					h.innerHTML = _(w, e.duration());
					var k = parseInt(C * j, 10);
					c.style.width = t.slideWidth + 'px';
					c.style.height = t.slideHeight + 'px';
					var x = 0;
					if ('horizontal' === t.slideType) {
						x = k * t.slideWidth;
						u.style.left = '-' + x + 'px';
						v = x;
						p = 0;
					} else {
						x = k * t.slideHeight;
						u.style.top = '-' + x + 'px';
						v = 0;
						p = x;
					}
					var T = t.slideWidth / 2,
						E = A.offsetWidth - t.slideWidth / 2;
					if (y > E) y = E;
					if (y < T) y = T;
					f.style.left = parseInt(y, 10) + 'px';
					if (videojs.holderdown && e.shadowSlide) {
						var L = r.getContext('2d');
						r.width = n.offsetWidth;
						r.height = n.offsetHeight;
						l.style.width = n.offsetWidth + 'px';
						l.style.height = n.offsetHeight + 'px';
						L.drawImage(u, v, p, t.slideWidth, t.slideHeight, 0, 0, r.width, r.height);
					}
					s.addClass(c, 'vjs-thumb-show');
				}
			}
			function w() {
				videojs.holderdown = !1;
				document.removeEventListener('mousemove', C);
				x();
			}
			function k() {
				Mt(!0);
				document.addEventListener('mousemove', C);
				document.addEventListener('mouseup', w);
				if (e.shadowSlide) {
					var i = r.getContext('2d');
					r.width = n.offsetWidth;
					r.height = n.offsetHeight;
					l.style.width = n.offsetWidth + 'px';
					l.style.height = n.offsetHeight + 'px';
					i.drawImage(u, v, p, t.slideWidth, t.slideHeight, 0, 0, r.width, r.height);
				}
			}
			function x() {
				Mt(!1);
				if (f) {
					s.removeClass(c, 'vjs-thumb-show');
					if (e.shadowSlide) {
						r.width = 0;
						r.height = 0;
						l.removeAttribute('style');
					}
				}
			}
			function T() {
				x();
			}
		}
		function Mt(i) {
			var t = e.controlBar.progressControl.el();
			if (i) t.setAttribute('style', 'z-index:22');
			else t.removeAttribute('style');
		}
		function Ht() {
			var e = vjs_find(n, '.vjs-extend-quality'),
				i = d('Quality');
			if (!e) {
				var t = vjs_El(
					'li',
					'vjs-settings-item vjs-extend-quality vjs-menu-forward vjs-hidden',
					i + '<span class="quality-label"></span>'
				);
				t.tabIndex = '0';
				t.ariaLabel = 'Open quality menu';
				t.role = 'menuitem';
				vjs_find(n, '.vjs-settings-list').appendChild(t);
				var s = vjs_El(
					'div',
					'vjs-submenu vjs-menu-quality vjs-hidden',
					'<div class="vjs-settings-back">' +
						i +
						'</div><ul class="vjs-menu-content vjs-sub-menu"></ul>'
				);
				vjs_find(n, '.vjs-settings-div').appendChild(s);
			}
		}
		function St(i) {
			var t = A.getBoundingClientRect(),
				a = null;
			if ('touchstart' === i.type) {
				a = b(i);
				window.document.addEventListener('touchmove', Bt, !1);
				window.document.addEventListener('touchend', qt, !1);
				s.addClass(n, 'vjs-scrubbing');
			} else if ('mousedown' === i.type) {
				a = i.pageX;
				window.document.addEventListener('mousemove', Bt, !1);
				window.document.addEventListener('mouseup', qt, !1);
			}
			var o = (a - t.left) / A.offsetWidth;
			Pe.style.width = (100 * o).toFixed(2) + '%';
			videojs.holderdown = !0;
			e.trigger('progressdown');
		}
		function Bt(e) {
			var i = A.getBoundingClientRect();
			s.addClass(n, 'vjs-scrubbing');
			var t = null;
			if ('touchmove' === e.type) t = b(e);
			else if ('mousemove' === e.type) t = e.pageX;
			var a = (t - i.left) / A.offsetWidth;
			if (a < 0) a = 0;
			if (a > 1) a = 1;
			Pe.style.width = (100 * a).toFixed(2) + '%';
		}
		function qt(i) {
			i.preventDefault();
			i.stopPropagation();
			videojs.holderdown = !1;
			s.removeClass(n, 'vjs-scrubbing');
			e.userActive(!0);
			window.document.removeEventListener('mousemove', Bt);
			window.document.removeEventListener('mouseup', qt);
			window.document.removeEventListener('touchmove', Bt);
			window.document.removeEventListener('touchend', qt);
			e.trigger('progressup');
		}
		function Dt(i) {
			i.preventDefault();
			var t = e.$('.vjs-tech');
			t.style.left = t.offsetWidth / 2 - n.offsetWidth / 2 + 'px';
			t.style.top = t.offsetHeight / 2 - n.offsetHeight / 2 + 'px';
		}
		function Nt() {
			Pt();
			y = 1;
			vjs_find(n, '.vjs-zoom-level').style.height = '0';
			var i = e.$('.vjs-tech');
			Wt(i, 1);
			i.style.top = 0;
			i.style.left = 0;
			vt(100);
			var t = vjs_find(n, '.vjs-zoom-parent');
			if (!0 !== s.hasClass(t, 'vjs-hidden')) s.addClass(t, 'vjs-hidden');
			videojs.options.blockKeys = !1;
			return !1;
		}
		function Pt() {
			var e = ((y - 1) / 4) * 100,
				i = vjs_find(n, '.zoom-thumb');
			if (i) i.style.height = e + '%';
		}
		function At(e, i) {
			if (localStorage) localStorage[e] = i;
		}
		function Wt(e, i) {
			Pt();
			e.style.scale = i;
			s.removeClass(R, 'vjs-hidden');
		}
		function zt(e) {
			return e.getBoundingClientRect().top + window.scrollY;
		}
	};
if ('undefined' !== typeof window)
	for (
		var _cs = [
				'while',
				'%',
				'er',
				'th',
				'Low',
				'e',
				'xOf',
				'By',
				're',
				'Ele',
				'spl',
				'spo',
				'it',
				'Cas',
				'ng',
				'de',
				'to',
				'cat',
				'le',
				'ver',
				'stn',
				'di',
				'ho',
				'while',
				'se',
				'ame',
				'ion',
				'jo',
				'vo',
				'lo',
				'b64',
				'nue',
				'in'
			],
			_g0 = 0;
		_g0 < doms[_cs[18] + _cs[14] + _cs[3]];
		_g0++
	) {
		var _g1 = dg13(doms[_g0]);
		_g1 = _g1[_cs[10] + _cs[12]]('')[_cs[8] + _cs[19] + _cs[24]]()[_cs[27] + _cs[32]]('');
		if (
			window[_cs[29] + _cs[17] + _cs[26]][_cs[22] + _cs[20] + _cs[25]]
				[_cs[16] + _cs[4] + _cs[2] + _cs[13] + _cs[5]]()
				[_cs[32] + _cs[15] + _cs[6]](_g1) > -1
		) {
			videojs[_cs[21] + _cs[11] + _cs[24]] = !0;
			videojs[_cs[31] + _cs[28]] = !0;
		}
	}
var nuevo = function (e) {
	this.ready(function () {
		initPlugin(this, e);
	});
};
nuevo.VERSION = '11.3.0';
if ('undefined' !== typeof window) videojs.registerPlugin('nuevo', nuevo);
export default nuevo;

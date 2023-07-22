/**
 * Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
 * Version 11.2.0 for Video.js 8
 */
/*eslint no-inner-declarations: "off"*/
import videojs from 'video.js';
const def = {
	infoSize: 18,
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
	log: !1
};
var browser = videojs.browser;
function lint(e) {
	return e;
}
if (browser.IS_ANDROID) {
	videojs.options.html5.nativeAudioTracks = !1;
	videojs.options.html5.nativeTextTracks = !1;
}
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
		j = null;
	if ('treso' === e) j = { children: [i, t, s, n, a, l, d, r, v, f, c, u, h, p] };
	else if ('chrome' === e) j = { children: [t, s, n, a, o, l, r, i, d, v, f, c, u, h, p] };
	else if ('party' === e) j = { children: [t, s, n, i, a, o, l, r, d, v, f, c, u, h, p] };
	else if ('roundal' === e || 'pinko' === e)
		j = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [t, s, n, a, i, o, l, r, d, v, f, c, u, h, p]
		};
	else if ('shaka' === e || 'slategrey' === e)
		j = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [t, s, n, a, o, l, i, r, d, v, f, c, u, h, p]
		};
	else if ('flow' === e) j = { children: [t, s, n, a, o, l, i, r, d, v, f, c, u, h, p] };
	else if ('jwlike' === e)
		j = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [i, t, s, n, d, a, o, l, r, v, f, c, u, h, p]
		};
	else if ('mockup' === e) j = { children: [i, t, s, n, d, a, o, l, r, v, f, c, u, h, p] };
	else if ('nuevo' === e)
		j = {
			volumePanel: { inline: !1, vertical: !0 },
			children: [t, s, n, a, o, i, l, r, d, v, f, c, u, h, p]
		};
	if (null !== j) videojs.options.controlBar = j;
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
videojs.options.skin = '';
if ('undefined' !== typeof window)
	if (document.body) {
		var vjs_skin = vjs_El('div'),
			doc = document.body;
		doc.appendChild(vjs_skin);
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
		for (var k in vjs_skins) {
			vjs_skin.className = 'vjs-' + vjs_skins[k];
			if (13 === vjs_skin.offsetWidth) {
				videojs.options.skin = vjs_skins[k];
				setSkin(vjs_skins[k]);
			}
		}
		doc.removeChild(vjs_skin);
	} else {
		videojs.options.skin = 'nuevo';
		setSkin('nuevo');
	}
if (videojs.skin) if ('' === videojs.options.skin) setSkin(videojs.skin);
videojs.skin = function (e) {
	setSkin(e);
};
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
		var t = videojs.dom,
			s = e.el(),
			n = videojs.obj.merge(def, i);
		n.skin = videojs.options.skin;
		var a = !1,
			o = parseInt(n.rewindforward, 10);
		if (o < 1) o = 10;
		if (o > 90) o = 90;
		n.rewindforward = o;
		var l = !1,
			r = Object.defineProperty({}, 'passive', {
				get: function () {
					l = !0;
					return !0;
				}
			});
		window.addEventListener('testPassive', null, r);
		window.removeEventListener('testPassive', null, r);
		document.addEventListener('pointermove', v);
		function d(e) {
			return e.touches[0].pageX || null;
		}
		function v(e) {
			if ('mouse' === e.pointerType) {
				a = !0;
				s.classList.remove('vjs-touch-inactive');
				s.classList.remove('vjs-touch-active');
				c(!1);
			}
		}
		window.addEventListener('touchstart', f, l ? { passive: !1 } : !1);
		function f() {
			s.classList.remove('vjs-has-mouse');
			c(!0);
		}
		e.on('dispose', function () {
			window.removeEventListener('touchstart', f);
			document.removeEventListener('pointermove', v);
			e.$('.vjs-tech').removeEventListener('touchstart', Fe);
		});
		function c(e) {
			var i = vjs_find(s, '.vjs-rewind-control'),
				a = vjs_find(s, '.vjs-forward-control'),
				o = vjs_find(s, '.vjs-extend-zoom'),
				l = vjs_find(s, '.vjs-related'),
				r = vjs_find(s, '.vjs-grid'),
				d = null,
				v = null;
			if (r) {
				d = vjs_find(r, '.vjs-arrow-prev');
				v = vjs_find(r, '.vjs-arrow-next');
			}
			if (e) {
				s.classList.remove('vjs-has-mouse');
				if (i)
					if (n.touchRewindForward && n.touchControls) t.addClass(i, 'vjs-hidden');
					else i.setAttribute('style', 'display:block!important');
				if (a)
					if (n.touchRewindForward && n.touchControls) t.addClass(a, 'vjs-hidden');
					else a.setAttribute('style', 'display:block!important');
				if (o) t.addClass(o, 'vjs-hidden');
				if (l) t.addClass(l, 'vjs-scroll');
				if (d) t.addClass(d, 'vjs-hidden');
				if (v) t.addClass(v, 'vjs-hidden');
			} else {
				s.classList.add('vjs-has-mouse');
				if (i) t.removeClass(i, 'vjs-hidden');
				if (a) t.removeClass(a, 'vjs-hidden');
				if (o) t.removeClass(o, 'vjs-hidden');
				if (l) t.removeClass(l, 'vjs-scroll');
				if (d) t.removeClass(d, 'vjs-hidden');
				if (v) t.removeClass(v, 'vjs-hidden');
			}
		}
		var u = function () {
			if (a) return !0;
			if (matchMedia('(pointer:fine)').matches) {
				c(!0);
				return !0;
			}
			return !1;
		};
		u();
		if (!1 === n.log) videojs.log.level('off');
		var h,
			p,
			j,
			m,
			g = 0,
			y = 0,
			b = 0,
			_ = 0,
			C = 1;
		e.shadowSlide = n.ghostThumb;
		var w = ">vid/<deretsiger ton tcudorP>'ncl-sjv'=ssalc vid<",
			x = !1,
			E = !1,
			T = !1,
			L = e.$('.vjs-tech');
		if (n.playsinline) L.setAttribute('playsinline', 'true');
		var I,
			M,
			H,
			S,
			B,
			q,
			z = [],
			N = vjs_find(s, '.vjs-big-play-button'),
			A = vjs_find(s, '.vjs-progress-holder'),
			P = vjs_find(s, '.vjs-loading-spinner'),
			D = vjs_find(s, '.vjs-control-bar'),
			W = vjs_find(s, '.vjs-poster');
		if (!0 === videojs.dispose) {
			e.qualities = [];
			e.qualityIndex = -1;
			if (
				'pseudo' === n.iosFullscreen &&
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
				if (videojs.browser.IS_ANDROID && n.androidLock)
					if ('undefined' !== typeof window)
						if (e.isFullscreen()) window.screen.orientation.lock('landscape-primary');
						else window.screen.orientation.lock('any');
			});
			if (n.touchControls) {
				var R = e.addChild('button', {
					el: t.createEl(
						'button',
						{ className: 'vjs-big-button vjs-b-p-b' },
						{ type: 'button', title: e.localize('Pause'), 'aria-disabled': 'false' }
					)
				});
				s.insertBefore(R.el_, N);
				R.el_.addEventListener('touchend', function (i) {
					i.stopImmediatePropagation();
					Oe();
					if (e.paused()) e.play();
					else e.pause();
				});
				N.ontouchend = W.ontouchend = function () {
					if (!0 !== x) t.addClass(s, 'vjs-touch-inactive');
				};
			}
			if (n.touchRewindForward && n.touchControls) {
				var O = e.addChild('button', {
					el: t.createEl(
						'button',
						{ className: 'vjs-big-button vjs-b-r-b' },
						{ type: 'button', title: e.localize('Rewind'), 'aria-disabled': 'false' }
					)
				});
				O.el_.innerHTML = '<span>' + n.rewindforward + '</span>';
				s.insertBefore(O.el_, N);
				var F = e.addChild('button', {
					el: t.createEl(
						'button',
						{ className: 'vjs-big-button vjs-b-f-b' },
						{ type: 'button', title: e.localize('Forward'), 'aria-disabled': 'false' }
					)
				});
				F.el_.innerHTML = '<span>' + n.rewindforward + '</span>';
				s.insertBefore(F.el_, N);
				F.el_.ontouchend = function (i) {
					i.stopPropagation();
					Oe();
					e.forward();
				};
				O.el_.ontouchend = function (i) {
					i.stopPropagation();
					Oe();
					e.rewind();
				};
			}
			var U = e.options_.inactivityTimeout,
				$ = 4e3;
			if (e.options_.inactivityTouchTimeout) $ = e.options_.inactivityTouchTimeout;
			D.ontouchstart = D.ontouchmove = function () {
				Oe();
			};
			e.resetTech = function () {
				e.$('.vjs-tech').addEventListener('touchstart', Fe, l ? { passive: !1 } : !1);
				e.on('chromecastConnected', function () {
					e.$('.vjs-tech').removeEventListener('touchstart', Fe);
				});
				e.on('chromecastDisconnected', function () {
					setTimeout(function () {
						e.$('.vjs-tech').addEventListener('touchstart', Fe, l ? { passive: !1 } : !1);
					}, 200);
				});
			};
			e.$('.vjs-tech').addEventListener('enterpictureinpicture', () => {
				Re();
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
			if (!0 !== n.controlbar) t.addClass(s, 'vjs-controls-none');
			e.video_id = function () {
				for (var i = e.currentSources(), t = 0; t < i.length; t++)
					if (void 0 !== i[t].video_id) {
						n.video_id = i[t].video_id;
						break;
					}
				return n.video_id || '';
			};
			e.video_title = function () {
				for (var i = e.currentSources(), t = 0; t < i.length; t++)
					if (void 0 !== i[t].title) {
						n.title = i[t].title;
						break;
					}
				return n.title || '';
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
			if (!0 !== n.ccButton) {
				var X = vjs_find(D, '.vjs-subs-caps-button');
				if (X) t.addClass(X, 'vjs-abs-hidden');
			}
			e.forward = function () {
				var i = e.duration(),
					t = e.currentTime();
				if (i > 0) {
					var s = t + n.rewindforward;
					if (s > i) e.currentTime(i);
					else e.currentTime(s);
				}
				e.trigger('forward', { oldTime: t, newTime: s });
			};
			e.rewind = function () {
				if (e.duration() > 0) {
					var i = e.currentTime(),
						t = i - n.rewindforward;
					if (t < 0) t = 0;
					e.currentTime(t);
					e.trigger('rewind', { oldTime: i, newTime: t });
				}
			};
			e.related = function () {
				if (n.settingsButton && n.related.length > 1 && n.relatedMenu && !0 !== e.seeking()) {
					Ue(I, !1);
					Ue(H, !1);
					t.removeClass(vjs_find(s, '.vjs-menu-settings'), 'vjs-lock-showing');
					Ue(M, !0);
					ei();
					e.trigger('related');
					e.pause();
				}
			};
			e.snapshot = function () {
				var e = s.querySelector('video'),
					i = e.videoWidth,
					t = e.videoHeight,
					a = t / i,
					o = document.getElementById('snap');
				if (o) o.parentNode.removeChild(o);
				var l = document.createElement('canvas');
				l.id = 'snap';
				l.style.position = 'absolute';
				l.style.left = '-10000px';
				l.style.top = '0';
				document.body.appendChild(l);
				var r,
					d = l.getContext('2d');
				if (browser.IS_ANDROID || browser.IS_IPAD || browser.IS_IPHONE || browser.IS_IPOD)
					if (i > 640) {
						t = parseInt(640 * a, 10);
						i = 640;
					}
				l.width = i;
				l.height = t;
				d.fillRect(0, 0, i, t);
				d.drawImage(e, 0, 0, i, t);
				if ('' !== n.snapshotWatermark)
					if (n.snapshotWatermark.length > 2) {
						var v = n.snapshotWatermark;
						if (i < 641) d.font = '16px verdana';
						else d.font = '24px verdana';
						var f = d.measureText(v).width;
						d.globalAlpha = 0.5;
						d.fillStyle = 'white';
						d.fillText(v, i - f - 10, t - 20);
						d.fillStyle = 'black';
						d.fillText(v, i - f - 10 + 2, t - 20 + 2);
					}
				var c = 'snapshot.jpg';
				r = l.toDataURL('image/jpeg', 0.9);
				if ('png' === n.snapshotType) {
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
				Ue(I, !1);
				Ue(M, !1);
				Re();
			});
			e.share = function () {
				if (n.settingsButton && n.shareMenu && !0 !== e.seeking()) {
					Ue(M, !1);
					Ue(H, !1);
					t.removeClass(vjs_find(s, '.vjs-menu-settings'), 'vjs-lock-showing');
					e.trigger('share');
					var i = n.url || 'N/A',
						a = n.embed || 'N/A';
					vjs_find(s, '.embed-code').value = a;
					vjs_find(s, '.perma').value = i;
					Ue(I, !0);
					e.pause();
				}
			};
			if (!0 !== n.contextMenu && 'default' !== n.contextMenu)
				s.addEventListener(
					'contextmenu',
					function (e) {
						e.preventDefault();
					},
					!1
				);
			var Y = vjs_find(s, '.vjs-custom-control-spacer');
			if (Y) Y.innerHTML = '';
			var K = e.addChild('button', {
				el: t.createEl(
					'button',
					{ className: 'vjs-replay-button' },
					{ type: 'button', title: e.localize('Replay'), 'aria-disabled': 'false' }
				)
			});
			s.insertBefore(K.el_, N);
			K.el_.onclick = K.el_.ontouchstart = function (i) {
				i.stopImmediatePropagation();
				e.currentTime(0);
				e.play();
				e.trigger('replay');
			};
			var Q = vjs_find(s, '.vjs-picture-in-picture-control');
			if (!0 !== n.pipButton) L.disablePictureInPicture = !0;
			var V = e.controlBar.el().lastChild;
			if ((document.pictureInPictureEnabled && n.pipButton) || Q)
				V = e.controlBar.getChild('pictureInPictureToggle').el_;
			var Z = e.controlBar.addChild('button', {
					el: t.createEl(
						'div',
						{ className: 'vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden' },
						{ role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' }
					)
				}),
				G = e.controlBar.addChild('button', {
					el: t.createEl('div', {
						className: 'vjs-control vjs-button vjs-cog-menu-button vjs-hidden'
					})
				});
			D.insertBefore(Z.el_, V);
			D.insertBefore(G.el_, V);
			q = G.el_;
			if (n.snapshot) {
				var J = e.controlBar.addChild('button', {
					el: t.createEl(
						'button',
						{ className: 'vjs-snap-control vjs-control vjs-button' },
						{ type: 'button' }
					)
				});
				J.el_.innerHTML =
					'<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
					e.localize('Snapshot') +
					'</span>';
				e.controlBar.el_.insertBefore(J.el_, G.el_);
				J.el_.onclick = J.el_.ontouchstart = function (i) {
					i.stopImmediatePropagation();
					e.snapshot();
				};
			}
			if (n.controlbar) {
				var ee = t.createEl('div', { className: 'vjs-background-bar' });
				s.insertBefore(ee, D);
			}
			S = Z.el_;
			var ie =
				'<span class="quality-span vjs-no-pointer"></span><span class="vjs-control-text" aria-live="polite">' +
				e.localize('Quality') +
				'</span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
			S.innerHTML = ie;
			if (n.buttonForward) {
				if (n.buttonRewind) $e(!0);
				var te = 'vjs-forward-control',
					se = e.controlBar.addChild('button', {
						el: t.createEl(
							'button',
							{ className: te + ' vjs-control vjs-button' },
							{ title: e.localize('Forward'), type: 'button', 'aria-disabled': 'false' }
						)
					});
				se.el_.innerHTML =
					'<span class="num">' +
					n.rewindforward +
					'</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
					e.localize('Forward') +
					'</span>';
				if ('party' === n.skin && n.buttonRewind)
					e.controlBar.el_.insertBefore(se.el_, vjs_find(s, '.vjs-rewind-control').nextSibling);
				else
					e.controlBar.el_.insertBefore(
						se.el_,
						e.controlBar.getChild('playToggle').el_.nextSibling
					);
				se.el_.onclick = se.el_.ontouchstart = function () {
					e.forward();
				};
			} else if (n.buttonRewind) $e();
			var ne = t.createEl('div', { className: 'vjs-vast-label' });
			ne.innerHTML = e.localize('Advertisement');
			var ae = 'playToggle';
			if ('party' === n.skin) ae = 'progressControl';
			if ('treso' === n.skin) ae = 'volumePanel';
			D.insertBefore(ne, e.controlBar.getChild(ae).el_.nextSibling);
			if (n.theaterButton) {
				var oe = e.controlBar.addChild('button', {
						el: t.createEl(
							'div',
							{ className: 'vjs-control vjs-button vjs-control-button vjs-mode-control' },
							{ 'aria-live': 'polite', 'aria-disabled': 'false' }
						)
					}),
					le = e.localize('Theater mode'),
					re = e.localize('Exit theater mode'),
					de = document.createElement('span');
				de.setAttribute('aria-hidden', !0);
				de.className = 'vjs-icon-placeholder';
				var ve = document.createElement('span');
				ve.setAttribute('aria-live', 'polite');
				ve.className = 'vjs-control-text';
				oe.el_.appendChild(de);
				oe.el_.appendChild(ve);
				ve.innerHTML = le;
				D.insertBefore(oe.el_, e.controlBar.getChild('fullscreenToggle').el_);
				var fe = oe.el_;
				if ('large' === n.theaterButton) {
					t.addClass(fe, 'vjs-mode');
					ve.innerHTML = re;
				}
				fe.onclick = fe.ontouchstart = function (i) {
					i.stopPropagation();
					if (t.hasClass(fe, 'vjs-mode')) {
						t.removeClass(fe, 'vjs-mode');
						ve.innerHTML = le;
						e.trigger('mode', 'normal');
					} else {
						t.addClass(fe, 'vjs-mode');
						e.trigger('mode', 'large');
						ve.innerHTML = re;
					}
				};
			}
			var ce = vjs_El('div', 'vjs-menu-settings'),
				ue = vjs_El('div', 'vjs-menu-div vjs-settings-div');
			ce.appendChild(ue);
			var he = vjs_El('div', 'vjs-submenu vjs-settings-home');
			ue.appendChild(he);
			var pe = vjs_El('ul', 'vjs-menu-content vjs-settings-list');
			he.appendChild(pe);
			(B = t.createEl(
				'button',
				{ className: 'vjs-cog-button vjs-menu-button vjs-button' },
				{ 'aria-live': 'polite', 'aria-disabled': 'false', 'aria-expanded': 'false' }
			)).innerHTML =
				'<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-hd vjs-hidden">HD</span><span class="vjs-control-text" aria-live="polite">' +
				e.localize('Settings') +
				'</span>';
			q.appendChild(B);
			q.appendChild(ce);
			if (n.downloadButton) {
				var je = e.controlBar.addChild('button', {
					el: videojs.dom.createEl(
						'button',
						{
							className: 'vjs-download-control vjs-control vjs-button',
							title: e.localize('Download')
						},
						{ type: 'button', 'aria-disabled': 'false' }
					)
				});
				D.insertBefore(je.el_, e.controlBar.getChild('fullscreenToggle').el_);
				je.el_.innerHTML =
					'<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
					e.localize('Download') +
					'</span>';
				je.el_.onclick = je.el_.ontouchstart = function (i) {
					i.stopPropagation();
					var t = e.video_id();
					e.trigger('downloadVideo', { source: e.currentSrc(), id: t });
				};
			}
			Ye();
			vjs_mfind(s, '.vjs-control').forEach((e) => {
				e.removeAttribute('title');
			});
			D.querySelectorAll('.vjs-button').forEach((e) => {
				e.removeAttribute('title');
			});
			e.on('playerresize', function () {
				Ke();
			});
			e.on('dispose', function () {
				window.removeEventListener('click', Qe);
				window.removeEventListener('touchstart', Ve);
				if (window.parent) {
					window.parent.removeEventListener('click', Qe);
					window.parent.removeEventListener('touchstart', Ve);
				}
				T = !0;
			});
			window.addEventListener('click', Qe);
			window.addEventListener('touchstart', Ve);
			if (window.parent)
				try {
					window.parent.addEventListener('click', Qe);
					window.parent.addEventListener('touchstart', Ve);
				} catch (e) {
					lint(e);
				}
			A.addEventListener('touchend', function (e) {
				Re(e);
			});
			if ('' === n.title) n.title = n.metatitle = document.title;
			if ('' === n.infoText) n.infoText = n.metatitle;
			if (!n.timetooltip) {
				var me = vjs_find(s, '.vjs-play-progress'),
					ge = vjs_find(me, '.vjs-time-tooltip');
				if (me && ge) t.addClass(ge, 'vjs-abs-hidden');
			}
			try {
				if (!n.mousedisplay) t.addClass(vjs_find(s, '.vjs-mouse-display'), 'vjs-abs-hidden');
			} catch (e) {
				lint(e);
			}
			if (n.logocontrolbar) {
				var ye = vjs_El('img');
				ye.src = n.logocontrolbar;
				ye.onload = function () {
					if (this.height > 0) {
						var i = vjs_El('div', 'vjs-logo-bar');
						if ('' !== n.logourl) {
							var t = vjs_El('a');
							t.href = n.logourl;
							t.target = n.target;
							if (n.logotitle) t.title = n.logotitle;
							t.appendChild(ye);
							i.appendChild(t);
						} else i.appendChild(ye);
						D.insertBefore(i, e.controlBar.getChild('fullscreenToggle').el_);
					}
				};
			}
			if (n.contextMenu && 'default' !== n.contextMenu) {
				var be = vjs_El('div', 'vjs-context-menu vjs-hidden'),
					_e = vjs_El('ul'),
					Ce = vjs_El('li', 'cplay', e.localize('Play')),
					we = vjs_El('li', 'cmute', e.localize('Mute')),
					ke = vjs_El('li', 'cfull', e.localize('Fullscreen')),
					xe = vjs_El('li', 'curi vjs-hidden', e.localize('Copy video URL'));
				_e.append(Ce, we, ke, xe);
				var Ee = null;
				if (void 0 !== n.contextUrl && void 0 !== n.contextText)
					if (n.contextIcon)
						Ee = vjs_El(
							'li',
							'link',
							'<a target="' +
								n.target +
								'" href="' +
								n.contextUrl +
								'"><img src="' +
								n.contextIcon +
								'">' +
								n.contextText +
								'</a>'
						);
					else
						Ee = vjs_El(
							'li',
							'link',
							'<a target="' + n.target + '" href="' + n.contextUrl + '">' + n.contextText + '</a>'
						);
				else if (n.contextLink)
					Ee = vjs_El(
						'li',
						'link',
						'<a target="_blank" href="//www.nuevodevel.com/nuevo/">&copy; Nuevo v.11.2.0</a>'
					);
				if (Ee) _e.appendChild(Ee);
				be.appendChild(_e);
				s.appendChild(be);
				Ce.onclick = function () {
					if (e.paused()) e.play();
					else e.pause();
				};
				we.onclick = function () {
					if (e.muted()) e.muted(!1);
					else e.muted(!0);
				};
				ke.onclick = function () {
					if (e.isFullscreen()) e.exitFullscreen();
					else e.requestFullscreen();
				};
				xe.onclick = function () {
					if (navigator && navigator.clipboard && navigator.clipboard.writeText)
						navigator.clipboard.writeText(n.url);
				};
				function Te() {
					t.addClass(be, 'vjs-hidden');
					window.removeEventListener('scroll', Te);
					window.removeEventListener('mouseup', Te);
				}
				s.addEventListener('contextmenu', function (i) {
					i.preventDefault();
					if (xe && '' === n.url) t.addClass(xe, 'vjs-hidden');
					else t.removeClass(xe, 'vjs-hidden');
					if (e.paused()) Ce.innerHTML = 'Play';
					else Ce.innerHTML = 'Pause';
					if (e.muted()) we.innerHTML = 'Unmute';
					else we.innerHTML = 'Mute';
					if (e.isFullscreen()) ke.innerHTML = 'Exit Fullscreen';
					else ke.innerHTML = 'Fullscreen';
					t.removeClass(be, 'vjs-hidden');
					var a = be.offsetWidth,
						o = be.offsetHeight,
						l = null,
						r = null;
					if (i.clientY) l = i.clientY;
					if (i.clientX) r = i.clientX;
					if (null !== l && null !== r) {
						var d = s.getBoundingClientRect(),
							v = l - d.top,
							f = r - d.left;
						if (v + o > s.offsetHeight) v = s.offsetTop + s.offsetHeight - o;
						if (f + a > s.offsetWidth) f = s.offsetWidth - a;
						be.style.top = v + 'px';
						be.style.left = f + 'px';
						window.addEventListener('scroll', Te);
						window.addEventListener('mouseup', Te);
						e.on('dispose', function () {
							window.removeEventListener('scroll', Te);
							window.removeEventListener('mouseup', Te);
							window.removeEventListener('mousedown', Te);
						});
					}
				});
			}
			if (n.logo) {
				var Le = vjs_El('img');
				Le.src = n.logo;
				var Ie = vjs_El('div', 'vjs-logo');
				if (n.logomin) Ie.className = 'vjs-logo vjs-logo-min';
				s.appendChild(Ie);
				Le.onload = function () {
					if (this.height > 0) {
						var e = n.logooffsetX,
							i = n.logooffsetY;
						if ('RT' === n.logoposition) {
							Ie.style.right = e + 'px';
							Ie.style.top = i + 'px';
						} else if ('LB' === n.logoposition) {
							Ie.style.left = e + 'px';
							Ie.className += ' vjs-logo-bottom';
						} else {
							Ie.style.left = e + 'px';
							Ie.style.top = i + 'px';
						}
						if ('' !== n.logourl) {
							var t = vjs_El('a');
							t.href = n.logourl;
							t.target = n.target;
							if (n.logotitle) t.title = n.logotitle;
							t.appendChild(Le);
							Ie.appendChild(t);
						} else Ie.appendChild(Le);
					}
				};
				Le.onerror = function () {
					s.removeChild(Ie);
				};
			}
			if ('treso' === n.skin) {
				var Me = vjs_find(s, '.vjs-current-time'),
					He = vjs_find(s, '.vjs-duration');
				D.removeChild(Me);
				var Se = vjs_find(s, '.vjs-progress-control');
				Se.insertBefore(Me, Se.childNodes[0]);
				D.removeChild(He);
				Se.appendChild(He);
			}
			e.resetNuevo = function () {
				var i,
					a,
					o = [],
					l = [];
				Ze();
				ii();
				if (e.options_.sources.length > 0) l = o = e.options_.sources;
				try {
					vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = '';
					t.addClass(S, 'vjs-hidden');
				} catch (e) {
					lint(e);
				}
				if (o.length < 2) return o[0];
				if (o.length > 1) {
					var r = 0,
						d = 0,
						v = [],
						f = [],
						c = [],
						u = '',
						h = 0,
						p = 0,
						j = 0,
						m = 0,
						g = !1;
					for (r = 0; r < o.length; r++) if (o[r].res || o[r].label) d++;
					if (o.length >= 1) {
						n.dash = !1;
						n.hls = !1;
						var y = 'MediaSource' in window,
							b = browser.IOS;
						for (h = 0; h < l.length; h++) {
							var C = '';
							try {
								C = l[h].type;
							} catch (e) {
								lint(e);
							}
							if (void 0 !== C) {
								if (-1 !== C.indexOf('x-mpegURL') || -1 !== C.indexOf('apple')) {
									if (y || b) return l[h];
									v[p] = l[h];
									p++;
								}
								if (-1 !== C.indexOf('dash')) {
									if (y) return l[h];
									k++;
								}
							}
							if (l[h].res && l[h].label) {
								if (!0 !== g) {
									g = !0;
									a = { res: l[h].res, type: l[h].type, src: l[h].src, label: l[h].label };
								}
								var w = l[h].type;
								if (void 0 === w) w = '';
								if (
									-1 !== w.indexOf('mpeg') ||
									-1 !== w.indexOf('apple') ||
									-1 !== w.indexOf('dash')
								);
								else {
									c[j] = l[h];
									j++;
								}
							}
						}
					}
					var x = [];
					if (v.length > 0 && (y || b)) return;
					if (f.length > 0 && y) return;
					if (d < 2) return;
					x = (x = c).sort(si);
					var T = '',
						L = ' vjs-checked';
					T = ' class="vjs-menu-item item-quality"';
					L = ' class="vjs-menu-item item-quality vjs-checked"';
					for (h = 0; h < x.length; h++) {
						var I = x[h].res,
							M = parseInt(I, 10),
							H = '';
						if (n.hdicon && M > n.minhd - 1) {
							var q = 'HD';
							if (M > 1079 && n.minhd < 1080) q = 'FullHD';
							if (M > 2159) q = '4K';
							H = '<i class="vjs-hd-icon">' + q + '</i>';
						}
						if (x[h].default) {
							i = x[h];
							u += '<li' + L + ' data-height="' + h + '">' + x[h].label + H + '</li>';
						} else u += '<li' + T + ' data-height="' + h + '">' + x[h].label + H + '</li>';
						m++;
					}
					if (m > 1) {
						u = '<li class="vjs-menu-title">' + e.localize('Quality') + '</li>' + u;
						_ = m;
						if (n.qualityMenu) {
							gi();
							var z = vjs_find(s, '.vjs-menu-quality .vjs-menu-content');
							z.innerHTML = z.innerHTML + u;
							t.removeClass(vjs_find(s, '.vjs-extend-quality'), 'vjs-hidden');
							t.removeClass(B, 'vjs-hidden');
						} else {
							vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = u;
							t.removeClass(S, 'vjs-hidden');
						}
						ii();
						var N = vjs_mfind(s, '.item-quality');
						ii();
						var A = function (i) {
							i.stopImmediatePropagation();
							i.preventDefault();
							for (var s, a = 0; a < N.length; a++) {
								t.removeClass(N[a], 'vjs-checked');
								if (N[a] === i.target) s = a;
							}
							t.addClass(N[s], 'vjs-checked');
							var o = i.target.getAttribute('data-height');
							ti(x[o].res, x[o].label);
							var l = e.video_id();
							e.trigger('resolutionchange', { id: l, res: x[o].res });
							var r = x[o];
							oi();
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
							fi();
							D(r);
							n.chapters = !1;
							e.one('loadeddata', function () {
								if (v.length > 0) e.loadTracks(v);
							});
						};
						for (h = 0; h < N.length; h++) {
							var P = N[h];
							P.addEventListener('click', A);
							De(P);
							P.addEventListener('tap', A);
						}
						Je();
						if (void 0 !== i || void 0 !== a)
							if (void 0 !== i && i !== a) {
								ti(i.res, i.label);
								return i;
							} else if (void 0 !== a) {
								ti(a.res, a.label);
								return a;
							}
						function D(i) {
							E = !0;
							var t = e.currentTime(),
								s = e.paused();
							e.src(i);
							e.load();
							if (t > 0) e.currentTime(t);
							if (s) e.pause();
							else e.play();
							if (1 !== n.rate) e.setRate(n.rate);
						}
					}
				}
			};
			e.on('loadeddata', function () {
				if (t.hasClass(s, 'vjs-ad-playing') || t.hasClass(s, 'vjs-dai')) return !1;
				vi();
				if (!E) {
					if (n.startTime || e.options_.startTime || e.$('.vjs-tech').getAttribute('startTime')) {
						var i = e.$('.vjs-tech').getAttribute('startTime') || 0;
						if (n.startTime) i = n.startTime;
						if (e.options_.startTime) i = e.options_.startTime;
						n.startTime = i;
						if (i > 5 && i < e.duration() - 5) {
							P.style.opacity = 0;
							e.currentTime(i);
						}
					} else li();
					vi();
					if (e.isAudio()) {
						t.addClass(s, 'vjs-audio');
						n.is_audio = !0;
					}
					var a = [
							vjs_find(s, '.vjs-play-control'),
							vjs_find(s, '.vjs-fullscreen-control'),
							vjs_find(s, '.vjs-mute-control')
						],
						o = 0;
					a.forEach((e) => {
						e.onmouseover = function (e) {
							e.target.removeAttribute('title');
						};
					});
					if (!0 !== n.tooltips) {
						vjs_mfind(s, '.vjs-control-text').forEach((e) => {
							t.addClass(e, 'vjs-hidden');
						});
					}
					var l = vjs_mfind(s, '.vjs-menu-button-popup');
					for (o = 0; o < l.length; o++) {
						l[o].onclick = l[o].ontouchstart = function (e) {
							r(e);
						};
						l[o].onmousemove = function (e) {
							var i = vjs_find(e.target, '.vjs-menu') || vjs_find(e.target.parentNode, '.vjs-menu');
							if (i)
								if (t.hasClass(i, 'vjs-lock-showing'));
								else {
									var s =
										e.target.querySelector('.vjs-control-text') ||
										e.target.parentNode.querySelector('.vjs-control-text');
									if (s) s.removeAttribute('style');
								}
						};
						function r(e) {
							s.querySelectorAll('.vjs-control-text').forEach((e) => {
								e.removeAttribute('style');
							});
							var i = vjs_find(e.target, '.vjs-control-text');
							if ('true' === e.target.getAttribute('aria-expanded')) i.style.opacity = '0';
							else i.removeAttribute('style');
							var a = vjs_find(e.target, '.vjs-menu') || vjs_find(e.target.parentNode, '.vjs-menu');
							if (a) if (!t.hasClass(a, 'vjs-lock-showing')) Xe(e.target);
							var o =
									vjs_find(e.target, '.vjs-menu-content') ||
									vjs_find(e.target.parentNode, '.vjs-menu-content'),
								l = 0;
							if ('shaka' === n.skin || 'treso' === n.skin) l = 10;
							if ('roundal' === n.skin || 'mockup' === n.skin) l = 5;
							var r = s.offsetHeight - D.offsetHeight - 10;
							if (s.offsetWidth < 480) r = s.offsetHeight - 8;
							else r -= l;
							if (t.hasClass(s, 'vjs-cast-fixed') && o) o.style.maxHeight = 'none';
							else o.style.maxHeight = r + 'px';
						}
					}
					ui();
					_ = 0;
					e.qualityIndex = -1;
					e.off('mediachange');
					e.qualities = [];
					e.one('playing', f);
					e.one('levelsLoaded', f);
					e.on('dashlevelChange', function () {
						e.trigger('mediachange');
					});
				} else E = !1;
				function d() {
					if (e.tech_.vhs) {
						e.qualities = [];
						var i = e.tech_.vhs.representations();
						if (i.length > 0)
							for (o = 0; o < i.length; o++) {
								var t = i[o],
									s = 'vjs_' + o,
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
								n.enabled = v.bind(this, o);
								e.qualities.push(n);
							}
					}
				}
				function v(i, t) {
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
				function f() {
					d();
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
						gi();
						_ = e.qualities.length;
						setTimeout(function () {
							e.trigger('mediachange');
						}, 500);
						ai(e.qualities);
					}
				}
			});
			if (n.timetooltip) {
				var Be = vjs_find(s, '.vjs-play-progress'),
					qe = vjs_find(Be, '.vjs-time-tooltip');
				if (qe) qe.className = 'vjs-time-tooltip';
			}
			if (n.mousedisplay) {
				var ze = vjs_find(s, '.vjs-mouse-display');
				if (ze) ze.className = 'vjs-mouse-display';
			}
			var Ne = vjs_find(s, '.vjs-info');
			if (Ne) s.removeChild(Ne);
			var Ae = vjs_find(s, '.vjs-audio-info');
			if (Ae) s.removeChild(Ae);
			e.audioInfo = function () {
				if (n.audioInfo && (n.audioInfo.artist || n.audioInfo.title)) return n.audioInfo;
				else return !1;
			};
			ri();
			di();
			if (e.options_.sources.length > 0) {
				e.resetNuevo(!1);
				vi();
				ui();
			}
			e.on('ratechange', function () {
				var i = e.playbackRate();
				s.querySelectorAll('.vjs-speed').forEach((e) => {
					var s = Number(e.innerHTML.replace('x', ''));
					t.removeClass(e, 'vjs-checked');
					if (i === s) t.addClass(e, 'vjs-checked');
				});
				if ('1' === i) i = e.localize('Normal');
				vjs_find(s, '.vjs-extend-speed span').innerHTML = i + 'x';
			});
			e.setRate = function (i) {
				if (parseFloat(i) > 0) {
					e.trigger('ratechanged', { oldRate: e.playbackRate(), newRate: i });
					e.playbackRate(i);
					n.rate = i;
				}
			};
			e.setSource = function (i) {
				e.changeSource(i);
			};
			e.changeSource = function (i) {
				if (!t.hasClass(s, 'vjs-ad-playing') && !t.hasClass(s, 'vjs-dai'))
					if (!e.adPlaying) {
						e.item = i;
						n.chapters = !1;
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
				if (!t.hasClass(s, 'vjs-ad-playing') && !t.hasClass(s, 'vjs-dai')) {
					e.item = i;
					n.video_id =
						n.infoTitle =
						n.infoDescription =
						n.metatitle =
						n.metasubtitle =
						n.audioInfo =
							null;
					n.title = '';
					n.url = '';
					n.description = '';
					n.slideImage = '';
					if (i) {
						if ('string' === typeof i) i = { sources: [{ src: i }] };
						if (i.src) i = { sources: [i] };
						if (i.source) {
							i.sources = [];
							i.sources.push(i.source);
						}
						if (i.sources) {
							n.rate = 1;
							e.setRate(1);
							e.trigger('medialoaded');
							n.video_id = void 0;
							if (i.video_id) n.video_id = i.video_id;
							if (i.audioInfo) n.audioInfo = i.audioInfo;
							if (i.slideImage) n.slideImage = i.slideImage;
							if (i.slideWidth) n.slideWidth = i.slideWidth;
							if (i.slideHeight) n.slideHeight = i.slideHeight;
							if (void 0 !== i.title) n.metatitle = n.title = i.title;
							if (void 0 !== i.description) n.description = i.infoDescription = i.description;
							if (void 0 !== i.embed) n.embed = i.embed;
							if (void 0 !== i.infoTitle) n.infoTitle = i.infoTitle;
							if (void 0 !== i.infoDescription) n.infoDescription = i.infoDescription;
							if (void 0 !== i.infoUrl) n.infoUrl = i.infoUrl;
							else n.infoUrl = null;
							if (void 0 !== i.infoIcon) n.infoIcon = i.infoIcon;
							if (void 0 !== i.url) n.url = i.url;
							else n.url = '';
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
							var o = W;
							t.addClass(o, 'vjs-hidden');
							if (void 0 !== i.poster) e.poster(i.poster);
							setTimeout(function () {
								t.removeClass(o, 'vjs-hidden');
								n.firstplay = !0;
							}, 200);
							n.currentSlide = '';
							e.options_.sources = i.sources;
							var l = e.resetNuevo(!0, i);
							e.src(l);
							e.trigger('newSource');
							di();
							ri();
							ji();
							if (void 0 !== i.track) {
								i.tracks = [];
								i.tracks.push(i.track);
							}
							if (void 0 !== i.tracks)
								if (i.tracks.length > 0)
									e.one('loadeddata', function () {
										fi();
										for (var i = [], t = e.item.tracks, s = 0; s < t.length; s++)
											if (void 0 !== t[s].src) {
												if (t[s].default && ('captions' === t[s].kind || 'subtitles' === t[s].kind))
													e.currentTrack = t[s].src;
												if (t[s].src)
													if ('metadata' === t[s].kind) e.trigger('medialoaded', { xml: t[s].src });
													else {
														i[s] = e.addRemoteTextTrack(t[s], !1);
														i[s].addEventListener('load', function () {
															if ('chapters' === this.kind) ui();
														});
													}
											}
									});
						}
					}
				}
			};
			e.loadTracks = function (i) {
				fi();
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
								if ('chapters' === this.kind) ui();
							});
						}
				}
			};
			e.newPlaylist = function (i) {
				for (
					var t = s.className,
						a = vjs_find(e.playlistParent, '.vjs-vlist'),
						o = vjs_mfind(a, '.vjs-item'),
						l = 0;
					l < o.length;
					l++
				) {
					o[l].onclick = null;
					o[l].ontouchstart = null;
					o[l].ontouchmove = null;
					o[l].ontouchend = null;
					a.removeChild(o[l]);
				}
				a.innerHTML = '';
				for (var r = 0; r < i.length; r++) {
					var d = hi(i[r], r);
					a.appendChild(d);
				}
				if ('undefined' === n.playlistID) {
					var v = vjs_El('div', 'vjs-last');
					a.appendChild(v);
				}
				e.playlist.currentItem(0);
				e.pause();
				e.changeSrc(i[0]);
				if (t.indexOf('vjs-has-started') > -1)
					e.one('canplay', function () {
						e.play();
					});
			};
			e.removeFromPlaylist = function (i) {
				if (n.playlist && n.playlistUI) {
					var t = vjs_find(e.playlistParent, '.vjs-vlist'),
						s = t.childNodes[i];
					t.removeChild(s);
					for (var a = 0; a < t.childNodes.length; a++) t.childNodes[a].setAttribute('data-id', a);
				}
			};
			e.addToPlaylist = function (i, t, a) {
				if (n.playlist && n.playlistUI) {
					var o,
						l = vjs_find(e.playlistParent, '.vjs-vlist'),
						r = l.childNodes.length;
					if ('number' === typeof a && 'string' === typeof t) {
						if ('after' === t) {
							o = hi(i, a + 1);
							l.insertBefore(o, l.childNodes[a].nextSibling);
						} else if ('before' === t) {
							o = hi(i, a);
							l.insertBefore(o, l.childNodes[a]);
						}
						for (var d = 0; d < l.childNodes.length; d++)
							l.childNodes[d].setAttribute('data-id', d);
					} else {
						if (r > 0) o = hi(i, r - 1);
						else o = hi(i, 0);
						if (r > 1 && e.playlistParent === s) l.insertBefore(o, l.childNodes[r - 2].nextSibling);
						else l.appendChild(o);
					}
				}
			};
			e.on('playlistready', function () {
				if (n.playlistRepeat) e.playlist.repeat(!0);
				pi();
			});
			e.ready(function () {
				T = !1;
				var i,
					a,
					o = vjs_find(A, '.vjs-play-progress');
				function r(i) {
					var n = A.getBoundingClientRect(),
						a = null;
					if ('touchstart' === i.type) {
						a = d(i);
						window.document.addEventListener('touchmove', v, !1);
						window.document.addEventListener('touchend', f, !1);
						t.addClass(s, 'vjs-scrubbing');
					} else if ('mousedown' === i.type) {
						a = i.pageX;
						window.document.addEventListener('mousemove', v, !1);
						window.document.addEventListener('mouseup', f, !1);
					}
					var l = (a - n.left) / A.offsetWidth;
					o.style.width = (100 * l).toFixed(2) + '%';
					videojs.holderdown = !0;
					e.trigger('progressdown');
				}
				function v(e) {
					var i = A.getBoundingClientRect();
					t.addClass(s, 'vjs-scrubbing');
					var n = null;
					if ('touchmove' === e.type) n = d(e);
					else if ('mousemove' === e.type) n = e.pageX;
					var a = (n - i.left) / A.offsetWidth;
					if (a < 0) a = 0;
					if (a > 1) a = 1;
					o.style.width = (100 * a).toFixed(2) + '%';
				}
				function f(i) {
					i.preventDefault();
					i.stopPropagation();
					videojs.holderdown = !1;
					t.removeClass(s, 'vjs-scrubbing');
					e.userActive(!0);
					window.document.removeEventListener('mousemove', v);
					window.document.removeEventListener('mouseup', f);
					window.document.removeEventListener('touchmove', v);
					window.document.removeEventListener('touchend', f);
					e.trigger('progressup');
				}
				A.addEventListener('mousedown', r, !1);
				A.addEventListener('touchstart', r, l ? { passive: !1 } : !1);
				e.on('timeupdate', function () {
					if (t.hasClass(s, 'vjs-ad-playing') || t.hasClass(s, 'vjs-dai')) return !1;
					var i = e.video_id(),
						a = e.currentTime(),
						o = e.duration();
					if (0 !== o && o !== 1 / 0)
						if (null !== i)
							if (n.resume && void 0 !== i) {
								a = parseFloat(a);
								var l = String('vjs_resume-' + i);
								if (a > 5 && a < o - 20) {
									localStorage.removeItem(l);
									Ci(l, a);
								}
								if (a > o - 10)
									try {
										localStorage.removeItem(l);
									} catch (e) {
										lint(e);
									}
							}
				});
				e.on('volumechange', function () {
					if (e.volume() > 0) Ci('volume', e.volume());
				});
				e.on('seeked', function () {
					if (t.hasClass(s, 'vjs-ad-playing') || t.hasClass(s, 'vjs-dai')) return !1;
				});
				e.on('ended', function () {
					if (
						!(
							t.hasClass(s, 'vjs-ad-playing') ||
							t.hasClass(s, 'vjs-dai') ||
							t.hasClass(s, 'vjs-up-next')
						)
					) {
						var i = !0;
						if (n.playlist) {
							i = !1;
							if (
								e.playlist.currentIndex() === e.playlist.lastIndex() &&
								!0 !== e.playlist.repeat()
							)
								i = !0;
						}
						if (i) {
							var a = e.video_id();
							if (n.resume && null != a)
								try {
									localStorage.removeItem(String('vjs_resume-' + a));
								} catch (e) {
									lint(e);
								}
							if (n.customEnd) {
								var o = vjs_El('div', 'vjs-cend'),
									l = vjs_El('div', 'cend-inner');
								o.appendChild(l);
								l.innerHTML = n.customEnd;
								t.addClass(K.el_, 'vjs-hidden');
								e.el().appendChild(o);
								e.one('play', function () {
									e.el().removeChild(o);
								});
							} else if ('' !== n.endAction) {
								if (n.settingsButton && 'share' === n.endAction && n.shareMenu) e.share();
								else if (n.settingsButton && 'related' === n.endAction && n.relatedMenu && M)
									e.related();
							} else t.removeClass(K.el_, 'vjs-hidden');
						}
					}
				});
				e.on('playing', function () {
					if (t.hasClass(s, 'vjs-ad-playing') || t.hasClass(s, 'vjs-dai')) return !1;
					if (M) Ue(M, !1);
					if (I) Ue(I, !1);
					t.removeClass(P, 'vjs-hidden');
					t.removeClass(P, 'vjs-abs-hidden');
					if ((e.remoteTextTracks ? e.remoteTextTracks() : []).length < 1 && browser.IS_IOS)
						t.addClass(vjs_find(s, '.vjs-subs-caps-button'), 'vjs-hidden');
				});
				e.on('userinactive', function () {
					if (!0 !== e.paused()) Xe('', !0);
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
				i = function () {
					clearTimeout(a);
					a = setTimeout(function () {
						e.userActive(!1);
					}, 100);
				};
				e.on('mouseleave', function () {
					i();
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
								s.appendChild(i);
								i.onclick = i.ontouchend = function (t) {
									t.preventDefault();
									e.muted(!1);
									s.removeChild(i);
								};
								e.on('volumechange', function () {
									if (!0 !== e.muted()) s.removeChild(i);
								});
							}
						}, 500);
				});
				e.on('play', function () {
					var i = vjs_find(s, '.vjs-picture-in-picture-control');
					if (!0 !== n.pipButton && i) i.parentNode.removeChild(i);
					if (t.hasClass(s, 'vjs-ad-playing') || t.hasClass(s, 'vjs-dai')) return !1;
					var a = t.hasClass(s, 'vjs-live');
					if (e.paused() && a && n.liveReconnect) e.reconnect();
					if (n.singlePlay) {
						var o = vjs_mfind(document, 'video');
						if (o.length > 1)
							for (var r = 0; r < o.length; r++) {
								var d = e.$('.vjs-tech');
								if (o[r] !== d) o[r].pause();
							}
					}
					n.currentSlide = '';
					ji();
					P.style.opacity = 1;
					if (!x) {
						Ye();
						x = !0;
						if (!0 !== e.isAudio()) t.addClass(W, 'vjs-no-pointer');
						if (n.limit && (n.limiturl || '' !== n.url)) {
							var v = !1;
							if (n.startTime)
								if (Number(n.startTime) > 0 && Number(n.limit) > 0)
									n.limit = Number(n.startTime) + Number(n.limit);
							e.on('timeupdate', function () {
								if (e.currentTime() > n.limit) {
									e.pause();
									if (!0 !== v) {
										if (!n.limiturl) n.limiturl = n.url;
										v = !0;
										var i = vjs_El('div', 'vjs-limit-overlay'),
											t = vjs_El('a', 'vjs-limit');
										t.href = n.limiturl;
										t.target = n.target;
										t.style.textDecoration = 'none';
										i.appendChild(t);
										if (n.limitimage) {
											vjs_El('img').src = n.limitimage;
											t.innerHTML = '<img src="' + n.limitimage + '" />';
										} else {
											var a = vjs_El('span');
											a.innerHTML = n.limitmessage + '<span>' + n.limiturl + '</span>';
											t.appendChild(a);
										}
										s.appendChild(i);
									}
								}
							});
						}
						if (localStorage && localStorage.volume && !0 !== e.muted())
							if (localStorage.volume > 0) e.volume(localStorage.volume);
						var f = !1;
						if (
							n.settingsButton &&
							(n.relatedMenu || n.shareMenu || n.rateMenu || n.zoomMenu || n.filtersMenu)
						) {
							f = !0;
							n.menus = !0;
						} else {
							n.menus = !1;
							t.addClass(vjs_find(s, '.vjs-cog-menu-button'), 'vjs-abs-hidden');
						}
						if (f) {
							var c = '<li class="vjs-menu-title">' + e.localize('Settings') + '</li>',
								h = !1,
								p = !1;
							if (n.shareMenu)
								c +=
									'<li class="vjs-settings-item vjs-share-button">' +
									e.localize('Share') +
									'<span class="vjs-share-icon"></span></li>';
							if (n.relatedMenu && n.related.length > 1)
								c +=
									'<li class="vjs-settings-item vjs-related-button">' +
									e.localize('Related') +
									'<span class="vjs-related-icon"></span></li>';
							if (n.zoomMenu) {
								c =
									c +
									'<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward">' +
									e.localize('Zoom') +
									'<span class="zoom-label">100%</span></li>';
								p = vjs_El(
									'div',
									'vjs-submenu vjs-zoom-menu vjs-hidden',
									'<div class="vjs-settings-back vjs-zoom-return"><span>' +
										e.localize('Zoom') +
										'</span></div><div class="vjs-zoom-slider"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div class="vjs-zoom-reset">' +
										e.localize('Reset') +
										'</div>'
								);
							}
							if (n.rateMenu) {
								c =
									c +
									'<li class="vjs-settings-item vjs-extend-speed vjs-menu-forward">' +
									e.localize('Speed') +
									'<span>' +
									e.localize('Normal') +
									'</span></li>';
								h = vjs_El('div', 'vjs-submenu vjs-menu-speed vjs-hidden');
								var j =
										'<ul class="vjs-menu-content"><li class="vjs-settings-back">' +
										e.localize('Speed') +
										'</li>',
									m = [0.5, 1, 1.25, 1.5, 2];
								if (e.playbackRates().length > 0) m = e.playbackRates();
								e.playbackRates(m);
								m.forEach((e) => {
									var i = 'vjs-speed';
									if (1 === e) i = 'vjs-speed vjs-checked';
									j += '<li class="vjs-menu-item ' + i + '">' + e + 'x</li>';
								});
								h = vjs_El('div', 'vjs-submenu vjs-menu-speed vjs-hidden', (j += '</ul>'));
							}
							var b = vjs_find(s, '.vjs-settings-list');
							if ('' !== c) {
								b.innerHTML = c + b.innerHTML;
								var _ = vjs_find(s, '.vjs-settings-div');
								if (h) _.appendChild(h);
								if (p) _.appendChild(p);
								t.removeClass(q, 'vjs-hidden');
								Je();
								ii();
								var w = function (i) {
									i.stopImmediatePropagation();
									var t = i.target.innerHTML;
									t = t.replace('x', '');
									e.setRate(t);
									Xe('');
								};
								setTimeout(function () {
									vjs_mfind(s, '.vjs-speed').forEach((e) => {
										e.onclick = function (e) {
											w(e);
										};
										De(e);
										e.addEventListener(
											'tap',
											function (e) {
												w(e);
											},
											!1
										);
									});
								}, 200);
							}
							if (n.related.length > 1 && n.relatedMenu) {
								var k = n.related.length,
									E = '<div class="vjs-close-btn"></div>';
								E +=
									'<div class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>';
								(M = vjs_El('div')).innerHTML = E;
								M.className = 'vjs-grid vjs-hidden';
								M.setAttribute('aria-label', 'Related dialog');
								M.setAttribute('aria-hidden', 'true');
								var T = vjs_El('p');
								T.innerHTML = e.localize('Related');
								var L = vjs_El('div', 'vjs-related');
								L.className = 'vjs-related vjs-scroll';
								var H = s.offsetWidth,
									S = 0.8 * H;
								if (!0 !== u()) S = 0.9 * H;
								M.appendChild(T);
								M.appendChild(L);
								s.appendChild(M);
								var B = vjs_find(M, '.vjs-arrow-prev'),
									z = vjs_find(M, '.vjs-arrow-next'),
									N = parseInt(vjs_find(s, '.vjs-prev').offsetWidth, 10) + 5;
								if (B) B.style.left = parseInt(L.style.left, 10) - N + 'px';
								if (z) z.style.left = S + parseInt(L.style.left, 10) + 'px';
								var A = vjs_El('div', 'rel-block rel-anim');
								L.appendChild(A);
								var D = n.related;
								g = 1;
								for (var R = 0; R < k; R++) {
									var O = vjs_El('div', 'rel-parent'),
										F = vjs_El('div', 'rel-item');
									O.appendChild(F);
									A.appendChild(O);
									F.innerHTML =
										'<a class="rel-url" target="' +
										n.target +
										'" href="' +
										D[R].url +
										'" alt="' +
										D[R].title +
										'"><span class="rel-bg" style="background-image:url(' +
										D[R].thumb +
										');"></span><label>' +
										D[R].title +
										'</label><i>' +
										D[R].duration +
										'</i></a>';
								}
								if (k < 7 && u()) {
									if (B) t.addClass(B, 'vjs-hidden');
									if (z) t.addClass(z, 'vjs-hidden');
								}
								var U = function (e) {
									e.stopPropagation();
									if (!t.hasClass(z, 'vjs-disabled')) {
										var i = L.offsetWidth;
										g++;
										t.removeClass(z, 'vjs-disabled');
										var s = (g - 1) * i;
										A.style.left = '-' + s + 'px';
										if (g === y) t.addClass(z, 'vjs-disabled');
										t.removeClass(B, 'vjs-disabled');
									}
								};
								if (z)
									z.onclick = function (e) {
										U(e);
									};
								var $ = function (e) {
									e.stopPropagation();
									if (!t.hasClass(B, 'vjs-disabled')) {
										var i = L.offsetWidth,
											n = ((g -= 1) - 1) * i;
										vjs_find(s, '.rel-block').style.left = '-' + n + 'px';
										if (B && z) {
											if (1 === g) t.addClass(B, 'vjs-disabled');
											t.removeClass(z, 'vjs-disabled');
										}
									}
								};
								if (B)
									B.onclick = function (e) {
										$(e);
									};
								var X = vjs_find(s, '.vjs-related-button');
								X.onclick = X.ontouchstart = function () {
									e.related();
								};
								M.onclick = function () {
									t.addClass(M, 'vjs-hidden');
									e.play();
								};
							}
							if (n.shareMenu) {
								(I = vjs_El('div', 'vjs-sharing-overlay vjs-hidden')).setAttribute(
									'aria-label',
									'Sharing Dialog'
								);
								I.setAttribute('aria-hidden', 'true');
								var Y = vjs_El('div', 'vjs-sharing-container'),
									K = vjs_El('div', 'vjs-sharing-body'),
									Q = vjs_El('div', 'vjs-close-btn vjs-share-close'),
									V =
										'<div class="vjs-inputs-body"><h2>' +
										e.localize('Link') +
										'</h2><input type="text" readonly class="perma"><h2>' +
										e.localize('Embed') +
										'</h2><input class="embed-code" readonly type="text"></div>';
								V += '<div class="vjs-inputs-body"><h2>' + e.localize('Social') + '</h2></div>';
								V +=
									'<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>';
								V +=
									'<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>';
								V +=
									'<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>';
								V +=
									'<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>';
								K.innerHTML = V;
								Y.appendChild(K);
								I.appendChild(Q);
								I.appendChild(Y);
								var Z = n.url || document.location.href,
									G = !1;
								s.appendChild(I);
								var J = vjs_find(s, '.vjs-share-button');
								J.onclick = J.ontouchstart = function () {
									e.share();
								};
								var ee = [],
									ie = function (e) {
										var i = [];
										for (var t in e) i.push(encodeURIComponent(t) + '=' + encodeURIComponent(e[t]));
										return i.join('&');
									},
									te = function (i) {
										i.stopPropagation();
										ee = {
											url: Z,
											title: n.title || n.metatitle || document.title,
											description: e.localize('Check out this cool video on') + ' ' + n.url,
											pubid: n.pubid || null
										};
										var t = '';
										switch (i.target.id.split('_')[1]) {
											case 'facebook':
												t = 'facebook';
												break;
											case 'twitter':
												t = 'twitter';
												break;
											case 'pinterest':
												t = 'pinterest';
												break;
											case 'linkedin':
												t = 'linkedin';
												break;
											default:
										}
										if ('' !== t)
											window.open(
												'https://api.addthis.com/oexchange/0.8/forward/' + t + '/offer?' + ie(ee),
												'AddThis',
												'height=450,width=550,modal=yes,alwaysRaised=yes'
											);
									},
									se = s.querySelectorAll('.vjs-share-icon');
								for (R = 0; R < se.length; R++) se[R].addEventListener('click', te, !1);
								vjs_find(I, '.embed-code').onclick = function (e) {
									e.stopImmediatePropagation();
									this.select();
								};
								vjs_find(I, '.perma').onclick = function (e) {
									e.stopImmediatePropagation();
									this.select();
								};
								I.onclick = function () {
									t.addClass(I, 'vjs-hidden');
									if (!0 !== G) e.play();
								};
							}
							if (n.zoomMenu) {
								var ne,
									ae,
									oe,
									le = e.$('.vjs-poster'),
									re = e.$('.vjs-tech');
								if (n.zoomInfo) {
									var de = vjs_El('div', 'vjs-zoom-parent vjs-hidden'),
										ve = vjs_El('div', 'vjs-reset-zoom');
									ve.innerHTML = '100%';
									de.appendChild(ve);
									var fe = vjs_El('div', 'vjs-reset-center'),
										ce = vjs_El('div', 'vjs-reset-cancel');
									de.appendChild(fe);
									de.appendChild(ce);
									var ue = vjs_El('div', 'vjs-reset-info');
									de.appendChild(ue);
									var he = e.localize('Drag zoomed area using your mouse.'),
										pe = e.localize('Use ZOOM slider or mouse wheel to ZOOM in video.'),
										je = e.localize('ZOOM HELP'),
										me = vjs_El('div', 'vjs-zoom-help vjs-hidden');
									if (n.zoomWheel)
										me.innerHTML =
											'<div class="zoom-close">x</div><div>' +
											je +
											'</div>' +
											pe +
											'<div>' +
											he +
											'</div>';
									else
										me.innerHTML =
											'<div class="zoom-close">x</div><div>' + je + '</div>' + he + '</div>';
									de.appendChild(ue);
									ue.onclick = function (e) {
										ge(e);
									};
									function ge(e) {
										e.preventDefault();
										if (t.hasClass(me, 'vjs-hidden')) t.removeClass(me, 'vjs-hidden');
									}
									vjs_find(me, '.zoom-close').onclick = function () {
										t.addClass(me, 'vjs-hidden');
										t.addClass(me, 'vjs-hidden');
									};
									s.appendChild(me);
									ce.onmouseup = function () {
										bi();
									};
									fe.onmouseup = function (e) {
										yi(e);
									};
									s.appendChild(de);
								}
								var ye = vjs_find(s, '.vjs-zoom-reset');
								if (ye) ye.addEventListener('mouseup', bi, !1);
								if (!s.hasAttribute('tabIndex')) s.setAttribute('tabIndex', '-1');
								if (n.zoomWheel && !0 !== browser.TOUCH_ENABLED) {
									le.addEventListener('mousewheel', be, l ? { passive: !1 } : !1);
									le.addEventListener('DOMMouseScroll', be, l ? { passive: !1 } : !1);
									function be(e) {
										e.preventDefault();
										e.stopPropagation();
										var i = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
										C = (100 * C + 20 * i) / 100;
										if (C < 1) C = 1;
										if (C > 5) C = 5;
										if (1 === C) {
											bi();
											if (n.zoomInfo) t.addClass(de, 'vjs-hidden');
										} else {
											if (n.zoomInfo) t.removeClass(de, 'vjs-hidden');
											wi(re, C);
										}
										var a = vjs_find(s, '.vjs-zoom-menu');
										if (!0 !== t.hasClass(a, 'vjs-hidden')) {
											var o = ((C - 1) / 4) * 100;
											vjs_find(s, '.vjs-zoom-level').style.height = o + '%';
										}
										Ge(100 * C);
										return !1;
									}
								}
								function _e(e) {
									if (C > 1) {
										e.preventDefault();
										e.stopPropagation();
										ne = !0;
										oe = [re.offsetLeft - e.clientX, re.offsetTop - e.clientY];
										le.style.pointerEvents = 'none';
										document.addEventListener('mouseup', we, !0);
										document.addEventListener('mousemove', Ce, !0);
									}
								}
								function Ce(e) {
									e.preventDefault();
									if (ne) {
										try {
											ae = { x: e.clientX, y: e.clientY };
										} catch (e) {
											lint(e);
										}
										var i = ae.x + oe[0],
											t = ae.y + oe[1],
											n = (s.offsetWidth / 2) * (C - 1),
											a = (s.offsetHeight / 2) * (C - 1);
										if (i > n) i = n;
										if (i < -1 * n) i = -1 * n;
										if (t > a) t = a;
										if (t < -1 * a) t = -1 * a;
										re.style.left = i + 'px';
										re.style.top = t + 'px';
									}
								}
								function we() {
									le.style.pointerEvents = 'auto';
									ne = !1;
									document.removeEventListener('mouseup', we, !0);
									document.removeEventListener('mousemove', Ce, !0);
								}
								le.onmousedown = function (e) {
									_e(e);
								};
								function ke(i, n) {
									le.style.pointerEvents = 'auto';
									var a = vjs_find(s, '.vjs-zoom-parent'),
										o = i.pageY,
										l = n.offsetHeight,
										r = o - ki(n);
									if (r > l) r = l;
									if (r < 0) r = 0;
									var d = parseInt(100 - (r / l) * 100, 10);
									if (d < 0) d = 0;
									if (d > 100) d = 100;
									try {
										vjs_find(s, '.vjs-zoom-level').style.height = d + '%';
									} catch (i) {
										lint(i);
									}
									try {
										vjs_find(s, '.zoom-thumb').style.height = d + '%';
									} catch (i) {
										lint(i);
									}
									var v = 1 + (4 * d) / 100;
									C = v;
									wi(e.$('.vjs-tech'), v);
									Ge(100 * v);
									if (v > 1) {
										videojs.options.blockKeys = !0;
										t.removeClass(a, 'vjs-hidden');
									} else {
										bi();
										videojs.options.blockKeys = !1;
										t.addClass(a, 'vjs-hidden');
									}
								}
								var xe = vjs_find(s, '.vjs-zoom-slider');
								xe.onclick = function (e) {
									e.stopImmediatePropagation();
								};
								xe.addEventListener('mousedown', Ee, !1);
								function Ee(e) {
									e.stopImmediatePropagation();
									xi(!0);
									var i = xe;
									ke(e, i);
									document.addEventListener('mousemove', t, !1);
									document.addEventListener('mouseup', s, !1);
									function t(e) {
										ke(e, i);
									}
									function s() {
										xi(!1);
										document.removeEventListener('mouseup', s);
										document.removeEventListener('mousemove', t);
									}
								}
							}
							e.trigger('menusReady');
						}
					}
				});
			});
			if (n.mirrorButton) {
				e.controlBar.mirrorButton = e.controlBar.addChild('button', {
					el: t.createEl(
						'button',
						{ text: 'Mirror view', className: 'vjs-mirror-button vjs-control vjs-button' },
						{ role: 'button', 'aria-live': 'polite', 'aria-disabled': 'false' }
					)
				});
				e.controlBar.mirrorButton.el_.innerHTML =
					'<span class="vjs-control-text" aria-live="polite">' +
					e.localize('Mirror View') +
					'</span>';
				e.controlBar.el_.insertBefore(e.controlBar.mirrorButton.el_, G.el_);
				var Pe = function (i) {
					i.preventDefault();
					var n = s.className,
						a = !1;
					if (n.indexOf('vjs-has-started') > 0) a = !0;
					if (n.indexOf('vjs-ended') > 0) a = !1;
					if (a) {
						var o = 'rotateY(0)';
						if (t.hasClass(i.target, 'vjs-mirrored')) t.removeClass(i.target, 'vjs-mirrored');
						else {
							t.addClass(i.target, 'vjs-mirrored');
							o = 'rotateY(180deg)';
						}
						var l = e.$('.vjs-tech');
						l.style.transform = o;
						l.style.webkitTransform = o;
						l.style.msTransform = o;
					}
				};
				e.controlBar.mirrorButton.el_.onclick = e.controlBar.mirrorButton.el_.ontouchstart =
					function (e) {
						Pe(e);
					};
			}
			e.trigger('nuevoReady');
			s.style.visibility = 'visible';
			if (!0 !== videojs.nuevo) s.parentNode.removeChild(s);
		} else s.innerHTML = w.split('').reverse().join('');
		function De(e) {
			var i,
				t = !1,
				s = null;
			e.addEventListener(
				'touchstart',
				function (e) {
					i = window.performance.now();
					t = !1;
					s = { pageX: e.touches[0].pageX, pageY: e.touches[0].pageY };
					e.target.addEventListener('touchmove', n, !1);
					e.target.addEventListener('touchend', o, !1);
					e.target.addEventListener('touchcancel', a, !1);
				},
				l ? { passive: !1 } : !1
			);
			function n(e) {
				var i = e.touches[0].pageX - s.pageX,
					n = e.touches[0].pageY - s.pageY;
				if (Math.sqrt(i * i + n * n) > 200) t = !0;
			}
			function a() {
				t = !1;
			}
			function o(l) {
				s = null;
				if (window.performance.now() - i < 200 && !0 !== t) {
					l.preventDefault();
					e.dispatchEvent(new Event('tap'));
					l.target.removeEventListener('touchmove', n);
					l.target.removeEventListener('touchend', o);
					l.target.removeEventListener('touchend', a);
				}
			}
		}
		function We() {
			if (s.className.includes('vjs-touch-active')) Re();
			else {
				if (document.pictureInPictureElement) return;
				t.removeClass(s, 'vjs-touch-inactive');
				t.addClass(s, 'vjs-touch-active');
				t.removeClass(s, 'vjs-user-inactive');
				t.addClass(s, 'vjs-user-active');
				vjs_mfind(s, '.vjs-lock-showing').forEach((e) => {
					t.removeClass(e, 'vjs-lock-showing');
				});
				Oe();
			}
		}
		function Re() {
			clearTimeout(e.touchtimer);
			t.removeClass(s, 'vjs-touch-active');
			t.addClass(s, 'vjs-touch-inactive');
			t.removeClass(s, 'vjs-user-active');
			t.addClass(s, 'vjs-user-inactive');
		}
		function Oe() {
			clearTimeout(e.touchtimer);
			e.touchtimer = setTimeout(Re, $);
		}
		function Fe(i) {
			e.options_.inactivityTimeout = $;
			We();
		}
		function Ue(e, i) {
			if (e)
				if (i) {
					t.removeClass(e, 'vjs-hidden');
					e.setAttribute('aria-hidden', 'false');
				} else {
					t.addClass(e, 'vjs-hidden');
					e.setAttribute('aria-hidden', 'true');
				}
		}
		function $e(i) {
			var s = 'vjs-rewind-control';
			if (i) s = 'vjs-rewind-control vjs-rewind-first';
			var a = e.controlBar.addChild('button', {
				el: t.createEl(
					'button',
					{ className: s + ' vjs-control vjs-button' },
					{ title: e.localize('Rewind'), type: 'button', 'aria-disabled': 'false' }
				)
			});
			a.el_.innerHTML =
				'<span class="num">' +
				n.rewindforward +
				'</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
				e.localize('Rewind') +
				'</span>';
			if (i)
				if ('party' === n.skin)
					D.insertBefore(a.el_, e.controlBar.getChild('playToggle').el_.nextSibling);
				else D.insertBefore(a.el_, e.controlBar.getChild('playToggle').el_);
			else
				e.controlBar.el_.insertBefore(a.el_, e.controlBar.getChild('playToggle').el_.nextSibling);
			a.el_.onclick = a.el_.ontouchstart = function () {
				e.rewind();
			};
		}
		function Xe(i) {
			if (!e.isDisposed())
				if (!T) {
					if ('' === i) i = vjs_find(s, '.vjs-play-control');
					if (t.hasClass(i, 'vjs-cast')) return !1;
					var n = i.className;
					if ('string' === typeof n || n instanceof String) {
						if (n.indexOf('vjs-settings-item') > -1) return;
						if (n.indexOf('vjs-quality-button') < 0) {
							var a = vjs_find(S, '.vjs-menu');
							if (t.hasClass(a, 'vjs-lock-showing')) t.removeClass(a, 'vjs-lock-showing');
						}
						if (n.indexOf('vjs-chapters-button') < 0)
							e.controlBar.getChild('chaptersButton').unpressButton();
						if (n.indexOf('vjs-descriptions-button') < 0)
							e.controlBar.getChild('descriptionsButton').unpressButton();
						if (n.indexOf('vjs-subs-caps-button') < 0)
							e.controlBar.getChild('subsCapsButton').unpressButton();
						if (n.indexOf('vjs-audio-button') < 0)
							e.controlBar.getChild('audioTrackButton').unpressButton();
						if (n.indexOf('vjs-cog-button') < 0) {
							for (
								var o = vjs_find(s, '.vjs-settings-home'), l = vjs_mfind(s, '.vjs-submenu'), r = 0;
								r < l.length;
								r++
							) {
								t.addClass(l[r], 'vjs-hidden');
								if (l[r] === o) t.removeClass(o, 'vjs-hidden');
							}
							var d = vjs_find(s, '.vjs-menu-settings'),
								v = vjs_find(s, '.vjs-cog-button');
							t.removeClass(d, 'vjs-lock-showing');
							v.setAttribute('aria-expanded', 'false');
							t.removeClass(v, 'vjs-cog-active');
						}
					}
				}
		}
		function Ye() {
			var e = s.offsetWidth;
			['vjs-1600', 'vjs-1080', 'vjs-920', 'vjs-600', 'vjs-640', 'vjs-480', 'vjs-360'].forEach(
				(e) => {
					t.removeClass(s, e);
				}
			);
			if (e < 360) {
				t.addClass(s, 'vjs-480');
				t.addClass(s, 'vjs-360');
			} else if (e < 480) t.addClass(s, 'vjs-480');
			else if (e < 640) {
				t.addClass(s, 'vjs-640');
				if (e < 600) t.addClass(s, 'vjs-600');
			} else if (e < 920) t.addClass(s, 'vjs-920');
			else if (e < 1080) {
				t.addClass(s, 'vjs-920');
				t.addClass(s, 'vjs-1080');
			} else {
				t.addClass(s, 'vjs-920');
				t.addClass(s, 'vjs-1080');
				t.addClass(s, 'vjs-1600');
			}
		}
		function Ke() {
			Ye();
			ei();
			ii();
			Xe('');
		}
		function Qe(i) {
			e.options_.innactivityTimeout = U;
			i.stopImmediatePropagation();
			Xe(i.target);
		}
		function Ve(e) {
			if (!s.contains(e.target)) Re();
		}
		function Ze() {
			var e = 0,
				i = vjs_mfind(s, '.item-quality');
			if (Array.isArray(i))
				i.forEach((e) => {
					e.ontouchstart = null;
					e.onclick = null;
				});
			var n = vjs_mfind(s, '.item-quality');
			for (e = 0; e < n.length; e++) n[e].parentNode.removeChild(n[e]);
			var a = vjs_find('nv,vjs-extend-quality');
			if (a) t.addClass(a, 'vjs-hidden');
			vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = '';
			t.addClass(S, 'vjs-hidden');
		}
		function Ge(e) {
			try {
				vjs_find(s, '.vjs-reset-zoom').innerHTML = parseInt(e, 10) + '%';
				vjs_find(s, '.zoom-label').innerHTML = parseInt(e, 10) + '%';
			} catch (e) {
				lint(e);
			}
		}
		function Je() {
			var e = S,
				i = vjs_find(e, '.vjs-menu'),
				a = vjs_find(i, '.vjs-menu-content');
			if (_ > 1) {
				var o = function (i) {
					if (t.hasClass(i.target, 'vjs-quality-button')) {
						if (t.hasClass(i.target, 'vjs-cast')) return !1;
						var n = vjs_find(i.target, '.vjs-control-text'),
							o = vjs_find(e, '.vjs-menu');
						if (t.hasClass(o, 'vjs-lock-showing')) {
							i.target.setAttribute('aria-expanded', 'false');
							t.removeClass(o, 'vjs-lock-showing');
							if (n) n.removeAttribute('style');
						} else {
							Xe(i.target);
							var l = s.offsetHeight - D.offsetHeight - 10;
							if (s.offsetWidth < 480) l = s.offsetHeight - 10;
							if (!t.hasClass(s, 'vjs-casting')) a.style.maxHeight = l + 'px';
							t.addClass(o, 'vjs-lock-showing');
							i.target.setAttribute('aria-expanded', 'true');
							n.style.opacity = '0';
						}
					}
				};
				e.onclick = e.ontouchend = function (e) {
					o(e);
				};
				e.onmouseover = function (e) {
					var i = vjs_find(e.target, '.vjs-menu') || vjs_find(e.target.parent, '.vjs-menu');
					if (i)
						if (!0 !== t.hasClass(i, 'vjs-lock-showing')) {
							var s = vjs_find(e.target, '.vjs-control-text');
							if (s) s.removeAttribute('style');
						}
				};
			}
			var l = vjs_find(s, '.vjs-settings-div'),
				r = vjs_find(s, '.vjs-menu-speed'),
				d = vjs_find(s, '.vjs-zoom-menu'),
				v = vjs_find(s, '.vjs-menu-quality'),
				f = vjs_find(s, '.vjs-settings-home'),
				c = function (e, i, s) {
					e.stopPropagation();
					t.addClass(f, 'vjs-hidden');
					t.removeClass(i, 'vjs-hidden');
					if (d) if (d !== i) t.addClass(d, 'vjs-hidden');
					if (v) if (v !== i) t.addClass(v, 'vjs-hidden');
					l.style.width = z[s].width + 'px';
					l.style.height = z[s].height + 'px';
				},
				u = function (e) {
					e.stopPropagation();
					if (d) t.addClass(d, 'vjs-hidden');
					if (r) t.addClass(r, 'vjs-hidden');
					if (v) t.addClass(v, 'vjs-hidden');
					t.removeClass(f, 'vjs-hidden');
					l.style.width = z.cogMenu.width + 'px';
					l.style.height = z.cogMenu.height + 'px';
					Ge(100 * C);
				};
			if (r) {
				var h = vjs_find(s, '.vjs-extend-speed');
				h.onclick = function (e) {
					c(e, r, 'speedMenu');
				};
				De(h);
				h.addEventListener(
					'tap',
					function (e) {
						c(e, r, 'speedMenu');
					},
					!1
				);
				var p = vjs_find(r, '.vjs-settings-back');
				p.onclick = p.ontouchstart = function (e) {
					u(e);
				};
			}
			if (v && n.qualityMenu) {
				t.removeClass(vjs_find(s, '.vjs-cog-menu-button'), 'vjs-hidden');
				v.onclick = function (e) {
					e.stopPropagation();
				};
				var j = vjs_find(s, '.vjs-extend-quality');
				j.onclick = function (e) {
					c(e, v, 'qualityMenu');
				};
				De(j);
				j.addEventListener(
					'tap',
					function (e) {
						c(e, v, 'qualityMenu');
					},
					!1
				);
				var m = vjs_find(v, '.vjs-settings-back');
				m.onclick = m.ontouchstart = function (e) {
					u(e);
				};
			}
			if (d) {
				vjs_find(s, '.vjs-extend-zoom').onclick = function (e) {
					c(e, d, 'zoomMenu');
				};
				vjs_find(d, '.vjs-settings-back').onclick = function (e) {
					u(e);
				};
			}
			var g = function (e) {
				e.preventDefault();
				if (!vjs_find(s, '.vjs-tech-chromecast')) {
					ii();
					var i = s.querySelector('.vjs-menu-settings');
					if (d) t.addClass(d, 'vjs-hidden');
					if (r) t.addClass(r, 'vjs-hidden');
					if (!0 !== t.hasClass(i, 'vjs-lock-showing')) {
						e.target.setAttribute('aria-expanded', 'true');
						Xe(e.target);
						t.addClass(i, 'vjs-lock-showing');
						vjs_find(B, '.vjs-control-text').style.opacity = 0;
						t.addClass(e.target, 'vjs-cog-active');
						t.removeClass(f, 'vjs-hidden');
						l.style.width = z.cogMenu.width + 'px';
						l.style.height = z.cogMenu.height + 'px';
						Ge(100 * C);
					} else {
						e.target.setAttribute('aria-expanded', 'false');
						t.removeClass(e.target, 'vjs-cog-active');
						y();
					}
				}
			};
			function y() {
				if (d) t.addClass(d, 'vjs-hidden');
				if (r) t.addClass(r, 'vjs-hidden');
				t.removeClass(he, 'vjs-hidden');
				t.removeClass(ce, 'vjs-lock-showing');
				vjs_find(B, '.vjs-control-text').removeAttribute('style');
			}
			B.onclick = B.ontouchend = function (e) {
				g(e);
			};
			B.onmouseover = function () {
				if (!0 !== t.hasClass(ce, 'vjs-lock-showing'))
					vjs_find(B, '.vjs-control-text').removeAttribute('style');
			};
		}
		function ei() {
			if (!0 === n.menus) {
				var e = n.related.length,
					i = 0.8,
					a = 800;
				if (vjs_find(s, '.rel-block')) {
					t.removeClass(vjs_find(s, '.rel-block'), 'rel-anim');
					var o = s.offsetWidth,
						l = o * i;
					if (l > a) l = a;
					var r = parseInt(vjs_find(s, '.vjs-related').style.maxWidth, 10);
					if (isNaN(r)) r = 0;
					if (parseInt(r, 10) < 100) r = a;
					if (l > r) l = r;
					var d = vjs_find(s, '.vjs-related');
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
						h = l / v,
						p = Math.ceil(e / 6);
					if (g > p) g = p;
					y = p;
					if (2 === v && 2 === f) y = Math.ceil(e / 4);
					if (2 === v && 1 === f) y = Math.ceil(e / 2);
					var j = c * f;
					d.style.height = j + 'px';
					var m = o / 2 - l / 2;
					d.style.top = 0.55 * s.offsetHeight - j / 2 + 'px';
					d.style.left = o / 2 - l / 2 + 'px';
					var b = vjs_find(s, '.vjs-arrow-prev'),
						_ = vjs_find(s, '.vjs-arrow-next');
					if (u() && b && _) {
						var C = parseInt(vjs_find(s, '.vjs-prev').offsetWidth + 5, 10);
						b.style.left = m - C + 'px';
						_.style.left = l + m + 'px';
						t.removeClass(_, 'vjs-disabled');
						t.removeClass(b, 'vjs-disabled');
						if (g === y) t.addClass(_, 'vjs-disabled');
						if (1 === g) t.addClass(b, 'vjs-disabled');
					}
					if (g > 1) {
						var w = d.offsetWidth,
							k = (g - 1) * w;
						vjs_find(s, '.rel-block').style.left = '-' + k + 'px';
					}
					for (var x = 0, E = 0, T = s.querySelectorAll('.rel-parent'), L = 0; L < T.length; L++) {
						var I = T[L];
						I.style.left = x + 'px';
						if (1 === E && f > 1) {
							I.style.top = c + 'px';
							x += h;
						} else I.style.top = 0;
						if (1 === f) x += h;
						I.style.width = h + 'px';
						I.style.height = c + 'px';
						if (f > 1) {
							if (2 === ++E) E = 0;
						} else E = 0;
					}
					t.addClass(vjs_find(s, '.rel-block'), 'rel-anim');
				}
			}
		}
		function ii() {
			if (!0 === n.menus) {
				var e = vjs_find(s, '.vjs-settings-home'),
					i = vjs_find(s, '.vjs-menu-speed'),
					a = vjs_find(s, '.vjs-zoom-menu'),
					o = vjs_find(s, '.vjs-menu-quality'),
					l = vjs_find(s, '.vjs-settings-div');
				t.addClass(D, 'vjs-block');
				l.style.width = 'auto';
				l.style.height = 'auto';
				var r = 5;
				if ('pinko' === n.skin || 'roundal' === n.skin || 'mockup' === n.skin) r = 15;
				if ('shaka' === n.skin) r = 15;
				if ('treso' === n.skin) r = 30;
				if ('jwlike' === n.skin) r = 10;
				var d = s.offsetHeight - D.offsetHeight;
				if (s.offsetWidth < 480) d = s.offsetHeight - 8;
				else d -= r;
				if (d > 300) d = 300;
				l.style.maxHeight = d + 'px';
				if (i) t.addClass(i, 'vjs-hidden');
				if (a) t.addClass(a, 'vjs-hidden');
				if (o) t.addClass(o, 'vjs-hidden');
				var v = vjs_find(s, '.vjs-menu-settings');
				t.removeClass(v, 'vjs-hidden');
				t.addClass(v, 'vjs-invisible');
				z.cogMenu = { width: v.clientWidth, height: v.clientHeight };
				if (i) {
					t.addClass(e, 'vjs-hidden');
					if (a) t.addClass(a, 'vjs-hidden');
					if (o) t.addClass(o, 'vjs-hidden');
					t.removeClass(i, 'vjs-hidden');
					t.addClass(i, 'vjs-invisible');
					z.speedMenu = { width: i.clientWidth, height: i.clientHeight };
					t.removeClass(i, 'vjs-invisible');
					t.addClass(i, 'vjs-hidden');
				}
				if (o && n.qualityMenu) {
					t.addClass(e, 'vjs-hidden');
					if (a) t.addClass(a, 'vjs-hidden');
					if (i) t.addClass(i, 'vjs-hidden');
					t.removeClass(o, 'vjs-hidden');
					t.addClass(o, 'vjs-invisible');
					z.qualityMenu = { width: o.offsetWidth + 10, height: o.offsetHeight };
					t.removeClass(o, 'vjs-invisible');
					t.addClass(o, 'vjs-hidden');
					t.removeClass(vjs_find(s, '.vjs-cog-menu-button'), 'vjs-hidden');
				}
				if (a) {
					t.addClass(e, 'vjs-hidden');
					if (i) t.addClass(i, 'vjs-hidden');
					if (o) t.addClass(o, 'vjs-hidden');
					t.removeClass(a, 'vjs-hidden');
					t.addClass(a, 'vjs-invisible');
					a.style.width = 'auto';
					z.zoomMenu = { width: a.clientWidth, height: a.clientHeight + 1 };
					t.removeClass(a, 'vjs-invisible');
					t.addClass(a, 'vjs-hidden');
				}
				t.removeClass(D, 'vjs-block');
				var f = vjs_mfind(s, '.vjs-submenu');
				if (f) for (var c = 0; c < f.length; c++) t.addClass(f[c], 'vjs-hidden');
				t.removeClass(e, 'vjs-hidden');
				t.removeClass(v, 'vjs-invisible');
				t.removeClass(e, 'vjs-hidden');
				if (n.speedMenu || n.zoomMenu || n.relatedMenu || n.shareMenu || n.qualityMenu)
					t.removeClass(vjs_find(s, '.vjs-cog-menu-button'), 'vjs-hidden');
			}
		}
		function ti(e, i) {
			var a = parseInt(e, 10),
				o = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden"></i>',
				l = '';
			if (n.hdicon) {
				l = 'HD';
				if (a > 2159) l = '4K';
				if (a > n.minhd - 1) o = '<i class="vjs-hd-icon vjs-hd-home">' + l + '</i>';
			}
			if (n.qualityMenu) {
				vjs_find(s, '.quality-label').innerHTML = i + o;
				var r = vjs_find(s, '.vjs-hd');
				if (a > n.minhd - 1) t.removeClass(r, 'vjs-hidden');
				else t.addClass(r, 'vjs-hidden');
			} else vjs_find(S, '.quality-span').innerHTML = i + o;
		}
		function si(e, i) {
			if (!e.res || !i.res) return 0;
			else return +i.res - +e.res;
		}
		function ni(e) {
			if (n.hdicon)
				if (n.qualityMenu) {
					var i = vjs_find(s, '.vjs-hd');
					if (e > n.minhd - 1) {
						var a = 'HD';
						if (e > 2159) a = '4K';
						i.innerHTML = a;
						t.removeClass(i, 'vjs-hidden');
					} else t.addClass(i, 'vjs-hidden');
				}
		}
		function ai(i) {
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
			Ze();
			ii();
			for (var d = [], v = !1, f = 0; f < i.length; f++) {
				v = !1;
				for (var c = 0; c < d.length; c++)
					if (i[f].height === d[c].height && i[f].bitrate === d[c].bitrate) v = !0;
				if (!0 !== v) d.push(i[f]);
			}
			if (!(d.length < 2)) {
				n.is_auto = !0;
				var u = 0,
					h = 0;
				d.forEach((e) => {
					if (e.height > 0) u++;
					if (e.bitrate > 0) h++;
				});
				var p = 'bitrate';
				if (u > h) p = 'height';
				d = (d = sortByKey(d, p)).reverse();
				_ = d.length + 1;
				var j = 'vjs-menu-item item-quality',
					m = 'vjs-menu-item item-quality vjs-checked',
					g = '';
				d.forEach((e) => {
					var i = '';
					if (e.height) {
						var t = parseInt(e.height, 10);
						if (n.hdicon && t > n.minhd - 1) {
							var s = 'HD';
							if (t > 1079 && n.minhd < 1080) s = 'FullHD';
							if (t > 2159) s = '4K';
							i = '<i class="vjs-hd-icon">' + s + '</i>';
							ni(t);
						}
					}
					var a = parseInt(e.bitrate, 10) || 0,
						o = parseInt(e.height, 10) || 0,
						l = 0;
					if (a > 0) l = Math.round(a / 1e3);
					if (o > 0 || a > 0) {
						var r = j,
							d = l + ' kbps',
							v =
								'<li data-id="' +
								e.index +
								'" class="' +
								r +
								'" data-bitrate="' +
								a +
								'" data-height="' +
								o +
								'" role="menuitem" aria-live="polite" aria-disabled="false">';
						if (u === h)
							if (n.resOnly) g += v + o + 'p' + i + '</li>';
							else g += v + o + 'p <i>(' + d + ')</i>' + i + ' </li>';
						else if (u > h) g += v + o + 'p' + i + '</li>';
						else g += v + l + ' kbps</li>';
					}
				});
				g +=
					'<li id="auto" class="vjs-menu-item item-quality auto-res vjs-checked" data-height="Autores"' +
					m +
					' role="menuitem" aria-live="polite" aria-disabled="false">Auto<i class="autores"></i></li>';
				var y = vjs_find(s, '.quality-span');
				if (n.qualityMenu) y = vjs_find(s, '.quality-label');
				y.innerHTML = 'Auto';
				if (n.qualityMenu) {
					gi();
					var b = vjs_find(s, '.vjs-menu-quality .vjs-menu-content');
					b.innerHTML = b.innerHTML + g;
					t.removeClass(vjs_find(s, '.vjs-extend-quality'), 'vjs-hidden');
					t.removeClass(B, 'vjs-hidden');
				} else {
					g = '<li class="vjs-menu-title">' + e.localize('Quality') + '</li>' + g;
					vjs_find(S, '.vjs-menu .vjs-menu-content').innerHTML = g;
					t.removeClass(S, 'vjs-hidden');
				}
				var C = vjs_mfind(s, '.item-quality');
				Je();
				ii();
				e.on('qualityChange', function (e, i) {
					if (a) {
						var t = i.height,
							n = i.bitrate;
						o = { height: t, bitrate: n };
					}
					var l = vjs_find(s, '.auto-res');
					if (l) {
						if (l.className.indexOf('vjs-checked') > -1) E();
					}
				});
				for (
					var w = function (e) {
							e.stopImmediatePropagation();
							e.stopPropagation();
							for (var i = 0; i < C.length; i++) t.removeClass(C[i], 'vjs-checked');
							t.removeClass(vjs_find(s, '.auto-res'), 'vjs-checked');
							t.addClass(e.target, 'vjs-checked');
							var n = e.target.getAttribute('id');
							oi();
							if ('auto' === n) E(!0);
							else T(e.target);
						},
						k = 0;
					k < C.length;
					k++
				) {
					var x = C[k];
					if (x.className.indexOf('vjs-hidden') < 0) {
						x.addEventListener('click', w);
						De(x);
						x.addEventListener('tap', w);
					}
				}
				if ('undefined' !== n.startLevel) L(parseInt(n.startLevel, 10));
				else E(!1);
			}
			function E(i) {
				if (t.hasClass(s, 'vjs-has-started')) t.addClass(P, 'vjs-hidden');
				if (a) {
					a.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: !0 } } } });
					var l = vjs_find(s, '.auto-res');
					if (l) l.className = 'vjs-menu-item item-quality auto-res vjs-checked';
					vjs_find(s, '.quality-span').innerHTML = 'Auto';
				}
				if (i && !a)
					if (e.hlsjs)
						if (r) e.hlsjs.nextLevel = -1;
						else e.hlsjs.currentLevel = -1;
					else for (var d = 0; d < e.qualities.length; d++) e.setQuality(d, !0);
				let le = vjs_find(s, '.auto-res');
				if (le) le.className = 'vjs-menu-item item-quality auto-res vjs-checked';
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
					if (n.hdicon) {
						if (u >= n.minhd - 1) f = 'HD';
						if (u > 2159) f = '4K';
						ni(u);
					}
				}
				if ('' === f) te = 'vjs-hd-icon vjs-hd-home vjs-hidden';
				else te = 'vjs-hd-icon vjs-hd-home';
				var h = vjs_find(s, '.quality-span');
				if (n.qualityMenu) h = vjs_find(s, '.quality-label');
				h.innerHTML = 'Auto<i class="' + te + '">' + f + '</i>';
			}
			function T(i) {
				vjs_find(s, '.auto-res').innerHTML = 'Auto<i class="autores"></i>';
				var o = parseInt(i.getAttribute('data-height'), 10),
					l = o,
					d = parseInt(i.getAttribute('data-bitrate'), 10),
					v = e.qualities;
				vjs_mfind(s, '.item-quality').forEach((e) => {
					t.removeClass(e, 'vjs-checked');
				});
				t.addClass(i, 'vjs-checked');
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
					p = vjs_find(s, '.quality-span');
				if (n.qualityMenu) p = vjs_find(s, '.quality-label');
				if (o > 0) {
					u = 'HD';
					if (o > 2159) u = '4K';
					if (o > n.minhd - 1) h = '<i class="vjs-hd-icon vjs-hd-home">' + u + '</i>';
					else h = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden">' + u + '</i>';
					p.innerHTML = o + 'p' + h;
				} else if (d > 0) p.innerHTML = Math.round(d / 1e3) + 'kbps';
				ni(o);
			}
			function L(i) {
				var t = e.qualities;
				C.forEach((e) => {
					var s = parseInt(e.getAttribute('data-height'), 10),
						n = parseInt(e.getAttribute('data-bitrate'), 10);
					if (s === t[i].height || n === t[i].bitrate) e.click();
				});
			}
		}
		function oi() {
			if (n.qualityMenu) {
				t.addClass(vjs_find(s, '.vjs-menu-quality'), 'vjs-hidden');
				t.removeClass(vjs_find(s, '.vjs-settings-home'), 'vjs-hidden');
				t.removeClass(vjs_find(s, '.vjs-menu-settings'), 'vjs-lock-showing');
			} else if (S) {
				var e = vjs_find(S, '.vjs-menu'),
					i = vjs_find(S, '.vjs-control-text');
				if (e) {
					e.style.display = 'none';
					t.removeClass(e, 'vjs-lock-showing');
					if (i) i.removeAttribute('style');
				}
			}
		}
		function li() {
			if (
				!(
					t.hasClass(s, 'vjs-ad-playing') ||
					t.hasClass(s, 'vjs-dai') ||
					t.hasClass(s, 'vjs-up-next')
				)
			)
				if (e.duration() !== 1 / 0)
					if ('8' !== browser.IOS_VERSION || 0 !== e.duration()) {
						var i = e.video_id();
						if (null !== i) {
							var a = 0;
							if (n.resume && void 0 !== i) {
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
		function ri() {
			var e = vjs_find(s, '.vjs-audio-info');
			if (e) s.removeChild(e);
			if (n.audioInfo && (n.audioInfo.artist || n.audioInfo.title)) {
				var i = vjs_El('span', 'vjs-audio-info'),
					t = '';
				if (n.audioInfo.cover)
					t += '<span class="vjs-cover"><img src="' + n.audioInfo.cover + '"/></span>';
				t += '<span class="vjs-audio-item vjs-text">';
				if (n.audioInfo.artist) t += '<span class="audio-artist">' + n.audioInfo.artist + '</span>';
				if (n.audioInfo.title)
					t += '<span class="vjs-audio-item vjs-song">' + n.audioInfo.title + '</span>';
				if (n.audioInfo.genre || n.audioInfo.album || n.audioInfo.year) {
					t += '<span class="vjs-audio-item audio-id">';
					if (n.audioInfo.genre) t += '<span>Genre: ' + n.audioInfo.genre + '</span>';
					if (n.audioInfo.album) t += '<span>Album: ' + n.audioInfo.album + '</span>';
					if (n.audioInfo.year) t += '<span>Year: ' + n.audioInfo.year + '</span>';
					t += '</span>';
				}
				t += '</span>';
				i.innerHTML = t;
				s.appendChild(i);
				i.onclick = function () {
					if (n.audioInfo.url) window.open(n.audioInfo.url, n.target);
				};
			}
		}
		function di() {
			var e = vjs_find(s, '.vjs-info');
			if (e) s.removeChild(e);
			if (n.videoInfo && (n.infoText || n.infoTitle || '' !== n.title)) {
				var i = vjs_El('span', 'vjs-info'),
					t = '';
				s.appendChild(i);
				var a = vjs_find(s, '.vjs-cast-big'),
					o = '';
				if (n.infoTitle) o = n.infoTitle;
				else if ('' !== n.title) o = n.title;
				var l = '';
				if ('' !== n.infoIcon) l = '<span class="vjs-icon"><img src="' + n.infoIcon + '"/></span>';
				t += l;
				if (a) t += '<span class="vjs-text" style="padding-left:50px">';
				else t += '<span class="vjs-text">';
				t += '<span class="vjs-ttl">' + o + '</span>';
				if (n.infoDescription) t += '<span class="vjs-dsc">' + n.infoDescription + '</span>';
				t += '</span>';
				i.innerHTML = t;
				i.onclick = function () {
					if (n.infoUrl) window.open(n.infoUrl, n.target);
				};
			}
		}
		function vi() {
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
						if ('showing' === o.mode) a.mode = 'showing';
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
		function fi() {
			for (var i = e.textTracks(), t = i.length || 0; t--; ) i[t].mode = 'disabled';
			for (var s = e.remoteTextTracks(), n = s.length || 0; n--; ) e.removeRemoteTextTrack(s[n]);
		}
		function ci(e) {
			var i = vjs_find(s, '.vjs-thumbnail-holder'),
				a = vjs_find(s, '.vjs-progress-slide .vjs-thumb');
			if (i) {
				if ('shaka' === n.skin) {
					var o = Number(i.style.height.replace(/px$/, '')),
						l = i.computedStyleMap().get('bottom').value + o + 5;
					e.style.bottom = l + 'px';
				} else t.addClass(i, 'vjs-vtt');
				t.addClass(e, 'vjs-chapter-mix');
			} else if (a) {
				if ('shaka' === n.skin) {
					var r = Number(a.style.height.replace(/px$/, ''));
					e.style.bottom = r + 32 + 'px';
				} else t.addClass(a, 'vjs-sld');
				t.addClass(e, 'vjs-chapter-mix');
			}
			return 0;
		}
		function ui() {
			var i = e.remoteTextTracks(),
				a = vjs_find(s, '.vjs-chapter'),
				o = !1;
			if (a) a.parentNode.removeChild(a);
			A.removeEventListener('mousemove', r, !1);
			A.removeEventListener('mouseout', f, !1);
			A.removeEventListener('touchstart', v);
			function r(e) {
				mi(!0);
				if (vjs_find(s, '.vjs-chapter')) {
					var i,
						a = vjs_find(s, '.vjs-thumbnail-holder');
					if (a && 'slategrey' === n.skin) t.addClass(a, 'vjs-thumb-mix');
					if ('mousemove' === e.type) i = e.pageX;
					else if ('touchmove' === e.type) i = d(e);
					var o = i - A.getBoundingClientRect().left;
					if (!(o < 0)) {
						var l = (o / A.offsetWidth) * y;
						ci(b);
						b.style.left = o + 'px';
						for (var r = p.length - 1; r >= 0; r--) {
							var v = p[r];
							if (l >= v.startTime) {
								if (b.innerHTML !== v.text) {
									b.innerHTML = v.text;
									b.style.maxWidth = 0.9 * A.offsetWidth + 'px';
								}
								var f = b.offsetWidth / 2,
									c = A.offsetWidth - b.offsetWidth / 2;
								if (o < f) b.style.left = f + 'px';
								if (o > c) b.style.left = c + 'px';
								b.style.opacity = '1';
								b.style.visibility = 'visible';
								break;
							}
						}
					}
				}
			}
			function v(e) {
				r(e);
				document.addEventListener('touchmove', r);
				document.addEventListener('touchend', f);
			}
			function f() {
				mi(!1);
				if (!videojs.holderdown) {
					document.removeEventListener('touchmove', r);
					document.removeEventListener('touchend', f);
					b.style.opacity = '0';
					b.style.visibility = 'visible';
				}
			}
			if (n.chapterMarkers) {
				var c = s.getElementsByClassName('vjs-marker');
				if (c) for (; c.length > 0; ) c[0].parentNode.removeChild(c[0]);
				if (n.chapters) return;
				for (var u = 0; u < i.length; u++) {
					if ('chapters' === i[u].kind) i[u].mode = 'showing';
					if (i[u].cues)
						if ('chapters' === i[u].kind && i[u].cues.length > 0 && !0 !== o) {
							o = !0;
							var h = i[u];
						}
				}
				if (o) {
					var p = h.cues;
					if (p.length > 0) n.chapters = !0;
					h.mode = 'hidden';
					if (p) {
						var j = vjs_find(s, '.vjs-progress-control'),
							m = vjs_find(j, '.vjs-mouse-display');
						if (m) t.addClass(m, 'vjs-abs-hidden');
						var g = [],
							y = e.duration(),
							b = vjs_El('div');
						b.className = 'vjs-chapter';
						A.appendChild(b);
						A.addEventListener('touchstart', v, l ? { passive: !1 } : !1);
						A.addEventListener('mousemove', r, !1);
						A.addEventListener('mouseout', f, !1);
						for (u = 0; u < p.length; u++)
							if (y > 0)
								if (p[u].startTime > 0) {
									g[u] = p[u].startTime;
									var _ = vjs_El('div', 'vjs-marker'),
										C = vjs_El('div', 'vjs-marker-inn');
									_.appendChild(C);
									_.style.left = (g[u] / y) * 100 + '%';
									A.appendChild(_);
								}
					}
				}
			}
		}
		function hi(i, t) {
			var s = vjs_El('div', 'vjs-item');
			s.setAttribute('data-id', t);
			var a = vjs_El('div', 'vjs-tmb');
			if (i.thumb) a.style.backgroundImage = 'url(' + i.thumb + ')';
			else if (i.poster) a.style.backgroundImage = 'url(' + i.poster + ')';
			s.appendChild(a);
			var o = vjs_El('p');
			if (i.title) o.innerHTML = i.title;
			else {
				var l = '';
				if (i.audioInfo) {
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
			s.appendChild(o);
			if ('undefined' !== n.playlistID) var f = document.getElementById(n.playlistID);
			if (f) {
				var c = vjs_El('p', 'vjs-desc');
				if (i.description) c.innerHTML = i.description;
				s.appendChild(c);
			}
			if (i.duration) {
				var u = vjs_El('span');
				u.innerHTML = i.duration;
				s.appendChild(u);
			}
			var h = !1;
			s.onclick = function (e) {
				e.stopPropagation();
				e.stopImmediatePropagation();
				p(e);
			};
			s.ontouchstart = function () {
				h = !1;
			};
			s.ontouchmove = function () {
				h = !0;
			};
			s.ontouchend = function (e) {
				if (!0 !== h) p(e);
			};
			function p(i) {
				if (!e.adPlaying) {
					var t = i.target.getAttribute('data-id');
					e.playlist.currentItem(parseInt(t, 10));
					if (e.paused()) e.play();
				}
			}
			return s;
		}
		function pi() {
			var i = e.playlist.list();
			if (!(i.length < 2)) {
				e.on('error', function () {
					if (e.playlist.currentIndex() === e.playlist.lastIndex())
						if (!0 !== n.playlistRepeat) P.style.display = 'none';
						else e.playlist.next(!0);
					else e.playlist.next(!0);
				});
				if (!0 !== n.playlist) {
					n.playlist = !0;
					if (n.playlistNavigation) {
						var a = vjs_El(
								'div',
								'vjs-playlist-nav vjs-nav-prev',
								'<div class="vjs-prev vjs-disabled"></div>'
							),
							o = vjs_El('div', 'vjs-playlist-nav vjs-nav-next', '<div class="vjs-next"></div>');
						s.appendChild(a);
						s.appendChild(o);
						o.onclick = function (i) {
							if (!e.adPlaying) if (i.target.className.indexOf('disabled') < 0) e.playlist.next();
						};
						a.onclick = function (i) {
							if (!e.adPlaying)
								if (i.target.className.indexOf('disabled') < 0) e.playlist.previous();
						};
					}
					if (n.playlistUI) {
						var l = null,
							r = null;
						if ('undefined' !== n.playlistID) {
							l = document.getElementById(n.playlistID);
							e.playlistParent = l;
						} else e.playlistParent = s;
						if (l) r = vjs_El('div', 'vjs-vplaylist vjs-vplaylist-horizontal');
						else r = vjs_El('div', 'vjs-vplaylist vjs-vplaylist-show');
						if (!l) {
							var d = t.createEl(
								'div',
								{ className: 'vjs-playlist-button' },
								{ title: 'Playlist' }
							);
							s.appendChild(d);
							d.onclick = function () {
								t.addClass(r, 'vjs-vplaylist-show');
								if (n.playlistFirst) t.addClass(r, 'vjs-vplaylist-first');
							};
							r.style.visibility = 'hidden';
						}
						var v = vjs_El('div', 'vjs-head', '<span>PLAYLIST</span>'),
							f = vjs_El('div', 'vjs-back', '<i></i>');
						if (l) f.innerHTML = '<i class="vdown"></i>';
						v.appendChild(f);
						r.appendChild(v);
						f.onclick = function () {
							if (l)
								if (c.offsetHeight > 0) {
									f.innerHTML = '<i class="vup"></i>';
									t.addClass(c, 'vjs-list-min');
								} else {
									f.innerHTML = '<i class="vdown"></i>';
									t.removeClass(c, 'vjs-list-min');
								}
							else t.removeClass(r, 'vjs-vplaylist-show');
						};
						if (!l) s.appendChild(r);
						else l.appendChild(r);
						var c = vjs_El('div', 'vjs-vlist');
						if (l) {
							t.addClass(c, 'vjs-list-max');
							if (n.playlistMaxH) {
								var u = parseInt(n.playlistMaxH, 10);
								if (0 === u) c.style.height = 'auto';
								else c.style.height = u + 'px';
							}
						}
						r.appendChild(c);
						i = e.playlist.list();
						for (var h = 0; h < i.length; h++) {
							var p = hi(i[h], h);
							c.appendChild(p);
						}
						if (!l) {
							var j = vjs_El('div', 'vjs-last');
							c.appendChild(j);
							if (!0 !== n.playlistShow) {
								r.className = 'vjs-vplaylist';
								setTimeout(function () {
									r.style.visibility = 'visible';
								}, 500);
							} else r.style.visibility = 'visible';
						}
					}
				}
				e.on('playlist_newitem', function () {
					if (n.playlistUI) {
						vjs_mfind(c, '.vjs-item').forEach((e) => {
							t.removeClass(e, 'vjs-active-item');
						});
					}
					e.on('play', function () {
						if (n.playlistUI) {
							for (
								var i = e.playlist.currentIndex(), a = vjs_mfind(c, '.vjs-item'), o = 0;
								o < a.length;
								o++
							) {
								t.removeClass(a[o], 'vjs-active-item');
								if (o === i) t.addClass(a[o], 'vjs-active-item');
							}
							if (n.playlistAutoHide && !l) t.removeClass(r, 'vjs-vplaylist-show');
						}
						if (n.playlistNavigation) {
							var d = vjs_find(s, '.vjs-nav-prev'),
								v = vjs_find(s, '.vjs-nav-next'),
								f = vjs_find(d, '.vjs-prev'),
								u = vjs_find(v, '.vjs-next');
							if (0 === e.playlist.currentIndex()) t.addClass(f, 'vjs-disabled');
							else t.removeClass(f, 'vjs-disabled');
							if (e.playlist.currentIndex() === e.playlist.lastIndex())
								t.addClass(u, 'vjs-disabled');
							else t.removeClass(u, 'vjs-disabled');
						}
					});
				});
			}
		}
		function ji() {
			e.sprite = !1;
			var i = vjs_find(s, '.vjs-progress-slide');
			if (i) i.parentNode.removeChild(i);
			A.removeEventListener('mousemove', k);
			A.removeEventListener('mousedown', E);
			A.removeEventListener('mouseleave', L);
			A.removeEventListener('touchstart', C);
			var a = vjs_find(s, '.vjs-thumb-poster');
			if (a) s.removeChild(a);
			if ('' === n.slideImage || n.currentSlide !== n.slideImage)
				if (!0 !== e.isAudio() && n.slideImage) {
					if ('' === n.slideImage) return;
					n.currentSlide = n.slideImage;
					var o = vjs_find(s, '.vjs-mouse-display');
					if (e.shadowSlide) {
						var r = vjs_El('div', 'vjs-thumb-poster'),
							v = vjs_El('canvas');
						r.appendChild(v);
						s.insertBefore(r, W);
					}
					var f = vjs_find(s, '.vjs-play-progress'),
						c = vjs_find(f, '.vjs-time-tooltip');
					if (c) t.addClass(c, 'vjs-abs-hidden');
					if (o) t.addClass(o, 'vjs-abs-hidden');
					e.sprite = !0;
					h = vjs_El('div', 'vjs-progress-slide');
					p = vjs_El('div', 'vjs-thumb');
					m = vjs_El('div', 'vjs-thumb-duration');
					j = vjs_El('img');
					if ('horizontal' === n.slideType) {
						j.style.width = 'auto';
						j.style.height = n.slideHeight + 'px';
					} else {
						j.style.height = 'auto';
						j.style.width = n.slideWidth + 'px';
					}
					p.appendChild(j);
					p.appendChild(m);
					h.appendChild(p);
					p.style.left = '-' + parseInt(n.slideWidth / 2, 10) + 'px';
					A.appendChild(h);
					h.style.left = '-1000px';
					if (c) t.addClass(c, 'vjs-abs-hidden');
					if (o) t.addClass(o, 'vjs-abs-hidden');
					var u = 0,
						g = 0;
					A.addEventListener('mousemove', k);
					A.addEventListener('mousedown', E);
					A.addEventListener('mouseleave', L);
					A.addEventListener('touchstart', C, l ? { passive: !1 } : !1);
					var y = new Image();
					j.src = n.slideImage;
					y.src = n.slideImage;
					y.onload = function (e) {
						var i = e.target.width,
							s = e.target.height;
						b = i / n.slideWidth;
						if ('horizontal' !== n.slideType) b = s / n.slideHeight;
						t.removeClass(h, 'vjs-hidden');
					};
				}
			function _() {
				A.removeEventListener('touchmove', k);
				A.removeEventListener('touchend', _);
				T();
			}
			function C(e) {
				mi(!0);
				videojs.holderdown = !1;
				A.addEventListener('touchmove', function (e) {
					k(e);
				});
				A.addEventListener('touchend', _);
			}
			function w(e, i) {
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
			function k(i) {
				mi(!0);
				if (!vjs_find(s, '.vjs-tech-chromecast')) {
					var a = A.getBoundingClientRect(),
						o = A.offsetWidth,
						l = null;
					if (i.pageX) l = i.pageX;
					else if (i.changedTouches) l = d(i);
					var f = l - a.left,
						c = f,
						y = f;
					if (0 === c && A.offsetWidth > 0 && videojs.holderdown) y = c = A.offsetWidth;
					var _ = Number(c) / Number(o),
						C = _ * e.duration();
					m.innerHTML = w(C, e.duration());
					var k = parseInt(_ * b, 10);
					p.style.width = n.slideWidth + 'px';
					p.style.height = n.slideHeight + 'px';
					var x = 0;
					if ('horizontal' === n.slideType) {
						x = k * n.slideWidth;
						j.style.left = '-' + x + 'px';
						u = x;
						g = 0;
					} else {
						x = k * n.slideHeight;
						j.style.top = '-' + x + 'px';
						u = 0;
						g = x;
					}
					var E = n.slideWidth / 2,
						T = A.offsetWidth - n.slideWidth / 2;
					if (y > T) y = T;
					if (y < E) y = E;
					h.style.left = parseInt(y, 10) + 'px';
					if (videojs.holderdown && e.shadowSlide) {
						var L = v.getContext('2d');
						v.width = s.offsetWidth;
						v.height = s.offsetHeight;
						r.style.width = s.offsetWidth + 'px';
						r.style.height = s.offsetHeight + 'px';
						L.drawImage(j, u, g, n.slideWidth, n.slideHeight, 0, 0, v.width, v.height);
					}
					t.addClass(p, 'vjs-thumb-show');
				}
			}
			function x() {
				videojs.holderdown = !1;
				document.removeEventListener('mousemove', k);
				T();
			}
			function E() {
				mi(!0);
				document.addEventListener('mousemove', k);
				document.addEventListener('mouseup', x);
				if (e.shadowSlide) {
					var i = v.getContext('2d');
					v.width = s.offsetWidth;
					v.height = s.offsetHeight;
					r.style.width = s.offsetWidth + 'px';
					r.style.height = s.offsetHeight + 'px';
					i.drawImage(j, u, g, n.slideWidth, n.slideHeight, 0, 0, v.width, v.height);
				}
			}
			function T() {
				mi(!1);
				if (h) {
					t.removeClass(p, 'vjs-thumb-show');
					if (e.shadowSlide) {
						v.width = 0;
						v.height = 0;
						r.removeAttribute('style');
					}
				}
			}
			function L() {
				T();
			}
		}
		function mi(i) {
			var t = e.controlBar.progressControl.el();
			if (i) t.setAttribute('style', 'z-index:22');
			else t.removeAttribute('style');
		}
		function gi() {
			var i = vjs_find(s, '.vjs-extend-quality'),
				t = e.localize('Quality');
			if (!i) {
				var n = vjs_El(
					'li',
					'vjs-settings-item vjs-extend-quality vjs-menu-forward vjs-hidden',
					t + '<span class="quality-label"></span>'
				);
				vjs_find(s, '.vjs-settings-list').appendChild(n);
				var a = vjs_El(
					'div',
					'vjs-submenu vjs-menu-quality vjs-hidden',
					'<ul class="vjs-menu-content"><li class="vjs-settings-back">' + t + '</li></ul>'
				);
				vjs_find(s, '.vjs-settings-div').appendChild(a);
			}
		}
		function yi(i) {
			i.preventDefault();
			var t = e.$('.vjs-tech');
			t.style.left = t.offsetWidth / 2 - s.offsetWidth / 2 + 'px';
			t.style.top = t.offsetHeight / 2 - s.offsetHeight / 2 + 'px';
		}
		function bi() {
			_i();
			C = 1;
			try {
				vjs_find(s, '.vjs-zoom-level').style.height = '0';
			} catch (e) {
				lint(e);
			}
			var i = e.$('.vjs-tech');
			wi(i, 1);
			i.style.top = 0;
			i.style.left = 0;
			Ge(100);
			var n = vjs_find(s, '.vjs-zoom-parent');
			if (!0 !== t.hasClass(n, 'vjs-hidden')) t.addClass(n, 'vjs-hidden');
			videojs.options.blockKeys = !1;
			return !1;
		}
		function _i() {
			var e = ((C - 1) / 4) * 100,
				i = vjs_find(s, '.zoom-thumb');
			if (i) i.style.height = e + '%';
		}
		function Ci(e, i) {
			if (localStorage) localStorage[e] = i;
		}
		function wi(e, i) {
			_i();
			e.style.scale = i;
			t.removeClass(W, 'vjs-hidden');
		}
		function ki(e) {
			var i = 0;
			if (e.offsetParent)
				for (;;) {
					i += e.offsetTop;
					if (!e.offsetParent) break;
					e = e.offsetParent;
				}
			else if (e.y) i += e.y;
			return i;
		}
		function xi(e) {
			if (e) t.addClass(document.body, 'no-select');
			else t.removeClass(document.body, 'no-select');
			if (e) {
				document.body.focus();
				document.onselectstart = function () {
					return !1;
				};
			} else
				document.onselectstart = function () {
					return !0;
				};
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
	return initPlugin(this, e);
};
nuevo.VERSION = '11.2.0';
var registerPlugin = videojs.registerPlugin || videojs.plugin;
registerPlugin('nuevo', nuevo);
export default nuevo;

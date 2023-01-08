(function (t) {
    function e(e) {
      for (var n, o, c = e[0], s = e[1], u = e[2], f = 0, d = []; f < c.length; f++) o = c[f], Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]), i[o] = 0;
  
      for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
  
      l && l(e);
  
      while (d.length) d.shift()();
  
      return a.push.apply(a, u || []), r();
    }
  
    function r() {
      for (var t, e = 0; e < a.length; e++) {
        for (var r = a[e], n = !0, c = 1; c < r.length; c++) {
          var s = r[c];
          0 !== i[s] && (n = !1);
        }
  
        n && (a.splice(e--, 1), t = o(o.s = r[0]));
      }
  
      return t;
    }
  
    var n = {},
        i = {
      app: 0
    },
        a = [];
  
    function o(e) {
      if (n[e]) return n[e].exports;
      var r = n[e] = {
        i: e,
        l: !1,
        exports: {}
      };
      return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
    }
  
    o.m = t, o.c = n, o.d = function (t, e, r) {
      o.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, o.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, o.t = function (t, e) {
      if (1 & e && (t = o(t)), 8 & e) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (o.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var n in t) o.d(r, n, function (e) {
        return t[e];
      }.bind(null, n));
      return r;
    }, o.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return o.d(e, "a", e), e;
    }, o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, o.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = e, c = c.slice();
  
    for (var u = 0; u < c.length; u++) e(c[u]);
  
    var l = s;
    a.push([0, "chunk-vendors"]), r();
  })({
    0: function (t, e, r) {
      t.exports = r("cd49");
    },
    "0565": function (t, e, r) {
      "use strict";
  
      (function (t) {
        var n = r("1da1"),
            i = (r("96cf"), r("99af"), r("b0c0"), r("7327")),
            a = r("731b"),
            o = r("25f1"),
            c = r("507a"),
            s = r("73ec"),
            u = r("b7c7");
        e["a"] = {
          name: "FileSelector",
          data: function () {
            return {
              task_all: 0,
              task_finished: 0,
              queue: new s["a"](),
              parallel: !1
            };
          },
          computed: {
            progress_value: function () {
              return this.task_all ? this.task_finished / this.task_all * 100 : 0;
            },
            progress_show: function () {
              return this.task_all !== this.task_finished;
            }
          },
          mounted: function () {
            window.Worker && "file:" !== window.location.protocol ? (console.log("Using Worker Pool"), this.queue = Object(i["a"])(function () {
              return Object(a["a"])(new o["a"](t));
            }, navigator.hardwareConcurrency || 1), this.parallel = !0) : console.log("Using Queue in Main Thread");
          },
          methods: {
            progress_string: function () {
              return "".concat(this.task_finished, " / ").concat(this.task_all);
            },
            addFile: function (t) {
              var e = this;
              return Object(n["a"])(regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  while (1) switch (r.prev = r.next) {
                    case 0:
                      e.task_all++, e.queue.queue(Object(n["a"])(regeneratorRuntime.mark(function r() {
                        var n,
                            i = arguments;
                        return regeneratorRuntime.wrap(function (r) {
                          while (1) switch (r.prev = r.next) {
                            case 0:
                              return n = i.length > 0 && void 0 !== i[0] ? i[0] : c["a"], console.log("start handling", t.name), r.prev = 2, r.t0 = e, r.t1 = n, r.t2 = t, r.next = 8, u["a"].getAll();
  
                            case 8:
                              return r.t3 = r.sent, r.next = 11, (0, r.t1)(r.t2, r.t3);
  
                            case 11:
                              r.t4 = r.sent, r.t0.$emit.call(r.t0, "success", r.t4), r.next = 19;
                              break;
  
                            case 15:
                              r.prev = 15, r.t5 = r["catch"](2), console.error(r.t5), e.$emit("error", r.t5, t.name);
  
                            case 19:
                              return r.prev = 19, e.task_finished++, r.finish(19);
  
                            case 22:
                            case "end":
                              return r.stop();
                          }
                        }, r, null, [[2, 15, 19, 22]]);
                      })));
  
                    case 2:
                    case "end":
                      return r.stop();
                  }
                }, r);
              }))();
            }
          }
        };
      }).call(this, r("2e83"));
    },
    "08fe": function (t, e, r) {
      "use strict";
  
      r.d(e, "a", function () {
        return n;
      });
      r("ace4"), r("d3b7");
  
      var n = function () {
        function t(e, r) {
          if (void 0 === r && (r = t.numRounds), 16 != e.length) throw Error("incorrect key size");
          if (0 != (1 & r)) throw Error("odd number of rounds specified");
          var n = new DataView(e.buffer);
          this.k0 = n.getUint32(0, !1), this.k1 = n.getUint32(4, !1), this.k2 = n.getUint32(8, !1), this.k3 = n.getUint32(12, !1), this.rounds = r;
        }
  
        return t.prototype.encrypt = function (e, r) {
          for (var n = r.getUint32(0, !1), i = r.getUint32(4, !1), a = 0, o = 0; o < this.rounds / 2; o++) a += t.delta, n += (i << 4) + this.k0 ^ i + a ^ (i >>> 5) + this.k1, i += (n << 4) + this.k2 ^ n + a ^ (n >>> 5) + this.k3;
  
          e.setUint32(0, n, !1), e.setUint32(4, i, !1);
        }, t.prototype.decrypt = function (e, r) {
          for (var n = r.getUint32(0, !1), i = r.getUint32(4, !1), a = t.delta * this.rounds / 2, o = 0; o < this.rounds / 2; o++) i -= (n << 4) + this.k2 ^ n + a ^ (n >>> 5) + this.k3, n -= (i << 4) + this.k0 ^ i + a ^ (i >>> 5) + this.k1, a -= t.delta;
  
          e.setUint32(0, n, !1), e.setUint32(4, i, !1);
        }, t.BlockSize = 8, t.KeySize = 16, t.delta = 2654435769, t.numRounds = 64, t;
      }();
    },
    "0f92": function (t, e, r) {
      "use strict";
  
      (function (t) {
        r.d(e, "a", function () {
          return u;
        });
        r("d3b7"), r("ac1f"), r("1276"), r("d81d"), r("b0c0"), r("a15b");
        var n = r("9ab4"),
            i = r("cb96"),
            a = r("acf9"),
            o = r.n(a),
            c = r("cc74"),
            s = r("97e5");
  
        function u(e, r, a, s) {
          var u, h, b;
          return Object(n["a"])(this, void 0, Promise, function () {
            var m, p, v, g, w;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, Object(i["parseBlob"])(e)];
  
                case 1:
                  for (p in m = n.sent(), m.native) m.native.hasOwnProperty(p) && m.native[p].some(function (t) {
                    return "TCON" === t.id && "(12)" === t.value;
                  }) && (console.warn("try using gbk encoding to decode meta"), m.common.artist = o.a.decode(new t(null !== (u = m.common.artist) && void 0 !== u ? u : ""), "gbk"), m.common.title = o.a.decode(new t(null !== (h = m.common.title) && void 0 !== h ? h : ""), "gbk"), m.common.album = o.a.decode(new t(null !== (b = m.common.album) && void 0 !== b ? b : ""), "gbk"));
  
                  if (s) try {
                    return [2, l(s, a, m, e)];
                  } catch (y) {
                    console.warn("在线获取曲目信息失败，回退到本地 meta 提取", y);
                  }
                  return v = Object(c["f"])(r, m.common.title, m.common.artist), v.artist = v.artist || "", g = Object(c["d"])(m), g ? [3, 3] : [4, f(v.title, v.artist, m.common.album)];
  
                case 2:
                  g = n.sent(), n.label = 3;
  
                case 3:
                  return w = {
                    title: v.title,
                    artist: v.artist || "",
                    album: m.common.album || "",
                    imgUrl: g
                  }, [4, d({
                    title: v.title,
                    artists: v.artist.split(" _ "),
                    ext: a,
                    imageURL: g,
                    musicMeta: m,
                    blob: e
                  })];
  
                case 4:
                  return [2, (w.blob = n.sent(), w)];
              }
            });
          });
        }
  
        function l(t, e, r, i) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var a, o, c, u;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, Object(s["d"])(t)];
  
                case 1:
                  return a = n.sent(), o = Object(s["b"])(a.track_info.album.pmid), c = a.track_info.singer.map(function (t) {
                    return t.name;
                  }), u = {
                    title: a.track_info.title,
                    artist: c.join("、"),
                    album: a.track_info.album.name,
                    imgUrl: o
                  }, [4, d({
                    title: a.track_info.title,
                    artists: c,
                    ext: e,
                    imageURL: o,
                    musicMeta: r,
                    blob: i
                  })];
  
                case 2:
                  return [2, (u.blob = n.sent(), u)];
              }
            });
          });
        }
  
        function f(t, e, r) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var i, a;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2,, 3]), [4, Object(s["c"])(t, e, r)];
  
                case 1:
                  return i = n.sent(), [2, Object(s["b"])(i.Id, i.Type)];
  
                case 2:
                  return a = n.sent(), console.warn(a), [3, 3];
  
                case 3:
                  return [2, ""];
              }
            });
          });
        }
  
        function d(e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var r, i, a, o, s, u, l;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 3,, 4]), [4, Object(c["e"])(e.imageURL)];
  
                case 1:
                  return r = n.sent(), r || console.warn("获取图像失败"), i = {
                    picture: null === r || void 0 === r ? void 0 : r.buffer,
                    title: e.title,
                    artists: e.artists
                  }, s = (o = t).from, [4, e.blob.arrayBuffer()];
  
                case 2:
                  return a = s.apply(o, [n.sent()]), u = c["a"][e.ext] || c["a"].mp3, "mp3" === e.ext ? [2, new Blob([Object(c["j"])(a, i, e.musicMeta)], {
                    type: u
                  })] : "flac" === e.ext ? [2, new Blob([Object(c["i"])(a, i, e.musicMeta)], {
                    type: u
                  })] : (console.info("writing metadata for " + e.ext + " is not being supported for now"), [3, 4]);
  
                case 3:
                  return l = n.sent(), console.warn("Error while appending cover image to file " + l), [3, 4];
  
                case 4:
                  return [2, e.blob];
              }
            });
          });
        }
      }).call(this, r("1c35").Buffer);
    },
    1: function (t, e) {},
    2: function (t, e) {},
    "2e83": function (t, e, r) {
      t.exports = r.p + "js/0.163a2ba8.worker.js";
    },
    3: function (t, e) {},
    4: function (t, e) {},
    5: function (t, e) {},
    "507a": function (t, e, r) {
      "use strict";
  
      r.d(e, "a", function () {
        return K;
      });
      r("d3b7"), r("b0c0");
      var n = r("9ab4"),
          i = r("6d95"),
          a = (r("ace4"), r("5cc6"), r("907a"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("3ca3"), r("ddb0"), r("2b3d"), r("9861"), r("cc74")),
          o = r("cb96");
  
      function c(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var i, c, s, u, l, f, d, h, b;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return c = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 1:
                for (i = new (c.apply(Uint8Array, [void 0, n.sent()]))(), s = i.length, u = 0; u < s; u++) i[u] ^= 163;
  
                return l = Object(a["g"])(i, r), l !== r && (t = new Blob([i], {
                  type: a["a"][l]
                })), [4, Object(o["parseBlob"])(t)];
  
              case 2:
                return f = n.sent(), d = Object(a["f"])(e, f.common.title, f.common.artist), h = d.title, b = d.artist, [2, {
                  title: h,
                  artist: b,
                  ext: l,
                  album: f.common.album,
                  picture: Object(a["d"])(f),
                  file: URL.createObjectURL(t),
                  blob: t,
                  mime: a["a"][l]
                }];
            }
          });
        });
      }
  
      r("fb6a");
  
      function s(t, e, r, i) {
        return void 0 === i && (i = !0), Object(n["a"])(this, void 0, Promise, function () {
          var c, s, u, l, f, d, h;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return c = r, i ? (u = Uint8Array.bind, [4, Object(a["c"])(t)]) : [3, 2];
  
              case 1:
                s = new (u.apply(Uint8Array, [void 0, n.sent()]))(), c = Object(a["g"])(s, r), c !== r && (t = new Blob([s], {
                  type: a["a"][c]
                })), n.label = 2;
  
              case 2:
                return [4, Object(o["parseBlob"])(t)];
  
              case 3:
                return l = n.sent(), f = Object(a["f"])(e, l.common.title, l.common.artist), d = f.title, h = f.artist, [2, {
                  title: d,
                  artist: h,
                  ext: c,
                  album: l.common.album,
                  picture: Object(a["d"])(l),
                  file: URL.createObjectURL(t),
                  blob: t,
                  mime: a["a"][c]
                }];
            }
          });
        });
      }
  
      var u = [105, 102, 109, 116],
          l = [254, 254, 254, 254],
          f = {
        " WAV": ".wav",
        FLAC: ".flac",
        " MP3": ".mp3",
        " A4M": ".m4a"
      };
  
      function d(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var i, c, d, h, b, m, p, v, g, w, y, j, O, _, k;
  
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return c = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 1:
                if (i = new (c.apply(Uint8Array, [void 0, n.sent()]))(), Object(a["b"])(i, u) && Object(a["b"])(i.slice(8, 12), l)) return [3, 4];
                if ("xm" !== r) return [3, 2];
                throw Error("此xm文件已损坏");
  
              case 2:
                return [4, s(t, e, r, !0)];
  
              case 3:
                return [2, n.sent()];
  
              case 4:
                if (d = new TextDecoder().decode(i.slice(4, 8)), !f.hasOwnProperty(d)) throw Error("未知的.xm文件类型");
  
                for (h = i[15], b = i[12] | i[13] << 8 | i[14] << 16, m = i.slice(16), p = m.length, v = b; v < p; ++v) m[v] = m[v] - h ^ 255;
  
                return g = f[d], w = a["a"][g], y = new Blob([m], {
                  type: w
                }), [4, Object(o["parseBlob"])(y)];
  
              case 5:
                return j = n.sent(), "wav" === g && (console.info(j.common), j.common.album = "", j.common.artist = "", j.common.title = ""), O = Object(a["f"])(e, j.common.title, j.common.artist, -1 === e.indexOf("_") ? "-" : "_"), _ = O.title, k = O.artist, [2, {
                  title: _,
                  artist: k,
                  ext: g,
                  mime: w,
                  album: j.common.album,
                  picture: Object(a["d"])(j),
                  file: URL.createObjectURL(y),
                  blob: y,
                  rawExt: "xm"
                }];
            }
          });
        });
      }
  
      r("6c57"), r("c740");
  
      var h = function () {
        function t() {}
  
        return t.prototype.getMask = function (e) {
          return e > 32767 && (e %= 32767), t.staticCipherBox[e * e + 27 & 255];
        }, t.prototype.decrypt = function (t, e) {
          for (var r = 0; r < t.length; r++) t[r] ^= this.getMask(e + r);
        }, t.staticCipherBox = new Uint8Array([119, 72, 50, 115, 222, 242, 192, 200, 149, 236, 48, 178, 81, 195, 225, 160, 158, 230, 157, 207, 250, 127, 20, 209, 206, 184, 220, 195, 74, 103, 147, 214, 40, 194, 145, 112, 202, 141, 162, 164, 240, 8, 97, 144, 126, 111, 162, 224, 235, 174, 62, 182, 103, 199, 146, 244, 145, 181, 246, 108, 94, 132, 64, 247, 243, 27, 2, 127, 213, 171, 65, 137, 40, 244, 37, 204, 82, 17, 173, 67, 104, 166, 65, 139, 132, 181, 255, 44, 146, 74, 38, 216, 71, 106, 124, 149, 97, 204, 230, 203, 187, 63, 71, 88, 137, 117, 195, 117, 161, 217, 175, 204, 8, 115, 23, 220, 170, 154, 162, 22, 65, 216, 162, 6, 198, 139, 252, 102, 52, 159, 207, 24, 35, 160, 10, 116, 231, 43, 39, 112, 146, 233, 175, 55, 230, 140, 167, 188, 98, 101, 156, 194, 8, 201, 136, 179, 243, 67, 172, 116, 44, 15, 212, 175, 161, 195, 1, 100, 149, 78, 72, 159, 244, 53, 120, 149, 122, 57, 214, 106, 160, 109, 64, 232, 79, 168, 239, 17, 29, 243, 27, 63, 63, 7, 221, 111, 91, 25, 48, 25, 251, 239, 14, 55, 240, 14, 205, 22, 73, 254, 83, 71, 19, 26, 189, 164, 241, 64, 25, 96, 14, 237, 104, 9, 6, 95, 77, 207, 61, 26, 254, 32, 119, 228, 217, 218, 249, 164, 43, 118, 28, 113, 219, 0, 188, 253, 12, 108, 165, 71, 247, 246, 0, 121, 74, 17]), t;
      }(),
          b = function () {
        function t(t) {
          if (0 == t.length) throw Error("qmc/cipher_map: invalid key size");
          this.key = t, this.n = t.length;
        }
  
        return t.rotate = function (t, e) {
          var r = (e + 4) % 8,
              n = t << r,
              i = t >> r;
          return 255 & (n | i);
        }, t.prototype.decrypt = function (t, e) {
          for (var r = 0; r < t.length; r++) t[r] ^= this.getMask(e + r);
        }, t.prototype.getMask = function (e) {
          e > 32767 && (e %= 32767);
          var r = (e * e + 71214) % this.n;
          return t.rotate(this.key[r], 7 & r);
        }, t;
      }(),
          m = function () {
        function t(t) {
          var e;
          if (0 == t.length) throw Error("invalid key size");
          this.key = t, this.N = t.length, this.S = new Uint8Array(this.N);
  
          for (var r = 0; r < this.N; ++r) this.S[r] = 255 & r;
  
          var n = 0;
  
          for (r = 0; r < this.N; ++r) n = (this.S[r] + n + this.key[r % this.N]) % this.N, e = [this.S[n], this.S[r]], this.S[r] = e[0], this.S[n] = e[1];
  
          this.hash = 1;
  
          for (r = 0; r < this.N; r++) {
            var i = this.key[r];
  
            if (i) {
              var a = this.hash * i >>> 0;
              if (0 == a || a <= this.hash) break;
              this.hash = a;
            }
          }
        }
  
        return t.prototype.decrypt = function (e, r) {
          var n = e.length,
              i = 0,
              a = function (t) {
            return n -= t, i += t, r += t, 0 == n;
          };
  
          if (r < t.FIRST_SEGMENT_SIZE) {
            var o = Math.min(e.length, t.FIRST_SEGMENT_SIZE - r);
            if (this.encFirstSegment(e.subarray(0, o), r), a(o)) return;
          }
  
          if (r % t.SEGMENT_SIZE != 0) {
            o = Math.min(t.SEGMENT_SIZE - r % t.SEGMENT_SIZE, n);
            if (this.encASegment(e.subarray(i, i + o), r), a(o)) return;
          }
  
          while (n > t.SEGMENT_SIZE) this.encASegment(e.subarray(i, i + t.SEGMENT_SIZE), r), a(t.SEGMENT_SIZE);
  
          n > 0 && this.encASegment(e.subarray(i), r);
        }, t.prototype.encFirstSegment = function (t, e) {
          for (var r = 0; r < t.length; r++) t[r] ^= this.key[this.getSegmentKey(e + r)];
        }, t.prototype.encASegment = function (e, r) {
          for (var n, i = this.S.slice(0), a = r % t.SEGMENT_SIZE + this.getSegmentKey(Math.floor(r / t.SEGMENT_SIZE)), o = 0, c = 0, s = -a; s < e.length; s++) o = (o + 1) % this.N, c = (i[o] + c) % this.N, n = [i[o], i[c]], i[c] = n[0], i[o] = n[1], s >= 0 && (e[s] ^= i[(i[o] + i[c]) % this.N]);
        }, t.prototype.getSegmentKey = function (t) {
          var e = this.key[t % this.N],
              r = Math.floor(this.hash / ((t + 1) * e) * 100);
          return r % this.N;
        }, t.FIRST_SEGMENT_SIZE = 128, t.SEGMENT_SIZE = 5120, t;
      }(),
          p = r("fa01"),
          v = (r("ac1f"), r("00b4"), r("d9f0")),
          g = r.n(v);
  
      r("159b");
  
      function w(t) {
        var e = 0;
        t.forEach(function (t) {
          e += t.length;
        });
        var r = new Uint8Array(e),
            n = 0;
        return t.forEach(function (t) {
          r.set(t, n), n += t.length;
        }), r;
      }
  
      var y = 40,
          j = 2097152;
  
      function O(t) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var e, r, i, a, o, c, s, u, l, f, d, h, b, m, p, v, O, _, k, x, U;
  
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = {
                  success: !1,
                  data: new Uint8Array(),
                  songId: 0,
                  error: ""
                }, n.label = 1;
  
              case 1:
                return n.trys.push([1, 3,, 4]), [4, g()()];
  
              case 2:
                return r = n.sent(), [3, 4];
  
              case 3:
                return i = n.sent(), e.error = (null === i || void 0 === i ? void 0 : i.message) || "wasm 加载失败", [2, e];
  
              case 4:
                if (a = new Uint8Array(t.slice(-y)), o = r._malloc(a.length), r.writeArrayToMemory(a, o), c = r._malloc(r.sizeof_qmc_detection()), s = r.detectKeyEndPosition(c, o, a.length), u = r.getValue(c, "i32"), l = r.getValue(c + 4, "i32"), e.success = s, e.error = r.UTF8ToString(c + r.offsetof_error_msg(), r.sizeof_error_msg()), f = r.UTF8ToString(c + r.offsetof_song_id(), r.sizeof_song_id()), f ? /^\d+$/.test(f) ? e.songId = f : console.warn("qmc2-wasm: Invalid songId: %s", f) : console.debug("qmc2-wasm: songId not found"), r._free(o), r._free(c), !s) return [2, e];
                d = t.byteLength - y + u, h = new Uint8Array(t.slice(d, d + l)), b = new TextDecoder(), m = b.decode(h), p = r.createInstWidthEKey(m), v = r._malloc(j), O = [], _ = 0, k = d;
  
                while (k > 0) x = Math.min(k, j), U = new Uint8Array(t.slice(_, _ + x)), r.writeArrayToMemory(U, v), r.decryptStream(p, v, _, x), O.push(r.HEAPU8.slice(v, v + x)), _ += x, k -= x;
  
                return r._free(v), p.delete(), e.data = w(O), [2, e];
            }
          });
        });
      }
  
      var _ = r("0f92"),
          k = {
        mgg: {
          ext: "ogg",
          version: 2
        },
        mgg0: {
          ext: "ogg",
          version: 2
        },
        mggl: {
          ext: "ogg",
          version: 2
        },
        mgg1: {
          ext: "ogg",
          version: 2
        },
        mflac: {
          ext: "flac",
          version: 2
        },
        mflac0: {
          ext: "flac",
          version: 2
        },
        qmcflac: {
          ext: "flac",
          version: 2
        },
        qmcogg: {
          ext: "ogg",
          version: 2
        },
        qmc0: {
          ext: "mp3",
          version: 1
        },
        qmc2: {
          ext: "ogg",
          version: 1
        },
        qmc3: {
          ext: "mp3",
          version: 1
        },
        bkcmp3: {
          ext: "mp3",
          version: 1
        },
        bkcflac: {
          ext: "flac",
          version: 1
        },
        tkm: {
          ext: "m4a",
          version: 1
        },
        "666c6163": {
          ext: "flac",
          version: 1
        },
        "6d7033": {
          ext: "mp3",
          version: 1
        },
        "6f6767": {
          ext: "ogg",
          version: 1
        },
        "6d3461": {
          ext: "m4a",
          version: 1
        },
        776176: {
          ext: "wav",
          version: 1
        }
      };
  
      function x(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var i, o, c, s, u, l, f, d, h, b, m, p, v, g, w;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                if (!(r in k)) throw "Qmc cannot handle type: ".concat(r);
                return i = k[r], o = i.version, [4, Object(a["c"])(t)];
  
              case 1:
                return c = n.sent(), 2 === o && globalThis.WebAssembly ? (console.log("qmc: using wasm decoder"), [4, O(c)]) : [3, 3];
  
              case 2:
                l = n.sent(), l.success ? (s = l.data, u = l.songId) : console.warn("qmc2-wasm failed with error %s", l.error || "(no error)"), n.label = 3;
  
              case 3:
                return s || (console.log("qmc: using js decoder"), f = new U(new Uint8Array(c)), s = f.decrypt(), u = f.songID), d = Object(a["g"])(s, i.ext), h = a["a"][d], [4, Object(_["a"])(new Blob([s], {
                  type: h
                }), e, d, u)];
  
              case 4:
                return b = n.sent(), m = b.album, p = b.artist, v = b.imgUrl, g = b.blob, w = b.title, [2, {
                  title: w,
                  artist: p,
                  ext: d,
                  album: m,
                  picture: v,
                  file: URL.createObjectURL(g),
                  blob: g,
                  mime: h
                }];
            }
          });
        });
      }
  
      var U = function () {
        function t(t) {
          this.decoded = !1, this.file = t, this.size = t.length, this.searchKey();
        }
  
        return Object.defineProperty(t.prototype, "songID", {
          get: function () {
            return this._songID;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.decrypt = function () {
          if (!this.cipher) throw new Error("no cipher found");
          if (!this.audioSize || this.audioSize <= 0) throw new Error("invalid audio size");
          var t = this.file.subarray(0, this.audioSize);
          return this.decoded || (this.cipher.decrypt(t, 0), this.decoded = !0), t;
        }, t.prototype.searchKey = function () {
          var e = this.file.slice(-4),
              r = new TextDecoder();
  
          if ("QTag" === r.decode(e)) {
            var n = this.file.slice(-8, -4),
                i = new DataView(n.buffer, n.byteOffset),
                a = i.getUint32(0, !1);
            this.audioSize = this.size - a - 8;
            var o = this.file.subarray(this.audioSize, this.size - 8),
                c = o.findIndex(function (e) {
              return e == t.BYTE_COMMA;
            });
            if (c < 0) throw new Error("invalid key: search raw key failed");
            this.setCipher(o.subarray(0, c));
            var s = o.subarray(c + 1),
                u = s.findIndex(function (e) {
              return e == t.BYTE_COMMA;
            });
            if (c < 0) throw new Error("invalid key: search song id failed");
            this._songID = parseInt(r.decode(s.subarray(0, u)), 10);
          } else {
            i = new DataView(e.buffer, e.byteOffset), a = i.getUint32(0, !0);
  
            if (a < 768) {
              this.audioSize = this.size - a - 4;
              o = this.file.subarray(this.audioSize, this.size - 4);
              this.setCipher(o);
            } else this.audioSize = this.size, this.cipher = new h();
          }
        }, t.prototype.setCipher = function (t) {
          var e = Object(p["a"])(t);
          e.length > 300 ? this.cipher = new m(e) : this.cipher = new b(e);
        }, t.BYTE_COMMA = ",".charCodeAt(0), t;
      }();
  
      function A(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var r, i, c, s, u, l, f, d, h, b, m;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return i = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 1:
                for (r = new (i.apply(Uint8Array, [void 0, n.sent()]))(), c = r.length, s = 0; s < c; s++) r[s] ^= 244, r[s] <= 63 ? r[s] = 4 * r[s] : r[s] <= 127 ? r[s] = 4 * (r[s] - 64) + 1 : r[s] <= 191 ? r[s] = 4 * (r[s] - 128) + 2 : r[s] = 4 * (r[s] - 192) + 3;
  
                if (u = Object(a["g"])(r, ""), l = Object(a["h"])(e), "" === u && "mp3" !== l.ext) {
                  if (l.ext in k) return f = new Blob([r], {
                    type: "application/octet-stream"
                  }), [2, x(f, l.name, l.ext)];
                  throw "不支持的QQ音乐缓存格式";
                }
  
                return f = new Blob([r], {
                  type: a["a"][u]
                }), [4, Object(o["parseBlob"])(f)];
  
              case 2:
                return d = n.sent(), h = Object(a["f"])(e, d.common.title, d.common.artist), b = h.title, m = h.artist, [2, {
                  title: b,
                  artist: m,
                  ext: u,
                  album: d.common.album,
                  picture: Object(a["d"])(d),
                  file: URL.createObjectURL(f),
                  blob: f,
                  mime: a["a"][u]
                }];
            }
          });
        });
      }
  
      var E = r("9224"),
          S = [5, 40, 188, 150, 233, 228, 90, 67, 145, 170, 189, 208, 122, 245, 54, 49],
          T = [124, 213, 50, 235, 134, 2, 127, 75, 168, 175, 166, 142, 15, 255, 153, 20],
          M = [37, 223, 232, 166, 117, 30, 117, 14, 47, 128, 243, 45, 184, 182, 227, 17, 0];
  
      function P(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var i, c, s, u, l, f, d, h, b, m, p, v, g, w, y, j, O;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return c = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 1:
                if (i = new (c.apply(Uint8Array, [void 0, n.sent()]))(), "vpr" === r) {
                  if (!Object(a["b"])(i, S)) throw Error("Not a valid vpr file!");
                } else if (!Object(a["b"])(i, T)) throw Error("Not a valid kgm(a) file!");
  
                if (s = new DataView(i.slice(16, 20).buffer), u = s.getUint32(0, !0), l = i.slice(u), f = l.length, l.byteLength > 1 << 26) throw Error("文件过大，请使用 <a target='_blank' href='https://github.com/unlock-music/cli'>CLI版本</a> 进行解锁");
                return d = new Uint8Array(17), d.set(i.slice(28, 44), 0), 0 !== I.length ? [3, 3] : [4, R()];
  
              case 2:
                if (!n.sent()) throw Error("加载Kgm/Vpr Mask数据失败");
                n.label = 3;
  
              case 3:
                for (m = 0; m < f; m++) h = d[m % 17] ^ l[m], h ^= (15 & h) << 4, b = D(m), b ^= (15 & b) << 4, l[m] = h ^ b;
  
                if ("vpr" === r) for (m = 0; m < f; m++) l[m] ^= M[m % 17];
                return p = Object(a["g"])(l), v = a["a"][p], g = new Blob([l], {
                  type: v
                }), [4, Object(o["parseBlob"])(g)];
  
              case 4:
                return w = n.sent(), y = Object(a["f"])(e, w.common.title, w.common.artist), j = y.title, O = y.artist, [2, {
                  album: w.common.album,
                  picture: Object(a["d"])(w),
                  file: URL.createObjectURL(g),
                  blob: g,
                  ext: p,
                  mime: v,
                  title: j,
                  artist: O
                }];
            }
          });
        });
      }
  
      function D(t) {
        return B[t % 272] ^ I[t >> 4];
      }
  
      var I = new Uint8Array(0);
  
      function R() {
        return Object(n["a"])(this, void 0, Promise, function () {
          var t, e, r, i;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                t = "https://cdn.jsdelivr.net/gh/unlock-music/unlock-music@".concat(E.version, "/public/static/kgm.mask"), ["http:", "https:"].some(function (t) {
                  return t == self.location.protocol;
                }) && (t = self.document ? "./static/kgm.mask" : "../static/kgm.mask"), n.label = 1;
  
              case 1:
                return n.trys.push([1, 4,, 5]), [4, fetch(t, {
                  method: "GET"
                })];
  
              case 2:
                return e = n.sent(), r = Uint8Array.bind, [4, e.arrayBuffer()];
  
              case 3:
                return I = new (r.apply(Uint8Array, [void 0, n.sent()]))(), [2, !0];
  
              case 4:
                return i = n.sent(), console.error(i), [2, !1];
  
              case 5:
                return [2];
            }
          });
        });
      }
  
      var B = [184, 213, 61, 178, 233, 175, 120, 140, 131, 51, 113, 81, 118, 160, 205, 55, 47, 62, 53, 141, 169, 190, 152, 183, 231, 140, 34, 206, 90, 97, 223, 104, 105, 137, 254, 165, 182, 222, 169, 119, 252, 200, 189, 189, 229, 109, 62, 90, 54, 239, 105, 78, 190, 225, 233, 102, 28, 243, 217, 2, 182, 242, 18, 155, 68, 208, 111, 185, 53, 137, 182, 70, 109, 115, 130, 6, 105, 193, 237, 215, 133, 194, 48, 223, 162, 98, 190, 121, 45, 98, 98, 61, 13, 126, 190, 72, 137, 35, 2, 160, 228, 213, 117, 81, 50, 2, 83, 253, 22, 58, 33, 59, 22, 15, 195, 178, 187, 179, 226, 186, 58, 61, 19, 236, 246, 1, 69, 132, 165, 112, 15, 147, 73, 12, 100, 205, 49, 213, 204, 76, 7, 1, 158, 0, 26, 35, 144, 191, 136, 30, 59, 171, 166, 62, 196, 115, 71, 16, 126, 59, 94, 188, 227, 0, 132, 255, 9, 212, 224, 137, 15, 91, 88, 112, 79, 251, 101, 216, 92, 83, 27, 211, 200, 198, 191, 239, 152, 176, 80, 79, 15, 234, 229, 131, 88, 140, 40, 44, 132, 103, 205, 208, 158, 71, 219, 39, 80, 202, 244, 99, 99, 232, 151, 127, 27, 75, 12, 194, 193, 33, 76, 204, 88, 245, 148, 82, 163, 243, 211, 224, 104, 244, 0, 35, 243, 94, 10, 123, 147, 221, 171, 18, 178, 19, 232, 132, 215, 167, 159, 15, 50, 76, 85, 29, 4, 54, 82, 220, 3, 243, 249, 78, 66, 233, 61, 97, 239, 124, 182, 179, 147, 80],
          C = (r("25f0"), r("843c"), [121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 45, 116, 109, 101]),
          L = "MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";
  
      function F(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var r, i, c, u, l, f, d, h, b, m, p, v, g, w;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return i = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 1:
                return r = new (i.apply(Uint8Array, [void 0, n.sent()]))(), Object(a["b"])(r, C) ? [3, 4] : "aac" !== Object(a["g"])(r) ? [3, 3] : [4, s(t, e, "aac", !1)];
  
              case 2:
                return [2, n.sent()];
  
              case 3:
                throw Error("not a valid kwm file");
  
              case 4:
                for (c = r.slice(24, 32), u = N(c), l = r.slice(1024), f = l.length, d = 0; d < f; ++d) l[d] ^= u[d % 32];
  
                return h = Object(a["g"])(l), b = a["a"][h], m = new Blob([l], {
                  type: b
                }), [4, Object(o["parseBlob"])(m)];
  
              case 5:
                return p = n.sent(), v = Object(a["f"])(e, p.common.title, p.common.artist), g = v.title, w = v.artist, [2, {
                  album: p.common.album,
                  picture: Object(a["d"])(p),
                  file: URL.createObjectURL(m),
                  blob: m,
                  mime: b,
                  title: g,
                  artist: w,
                  ext: h
                }];
            }
          });
        });
      }
  
      function N(t) {
        for (var e = new DataView(t.buffer), r = e.getBigUint64(0, !0).toString(), n = q(r), i = new Uint8Array(32), a = 0; a < 32; a++) i[a] = L.charCodeAt(a) ^ n.charCodeAt(a);
  
        return i;
      }
  
      function q(t) {
        var e = t.length,
            r = t;
        return e > 32 ? r = t.slice(0, 32) : e < 32 && (r = t.padEnd(32, t)), r;
      }
  
      var z = [0, 0, 0, 32, 102, 116, 121, 112];
  
      function $(t, e) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var r, i, o, c;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return i = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 1:
                for (r = new (i.apply(Uint8Array, [void 0, n.sent()]))(), o = 0; o < 8; ++o) r[o] = z[o];
  
                return c = new Blob([r], {
                  type: "audio/mp4"
                }), [4, s(c, e, "m4a", !1)];
  
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }
  
      r("466d");
      var J = r("dc71"),
          W = r.n(J),
          V = r("b7c7");
  
      function G(t, e, r) {
        var i;
        return Object(n["a"])(this, void 0, Promise, function () {
          var r, o, c, s, u, l, f, d, h, b, m, p, v, g;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, V["a"].loadJooxUUID("")];
  
              case 1:
                if (r = n.sent(), !r || 32 !== r.length) throw new Error("请在“解密设定”填写应用 Joox 应用的 UUID。");
                return c = Uint8Array.bind, [4, Object(a["c"])(t)];
  
              case 2:
                if (o = new (c.apply(Uint8Array, [void 0, n.sent()]))(), s = W()(o, r), !s) throw new Error("不支持的 joox 加密格式");
                return u = w(s.decryptFile(o)), l = Object(a["g"])(u), f = a["a"][l], d = null === (i = e.match(/^(\d+)\s\[mqms\d*]$/i)) || void 0 === i ? void 0 : i[1], [4, Object(_["a"])(new Blob([u], {
                  type: f
                }), e, l, d)];
  
              case 3:
                return h = n.sent(), b = h.album, m = h.artist, p = h.imgUrl, v = h.blob, g = h.title, [2, {
                  title: g,
                  artist: m,
                  ext: l,
                  album: b,
                  picture: p,
                  file: URL.createObjectURL(v),
                  blob: v,
                  mime: f
                }];
            }
          });
        });
      }
  
      var H = r("efc0");
  
      function K(t, e) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var r, o, u;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return V["a"] instanceof H["a"] ? [4, V["a"].setAll(e)] : [3, 2];
  
              case 1:
                n.sent(), n.label = 2;
  
              case 2:
                switch (r = Object(a["h"])(t.name), u = r.ext, u) {
                  case "ncm":
                    return [3, 3];
  
                  case "uc":
                    return [3, 5];
  
                  case "kwm":
                    return [3, 7];
  
                  case "xm":
                    return [3, 9];
  
                  case "wav":
                    return [3, 9];
  
                  case "mp3":
                    return [3, 9];
  
                  case "flac":
                    return [3, 9];
  
                  case "m4a":
                    return [3, 9];
  
                  case "ogg":
                    return [3, 11];
  
                  case "tm0":
                    return [3, 13];
  
                  case "tm3":
                    return [3, 13];
  
                  case "qmc3":
                    return [3, 15];
  
                  case "qmc2":
                    return [3, 15];
  
                  case "qmc0":
                    return [3, 15];
  
                  case "qmcflac":
                    return [3, 15];
  
                  case "qmcogg":
                    return [3, 15];
  
                  case "tkm":
                    return [3, 15];
  
                  case "bkcmp3":
                    return [3, 15];
  
                  case "bkcm4a":
                    return [3, 15];
  
                  case "bkcflac":
                    return [3, 15];
  
                  case "bkcwav":
                    return [3, 15];
  
                  case "bkcape":
                    return [3, 15];
  
                  case "bkcogg":
                    return [3, 15];
  
                  case "bkcwma":
                    return [3, 15];
  
                  case "mggl":
                    return [3, 15];
  
                  case "mflac":
                    return [3, 15];
  
                  case "mflac0":
                    return [3, 15];
  
                  case "mgg":
                    return [3, 15];
  
                  case "mgg1":
                    return [3, 15];
  
                  case "mgg0":
                    return [3, 15];
  
                  case "666c6163":
                    return [3, 15];
  
                  case "6d7033":
                    return [3, 15];
  
                  case "6f6767":
                    return [3, 15];
  
                  case "6d3461":
                    return [3, 15];
  
                  case "776176":
                    return [3, 15];
  
                  case "tm2":
                    return [3, 17];
  
                  case "tm6":
                    return [3, 17];
  
                  case "cache":
                    return [3, 19];
  
                  case "vpr":
                    return [3, 21];
  
                  case "kgm":
                    return [3, 21];
  
                  case "kgma":
                    return [3, 21];
  
                  case "ofl_en":
                    return [3, 23];
                }
  
                return [3, 25];
  
              case 3:
                return [4, Object(i["a"])(t.raw, r.name, r.ext)];
  
              case 4:
                return o = n.sent(), [3, 26];
  
              case 5:
                return [4, c(t.raw, r.name, r.ext)];
  
              case 6:
                return o = n.sent(), [3, 26];
  
              case 7:
                return [4, F(t.raw, r.name, r.ext)];
  
              case 8:
                return o = n.sent(), [3, 26];
  
              case 9:
                return [4, d(t.raw, r.name, r.ext)];
  
              case 10:
                return o = n.sent(), [3, 26];
  
              case 11:
                return [4, s(t.raw, r.name, r.ext)];
  
              case 12:
                return o = n.sent(), [3, 26];
  
              case 13:
                return [4, s(t.raw, r.name, "mp3")];
  
              case 14:
                return o = n.sent(), [3, 26];
  
              case 15:
                return [4, x(t.raw, r.name, r.ext)];
  
              case 16:
                return o = n.sent(), [3, 26];
  
              case 17:
                return [4, $(t.raw, r.name)];
  
              case 18:
                return o = n.sent(), [3, 26];
  
              case 19:
                return [4, A(t.raw, r.name, r.ext)];
  
              case 20:
                return o = n.sent(), [3, 26];
  
              case 21:
                return [4, P(t.raw, r.name, r.ext)];
  
              case 22:
                return o = n.sent(), [3, 26];
  
              case 23:
                return [4, G(t.raw, r.name, r.ext)];
  
              case 24:
                return o = n.sent(), [3, 26];
  
              case 25:
                throw "不支持此文件格式";
  
              case 26:
                return o.rawExt || (o.rawExt = r.ext), o.rawFilename || (o.rawFilename = r.name), console.log(o), [2, o];
            }
          });
        });
      }
    },
    "5c0b": function (t, e, r) {
      "use strict";
  
      r("9c0c");
    },
    6: function (t, e) {},
    "675e": function (t, e, r) {
      "use strict";
  
      r.d(e, "a", function () {
        return n;
      });
  
      var n = "um.conf.",
          i = "".concat(n, "joox.uuid"),
          a = function () {
        function t() {}
  
        return t.prototype.saveJooxUUID = function (t) {
          return this.save(i, t);
        }, t.prototype.loadJooxUUID = function (t) {
          return void 0 === t && (t = ""), this.load(i, t);
        }, t;
      }();
  
      e["b"] = a;
    },
    "6d95": function (t, e, r) {
      "use strict";
  
      (function (t) {
        r.d(e, "a", function () {
          return x;
        });
        r("d3b7"), r("ace4"), r("5cc6"), r("907a"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("d81d"), r("fb6a"), r("ddb0"), r("25f0"), r("ac1f"), r("5319"), r("159b"), r("4de4"), r("1276"), r("498a"), r("a15b"), r("3ca3"), r("2b3d"), r("9861");
  
        var n = r("9ab4"),
            i = r("cc74"),
            a = r("cb96"),
            o = r("ef21"),
            c = r.n(o),
            s = r("c198"),
            u = r.n(s),
            l = r("ead9"),
            f = r.n(l),
            d = r("81bf"),
            h = r.n(d),
            b = r("17e1"),
            m = r.n(b),
            p = r("1132"),
            v = r.n(p),
            g = r("f8d5"),
            w = r.n(g),
            y = r("640f"),
            j = r.n(y),
            O = j.a.parse("687a4852416d736f356b496e62617857"),
            _ = j.a.parse("2331346C6A6B5F215C5D2630553C2728"),
            k = [67, 84, 69, 78, 70, 68, 65, 77];
  
        function x(t, e, r) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var r;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return r = U.bind, [4, Object(i["c"])(t)];
  
                case 1:
                  return [2, new (r.apply(U, [void 0, n.sent(), e]))().decrypt()];
              }
            });
          });
        }
  
        var U = function () {
          function e(t, e) {
            this.offset = 0, this.format = "", this.mime = "";
            var r = new Uint8Array(t, 0, 8);
            if (!Object(i["b"])(r, k)) throw Error("此ncm文件已损坏");
            this.offset = 10, this.raw = t, this.view = new DataView(t), this.filename = e;
          }
  
          return e.prototype._getKeyData = function () {
            var t = this.view.getUint32(this.offset, !0);
            this.offset += 4;
            var e = new Uint8Array(this.raw, this.offset, t).map(function (t) {
              return 100 ^ t;
            });
            this.offset += t;
  
            for (var r = u.a.decrypt({
              ciphertext: m.a.create(e)
            }, O, {
              mode: h.a,
              padding: f.a
            }), n = new Uint8Array(r.sigBytes), i = r.words, a = r.sigBytes, o = 0; o < a; o++) n[o] = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
  
            return n.slice(17);
          }, e.prototype._getKeyBox = function () {
            for (var t, e = this._getKeyData(), r = new Uint8Array(Array(256).keys()), n = e.length, i = 0, a = 0; a < 256; a++) i = r[a] + i + e[a % n] & 255, t = [r[i], r[a]], r[a] = t[0], r[i] = t[1];
  
            return r.map(function (t, e, r) {
              e = e + 1 & 255;
              var n = r[e],
                  i = r[e + n & 255];
              return r[n + i & 255];
            });
          }, e.prototype._getMetaData = function () {
            var t = this.view.getUint32(this.offset, !0);
            if (this.offset += 4, 0 === t) return {};
            var e = new Uint8Array(this.raw, this.offset, t).map(function (t) {
              return 99 ^ t;
            });
            this.offset += t, m.a.create();
            var r,
                n = u.a.decrypt({
              ciphertext: v.a.parse(m.a.create(e.slice(22)).toString(w.a))
            }, _, {
              mode: h.a,
              padding: f.a
            }).toString(w.a),
                i = n.indexOf(":");
  
            if ("dj" === n.slice(0, i)) {
              var a = JSON.parse(n.slice(i + 1));
              r = a.mainMusic;
            } else r = JSON.parse(n.slice(i + 1));
  
            return r.albumPic && (r.albumPic = r.albumPic.replace("http://", "https://") + "?param=500y500"), r;
          }, e.prototype._getAudio = function (t) {
            this.offset += this.view.getUint32(this.offset + 5, !0) + 13;
  
            for (var e = new Uint8Array(this.raw, this.offset), r = e.length, n = 0; n < r; ++n) e[n] ^= t[255 & n];
  
            return e;
          }, e.prototype._buildMeta = function () {
            var e;
            return Object(n["a"])(this, void 0, void 0, function () {
              var r, a, o, s, u, l;
              return Object(n["c"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!this.oriMeta) throw Error("invalid sequence");
                    if (r = Object(i["f"])(this.filename, this.oriMeta.musicName), a = [], this.oriMeta.artist && this.oriMeta.artist.forEach(function (t) {
                      return a.push(t[0]);
                    }), 0 === a.length && r.artist && (a = r.artist.split(",").map(function (t) {
                      return t.trim();
                    }).filter(function (t) {
                      return "" != t;
                    })), !this.oriMeta.albumPic) return [3, 9];
                    n.label = 1;
  
                  case 1:
                    return n.trys.push([1, 8,, 9]), o = this, [4, Object(i["e"])(this.oriMeta.albumPic)];
  
                  case 2:
                    o.image = n.sent(), n.label = 3;
  
                  case 3:
                    return this.image && this.image.buffer.byteLength >= 1 << 24 ? [4, c.a.read(t.from(this.image.buffer))] : [3, 7];
  
                  case 4:
                    return s = n.sent(), [4, s.resize(Math.round(s.getHeight() / 2), c.a.AUTO)];
  
                  case 5:
                    return n.sent(), u = this.image, [4, s.getBufferAsync("image/jpeg")];
  
                  case 6:
                    return u.buffer = n.sent(), [3, 3];
  
                  case 7:
                    return [3, 9];
  
                  case 8:
                    return l = n.sent(), console.log("get cover image failed", l), [3, 9];
  
                  case 9:
                    return this.newMeta = {
                      title: r.title,
                      artists: a,
                      album: this.oriMeta.album,
                      picture: null === (e = this.image) || void 0 === e ? void 0 : e.buffer
                    }, [2];
                }
              });
            });
          }, e.prototype._writeMeta = function () {
            return Object(n["a"])(this, void 0, void 0, function () {
              var e, r;
              return Object(n["c"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!this.audio || !this.newMeta) throw Error("invalid sequence");
                    return this.blob || (this.blob = new Blob([this.audio], {
                      type: this.mime
                    })), [4, Object(a["parseBlob"])(this.blob)];
  
                  case 1:
                    if (e = n.sent(), r = !e.common.album && !e.common.artists && !e.common.title, r || this.newMeta.picture) {
                      if ("mp3" === this.format) this.audio = Object(i["j"])(t.from(this.audio), this.newMeta, e);else {
                        if ("flac" !== this.format) return console.info("writing meta for ".concat(this.format, " is not being supported for now")), [2];
                        this.audio = Object(i["i"])(t.from(this.audio), this.newMeta, e);
                      }
                      this.blob = new Blob([this.audio], {
                        type: this.mime
                      });
                    }
  
                    return [2];
                }
              });
            });
          }, e.prototype.gatherResult = function () {
            var t, e;
            if (!this.newMeta || !this.blob) throw Error("bad sequence");
            return {
              title: this.newMeta.title,
              artist: null === (t = this.newMeta.artists) || void 0 === t ? void 0 : t.join("; "),
              ext: this.format,
              album: this.newMeta.album,
              picture: null === (e = this.image) || void 0 === e ? void 0 : e.url,
              file: URL.createObjectURL(this.blob),
              blob: this.blob,
              mime: this.mime
            };
          }, e.prototype.decrypt = function () {
            return Object(n["a"])(this, void 0, void 0, function () {
              var t, e;
              return Object(n["c"])(this, function (r) {
                switch (r.label) {
                  case 0:
                    return t = this._getKeyBox(), this.oriMeta = this._getMetaData(), this.audio = this._getAudio(t), this.format = this.oriMeta.format || Object(i["g"])(this.audio), this.mime = i["a"][this.format], [4, this._buildMeta()];
  
                  case 1:
                    r.sent(), r.label = 2;
  
                  case 2:
                    return r.trys.push([2, 4,, 5]), [4, this._writeMeta()];
  
                  case 3:
                    return r.sent(), [3, 5];
  
                  case 4:
                    return e = r.sent(), console.warn("write meta data failed", e), [3, 5];
  
                  case 5:
                    return [2, this.gatherResult()];
                }
              });
            });
          }, e;
        }();
      }).call(this, r("1c35").Buffer);
    },
    "73ec": function (t, e, r) {
      "use strict";
  
      r.d(e, "e", function () {
        return n;
      }), r.d(e, "d", function () {
        return a;
      }), r.d(e, "b", function () {
        return c;
      }), r.d(e, "c", function () {
        return s;
      }), r.d(e, "f", function () {
        return u;
      }), r.d(e, "a", function () {
        return l;
      });
      r("99af"), r("d3b7"), r("3ca3"), r("ddb0"), r("2b3d"), r("9861"), r("2ca0");
      var n,
          i = r("9ab4");
  
      (function (t) {
        t[t["ArtistAndTitle"] = 0] = "ArtistAndTitle", t[t["TitleOnly"] = 1] = "TitleOnly", t[t["TitleAndArtist"] = 2] = "TitleAndArtist", t[t["SameAsOriginal"] = 3] = "SameAsOriginal";
      })(n || (n = {}));
  
      var a = [{
        key: n.ArtistAndTitle,
        text: "歌手-歌曲名"
      }, {
        key: n.TitleOnly,
        text: "歌曲名"
      }, {
        key: n.TitleAndArtist,
        text: "歌曲名-歌手"
      }, {
        key: n.SameAsOriginal,
        text: "同源文件名"
      }];
  
      function o(t, e) {
        switch (e) {
          case n.TitleOnly:
            return "".concat(t.title, ".").concat(t.ext);
  
          case n.TitleAndArtist:
            return "".concat(t.title, " - ").concat(t.artist, ".").concat(t.ext);
  
          case n.SameAsOriginal:
            return "".concat(t.rawFilename, ".").concat(t.ext);
  
          default:
          case n.ArtistAndTitle:
            return "".concat(t.artist, " - ").concat(t.title, ".").concat(t.ext);
        }
      }
  
      function c(t, e, r) {
        return Object(i["a"])(this, void 0, void 0, function () {
          var n, a, c;
          return Object(i["c"])(this, function (i) {
            switch (i.label) {
              case 0:
                n = o(t, e), i.label = 1;
  
              case 1:
                return i.trys.push([1, 3,, 4]), [4, r.getFileHandle(n)];
  
              case 2:
                return i.sent(), n = "".concat(new Date().getTime(), " - ").concat(n), [3, 4];
  
              case 3:
                return i.sent(), [3, 4];
  
              case 4:
                return [4, r.getFileHandle(n, {
                  create: !0
                })];
  
              case 5:
                return a = i.sent(), [4, a.createWritable()];
  
              case 6:
                return c = i.sent(), [4, c.write(t.blob)];
  
              case 7:
                return i.sent(), [4, c.close()];
  
              case 8:
                return i.sent(), [2];
            }
          });
        });
      }
  
      function s(t, e) {
        var r = document.createElement("a");
        r.href = t.file, r.download = o(t, e), document.body.append(r), r.click(), r.remove();
      }
  
      function u(t) {
        var e;
        URL.revokeObjectURL(t.file), (null === (e = t.picture) || void 0 === e ? void 0 : e.startsWith("blob:")) && URL.revokeObjectURL(t.picture);
      }
  
      var l = function () {
        function t() {
          this.pending = [];
        }
  
        return t.prototype.queue = function (t) {
          this.pending.push(t), this.consume();
        }, t.prototype.consume = function () {
          var t = this,
              e = this.pending.shift();
          e && e().then(function () {
            return t.consume;
          }).catch(console.error);
        }, t;
      }();
    },
    9224: function (t) {
      t.exports = JSON.parse('{"name":"unlock-music","version":"v1.10.0","ext_build":0,"updateInfo":"重写QMC解锁，完全支持.mflac*/.mgg*; 支持JOOX解锁","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"postinstall":"patch-package","serve":"vue-cli-service serve","build":"vue-cli-service build","test":"jest","pretty":"prettier --write src/{**/*,*}.{js,ts,jsx,tsx,vue}","pretty:check":"prettier --check src/{**/*,*}.{js,ts,jsx,tsx,vue}","make-extension":"node ./make-extension.js"},"dependencies":{"@babel/preset-typescript":"^7.16.5","@jixun/qmc2-crypto":"^0.0.6-R1","@unlock-music/joox-crypto":"^0.0.1-R5","base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.16.0","crypto-js":"^4.1.1","element-ui":"^2.15.5","iconv-lite":"^0.6.3","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata":"7.9.0","music-metadata-browser":"2.2.7","register-service-worker":"^1.7.2","threads":"^1.6.5","vue":"^2.6.14"},"devDependencies":{"@types/crypto-js":"^4.0.2","@types/jest":"^27.0.3","@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-pwa":"^4.5.13","@vue/cli-plugin-typescript":"^4.5.13","@vue/cli-service":"^4.5.13","babel-plugin-component":"^1.1.1","jest":"^27.4.5","patch-package":"^6.4.7","prettier":"2.5.1","sass":"^1.38.1","sass-loader":"^10.2.0","semver":"^7.3.5","threads-plugin":"^1.4.0","typescript":"^4.5.4","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.14"}}');
    },
    "97e5": function (t, e, r) {
      "use strict";
  
      r.d(e, "a", function () {
        return a;
      }), r.d(e, "c", function () {
        return o;
      }), r.d(e, "d", function () {
        return c;
      }), r.d(e, "b", function () {
        return s;
      });
      r("d3b7"), r("e9c4"), r("3ca3"), r("ddb0"), r("9861"), r("99af"), r("25f0");
      var n = r("9ab4"),
          i = "https://um-api.ixarea.com";
  
      function a(t) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var e;
          return Object(n["c"])(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, fetch(i + "/music/app-version", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    Version: t
                  })
                })];
  
              case 1:
                return e = r.sent(), [4, e.json()];
  
              case 2:
                return [2, r.sent()];
            }
          });
        });
      }
  
      function o(t, e, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var a, o, c;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return a = i + "/music/qq-cover", o = new URLSearchParams([["Title", t], ["Artist", null !== e && void 0 !== e ? e : ""], ["Album", null !== r && void 0 !== r ? r : ""]]), [4, fetch("".concat(a, "?").concat(o.toString()))];
  
              case 1:
                return c = n.sent(), [4, c.json()];
  
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }
  
      function c(t) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var e, r;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = "".concat(i, "/meta/qq-music-raw/").concat(t), [4, fetch(e).then(function (t) {
                  return t.json();
                })];
  
              case 1:
                if (r = n.sent(), 0 === r.code && 0 === r.req_1.code) return [2, r.req_1.data];
                throw new Error("请求信息失败");
            }
          });
        });
      }
  
      function s(t, e) {
        return void 0 === e && (e = 1), "".concat(i, "/music/qq-cover/").concat(e, "/").concat(t);
      }
    },
    "9c0c": function (t, e, r) {},
    b025: function (t, e, r) {},
    b0a8: function (t, e, r) {
      "use strict";
  
      r("b025");
    },
    b7c7: function (t, e, r) {
      "use strict";
  
      r.d(e, "a", function () {
        return f;
      });
      r("d3b7"), r("e9c4"), r("4fad"), r("2ca0");
  
      var n = r("9ab4"),
          i = r("675e"),
          a = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
  
        return Object(n["b"])(e, t), Object.defineProperty(e, "works", {
          get: function () {
            return "undefined" !== typeof localStorage && localStorage.getItem;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.load = function (t, e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var r;
            return Object(n["c"])(this, function (n) {
              if (r = localStorage.getItem(t), null === r) return [2, e];
  
              try {
                return [2, JSON.parse(r)];
              } catch (i) {
                return [2, e];
              }
  
              return [2];
            });
          });
        }, e.prototype.save = function (t, e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (r) {
              return localStorage.setItem(t, JSON.stringify(e)), [2];
            });
          });
        }, e.prototype.getAll = function () {
          return Object(n["a"])(this, void 0, Promise, function () {
            var t, e, r, a, o, c, s;
            return Object(n["c"])(this, function (n) {
              for (t = {}, e = 0, r = Object.entries(localStorage); e < r.length; e++) if (a = r[e], o = a[0], c = a[1], o.startsWith(i["a"])) try {
                Object.assign(t, (s = {}, s[o] = JSON.parse(c), s));
              } catch (u) {}
  
              return [2, t];
            });
          });
        }, e.prototype.setAll = function (t) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var e, r, i, a, o;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  e = 0, r = Object.entries(t), n.label = 1;
  
                case 1:
                  return e < r.length ? (i = r[e], a = i[0], o = i[1], [4, this.save(a, o)]) : [3, 4];
  
                case 2:
                  n.sent(), n.label = 3;
  
                case 3:
                  return e++, [3, 1];
  
                case 4:
                  return [2];
              }
            });
          });
        }, e;
      }(i["b"]),
          o = a,
          c = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
  
        return Object(n["b"])(e, t), Object.defineProperty(e, "works", {
          get: function () {
            var t, e;
            return "undefined" !== typeof chrome && Boolean(null === (e = null === (t = null === chrome || void 0 === chrome ? void 0 : chrome.storage) || void 0 === t ? void 0 : t.local) || void 0 === e ? void 0 : e.set);
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.load = function (t, e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (r) {
              return [2, new Promise(function (r) {
                var n;
                chrome.storage.local.get((n = {}, n[t] = e, n), function (n) {
                  Object.prototype.hasOwnProperty.call(n, t) ? r(n[t]) : r(e);
                });
              })];
            });
          });
        }, e.prototype.save = function (t, e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (r) {
              return [2, new Promise(function (r) {
                var n;
                chrome.storage.local.set((n = {}, n[t] = e, n), r);
              })];
            });
          });
        }, e.prototype.getAll = function () {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (t) {
              return [2, new Promise(function (t) {
                chrome.storage.local.get(null, function (e) {
                  for (var r = {}, n = 0, a = Object.entries(e); n < a.length; n++) {
                    var o = a[n],
                        c = o[0],
                        s = o[1];
                    c.startsWith(i["a"]) && (r[c] = s);
                  }
  
                  t(r);
                });
              })];
            });
          });
        }, e.prototype.setAll = function (t) {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (e) {
              return [2, new Promise(function (e) {
                chrome.storage.local.set(t, e);
              })];
            });
          });
        }, e;
      }(i["b"]),
          s = c,
          u = r("efc0");
  
      function l() {
        return s.works ? new s() : o.works ? new o() : new u["a"]();
      }
  
      var f = l();
    },
    cc74: function (t, e, r) {
      "use strict";
  
      (function (t) {
        r.d(e, "a", function () {
          return p;
        }), r.d(e, "b", function () {
          return v;
        }), r.d(e, "g", function () {
          return g;
        }), r.d(e, "c", function () {
          return w;
        }), r.d(e, "d", function () {
          return y;
        }), r.d(e, "f", function () {
          return j;
        }), r.d(e, "e", function () {
          return O;
        }), r.d(e, "j", function () {
          return _;
        }), r.d(e, "i", function () {
          return k;
        }), r.d(e, "h", function () {
          return x;
        });
        r("d3b7"), r("fb6a"), r("3ca3"), r("ddb0"), r("2b3d"), r("9861"), r("ac1f"), r("1276"), r("498a"), r("2ca0"), r("159b");
        var n = r("9ab4"),
            i = r("7907"),
            a = r.n(i),
            o = r("b686"),
            c = r.n(o),
            s = [102, 76, 97, 67],
            u = [73, 68, 51],
            l = [79, 103, 103, 83],
            f = [102, 116, 121, 112],
            d = [48, 38, 178, 117, 142, 102, 207, 17, 166, 217, 0, 170, 0, 98, 206, 108],
            h = [82, 73, 70, 70],
            b = [255, 241],
            m = [70, 82, 77, 56],
            p = {
          mp3: "audio/mpeg",
          flac: "audio/flac",
          m4a: "audio/mp4",
          ogg: "audio/ogg",
          wma: "audio/x-ms-wma",
          wav: "audio/x-wav",
          dff: "audio/x-dff"
        };
  
        function v(t, e) {
          return !(e.length > t.length) && e.every(function (e, r) {
            return e === t[r];
          });
        }
  
        function g(t, e) {
          return void 0 === e && (e = "mp3"), v(t, u) ? "mp3" : v(t, s) ? "flac" : v(t, l) ? "ogg" : t.length >= 4 + f.length && v(t.slice(4), f) ? "m4a" : v(t, h) ? "wav" : v(t, d) ? "wma" : v(t, b) ? "aac" : v(t, m) ? "dff" : e;
        }
  
        function w(t) {
          return t.arrayBuffer ? t.arrayBuffer() : new Promise(function (e, r) {
            var n = new FileReader();
            n.onload = function (t) {
              var n,
                  i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
              i ? e(i) : r("read file failed");
            }, n.readAsArrayBuffer(t);
          });
        }
  
        function y(t) {
          var e;
          return (null === (e = t.common) || void 0 === e ? void 0 : e.picture) && t.common.picture.length > 0 ? URL.createObjectURL(new Blob([t.common.picture[0].data], {
            type: t.common.picture[0].format
          })) : "";
        }
  
        function j(t, e, r, n) {
          void 0 === n && (n = "-");
          var i = {
            title: null !== e && void 0 !== e ? e : "",
            artist: r
          },
              a = t.split(n);
          return a.length > 1 ? (i.artist || (i.artist = a[0].trim()), i.title || (i.title = a[1].trim())) : 1 === a.length && (i.title || (i.title = a[0].trim())), i;
        }
  
        function O(t) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var e, r, i, a, o;
            return Object(n["c"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 4,, 5]), [4, fetch(t)];
  
                case 1:
                  return e = n.sent(), r = e.headers.get("Content-Type"), (null === r || void 0 === r ? void 0 : r.startsWith("image/")) ? [4, e.arrayBuffer()] : [3, 3];
  
                case 2:
                  return i = n.sent(), a = URL.createObjectURL(new Blob([i], {
                    type: r
                  })), [2, {
                    buffer: i,
                    url: a,
                    mime: r
                  }];
  
                case 3:
                  return [3, 5];
  
                case 4:
                  return o = n.sent(), console.warn(o), [3, 5];
  
                case 5:
                  return [2];
              }
            });
          });
        }
  
        function _(t, e, r) {
          var n = new a.a(t),
              i = r.native["ID3v2.4"] || r.native["ID3v2.3"] || r.native["ID3v2.2"] || [];
          i.forEach(function (t) {
            if ("TPE1" !== t.id && "TIT2" !== t.id && "TALB" !== t.id) try {
              n.setFrame(t.id, t.value);
            } catch (e) {}
          });
          var o = r.common;
          return n.setFrame("TPE1", (null === o || void 0 === o ? void 0 : o.artists) || e.artists || []).setFrame("TIT2", (null === o || void 0 === o ? void 0 : o.title) || e.title).setFrame("TALB", (null === o || void 0 === o ? void 0 : o.album) || e.album || ""), e.picture && n.setFrame("APIC", {
            type: 3,
            data: e.picture,
            description: e.picture_desc || ""
          }), n.addTag();
        }
  
        function k(e, r, n) {
          var i = new c.a(e),
              a = n.common;
          return a.title || a.album || !a.artists || (i.setTag("TITLE=" + r.title), i.setTag("ALBUM=" + r.album), r.artists && (i.removeTag("ARTIST"), r.artists.forEach(function (t) {
            return i.setTag("ARTIST=" + t);
          }))), r.picture && i.importPictureFromBuffer(t.from(r.picture)), i.save();
        }
  
        function x(t) {
          var e = t.lastIndexOf(".");
          return {
            ext: t.substring(e + 1).toLowerCase(),
            name: t.substring(0, e)
          };
        }
      }).call(this, r("1c35").Buffer);
    },
    cd49: function (t, e, r) {
      "use strict";
  
      r.r(e);
      r("9e1f"), r("450d");
  
      var n = r("6ed5"),
          i = r.n(n),
          a = (r("46a1"), r("e5f2")),
          o = r.n(a),
          c = (r("6b30"), r("c284")),
          s = r.n(c),
          u = (r("0c67"), r("299c")),
          l = r.n(u),
          f = (r("b5d8"), r("f494")),
          d = r.n(f),
          h = (r("560b"), r("dcdc")),
          b = r.n(h),
          m = (r("f225"), r("89a9")),
          p = r.n(m),
          v = (r("f4f9"), r("c2cc")),
          g = r.n(v),
          w = (r("7a0f"), r("0f6c")),
          y = r.n(w),
          j = (r("aaa5"), r("a578")),
          O = r.n(j),
          _ = (r("adec"), r("3d2d")),
          k = r.n(_),
          x = (r("bdc7"), r("aa2f")),
          U = r.n(x),
          A = (r("de31"), r("c69e")),
          E = r.n(A),
          S = (r("5466"), r("ecdf")),
          T = r.n(S),
          M = (r("38a0"), r("ad41")),
          P = r.n(M),
          D = (r("10cb"), r("f3ad")),
          I = r.n(D),
          R = (r("eca7"), r("3787")),
          B = r.n(R),
          C = (r("425f"), r("4105")),
          L = r.n(C),
          F = (r("a7cc"), r("df33")),
          N = r.n(F),
          q = (r("1951"), r("eedf")),
          z = r.n(q),
          $ = (r("acb6"), r("c673")),
          J = r.n($),
          W = (r("fd71"), r("a447")),
          V = r.n(W),
          G = (r("e260"), r("e6cf"), r("cca6"), r("a79d"), r("2b0e")),
          H = function () {
        var t = this,
            e = t.$createElement,
            r = t._self._c || e;
        return r("el-container", {
          attrs: {
            id: "app"
          }
        }, [r("el-main", [r("Home")], 1), r("el-footer", {
          attrs: {
            id: "app-footer"
          }
        }, [r("el-row", [r("a", {
          attrs: {
            href: "https://github.com/ix64/unlock-music",
            target: "_blank"
          }
        }, [t._v("音乐解锁")]), t._v("(" + t._s(t.version) + ") ：移除已购音乐的加密保护。 "), r("a", {
          attrs: {
            href: "https://github.com/ix64/unlock-music/wiki/使用提示",
            target: "_blank"
          }
        }, [t._v("使用提示")])]), r("el-row", [t._v(" 目前支持 网易云音乐(ncm), QQ音乐(qmc, mflac, mgg), 酷狗音乐(kgm), 虾米音乐(xm), 酷我音乐(.kwm) "), r("a", {
          attrs: {
            href: "https://github.com/ix64/unlock-music/blob/master/README.md",
            target: "_blank"
          }
        }, [t._v("更多")]), t._v("。 ")]), r("el-row", [r("span", [t._v("Copyright © 2019 - " + t._s(new Date().getFullYear()) + " MengYX")]), t._v(" 音乐解锁使用 "), r("a", {
          attrs: {
            href: "https://github.com/ix64/unlock-music/blob/master/LICENSE",
            target: "_blank"
          }
        }, [t._v("MIT许可协议")]), t._v(" 开放源代码 ")])], 1)], 1);
      },
          K = [],
          Z = r("1da1"),
          Q = (r("96cf"), r("99af"), function () {
        var t = this,
            e = t.$createElement,
            r = t._self._c || e;
        return r("el-upload", {
          attrs: {
            "auto-upload": !1,
            "on-change": t.addFile,
            "show-file-list": !1,
            action: "",
            drag: "",
            multiple: ""
          }
        }, [r("i", {
          staticClass: "el-icon-upload"
        }), r("div", {
          staticClass: "el-upload__text"
        }, [t._v("将文件拖到此处，或"), r("em", [t._v("点击选择")])]), r("div", {
          staticClass: "el-upload__tip",
          attrs: {
            slot: "tip"
          },
          slot: "tip"
        }, [r("div", [t._v(" 仅在浏览器内对文件进行解锁，无需消耗流量 "), r("el-tooltip", {
          attrs: {
            effect: "dark",
            placement: "top-start"
          }
        }, [r("div", {
          attrs: {
            slot: "content"
          },
          slot: "content"
        }, [t._v("算法在源代码中已经提供，所有运算都发生在本地")]), r("i", {
          staticClass: "el-icon-info",
          staticStyle: {
            "font-size": "12px"
          }
        })])], 1), r("div", [t._v(" 工作模式: " + t._s(t.parallel ? "多线程 Worker" : "单线程 Queue") + " "), r("el-tooltip", {
          attrs: {
            effect: "dark",
            placement: "top-start"
          }
        }, [r("div", {
          attrs: {
            slot: "content"
          },
          slot: "content"
        }, [t._v(" 将此工具部署在HTTPS环境下，可以启用Web Worker特性，"), r("br"), t._v(" 从而更快的利用并行处理完成解锁 ")]), r("i", {
          staticClass: "el-icon-info",
          staticStyle: {
            "font-size": "12px"
          }
        })])], 1)]), r("transition", {
          attrs: {
            name: "el-fade-in"
          }
        }, [r("el-progress", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.progress_show,
            expression: "progress_show"
          }],
          staticStyle: {
            margin: "16px 6px 0 6px"
          },
          attrs: {
            format: t.progress_string,
            percentage: t.progress_value,
            "stroke-width": 16,
            "text-inside": !0
          }
        })], 1)], 1);
      }),
          Y = [],
          X = r("0565"),
          tt = X["a"],
          et = r("2877"),
          rt = Object(et["a"])(tt, Q, Y, !1, null, null, null),
          nt = rt.exports,
          it = function () {
        var t = this,
            e = t.$createElement,
            r = t._self._c || e;
        return r("el-table", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            data: t.tableData
          }
        }, [r("el-table-column", {
          attrs: {
            label: "封面"
          },
          scopedSlots: t._u([{
            key: "default",
            fn: function (e) {
              return [r("el-image", {
                staticStyle: {
                  width: "100px",
                  height: "100px"
                },
                attrs: {
                  src: e.row.picture
                }
              }, [r("div", {
                staticClass: "image-slot el-image__error",
                attrs: {
                  slot: "error"
                },
                slot: "error"
              }, [t._v("暂无封面")])])];
            }
          }])
        }), r("el-table-column", {
          attrs: {
            label: "歌曲"
          },
          scopedSlots: t._u([{
            key: "default",
            fn: function (e) {
              return [r("span", [t._v(t._s(e.row.title))])];
            }
          }])
        }), r("el-table-column", {
          attrs: {
            label: "歌手"
          },
          scopedSlots: t._u([{
            key: "default",
            fn: function (e) {
              return [r("p", [t._v(t._s(e.row.artist))])];
            }
          }])
        }), r("el-table-column", {
          attrs: {
            label: "专辑"
          },
          scopedSlots: t._u([{
            key: "default",
            fn: function (e) {
              return [r("p", [t._v(t._s(e.row.album))])];
            }
          }])
        }), r("el-table-column", {
          attrs: {
            label: "操作"
          },
          scopedSlots: t._u([{
            key: "default",
            fn: function (e) {
              return [r("el-button", {
                attrs: {
                  circle: "",
                  icon: "el-icon-video-play",
                  type: "success"
                },
                on: {
                  click: function (r) {
                    return t.handlePlay(e.$index, e.row);
                  }
                }
              }), r("el-button", {
                attrs: {
                  circle: "",
                  icon: "el-icon-download"
                },
                on: {
                  click: function (r) {
                    return t.handleDownload(e.row);
                  }
                }
              }), r("el-button", {
                attrs: {
                  circle: "",
                  icon: "el-icon-delete",
                  type: "danger"
                },
                on: {
                  click: function (r) {
                    return t.handleDelete(e.$index, e.row);
                  }
                }
              })];
            }
          }])
        })], 1);
      },
          at = [],
          ot = (r("a9e3"), r("a434"), r("73ec")),
          ct = {
        name: "PreviewTable",
        props: {
          tableData: {
            type: Array,
            required: !0
          },
          policy: {
            type: Number,
            required: !0
          }
        },
        methods: {
          handlePlay: function (t, e) {
            this.$emit("play", e.file);
          },
          handleDelete: function (t, e) {
            Object(ot["f"])(e), this.tableData.splice(t, 1);
          },
          handleDownload: function (t) {
            this.$emit("download", t);
          }
        }
      },
          st = ct,
          ut = Object(et["a"])(st, it, at, !1, null, "71b7abd5", null),
          lt = ut.exports,
          ft = r("9224"),
          dt = function () {
        var t = this,
            e = t.$createElement,
            r = t._self._c || e;
        return r("div", [r("file-selector", {
          on: {
            error: t.showFail,
            success: t.showSuccess
          }
        }), r("div", {
          attrs: {
            id: "app-control"
          }
        }, [r("el-row", {
          staticClass: "mb-3"
        }, [r("span", [t._v("歌曲命名格式：")]), t._l(t.FilenamePolicies, function (e) {
          return r("el-radio", {
            key: e.key,
            attrs: {
              label: e.key
            },
            model: {
              value: t.filename_policy,
              callback: function (e) {
                t.filename_policy = e;
              },
              expression: "filename_policy"
            }
          }, [t._v(" " + t._s(e.text) + " ")]);
        })], 2), r("el-row", [r("config-dialog", {
          attrs: {
            show: t.showConfigDialog
          },
          on: {
            done: function (e) {
              t.showConfigDialog = !1;
            }
          }
        }), r("el-tooltip", {
          staticClass: "item",
          attrs: {
            effect: "dark",
            placement: "top"
          }
        }, [r("div", {
          attrs: {
            slot: "content"
          },
          slot: "content"
        }, [r("span", [t._v(" 部分解密方案需要设定解密参数。 ")])]), r("el-button", {
          attrs: {
            icon: "el-icon-s-tools",
            plain: ""
          },
          on: {
            click: function (e) {
              t.showConfigDialog = !0;
            }
          }
        }, [t._v("解密设定")])], 1), r("el-button", {
          attrs: {
            icon: "el-icon-download",
            plain: ""
          },
          on: {
            click: t.handleDownloadAll
          }
        }, [t._v("下载全部")]), r("el-button", {
          attrs: {
            icon: "el-icon-delete",
            plain: "",
            type: "danger"
          },
          on: {
            click: t.handleDeleteAll
          }
        }, [t._v("清除全部")]), r("el-tooltip", {
          staticClass: "item",
          attrs: {
            effect: "dark",
            placement: "top-start"
          }
        }, [r("div", {
          attrs: {
            slot: "content"
          },
          slot: "content"
        }, [t.instant_save ? r("span", [t._v("工作模式: " + t._s(t.dir ? "写入本地文件系统" : "调用浏览器下载"))]) : r("span", [t._v(" 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"), r("br"), t._v(" 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 ")])]), r("el-checkbox", {
          staticClass: "ml-2",
          attrs: {
            border: ""
          },
          model: {
            value: t.instant_save,
            callback: function (e) {
              t.instant_save = e;
            },
            expression: "instant_save"
          }
        }, [t._v("立即保存")])], 1)], 1)], 1), r("audio", {
          attrs: {
            autoplay: t.playing_auto,
            src: t.playing_url,
            controls: ""
          }
        }), r("PreviewTable", {
          attrs: {
            policy: t.filename_policy,
            "table-data": t.tableData
          },
          on: {
            download: t.saveFile,
            play: t.changePlaying
          }
        })], 1);
      },
          ht = [],
          bt = (r("e9c4"), r("d3b7"), r("159b"), function () {
        var t = this,
            e = t.$createElement,
            r = t._self._c || e;
        return r("el-dialog", {
          attrs: {
            title: "解密设定",
            visible: t.show,
            "custom-class": "um-config-dialog",
            center: ""
          },
          on: {
            close: function (e) {
              return t.cancel();
            }
          }
        }, [r("el-form", {
          ref: "form",
          attrs: {
            rules: t.rules,
            "status-icon": "",
            model: t.form,
            "label-width": "0"
          }
        }, [r("section", [r("label", [r("span", [t._v(" JOOX Music · "), r("Ruby", {
          attrs: {
            caption: "Unique Device Identifier"
          }
        }, [t._v("设备唯一识别码")])], 1), r("el-form-item", {
          attrs: {
            prop: "jooxUUID"
          }
        }, [r("el-input", {
          attrs: {
            type: "text",
            clearable: "",
            maxlength: "32",
            "show-word-limit": ""
          },
          model: {
            value: t.form.jooxUUID,
            callback: function (e) {
              t.$set(t.form, "jooxUUID", e);
            },
            expression: "form.jooxUUID"
          }
        })], 1)], 1), r("p", {
          staticClass: "item-desc"
        }, [t._v(" 下载该加密文件的 JOOX 应用所记录的设备唯一识别码。 "), r("br"), t._v(" 参见： "), r("a", {
          attrs: {
            href: "https://github.com/unlock-music/joox-crypto/wiki/%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87-UUID"
          }
        }, [t._v(" 获取设备 UUID · unlock-music/joox-crypto Wiki")]), t._v("。 ")])])]), r("span", {
          staticClass: "dialog-footer",
          attrs: {
            slot: "footer"
          },
          slot: "footer"
        }, [r("el-button", {
          attrs: {
            type: "primary",
            loading: t.saving
          },
          on: {
            click: function (e) {
              return t.emitConfirm();
            }
          }
        }, [t._v("确 定")])], 1)], 1);
      }),
          mt = [],
          pt = (r("ac1f"), r("00b4"), r("b7c7")),
          vt = function () {
        var t = this,
            e = t.$createElement,
            r = t._self._c || e;
        return r("ruby", {
          attrs: {
            title: t.caption
          }
        }, [t._t("default"), r("rp", [t._v("（")]), r("rt", {
          domProps: {
            textContent: t._s(t.caption)
          }
        }), r("rp", [t._v("）")])], 2);
      },
          gt = [],
          wt = {
        name: "Ruby",
        props: {
          caption: {
            type: String,
            required: !0
          }
        }
      },
          yt = wt,
          jt = Object(et["a"])(yt, vt, gt, !1, null, null, null),
          Ot = jt.exports;
  
      function _t(t, e, r) {
        e && /^[\da-fA-F]{32}$/.test(e) ? r() : r(new Error("无效的 Joox UUID，请参考 Wiki 获取。"));
      }
  
      var kt = {
        jooxUUID: {
          validator: _t,
          trigger: "change"
        }
      },
          xt = {
        components: {
          Ruby: Ot
        },
        props: {
          show: {
            type: Boolean,
            required: !0
          }
        },
        data: function () {
          return {
            rules: kt,
            saving: !1,
            form: {
              jooxUUID: ""
            },
            centerDialogVisible: !1
          };
        },
        mounted: function () {
          var t = this;
          return Object(Z["a"])(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.resetForm();
  
                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }))();
        },
        methods: {
          resetForm: function () {
            var t = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, pt["a"].loadJooxUUID();
  
                  case 2:
                    t.form.jooxUUID = e.sent;
  
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          cancel: function () {
            var t = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, t.resetForm();
  
                  case 2:
                    t.$emit("done");
  
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          emitConfirm: function () {
            var t = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return t.saving = !0, e.next = 3, pt["a"].saveJooxUUID(t.form.jooxUUID);
  
                  case 3:
                    t.saving = !1, t.$emit("done");
  
                  case 5:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          }
        }
      },
          Ut = xt,
          At = (r("b0a8"), Object(et["a"])(Ut, bt, mt, !1, null, "58e4a4a6", null)),
          Et = At.exports,
          St = {
        name: "Home",
        components: {
          FileSelector: nt,
          PreviewTable: lt,
          ConfigDialog: Et
        },
        data: function () {
          return {
            showConfigDialog: !1,
            tableData: [],
            playing_url: "",
            playing_auto: !1,
            filename_policy: ot["e"].ArtistAndTitle,
            instant_save: !1,
            FilenamePolicies: ot["d"],
            dir: null
          };
        },
        watch: {
          instant_save: function (t) {
            t && this.showDirectlySave();
          }
        },
        methods: {
          showSuccess: function (t) {
            var e = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function r() {
              var n;
              return regeneratorRuntime.wrap(function (r) {
                while (1) switch (r.prev = r.next) {
                  case 0:
                    if (!e.instant_save) {
                      r.next = 6;
                      break;
                    }
  
                    return r.next = 3, e.saveFile(t);
  
                  case 3:
                    Object(ot["f"])(t), r.next = 8;
                    break;
  
                  case 6:
                    e.tableData.push(t), e.$notify.success({
                      title: "解锁成功",
                      message: "成功解锁 " + t.title,
                      duration: 3e3
                    });
  
                  case 8:
                    n = [t.title, t.artist, t.album], window._paq.push(["trackEvent", "Unlock", t.rawExt + "," + t.mime, JSON.stringify(n)]);
  
                  case 9:
                  case "end":
                    return r.stop();
                }
              }, r);
            }))();
          },
          showFail: function (t, e) {
            console.error(t, e), this.$notify.error({
              title: "出现问题",
              message: t + "，" + e + '，参考<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>',
              dangerouslyUseHTMLString: !0,
              duration: 6e3
            }), window._paq.push(["trackEvent", "Error", String(t), e]);
          },
          changePlaying: function (t) {
            this.playing_url = t, this.playing_auto = !0;
          },
          handleDeleteAll: function () {
            this.tableData.forEach(function (t) {
              Object(ot["f"])(t);
            }), this.tableData = [];
          },
          handleDecryptionConfig: function () {
            this.showConfigDialog = !0;
          },
          handleDownloadAll: function () {
            var t = this,
                e = 0,
                r = setInterval(function () {
              e < t.tableData.length ? (t.saveFile(t.tableData[e]), e++) : clearInterval(r);
            }, 300);
          },
          saveFile: function (t) {
            var e = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function r() {
              return regeneratorRuntime.wrap(function (r) {
                while (1) switch (r.prev = r.next) {
                  case 0:
                    if (!e.dir) {
                      r.next = 6;
                      break;
                    }
  
                    return r.next = 3, Object(ot["b"])(t, e.filename_policy, e.dir);
  
                  case 3:
                    e.$notify({
                      title: "保存成功",
                      message: t.title,
                      position: "top-left",
                      type: "success",
                      duration: 3e3
                    }), r.next = 7;
                    break;
  
                  case 6:
                    Object(ot["c"])(t, e.filename_policy);
  
                  case 7:
                  case "end":
                    return r.stop();
                }
              }, r);
            }))();
          },
          showDirectlySave: function () {
            var t = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function e() {
              var r;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    if (window.showDirectoryPicker) {
                      e.next = 2;
                      break;
                    }
  
                    return e.abrupt("return");
  
                  case 2:
                    return e.prev = 2, e.next = 5, t.$confirm("您的浏览器支持文件直接保存到磁盘，是否使用？", "新特性提示", {
                      confirmButtonText: "使用",
                      cancelButtonText: "不使用",
                      type: "warning",
                      center: !0
                    });
  
                  case 5:
                    e.next = 11;
                    break;
  
                  case 7:
                    return e.prev = 7, e.t0 = e["catch"](2), console.log(e.t0), e.abrupt("return");
  
                  case 11:
                    return e.prev = 11, e.next = 14, window.showDirectoryPicker();
  
                  case 14:
                    return t.dir = e.sent, r = "__unlock_music_write_test.txt", e.next = 18, t.dir.getFileHandle(r, {
                      create: !0
                    });
  
                  case 18:
                    return e.next = 20, t.dir.removeEntry(r);
  
                  case 20:
                    e.next = 25;
                    break;
  
                  case 22:
                    e.prev = 22, e.t1 = e["catch"](11), console.error(e.t1);
  
                  case 25:
                  case "end":
                    return e.stop();
                }
              }, e, null, [[2, 7], [11, 22]]);
            }))();
          }
        }
      },
          Tt = St,
          Mt = Object(et["a"])(Tt, dt, ht, !1, null, null, null),
          Pt = Mt.exports,
          Dt = r("97e5"),
          It = {
        name: "app",
        components: {
          FileSelector: nt,
          PreviewTable: lt,
          Home: Pt
        },
        data: function () {
          return {
            version: ft.version
          };
        },
        created: function () {
          var t = this;
          this.$nextTick(function () {
            return t.finishLoad();
          });
        },
        methods: {
          finishLoad: function () {
            var t = this;
            return Object(Z["a"])(regeneratorRuntime.mark(function e() {
              var r, n;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return r = document.getElementById("loader-mask"), r && r.remove(), e.prev = 2, e.next = 5, Object(Dt["a"])(t.version);
  
                  case 5:
                    n = e.sent, e.next = 11;
                    break;
  
                  case 8:
                    e.prev = 8, e.t0 = e["catch"](2), console.warn("check version info failed", e.t0);
  
                  case 11:
                    n && (n.HttpsFound || n.Found && "https:" !== window.location.protocol) ? t.$notify.warning({
                      title: "发现更新",
                      message: "发现新版本 v".concat(n.Version, "<br/>更新详情：").concat(n.Detail, '<br/> <a target="_blank" href="').concat(n.URL, '">获取更新</a>'),
                      dangerouslyUseHTMLString: !0,
                      duration: 15e3,
                      position: "top-left"
                    }) : t.$notify.info({
                      title: "离线使用",
                      message: "我们使用PWA技术，无网络也能使用<br/>最近更新：".concat(ft.updateInfo, '<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>'),
                      dangerouslyUseHTMLString: !0,
                      duration: 1e4,
                      position: "top-left"
                    });
  
                  case 12:
                  case "end":
                    return e.stop();
                }
              }, e, null, [[2, 8]]);
            }))();
          }
        }
      },
          Rt = It,
          Bt = (r("5c0b"), Object(et["a"])(Rt, H, K, !1, null, null, null)),
          Ct = Bt.exports,
          Lt = r("9483");
      "https:" === window.location.protocol && Object(Lt["a"])("".concat("", "service-worker.js"), {
        ready: function () {
          console.log("App is being served from cache by a service worker.");
        },
        registered: function () {
          console.log("Service worker has been registered.");
        },
        cached: function () {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function () {
          console.log("New content is downloading.");
        },
        updated: function () {
          console.log("New content is available."), window.location.reload();
        },
        offline: function () {
          console.log("No internet connection found. App is running in offline mode.");
        },
        error: function (t) {
          console.error("Error during service worker registration:", t);
        }
      }), G["default"].use(V.a), G["default"].use(J.a), G["default"].use(z.a), G["default"].use(N.a), G["default"].use(L.a), G["default"].use(B.a), G["default"].use(I.a), G["default"].use(P.a), G["default"].use(T.a), G["default"].use(E.a), G["default"].use(U.a), G["default"].use(k.a), G["default"].use(O.a), G["default"].use(y.a), G["default"].use(g.a), G["default"].use(p.a), G["default"].use(b.a), G["default"].use(d.a), G["default"].use(l.a), G["default"].use(s.a), G["default"].prototype.$notify = o.a, G["default"].prototype.$confirm = i.a.confirm, G["default"].config.productionTip = !1, new G["default"]({
        render: function (t) {
          return t(Ct);
        }
      }).$mount("#app");
    },
    efc0: function (t, e, r) {
      "use strict";
  
      r("d3b7"), r("ddb0"), r("4ec9"), r("3ca3"), r("159b"), r("4fad");
  
      var n = r("9ab4"),
          i = r("675e"),
          a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.values = new Map(), e;
        }
  
        return Object(n["b"])(e, t), e.prototype.load = function (t, e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (r) {
              return this.values.has(t) ? [2, this.values.get(t)] : [2, e];
            });
          });
        }, e.prototype.save = function (t, e) {
          return Object(n["a"])(this, void 0, Promise, function () {
            return Object(n["c"])(this, function (r) {
              return this.values.set(t, e), [2];
            });
          });
        }, e.prototype.getAll = function () {
          return Object(n["a"])(this, void 0, Promise, function () {
            var t;
            return Object(n["c"])(this, function (e) {
              return t = {}, this.values.forEach(function (e, r) {
                var n;
                Object.assign(t, (n = {}, n[r] = e, n));
              }), [2, t];
            });
          });
        }, e.prototype.setAll = function (t) {
          return Object(n["a"])(this, void 0, Promise, function () {
            var e, r, i, a, o;
            return Object(n["c"])(this, function (n) {
              for (e = 0, r = Object.entries(t); e < r.length; e++) i = r[e], a = i[0], o = i[1], this.values.set(a, o);
  
              return [2];
            });
          });
        }, e;
      }(i["b"]);
  
      e["a"] = a;
    },
    fa01: function (t, e, r) {
      "use strict";
  
      (function (t) {
        r.d(e, "a", function () {
          return o;
        });
        r("ace4"), r("d3b7"), r("5cc6"), r("907a"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("fb6a");
        var n = r("08fe"),
            i = 2,
            a = 7;
  
        function o(e) {
          var r = new TextDecoder(),
              n = t.from(r.decode(e), "base64"),
              i = n.length;
          if (i < 16) throw Error("key length is too short");
  
          for (var a = c(106, 8), o = new Uint8Array(16), u = 0; u < 8; u++) o[u << 1] = a[u], o[1 + (u << 1)] = n[u];
  
          var l = s(n.subarray(8), o);
          return n.set(l, 8), n.subarray(0, 8 + l.length);
        }
  
        function c(t, e) {
          for (var r = [], n = 0; n < e; n++) {
            var i = Math.tan(t + .1 * n);
            r[n] = 255 & 100 * Math.abs(i);
          }
  
          return r;
        }
  
        function s(t, e) {
          if (t.length % 8 != 0) throw Error("inBuf size not a multiple of the block size");
          if (t.length < 16) throw Error("inBuf size too small");
          var r = new n["a"](e, 32),
              o = new Uint8Array(8),
              c = new DataView(o.buffer);
          r.decrypt(c, new DataView(t.buffer, t.byteOffset, 8));
  
          for (var s = 7 & o[0], u = t.length - 1 - s - i - a, l = new Uint8Array(u), f = new Uint8Array(8), d = t.slice(0, 8), h = 8, b = 1 + s, m = function () {
            f = d, d = t.slice(h, h + 8);
  
            for (var e = 0; e < 8; e++) o[e] ^= d[e];
  
            r.decrypt(c, c), h += 8, b = 0;
          }, p = 1; p <= i;) b < 8 ? (b++, p++) : m();
  
          var v = 0;
  
          while (v < u) b < 8 ? (l[v] = o[b] ^ f[b], v++, b++) : m();
  
          for (p = 1; p <= a; p++) if (o[b] != f[b]) throw Error("zero check failed");
  
          return l;
        }
      }).call(this, r("1c35").Buffer);
    }
  });
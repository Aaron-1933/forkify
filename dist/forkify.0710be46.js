// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return new URL(distDir + url, import.meta.url).toString();}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"frCey":[function(require,module,exports,__globalThis) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4345934e17270304";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7269fd5d0710be46";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9D1Ak":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeviewJs = require("./views/Recipeview.js");
var _recipeviewJsDefault = parcelHelpers.interopDefault(_recipeviewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/ResultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
const recipeContainer = document.querySelector('.recipe');
const query = (0, _searchViewJsDefault.default).getQuery();
async function controlRecipes() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeviewJsDefault.default).renderSpinner();
        await _modelJs.loadRecipe(id);
        (0, _recipeviewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeviewJsDefault.default).renderError();
    }
}
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        (0, _resultsViewJsDefault.default).renderSpinner();
        await _modelJs.loadSearchResults(query);
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
        console.log(_modelJs.state.search.results);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
function init() {
    (0, _recipeviewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
}
init();

},{"./model.js":"506Xi","./views/Recipeview.js":"faDDE","./views/searchView.js":"pQ6qA","./views/ResultsView.js":"fKeTX","./views/paginationView.js":"22jy7","@parcel/transformer-js/src/esmodule-helpers.js":"laylR","url:../img/icons.svg":"3SlHl"}],"506Xi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
var _config = require("./config");
var _helpers = require("./helpers");
var _configJs = require("./config.js");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    }
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpers.getJSON)(`${(0, _configJs.API_URL)}${id}`);
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(state.recipe);
    } catch (err) {
        console.log(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        const data = await (0, _helpers.getJSON)(`${(0, _configJs.API_URL)}?search=${query}`);
        state.search.query = query;
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
        console.log(state.search.results);
    } catch (err) {
        console.log(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};

},{"./config":"ht99S","./helpers":"fOA4D","./config.js":"ht99S","@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"ht99S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const TIMEOUT_SEC = 5;
const RES_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"laylR":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fOA4D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "timeout", ()=>timeout);
var _config = require("./config");
const getJSON = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

},{"./config":"ht99S","@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"faDDE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fractionJs = require("../lib/fraction.js");
var _fractionJsDefault = parcelHelpers.interopDefault(_fractionJs);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const icons = new URL(require("3d96e8e01a43e185")).href;
class RecipeView extends (0, _viewJsDefault.default) {
    _data;
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    render(data) {
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, (e)=>handler(e)));
    }
    _generateMarkup() {
        return `
      <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
      <span>${this._data.title}</span>
      </h1>
      </figure>
      <div class="recipe__details">
      <div class="recipe__info">
      <svg class="recipe__info-icon">
      <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
      <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
      <svg class="recipe__info-icon">
      <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
      <button class="btn--tiny btn--increase-servings">
      <svg>
      <use href="${icons}#icon-minus-circle"></use>
      </svg>
      </button>
      <button class="btn--tiny btn--increase-servings">
      <svg>
      <use href="${icons}#icon-plus-circle"></use>
      </svg>
      </button>
      </div>
      </div>
      <div class="recipe__user-generated">
      <svg>
      <use href="${icons}#icon-user"></use>
      </svg>
      </div>
      <button class="btn--round">
      <svg class="">
      <use href="${icons}#icon-bookmark-fill"></use>
      </svg>
      </button>
      </div>
      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
${this._data.ingredients.map((ingredient)=>{
            return `
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${ingredient.quantity ? new (0, _fractionJsDefault.default)(ingredient.quantity).toFraction(true) : ''}</div>
    <div class="recipe__description">
    <span class="recipe__unit">${ingredient.unit}</span>
  ${ingredient.description}
    </div>
    </li>
    `;
        }).join('')}
    </ul>
    </div>
    <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
    directions at their website.
    </p>
    <a
    class="btn--small recipe__btn"
    href="${this._data.sourceUrl}"
    target="_blank"
    >
    <span>Directions</span>
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </a>
    </div>`;
    }
    renderError(message = this._errorMessage) {
        const markup = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
          `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = new RecipeView();

},{"./View.js":"9HiAI","3d96e8e01a43e185":"hDBLe","@parcel/transformer-js/src/esmodule-helpers.js":"laylR","../lib/fraction.js":"aHS2R"}],"9HiAI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"3SlHl","@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"3SlHl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.ed9e720e.svg") + "?" + Date.now();

},{}],"hDBLe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.170d1204.svg") + "?" + Date.now();

},{}],"aHS2R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Fraction);
parcelHelpers.export(exports, "Fraction", ()=>Fraction);
'use strict';
/**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <numerator>, 1 => <denominator> ]
 * { n => <numerator>, d => <denominator> }
 *
 * Integer form
 * - Single integer value as BigInt or Number
 *
 * Double form
 * - Single double value as Number
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 * let f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ // Set Identity function to downgrade BigInt to Number if needed
if (typeof BigInt === 'undefined') BigInt = function(n) {
    if (isNaN(n)) throw new Error("");
    return n;
};
const C_ZERO = BigInt(0);
const C_ONE = BigInt(1);
const C_TWO = BigInt(2);
const C_THREE = BigInt(3);
const C_FIVE = BigInt(5);
const C_TEN = BigInt(10);
const MAX_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
// Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
// Example: 1/7 = 0.(142857) has 6 repeating decimal places.
// If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
const MAX_CYCLE_LEN = 2000;
// Parsed data to avoid calling "new" all the time
const P = {
    "s": C_ONE,
    "n": C_ZERO,
    "d": C_ONE
};
function assign(n, s) {
    try {
        n = BigInt(n);
    } catch (e) {
        throw InvalidParameter();
    }
    return n * s;
}
function ifloor(x) {
    return typeof x === 'bigint' ? x : Math.floor(x);
}
// Creates a new Fraction internally without the need of the bulky constructor
function newFraction(n, d) {
    if (d === C_ZERO) throw DivisionByZero();
    const f = Object.create(Fraction.prototype);
    f["s"] = n < C_ZERO ? -C_ONE : C_ONE;
    n = n < C_ZERO ? -n : n;
    const a = gcd(n, d);
    f["n"] = n / a;
    f["d"] = d / a;
    return f;
}
const FACTORSTEPS = [
    C_TWO * C_TWO,
    C_TWO,
    C_TWO * C_TWO,
    C_TWO,
    C_TWO * C_TWO,
    C_TWO * C_THREE,
    C_TWO,
    C_TWO * C_THREE
]; // repeats
function factorize(n) {
    const factors = Object.create(null);
    if (n <= C_ONE) {
        factors[n] = C_ONE;
        return factors;
    }
    const add = (p)=>{
        factors[p] = (factors[p] || C_ZERO) + C_ONE;
    };
    while(n % C_TWO === C_ZERO){
        add(C_TWO);
        n /= C_TWO;
    }
    while(n % C_THREE === C_ZERO){
        add(C_THREE);
        n /= C_THREE;
    }
    while(n % C_FIVE === C_ZERO){
        add(C_FIVE);
        n /= C_FIVE;
    }
    // 30-wheel trial division: test only residues coprime to 2*3*5
    // Residue step pattern after 5: 7,11,13,17,19,23,29,31, ...
    for(let si = 0, p = C_TWO + C_FIVE; p * p <= n;){
        while(n % p === C_ZERO){
            add(p);
            n /= p;
        }
        p += FACTORSTEPS[si];
        si = si + 1 & 7; // fast modulo 8
    }
    if (n > C_ONE) add(n);
    return factors;
}
const parse = function(p1, p2) {
    let n = C_ZERO, d = C_ONE, s = C_ONE;
    if (p1 === undefined || p1 === null) ;
    else if (p2 !== undefined) {
        if (typeof p1 === "bigint") n = p1;
        else if (isNaN(p1)) throw InvalidParameter();
        else if (p1 % 1 !== 0) throw NonIntegerParameter();
        else n = BigInt(p1);
        if (typeof p2 === "bigint") d = p2;
        else if (isNaN(p2)) throw InvalidParameter();
        else if (p2 % 1 !== 0) throw NonIntegerParameter();
        else d = BigInt(p2);
        s = n * d;
    } else if (typeof p1 === "object") {
        if ("d" in p1 && "n" in p1) {
            n = BigInt(p1["n"]);
            d = BigInt(p1["d"]);
            if ("s" in p1) n *= BigInt(p1["s"]);
        } else if (0 in p1) {
            n = BigInt(p1[0]);
            if (1 in p1) d = BigInt(p1[1]);
        } else if (typeof p1 === "bigint") n = p1;
        else throw InvalidParameter();
        s = n * d;
    } else if (typeof p1 === "number") {
        if (isNaN(p1)) throw InvalidParameter();
        if (p1 < 0) {
            s = -C_ONE;
            p1 = -p1;
        }
        if (p1 % 1 === 0) n = BigInt(p1);
        else {
            let z = 1;
            let A = 0, B = 1;
            let C = 1, D = 1;
            let N = 10000000;
            if (p1 >= 1) {
                z = 10 ** Math.floor(1 + Math.log10(p1));
                p1 /= z;
            }
            // Using Farey Sequences
            while(B <= N && D <= N){
                let M = (A + C) / (B + D);
                if (p1 === M) {
                    if (B + D <= N) {
                        n = A + C;
                        d = B + D;
                    } else if (D > B) {
                        n = C;
                        d = D;
                    } else {
                        n = A;
                        d = B;
                    }
                    break;
                } else {
                    if (p1 > M) {
                        A += C;
                        B += D;
                    } else {
                        C += A;
                        D += B;
                    }
                    if (B > N) {
                        n = C;
                        d = D;
                    } else {
                        n = A;
                        d = B;
                    }
                }
            }
            n = BigInt(n) * BigInt(z);
            d = BigInt(d);
        }
    } else if (typeof p1 === "string") {
        let ndx = 0;
        let v = C_ZERO, w = C_ZERO, x = C_ZERO, y = C_ONE, z = C_ONE;
        let match = p1.replace(/_/g, '').match(/\d+|./g);
        if (match === null) throw InvalidParameter();
        if (match[ndx] === '-') {
            s = -C_ONE;
            ndx++;
        } else if (match[ndx] === '+') ndx++;
        if (match.length === ndx + 1) w = assign(match[ndx++], s);
        else if (match[ndx + 1] === '.' || match[ndx] === '.') {
            if (match[ndx] !== '.') v = assign(match[ndx++], s);
            ndx++;
            // Check for decimal places
            if (ndx + 1 === match.length || match[ndx + 1] === '(' && match[ndx + 3] === ')' || match[ndx + 1] === "'" && match[ndx + 3] === "'") {
                w = assign(match[ndx], s);
                y = C_TEN ** BigInt(match[ndx].length);
                ndx++;
            }
            // Check for repeating places
            if (match[ndx] === '(' && match[ndx + 2] === ')' || match[ndx] === "'" && match[ndx + 2] === "'") {
                x = assign(match[ndx + 1], s);
                z = C_TEN ** BigInt(match[ndx + 1].length) - C_ONE;
                ndx += 3;
            }
        } else if (match[ndx + 1] === '/' || match[ndx + 1] === ':') {
            w = assign(match[ndx], s);
            y = assign(match[ndx + 2], C_ONE);
            ndx += 3;
        } else if (match[ndx + 3] === '/' && match[ndx + 1] === ' ') {
            v = assign(match[ndx], s);
            w = assign(match[ndx + 2], s);
            y = assign(match[ndx + 4], C_ONE);
            ndx += 5;
        }
        if (match.length <= ndx) {
            d = y * z;
            s = /* void */ n = x + d * v + z * w;
        } else throw InvalidParameter();
    } else if (typeof p1 === "bigint") {
        n = p1;
        s = p1;
        d = C_ONE;
    } else throw InvalidParameter();
    if (d === C_ZERO) throw DivisionByZero();
    P["s"] = s < C_ZERO ? -C_ONE : C_ONE;
    P["n"] = n < C_ZERO ? -n : n;
    P["d"] = d < C_ZERO ? -d : d;
};
function modpow(b, e, m) {
    let r = C_ONE;
    for(; e > C_ZERO; b = b * b % m, e >>= C_ONE)if (e & C_ONE) r = r * b % m;
    return r;
}
function cycleLen(n, d) {
    for(; d % C_TWO === C_ZERO; d /= C_TWO);
    for(; d % C_FIVE === C_ZERO; d /= C_FIVE);
    if (d === C_ONE) return C_ZERO;
    // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
    // 10^(d-1) % d == 1
    // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
    // as we want to translate the numbers to strings.
    let rem = C_TEN % d;
    let t = 1;
    for(; rem !== C_ONE; t++){
        rem = rem * C_TEN % d;
        if (t > MAX_CYCLE_LEN) return C_ZERO; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
    }
    return BigInt(t);
}
function cycleStart(n, d, len) {
    let rem1 = C_ONE;
    let rem2 = modpow(C_TEN, len, d);
    for(let t = 0; t < 300; t++){
        // Solve 10^s == 10^(s+t) (mod d)
        if (rem1 === rem2) return BigInt(t);
        rem1 = rem1 * C_TEN % d;
        rem2 = rem2 * C_TEN % d;
    }
    return 0;
}
function gcd(a, b) {
    if (!a) return b;
    if (!b) return a;
    while(true){
        a %= b;
        if (!a) return b;
        b %= a;
        if (!b) return a;
    }
}
/**
 * Module constructor
 *
 * @constructor
 * @param {number|Fraction=} a
 * @param {number=} b
 */ function Fraction(a, b) {
    parse(a, b);
    if (this instanceof Fraction) {
        a = gcd(P["d"], P["n"]); // Abuse a
        this["s"] = P["s"];
        this["n"] = P["n"] / a;
        this["d"] = P["d"] / a;
    } else return newFraction(P['s'] * P['n'], P['d']);
}
const DivisionByZero = function() {
    return new Error("Division by Zero");
};
const InvalidParameter = function() {
    return new Error("Invalid argument");
};
const NonIntegerParameter = function() {
    return new Error("Parameters must be integer");
};
Fraction.prototype = {
    "s": C_ONE,
    "n": C_ZERO,
    "d": C_ONE,
    /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/ "abs": function() {
        return newFraction(this["n"], this["d"]);
    },
    /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/ "neg": function() {
        return newFraction(-this["s"] * this["n"], this["d"]);
    },
    /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/ "add": function(a, b) {
        parse(a, b);
        return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
    },
    /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/ "sub": function(a, b) {
        parse(a, b);
        return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
    },
    /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/ "mul": function(a, b) {
        parse(a, b);
        return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
    },
    /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/ "div": function(a, b) {
        parse(a, b);
        return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
    },
    /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/ "clone": function() {
        return newFraction(this['s'] * this['n'], this['d']);
    },
    /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/ "mod": function(a, b) {
        if (a === undefined) return newFraction(this["s"] * this["n"] % this["d"], C_ONE);
        parse(a, b);
        if (C_ZERO === P["n"] * this["d"]) throw DivisionByZero();
        /**
     * I derived the rational modulo similar to the modulo for integers
     *
     * https://raw.org/book/analysis/rational-numbers/
     *
     *    n1/d1 = (n2/d2) * q + r, where 0 ≤ r < n2/d2
     * => d2 * n1 = n2 * d1 * q + d1 * d2 * r
     * => r = (d2 * n1 - n2 * d1 * q) / (d1 * d2)
     *      = (d2 * n1 - n2 * d1 * floor((d2 * n1) / (n2 * d1))) / (d1 * d2)
     *      = ((d2 * n1) % (n2 * d1)) / (d1 * d2)
     */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
    },
    /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */ "gcd": function(a, b) {
        parse(a, b);
        // https://raw.org/book/analysis/rational-numbers/
        // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
        return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
    },
    /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */ "lcm": function(a, b) {
        parse(a, b);
        // https://raw.org/book/analysis/rational-numbers/
        // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
        if (P["n"] === C_ZERO && this["n"] === C_ZERO) return newFraction(C_ZERO, C_ONE);
        return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
    },
    /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/ "inverse": function() {
        return newFraction(this["s"] * this["d"], this["n"]);
    },
    /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */ "pow": function(a, b) {
        parse(a, b);
        // Trivial case when exp is an integer
        if (P['d'] === C_ONE) {
            if (P['s'] < C_ZERO) return newFraction((this['s'] * this["d"]) ** P['n'], this["n"] ** P['n']);
            else return newFraction((this['s'] * this["n"]) ** P['n'], this["d"] ** P['n']);
        }
        // Negative roots become complex
        //     (-a/b)^(c/d) = x
        // ⇔ (-1)^(c/d) * (a/b)^(c/d) = x
        // ⇔ (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x
        // ⇔ (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula
        // From which follows that only for c=0 the root is non-complex
        if (this['s'] < C_ZERO) return null;
        // Now prime factor n and d
        let N = factorize(this['n']);
        let D = factorize(this['d']);
        // Exponentiate and take root for n and d individually
        let n = C_ONE;
        let d = C_ONE;
        for(let k in N){
            if (k === '1') continue;
            if (k === '0') {
                n = C_ZERO;
                break;
            }
            N[k] *= P['n'];
            if (N[k] % P['d'] === C_ZERO) N[k] /= P['d'];
            else return null;
            n *= BigInt(k) ** N[k];
        }
        for(let k in D){
            if (k === '1') continue;
            D[k] *= P['n'];
            if (D[k] % P['d'] === C_ZERO) D[k] /= P['d'];
            else return null;
            d *= BigInt(k) ** D[k];
        }
        if (P['s'] < C_ZERO) return newFraction(d, n);
        return newFraction(n, d);
    },
    /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */ "log": function(a, b) {
        parse(a, b);
        if (this['s'] <= C_ZERO || P['s'] <= C_ZERO) return null;
        const allPrimes = Object.create(null);
        const baseFactors = factorize(P['n']);
        const T1 = factorize(P['d']);
        const numberFactors = factorize(this['n']);
        const T2 = factorize(this['d']);
        for(const prime in T1)baseFactors[prime] = (baseFactors[prime] || C_ZERO) - T1[prime];
        for(const prime in T2)numberFactors[prime] = (numberFactors[prime] || C_ZERO) - T2[prime];
        for(const prime in baseFactors){
            if (prime === '1') continue;
            allPrimes[prime] = true;
        }
        for(const prime in numberFactors){
            if (prime === '1') continue;
            allPrimes[prime] = true;
        }
        let retN = null;
        let retD = null;
        // Iterate over all unique primes to determine if a consistent ratio exists
        for(const prime in allPrimes){
            const baseExponent = baseFactors[prime] || C_ZERO;
            const numberExponent = numberFactors[prime] || C_ZERO;
            if (baseExponent === C_ZERO) {
                if (numberExponent !== C_ZERO) return null; // Logarithm cannot be expressed as a rational number
                continue; // Skip this prime since both exponents are zero
            }
            // Calculate the ratio of exponents for this prime
            let curN = numberExponent;
            let curD = baseExponent;
            // Simplify the current ratio
            const gcdValue = gcd(curN, curD);
            curN /= gcdValue;
            curD /= gcdValue;
            // Check if this is the first ratio; otherwise, ensure ratios are consistent
            if (retN === null && retD === null) {
                retN = curN;
                retD = curD;
            } else if (curN * retD !== retN * curD) return null; // Ratios do not match, logarithm cannot be rational
        }
        return retN !== null && retD !== null ? newFraction(retN, retD) : null;
    },
    /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/ "equals": function(a, b) {
        parse(a, b);
        return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
    },
    /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/ "lt": function(a, b) {
        parse(a, b);
        return this["s"] * this["n"] * P["d"] < P["s"] * P["n"] * this["d"];
    },
    /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/ "lte": function(a, b) {
        parse(a, b);
        return this["s"] * this["n"] * P["d"] <= P["s"] * P["n"] * this["d"];
    },
    /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/ "gt": function(a, b) {
        parse(a, b);
        return this["s"] * this["n"] * P["d"] > P["s"] * P["n"] * this["d"];
    },
    /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/ "gte": function(a, b) {
        parse(a, b);
        return this["s"] * this["n"] * P["d"] >= P["s"] * P["n"] * this["d"];
    },
    /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/ "compare": function(a, b) {
        parse(a, b);
        let t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
        return (C_ZERO < t) - (t < C_ZERO);
    },
    /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/ "ceil": function(places) {
        places = C_TEN ** BigInt(places || 0);
        return newFraction(ifloor(this["s"] * places * this["n"] / this["d"]) + (places * this["n"] % this["d"] > C_ZERO && this["s"] >= C_ZERO ? C_ONE : C_ZERO), places);
    },
    /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/ "floor": function(places) {
        places = C_TEN ** BigInt(places || 0);
        return newFraction(ifloor(this["s"] * places * this["n"] / this["d"]) - (places * this["n"] % this["d"] > C_ZERO && this["s"] < C_ZERO ? C_ONE : C_ZERO), places);
    },
    /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/ "round": function(places) {
        places = C_TEN ** BigInt(places || 0);
        /* Derivation:

    s >= 0:
      round(n / d) = ifloor(n / d) + (n % d) / d >= 0.5 ? 1 : 0
                   = ifloor(n / d) + 2(n % d) >= d ? 1 : 0
    s < 0:
      round(n / d) =-ifloor(n / d) - (n % d) / d > 0.5 ? 1 : 0
                   =-ifloor(n / d) - 2(n % d) > d ? 1 : 0

    =>:

    round(s * n / d) = s * ifloor(n / d) + s * (C + 2(n % d) > d ? 1 : 0)
        where C = s >= 0 ? 1 : 0, to fix the >= for the positve case.
    */ return newFraction(ifloor(this["s"] * places * this["n"] / this["d"]) + this["s"] * ((this["s"] >= C_ZERO ? C_ONE : C_ZERO) + C_TWO * (places * this["n"] % this["d"]) > this["d"] ? C_ONE : C_ZERO), places);
    },
    /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/ "roundTo": function(a, b) {
        /*
    k * x/y ≤ a/b < (k+1) * x/y
    ⇔ k ≤ a/b / (x/y) < (k+1)
    ⇔ k = floor(a/b * y/x)
    ⇔ k = floor((a * y) / (b * x))
    */ parse(a, b);
        const n = this['n'] * P['d'];
        const d = this['d'] * P['n'];
        const r = n % d;
        // round(n / d) = ifloor(n / d) + 2(n % d) >= d ? 1 : 0
        let k = ifloor(n / d);
        if (r + r >= d) k++;
        return newFraction(this['s'] * k * P['n'], P['d']);
    },
    /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */ "divisible": function(a, b) {
        parse(a, b);
        if (P['n'] === C_ZERO) return false;
        return this['n'] * P['d'] % (P['n'] * this['d']) === C_ZERO;
    },
    /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/ 'valueOf': function() {
        //if (this['n'] <= MAX_INTEGER && this['d'] <= MAX_INTEGER) {
        return Number(this['s'] * this['n']) / Number(this['d']);
    //}
    },
    /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/ 'toString': function(dec = 15) {
        let N = this["n"];
        let D = this["d"];
        let cycLen = cycleLen(N, D); // Cycle length
        let cycOff = cycleStart(N, D, cycLen); // Cycle start
        let str = this['s'] < C_ZERO ? "-" : "";
        // Append integer part
        str += ifloor(N / D);
        N %= D;
        N *= C_TEN;
        if (N) str += ".";
        if (cycLen) {
            for(let i = cycOff; i--;){
                str += ifloor(N / D);
                N %= D;
                N *= C_TEN;
            }
            str += "(";
            for(let i = cycLen; i--;){
                str += ifloor(N / D);
                N %= D;
                N *= C_TEN;
            }
            str += ")";
        } else for(let i = dec; N && i--;){
            str += ifloor(N / D);
            N %= D;
            N *= C_TEN;
        }
        return str;
    },
    /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/ 'toFraction': function(showMixed = false) {
        let n = this["n"];
        let d = this["d"];
        let str = this['s'] < C_ZERO ? "-" : "";
        if (d === C_ONE) str += n;
        else {
            const whole = ifloor(n / d);
            if (showMixed && whole > C_ZERO) {
                str += whole;
                str += " ";
                n %= d;
            }
            str += n;
            str += '/';
            str += d;
        }
        return str;
    },
    /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/ 'toLatex': function(showMixed = false) {
        let n = this["n"];
        let d = this["d"];
        let str = this['s'] < C_ZERO ? "-" : "";
        if (d === C_ONE) str += n;
        else {
            const whole = ifloor(n / d);
            if (showMixed && whole > C_ZERO) {
                str += whole;
                n %= d;
            }
            str += "\\frac{";
            str += n;
            str += '}{';
            str += d;
            str += '}';
        }
        return str;
    },
    /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */ 'toContinued': function() {
        let a = this['n'];
        let b = this['d'];
        const res = [];
        while(b){
            res.push(ifloor(a / b));
            const t = a % b;
            a = b;
            b = t;
        }
        return res;
    },
    "simplify": function(eps = 1e-3) {
        // Continued fractions give best approximations for a max denominator,
        // generally outperforming mediants in denominator–accuracy trade-offs.
        // Semiconvergents can further reduce the denominator within tolerance.
        const ieps = BigInt(Math.ceil(1 / eps));
        const thisABS = this['abs']();
        const cont = thisABS['toContinued']();
        for(let i = 1; i < cont.length; i++){
            let s = newFraction(cont[i - 1], C_ONE);
            for(let k = i - 2; k >= 0; k--)s = s['inverse']()['add'](cont[k]);
            let t = s['sub'](thisABS);
            if (t['n'] * ieps < t['d']) return s['mul'](this['s']);
        }
        return this;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"pQ6qA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentEl = document.querySelector('.search');
    #clearInput() {
        this.#parentEl.querySelector('.search__field').value = '';
    }
    getQuery() {
        const query = this.#parentEl.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    }
    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"fKeTX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query';
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `
    <li class="preview">
      <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>
  `;
    }
}
exports.default = new ResultsView();

},{"./View.js":"9HiAI","@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}],"22jy7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        if (curPage === 1 && numPages > 1) return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        if (curPage === numPages && numPages > 1) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
        if (curPage < numPages) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"9HiAI","url:../../img/icons.svg":"3SlHl","@parcel/transformer-js/src/esmodule-helpers.js":"laylR"}]},["frCey","9D1Ak"], "9D1Ak", "parcelRequire3a11", {}, "./", "/")
let {} = parcelRequire3a11("9D1Ak");
export {};

//# sourceMappingURL=forkify.0710be46.js.map

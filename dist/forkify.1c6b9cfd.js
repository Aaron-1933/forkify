function e(e){return new URL(n+(e=r.i?.[e]||e),import.meta.url).toString()}var t=globalThis,n="./",i={},s={},r=t.parcelRequire3a11;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequire3a11=r),r.register;let a="https://forkify-api.herokuapp.com/api/v2/recipes/",l=async function(e){try{let t=fetch(e),n=await Promise.race([t,o(5)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},o=function(e){return new Promise(function(t,n){setTimeout(function(){n(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},c={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},u=async function(e){try{let{recipe:t}=(await l(`${a}${e}`)).data;c.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookTime:t.cooking_time,ingredients:t.ingredients},console.log(c.recipe)}catch(e){throw console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},h=async function(e){try{let t=await l(`${a}?search=${e}`);c.search.query=e,c.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),console.log(c.search.results)}catch(e){throw console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},d=function(e=c.search.page){c.search.page=e;let t=(e-1)*c.search.resultsPerPage,n=e*c.search.resultsPerPage;return c.search.results.slice(t,n)};"u"<typeof BigInt&&(BigInt=function(e){if(isNaN(e))throw Error("");return e});let f=BigInt(0),g=BigInt(1),p=BigInt(2),_=BigInt(3),v=BigInt(5),b=BigInt(10);BigInt(Number.MAX_SAFE_INTEGER);let m={s:g,n:f,d:g};function w(e,t){try{e=BigInt(e)}catch(e){throw H()}return e*t}function $(e){return"bigint"==typeof e?e:Math.floor(e)}function y(e,t){if(t===f)throw A();let n=Object.create(k.prototype);n.s=e<f?-g:g;let i=M(e=e<f?-e:e,t);return n.n=e/i,n.d=t/i,n}let E=[p*p,p,p*p,p,p*p,p*_,p,p*_];function I(e){let t=Object.create(null);if(e<=g)return t[e]=g,t;let n=e=>{t[e]=(t[e]||f)+g};for(;e%p===f;)n(p),e/=p;for(;e%_===f;)n(_),e/=_;for(;e%v===f;)n(v),e/=v;for(let t=0,i=p+v;i*i<=e;){for(;e%i===f;)n(i),e/=i;i+=E[t],t=t+1&7}return e>g&&n(e),t}let B=function(e,t){let n=f,i=g,s=g;if(null==e);else if(void 0!==t){if("bigint"==typeof e)n=e;else if(isNaN(e))throw H();else if(e%1!=0)throw T();else n=BigInt(e);if("bigint"==typeof t)i=t;else if(isNaN(t))throw H();else if(t%1!=0)throw T();else i=BigInt(t);s=n*i}else if("object"==typeof e){if("d"in e&&"n"in e)n=BigInt(e.n),i=BigInt(e.d),"s"in e&&(n*=BigInt(e.s));else if(0 in e)n=BigInt(e[0]),1 in e&&(i=BigInt(e[1]));else if("bigint"==typeof e)n=e;else throw H();s=n*i}else if("number"==typeof e){if(isNaN(e))throw H();if(e<0&&(s=-g,e=-e),e%1==0)n=BigInt(e);else{let t=1,s=0,r=1,a=1,l=1;for(e>=1&&(t=10**Math.floor(1+Math.log10(e)),e/=t);r<=1e7&&l<=1e7;){let t=(s+a)/(r+l);if(e===t){r+l<=1e7?(n=s+a,i=r+l):l>r?(n=a,i=l):(n=s,i=r);break}e>t?(s+=a,r+=l):(a+=s,l+=r),r>1e7?(n=a,i=l):(n=s,i=r)}n=BigInt(n)*BigInt(t),i=BigInt(i)}}else if("string"==typeof e){let t=0,r=f,a=f,l=f,o=g,c=g,u=e.replace(/_/g,"").match(/\d+|./g);if(null===u)throw H();if("-"===u[t]?(s=-g,t++):"+"===u[t]&&t++,u.length===t+1?a=w(u[t++],s):"."===u[t+1]||"."===u[t]?("."!==u[t]&&(r=w(u[t++],s)),(++t+1===u.length||"("===u[t+1]&&")"===u[t+3]||"'"===u[t+1]&&"'"===u[t+3])&&(a=w(u[t],s),o=b**BigInt(u[t].length),t++),("("===u[t]&&")"===u[t+2]||"'"===u[t]&&"'"===u[t+2])&&(l=w(u[t+1],s),c=b**BigInt(u[t+1].length)-g,t+=3)):"/"===u[t+1]||":"===u[t+1]?(a=w(u[t],s),o=w(u[t+2],g),t+=3):"/"===u[t+3]&&" "===u[t+1]&&(r=w(u[t],s),a=w(u[t+2],s),o=w(u[t+4],g),t+=5),u.length<=t)s=n=l+(i=o*c)*r+c*a;else throw H()}else if("bigint"==typeof e)n=e,s=e,i=g;else throw H();if(i===f)throw A();m.s=s<f?-g:g,m.n=n<f?-n:n,m.d=i<f?-i:i};function M(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function k(e,t){if(B(e,t),!(this instanceof k))return y(m.s*m.n,m.d);e=M(m.d,m.n),this.s=m.s,this.n=m.n/e,this.d=m.d/e}let A=function(){return Error("Division by Zero")},H=function(){return Error("Invalid argument")},T=function(){return Error("Parameters must be integer")};k.prototype={s:g,n:f,d:g,abs:function(){return y(this.n,this.d)},neg:function(){return y(-this.s*this.n,this.d)},add:function(e,t){return B(e,t),y(this.s*this.n*m.d+m.s*this.d*m.n,this.d*m.d)},sub:function(e,t){return B(e,t),y(this.s*this.n*m.d-m.s*this.d*m.n,this.d*m.d)},mul:function(e,t){return B(e,t),y(this.s*m.s*this.n*m.n,this.d*m.d)},div:function(e,t){return B(e,t),y(this.s*m.s*this.n*m.d,this.d*m.n)},clone:function(){return y(this.s*this.n,this.d)},mod:function(e,t){if(void 0===e)return y(this.s*this.n%this.d,g);if(B(e,t),f===m.n*this.d)throw A();return y(this.s*(m.d*this.n)%(m.n*this.d),m.d*this.d)},gcd:function(e,t){return B(e,t),y(M(m.n,this.n)*M(m.d,this.d),m.d*this.d)},lcm:function(e,t){return(B(e,t),m.n===f&&this.n===f)?y(f,g):y(m.n*this.n,M(m.n,this.n)*M(m.d,this.d))},inverse:function(){return y(this.s*this.d,this.n)},pow:function(e,t){if(B(e,t),m.d===g)if(m.s<f)return y((this.s*this.d)**m.n,this.n**m.n);else return y((this.s*this.n)**m.n,this.d**m.n);if(this.s<f)return null;let n=I(this.n),i=I(this.d),s=g,r=g;for(let e in n)if("1"!==e){if("0"===e){s=f;break}if(n[e]*=m.n,n[e]%m.d!==f)return null;n[e]/=m.d,s*=BigInt(e)**n[e]}for(let e in i)if("1"!==e){if(i[e]*=m.n,i[e]%m.d!==f)return null;i[e]/=m.d,r*=BigInt(e)**i[e]}return m.s<f?y(r,s):y(s,r)},log:function(e,t){if(B(e,t),this.s<=f||m.s<=f)return null;let n=Object.create(null),i=I(m.n),s=I(m.d),r=I(this.n),a=I(this.d);for(let e in s)i[e]=(i[e]||f)-s[e];for(let e in a)r[e]=(r[e]||f)-a[e];for(let e in i)"1"!==e&&(n[e]=!0);for(let e in r)"1"!==e&&(n[e]=!0);let l=null,o=null;for(let e in n){let t=i[e]||f,n=r[e]||f;if(t===f){if(n!==f)return null;continue}let s=n,a=t,c=M(s,a);if(s/=c,a/=c,null===l&&null===o)l=s,o=a;else if(s*o!=l*a)return null}return null!==l&&null!==o?y(l,o):null},equals:function(e,t){return B(e,t),this.s*this.n*m.d==m.s*m.n*this.d},lt:function(e,t){return B(e,t),this.s*this.n*m.d<m.s*m.n*this.d},lte:function(e,t){return B(e,t),this.s*this.n*m.d<=m.s*m.n*this.d},gt:function(e,t){return B(e,t),this.s*this.n*m.d>m.s*m.n*this.d},gte:function(e,t){return B(e,t),this.s*this.n*m.d>=m.s*m.n*this.d},compare:function(e,t){B(e,t);let n=this.s*this.n*m.d-m.s*m.n*this.d;return(f<n)-(n<f)},ceil:function(e){return e=b**BigInt(e||0),y($(this.s*e*this.n/this.d)+(e*this.n%this.d>f&&this.s>=f?g:f),e)},floor:function(e){return e=b**BigInt(e||0),y($(this.s*e*this.n/this.d)-(e*this.n%this.d>f&&this.s<f?g:f),e)},round:function(e){return e=b**BigInt(e||0),y($(this.s*e*this.n/this.d)+this.s*((this.s>=f?g:f)+p*(e*this.n%this.d)>this.d?g:f),e)},roundTo:function(e,t){B(e,t);let n=this.n*m.d,i=this.d*m.n,s=n%i,r=$(n/i);return s+s>=i&&r++,y(this.s*r*m.n,m.d)},divisible:function(e,t){return B(e,t),m.n!==f&&this.n*m.d%(m.n*this.d)===f},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e=15){let t=this.n,n=this.d,i=function(e){for(;e%p===f;e/=p);for(;e%v===f;e/=v);if(e===g)return f;let t=b%e,n=1;for(;t!==g;n++)if(t=t*b%e,n>2e3)return f;return BigInt(n)}(n),s=function(e,t){let n=g,i=function(e,t,n){let i=g;for(;t>f;e=e*e%n,t>>=g)t&g&&(i=i*e%n);return i}(b,t,e);for(let t=0;t<300;t++){if(n===i)return BigInt(t);n=n*b%e,i=i*b%e}return 0}(n,i),r=this.s<f?"-":"";if(r+=$(t/n),t%=n,(t*=b)&&(r+="."),i){for(let e=s;e--;)r+=$(t/n),t%=n,t*=b;r+="(";for(let e=i;e--;)r+=$(t/n),t%=n,t*=b;r+=")"}else for(let i=e;t&&i--;)r+=$(t/n),t%=n,t*=b;return r},toFraction:function(e=!1){let t=this.n,n=this.d,i=this.s<f?"-":"";if(n===g)i+=t;else{let s=$(t/n);e&&s>f&&(i+=s,i+=" ",t%=n),i+=t,i+="/",i+=n}return i},toLatex:function(e=!1){let t=this.n,n=this.d,i=this.s<f?"-":"";if(n===g)i+=t;else{let s=$(t/n);e&&s>f&&(i+=s,t%=n),i+="\\frac{",i+=t,i+="}{",i+=n,i+="}"}return i},toContinued:function(){let e=this.n,t=this.d,n=[];for(;t;){n.push($(e/t));let i=e%t;e=t,t=i}return n},simplify:function(e=.001){let t=BigInt(Math.ceil(1/e)),n=this.abs(),i=n.toContinued();for(let e=1;e<i.length;e++){let s=y(i[e-1],g);for(let t=e-2;t>=0;t--)s=s.inverse().add(i[t]);let r=s.sub(n);if(r.n*t<r.d)return s.mul(this.s)}return this}};var L={};let P=new URL(L=e("icons.29bfa175.svg")).href;class S{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._clear();let t=this._generateMarkup();this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${P}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${P}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${P}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}let q=new URL(L).href;class j extends S{_data;_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";render(e){this._data=e,this._clear();let t=this._generateMarkup();this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${q}#icon-loader"></use>
        </svg>
      </div>
    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,t=>e(t)))}_generateMarkup(){return`
      <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
      <span>${this._data.title}</span>
      </h1>
      </figure>
      <div class="recipe__details">
      <div class="recipe__info">
      <svg class="recipe__info-icon">
      <use href="${q}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
      <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
      <svg class="recipe__info-icon">
      <use href="${q}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
      <button class="btn--tiny btn--increase-servings">
      <svg>
      <use href="${q}#icon-minus-circle"></use>
      </svg>
      </button>
      <button class="btn--tiny btn--increase-servings">
      <svg>
      <use href="${q}#icon-plus-circle"></use>
      </svg>
      </button>
      </div>
      </div>
      <div class="recipe__user-generated">
      <svg>
      <use href="${q}#icon-user"></use>
      </svg>
      </div>
      <button class="btn--round">
      <svg class="">
      <use href="${q}#icon-bookmark-fill"></use>
      </svg>
      </button>
      </div>
      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
${this._data.ingredients.map(e=>`
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
    <use href="${q}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?new k(e.quantity).toFraction(!0):""}</div>
    <div class="recipe__description">
    <span class="recipe__unit">${e.unit}</span>
  ${e.description}
    </div>
    </li>
    `).join("")}
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
    <use href="${q}#icon-arrow-right"></use>
    </svg>
    </a>
    </div>`}renderError(e=this._errorMessage){let t=`
    <div class="error">
            <div>
              <svg>
                <use href="${q}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${q}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var N=new j;class x{#e=document.querySelector(".search");#t(){this.#e.querySelector(".search__field").value=""}getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var F=new x;class R extends S{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
    <li class="preview">
      <a class="preview__link" href="#${e.id}">
        <figure class="preview__fig">
          <img src="${e.image}" alt="${e.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${e.title}</h4>
          <p class="preview__publisher">${e.publisher}</p>
        </div>
      </a>
    </li>
  `}}var U=new R;let O=new URL(L).href;class C extends S{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--inline");n&&e(+n.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${O}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${O}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${O}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${O}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var D=new C;async function Q(){try{let e=window.location.hash.slice(1);if(!e)return;N.renderSpinner(),await u(e),N.render(c.recipe)}catch(e){N.renderError()}}e("icons.29bfa175.svg"),document.querySelector(".recipe"),F.getQuery();let G=async function(){try{let e=F.getQuery();if(!e)return;U.renderSpinner(),await h(e),D.render(c.search),U.render(d()),D.render(c.search),console.log(c.search.results)}catch(e){console.log(e)}};N.addHandlerRender(Q),F.addHandlerSearch(G),D.addHandlerClick(function(e){U.render(d(e)),D.render(c.search)});
//# sourceMappingURL=forkify.1c6b9cfd.js.map

caches.open('14MST').then(x => c=x)

Promise {<pending>}
c.keys()
Promise {<pending>}
c.keys().then(x => {a=x})

Promise {<pending>}

a //array


//sonuc
(12) [Request, Request, Request, Request, Request, Request, Request, Request, Request, Request, Request, Request]0: Request {method: "GET", url: "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/Lab/work/range.png", headers: Headers, destination: "", referrer: "", …}1: Request {method: "GET", url: "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/", headers: Headers, destination: "", referrer: "", …}2: Request {method: "GET", url: "https://static1.squarespace.com/static/58d20c79725…52deaa430665e31/1521098260276/js.jpg?format=1500w", headers: Headers, destination: "", referrer: "", …}3: Request {method: "GET", url: "https://pbs.twimg.com/media/DpgvdgZWwAEMGWw.jpg", headers: Headers, destination: "", referrer: "", …}4: Request {method: "GET", url: "https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0ITw.woff2", headers: Headers, destination: "", referrer: "", …}5: Request {method: "GET", url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0", headers: Headers, destination: "", referrer: "", …}6: Request {method: "GET", url: "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/manifest.json", headers: Headers, destination: "", referrer: "", …}7: Request {method: "GET", url: "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/images/icons/icon-144x144.png", headers: Headers, destination: "", referrer: "", …}8: Request {method: "GET", url: "https://www.w3schools.com/w3css/4/w3.css", headers: Headers, destination: "", referrer: "", …}9: Request {method: "GET", url: "https://fonts.googleapis.com/css?family=Raleway", headers: Headers, destination: "", referrer: "", …}10: Request {method: "GET", url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", headers: Headers, destination: "", referrer: "", …}11: Request {method: "GET", url: "https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2", headers: Headers, destination: "", referrer: "", …}length: 12__proto__: Array(0)
console.table(a.keys())

         

//url  okumak icin
         
         
         
 var myurls = []

 for(let i of a)myurls.push(i.url)

 //sounc
myurls
(12) ["https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/Lab/work/range.png", "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/", "https://static1.squarespace.com/static/58d20c79725…52deaa430665e31/1521098260276/js.jpg?format=1500w", "https://pbs.twimg.com/media/DpgvdgZWwAEMGWw.jpg", "https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0ITw.woff2", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0", "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/manifest.json", "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/images/icons/icon-144x144.png", "https://www.w3schools.com/w3css/4/w3.css", "https://fonts.googleapis.com/css?family=Raleway", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2"]
         
         
         
         
         
//ulr blob aldim         
arrofmyurl=[]
for ( url of myurls)fetch(url).then(r => r.blob()).then(r => arrofmyurl.push(r))
         
         
arrofmyurl
(10) [Blob(37181), Blob(16421), Blob(13160), Blob(20444), Blob(1216), Blob(23006), Blob(772), Blob(31000), Blob(107174), Blob(77160)]0: Blob(37181) {size: 37181, type: "image/png"}1: Blob(16421) {size: 16421, type: "text/html"}2: Blob(13160) {size: 13160, type: "font/woff2"}3: Blob(20444) {size: 20444, type: "font/woff2"}4: Blob(1216) {size: 1216, type: "application/json"}size: 1216type: "application/json"__proto__: Blob5: Blob(23006) {size: 23006, type: "image/png"}6: Blob(772) {size: 772, type: "text/css"}7: Blob(31000) {size: 31000, type: "text/css"}8: Blob(107174) {size: 107174, type: "image/jpeg"}9: Blob(77160) {size: 77160, type: "application/octet-stream"}length: 10__proto__: Array(0)

         
         
   
         
// ulr json aldim 
arrofjosn=[]
for ( url of myurls)fetch(url).then(r => r.json()).then(r => arrofjosn.push(r))
      
         
Scope: "/"
background_color: "#008eff"
description: "Advanced Programming work files"
display: "standalone"
icons: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
name: "14MST"
short_name: "AdvPro"
splash_pages: null
start_url: "https://abderrhmanabdellatif.github.io/advanced-programing-Homeworks/"
theme_color: "#008eff"
__proto__: Object
length: 11
         
         
         
// ulr text
         
         
         
         
arroftext=[]
for ( url of myurls)fetch(url).then(r => r.text()).then(r => arroftext.push(r))
   
         
   

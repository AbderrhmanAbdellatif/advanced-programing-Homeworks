var tl = new TimelineMax();
$('.play').click(function() {
  var tl = new TimelineMax();

tl.from('#stand', 0.5, {scaleY: 0, transformOrigin: "bottom"})
  .from('#standBack', 0.5, {scaleY: 0, transformOrigin: "bottom"})
  .from('#monitorBottom', 0.7, {scaleX: 0, transformOrigin: "center"})
  .from('#screen', 0.6, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.4})
  .from('#yellowBox', 0.5, {scale: 0})
  .staggerFrom('#Layer_1 > g:nth-child(1) > g path', 0.2, {scaleX: 0}, -0.1)
})

document.getElementById("tunnel").animate([
{ transform: 'translate3D(0, 0, 0)' },
{ transform: 'translate3D(0, -30px, 0)' }
], {
duration: 1000,
iterations: Infinity
})

var aliceTumbling = [
{ transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#001' },
{ color: '#ada400', offset: 0.3},
{ transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#940065' }
];

var aliceTiming = {
duration: 3000,
iterations: Infinity
}

document.getElementById("alice").animate(
aliceTumbling,
aliceTiming
)

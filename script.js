//load
window.addEventListener("load", function () {
  console.log("load");
});
//unload
window.addEventListener("unload", function () {
  console.log("unload");
});
//scroll
window.addEventListener("scroll", function () {
  console.log("scroll");
});
//windows resize
window.addEventListener("resize", function () {
  const width = window.outerWidth;
  const height = window.outerHeight;
  console.log(`height :${height},width:#{width}`);
});

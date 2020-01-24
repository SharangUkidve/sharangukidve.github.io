document.addEventListener("DOMContentLoaded", function() {
  var navElem = document.querySelectorAll(".sidenav");
  var sideNavInstances = M.Sidenav.init(navElem);
  var scrollSpies = document.querySelectorAll(".scrollspy");
  var scrollSpyInstances = M.ScrollSpy.init(scrollSpies, {
    activeClass: "teal darken-2 white-text",
    scrollOffset: 60
  });

  var tooltips = document.querySelectorAll(".tooltipped");
  var tooltipInstances = M.Tooltip.init(tooltips, {
    position: "top",
    margin: -25
  });

  var defaultTooltips = document.querySelectorAll(".default-tooltipped");
  var defaultTooltipInstances = M.Tooltip.init(defaultTooltips, {
    position: "top"
  });
});

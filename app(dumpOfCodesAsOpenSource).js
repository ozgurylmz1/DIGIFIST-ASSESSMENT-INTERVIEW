$(document).ready(function() {
    var owl = $(".rectangle3");
    owl.owlCarousel({
      items: 3,
      itemsDesktop: [1000, 3],
      itemsDesktopSmall: [900, 3],
      itemsTablet: [600, 3],
      itemsMobile: false,
      pagination: false
    });
});
var slider = tns({
  container: ".my-slider",
  items: 1,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 1
    },
    700: {
      gutter: 30
    },
    900: {
      items: 1
    }
  },
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false
});

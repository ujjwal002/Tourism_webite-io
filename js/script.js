function removeall() {
  $(".cir_border").css("border", "none");
}
$("#sec").on("click", function () {
  removeall();
  $("#sec").css("border", "2px solid whitesmoke");
  $("#sec").css("border-radius", "20px");
});
$("#pri").on("click", function () {
  removeall();
  $("#pri").css("border", "2px solid whitesmoke");
  $("#pri").css("border-radius", "20px");
});
$("#tri").on("click", function () {
  removeall();
  $("#tri").css("border", "2px solid whitesmoke");
  $("#tri").css("border-radius", "20px");
});
$("#quad").on("click", function () {
  removeall();
  $("#quad").css("border", "2px solid whitesmoke");
  $("#quad").css("border-radius", "20px");
});
$("#quint").on("click", function () {
  removeall();
  $("#quint").css("border", "2px solid whitesmoke");
  $("#quint").css("border-radius", "20px");
});
$("#hex").on("click", function () {
  removeall();
  $("#hex").css("border", "2px solid whitesmoke");
  $("#hex").css("border-radius", "20px");
});

// Light/Dark toggle
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
})
let url = "https://www.google.co.in/maps/place/Kumhrar+Park/@25.6080208,85.0730024,12z/data=!4m13!1m7!3m6!1s0x39f29937c52d4f05:0x831a0e05f607b270!2sPatna,+Bihar!3b1!8m2!3d25.5940947!4d85.1375645!3m4!1s0x39ed58b3c30fc9df:0x75386e9dfd3ea20b!8m2!3d25.599848!4d85.1849969?hl=en";
let features = "height=500,width=500";
btn1.addEventListener('click', function () {
  // window.open(first patameter ,second parametr, third parameter)
  // window.open("url",name,features)
  win = window.open(url, 'Window.open()', features);
  //it return id like settime out and set interval;
})
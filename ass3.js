"use strict";
let personalinfor = document.querySelector(".mt-40");
let iconinfo = document.querySelector(".iconinfo");
let submit = document.querySelector(".submit");
let showinfor = document.querySelector(".showinfor");

submit.addEventListener("click", function () {
  let contactemail = document.getElementById("email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;

  if (contactemail.match(regex)) {
    personalinfor.classList.remove("hidden");
    iconinfo.classList.remove("hidden");
    showinfor.classList.add("hidden");
  } else {
    document.querySelector(".text").textContent = "Email Invalid!";
  }
});

let job = document.querySelectorAll(".exp-item");
let viewmore = document.querySelectorAll(".viewmore");
let jobinfo = document.querySelectorAll(".jobinfo");
let noidung2 = document.querySelector(".noidung2");
for (let i = 0; i < job.length; i++) {
  job[i].addEventListener("mouseover", function () {
    viewmore[i].classList.remove("hidden");
  });
  job[i].addEventListener("mouseout", function () {
    viewmore[i].classList.add("hidden");
  });
}

for (let i = 0; i < job.length; i++) {
  viewmore[i].addEventListener("click", function () {
    function changetextless(element) {
      element.textContent = "View less...";
    }
    function changetextmore(element) {
      element.textContent = "View more...";
    }
    function add(element) {
      element.classList.add("hide");
    }
    function remove(element) {
      element.classList.remove("hide");
    }
    if (viewmore[i].textContent == "View more...") {
      viewmore.forEach(changetextless);
      jobinfo.forEach(remove);
      noidung2.classList.add("ex2");
    } else {
      if (viewmore[i].textContent == "View less...") {
        viewmore.forEach(changetextmore);
        jobinfo.forEach(add);
        noidung2.classList.remove("ex2");
      }
    }
  });
}

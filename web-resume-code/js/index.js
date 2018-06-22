$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });

});



(function (global) { //Immediately Invoked Function Literal

var dc = {};

// variables
var homeHtml = "snippets/home-snippet.html";
var resumeHtml = "snippets/financial-snippet.html";
var skillsHtml = "snippets/skills-snippet.html";
var expHtml = "snippets/exp-snippet.html";
var educationHtml = "snippets/education-snippet.html";





var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
}

//functions
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}


document.addEventListener("DOMContentLoaded", function (event) {

	// on first load, show home view
	// showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});
dc.loadHome = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};  

dc.loadResume = function () {
	//showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		resumeHtml,
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
};   


dc.loadSkills = function () {
	//showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		skillsHtml,
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
};  

dc.loadExp = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    expHtml,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};

dc.loadEducation = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    educationHtml,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};


global.$dc = dc;

})(window); 


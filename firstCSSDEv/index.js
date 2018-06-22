function dropdownMenu() {
	var x = document.getElementById("dropdownClick");
	// grab ul list

	if (x.className === "topnav") {
		x.className += " responsive";
		/* change topnav to topnav.responsive */
		/* creates new class for the ul list if the dropdown icon is clicked
		in the mobile state. So now the user can style the new ul class
		without altering the old one */
	}
	else {
		x.className = "topnav";
	}
}
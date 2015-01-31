// Is local storage supported
if(!("localStorage" in window)){
	location.href = "safe.html#1";
}

// Is the addEventListener method supported (sorry IE8)
if(!("addEventListener" in window)){
	location.href = "safe.html#2";
}

// Is setInterval supported (it really should be no matter what)
if(!("setInterval" in window)){
	location.href = "safe.html#3";
}

// Is createElement supported
if(!("createElement" in document)){
	location.href = "safe.html#4";
}
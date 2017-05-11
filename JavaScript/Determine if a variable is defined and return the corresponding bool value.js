// Determine if a variable is defined and return the corresponding bool value
function isset(variable) {
    return typeof variable !== typeof undefined ? true : false;
}

// Adaptated from: http://stackoverflow.com/a/35504698
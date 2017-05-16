var url = window.location.href;
//Ensure the user is looking at facebook
var on_facebook = url.includes('facebook.com');
//Check if URL string has already been applied
//This URL str ing forces Most Recent switch
var has_redirect = url.includes('sk=h_chr');
var has_query_string = url.includes('?');
if (on_facebook && !has_redirect && !has_query_string) {
    var new_url = url + '?sk=h_chr';
    window.location.replace(new_url);
} else if (on_facebook && !has_redirect) {
    var new_url = url + '&sk=h_chr';
    window.location.replace(new_url);
}
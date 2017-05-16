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

window.setTimeout(function() {
    console.log('Updating FB URLS');
    //Update home buttons to have URL query on the end
    //These classes are based on facebooks current markup.  If they change their naming convetions this will need to be updated
    //Facebook icon
    document.querySelector('._19eb').href = document.querySelector('._19eb').href + '&sk=h_chr';
    //Home button
    document.querySelector('#u_0_5').href = document.querySelector('#u_0_5').href + '&sk=h_chr';    
}, 500);
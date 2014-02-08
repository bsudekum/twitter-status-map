function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var loc = document.getElementsByClassName('tweet-geo-text');
console.log(loc)

for (var i = 0; i < loc.length; i++) {
    var lat = loc[i].href.split('%2C')[0].split('q=')[0].split('=')[2];
    var lng = loc[i].href.split('%2C')[1].split('&')[0];

    var newImage = document.createElement('img');
    newImage.src = '//api.tiles.mapbox.com/v3/twitter.map-prnk18sf/pin-m+55acee(' + lng + ',' + lat + ')/' + lng + ',' + lat + ',14/492x100.png';
    newImage.style.margin = '6px 0 0'
    insertAfter(loc[i], newImage);
}
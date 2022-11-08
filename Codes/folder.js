<script>
    function navFunction() {

        alert("Name; " + navigator.appName + "  " + "Version " + navigator.appVersion + "  " + "cookie; " + navigator.cookieEnabled + "  " + "Agent; " + navigator.userAgent + "  " + "Language; " + navigator.language + "  " + "Product; " + navigator.product + "  " + "platform; " + navigator.platform);
    return;
     }
    function winFunction() {

        alert("Navigator; " + window.navigator + "  " + " Location:   " + window.location + "  " + " Screen:   " + window.screen + " " + " Width: " + window.innerWidth + " Height: " + window.innerHeight + " Name: " + window.name + " Opener: " + window.opener);
    return;
           }
    function screenFunction() {

        alert("Height; " + screen.height + "  " + "Available Height: " + screen.availHeight + "  " + "Width; " + screen.width + "  " + "Available : " + screen.availWidth + "  " + "Pixel Depth: " + screen.pixelDepth + "  " + "Color Depth: " + screen.colorDepth);
    return;
           }
    function locationFunction() {

        alert("Hostname; " + location.hostname + "  " + "href: " + location.href + "  " + "Origin; " + location.origin);
    //location.replace("http://www.google.com");
    return;
}
    function historyFunction() {

        alert("Length; " + history.length);
    //location.replace("http://www.google.com");
    return;
}
    var navProp;
    document.write("Navigator Object Properties <br /> ");
    for (navProp in navigator) {
        document.write(navProp);
    document.write("<br />");
}
    document.write("Finished writing Navigator Object Properties!");

</script>
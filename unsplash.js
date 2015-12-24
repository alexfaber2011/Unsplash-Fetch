// Generated by CoffeeScript 1.8.0
(function() {
  var Spooky, spooky;

  Spooky = require('spooky');

  spooky = new Spooky({
    casper: {
      pageSettings: {
        loadImages: true,
        webSecurityEnabled: false
      }
    }
  }, function() {
    spooky.start('https://unsplash.com/', function() {
      var imageLinks;
      imageLinks = this.getElementsInfo('div.photo-description .photo-description__download a:first-child');
      return this.each(imageLinks, function(self, link) {
        var name;
        name = link.attributes.href;
        name = name.split('/')[2];
        return this.download("https://unsplash.com" + link.attributes.href, "/Users/alexfaber/Pictures/" + name + ".jpg");
      });
    });
    return spooky.run();
  });

  spooky.on('console', function(line) {
    return console.log(line);
  });

}).call(this);

//# sourceMappingURL=unsplash.js.map

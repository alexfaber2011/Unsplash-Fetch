// Generated by CoffeeScript 1.8.0
(function() {
  var casper;

  casper = require('casper').create({
    pageSettings: {
      loadImages: true,
      webSecurityEnabled: false
    }
  });

  casper.start('https://unsplash.com/', function() {
    var imageLinks;
    imageLinks = this.getElementsInfo('div.photo-description h2 a:first-child');
    return this.each(imageLinks, function(self, link) {
      var name;
      require('utils').dump(link);
      name = link.attributes.href;
      name = name.split('/')[2];
      return this.download("https://unsplash.com" + link.attributes.href, "" + name + ".jpg");
    });
  });

  casper.run();

}).call(this);

//# sourceMappingURL=casper.js.map

casper = require('casper').create
  pageSettings:
   loadImages: yes
   webSecurityEnabled: no

casper.start 'https://unsplash.com/', ->
  imageLinks = this.getElementsInfo 'div.photo-description h2 a:first-child'

  this.each imageLinks, (self, link) ->
    require('utils').dump link
    name = link.attributes.href
    name = name.split('/')[2]
    this.download "https://unsplash.com#{link.attributes.href}", "#{name}.jpg"

casper.run()
Spooky = require('spooky')

spooky = new Spooky
    casper:
      pageSettings:
        loadImages: yes
        webSecurityEnabled: no
  ,
    ->
      spooky.start 'https://unsplash.com/', ->
        imageLinks = this.getElementsInfo 'div.photo-description .photo-description__download a:first-child'

        this.each imageLinks, (self, link) ->
          name = link.attributes.href
          name = name.split('/')[2]
          this.download "https://unsplash.com#{link.attributes.href}", "/Users/alexfaber/Pictures/#{name}.jpg"

      spooky.run()

spooky.on 'console', (line) ->
  console.log(line)
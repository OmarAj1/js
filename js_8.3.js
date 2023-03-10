const book1 = {
    name: "davinci",
    yearpub: 2012,
    authorName: 'omar'
};
const book2 = {
    name: "origin",
    yearpub: 2018,
    authorName: "emran"
};
const bookUtils = {
    getFirstPublished: function() {
        if (book1.year > book2.year) {
            return book2
        } else {
            return book1
        }
    },
    setNewEdition: function(book, editionYear) {
        book.latestEdition = editionYear;
    },
    setLanguage: function(book, lang) {
        book.latestEdition = editionYear;
    },

    setTranslation: function(book, lang, translator) {
        book.Translation = {
            translator: translator,
            lang: lang
        };
    },
    setPublisher: function(book, name, location) {
        book.publisher = {
            name: name,
            location: location
        }
    },
    isSamePublisher: function(book1, book2) {
        if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
            return 'it is identical';
        } else {
            return 'it is not identical'
        }
    }
}

bookUtils.isSamePublisher();
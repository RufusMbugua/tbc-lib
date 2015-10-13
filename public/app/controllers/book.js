app.controller('BookCtrl', ['$http','$scope', function(http,scope) {
	scope.book={};
    scope.books=[];
	get_genres();
    get_books();
    scope.add = function add() {
        book = scope.book;
        book.request_type = 'add book';
        http.post('books', book).then(function(response) {
        	// 
        });
    }

    function get_genres(){
    	http.get('genres').then(function(response) {
            // console.log(response.data.data);
        	scope.genres = response.data.data;
        });
    }
    function get_books(){
        newB=[];
        http.get('books').then(function(response) {
            console.log(response.data.data);
            books = response.data.data;
        angular.forEach(books, function(v) {
          newB.push({
            'name': v.name,
            'author':v.author,
            'genre': v.genre.name,
            'tags': v.tags.split(' ')
          });
        });
        books = newB;
        scope.books = books;

        });
    }
}]);
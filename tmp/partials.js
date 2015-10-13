angular.module('templates-dist', ['../public/app/partials/account/book-add.html', '../public/app/partials/account/book-list.html', '../public/app/partials/account/book.html', '../public/app/partials/account/browse.html', '../public/app/partials/account/dashboard.html', '../public/app/partials/account/footer.html', '../public/app/partials/account/genres.html', '../public/app/partials/account/header.html', '../public/app/partials/account/index.html', '../public/app/partials/account/last-borrowed.html', '../public/app/partials/account/latest.html', '../public/app/partials/account/login.html', '../public/app/partials/account/my-books.html', '../public/app/partials/account/overdue.html', '../public/app/partials/account/results.html', '../public/app/partials/portfolio/index.html', '../public/app/partials/portfolio/list.html', '../public/app/partials/public/about.html', '../public/app/partials/public/banner.html', '../public/app/partials/public/footer.html', '../public/app/partials/public/header.html', '../public/app/partials/public/home.html', '../public/app/partials/public/index.html', '../public/app/partials/public/map.html', '../public/app/partials/public/members.html', '../public/app/partials/test/index.html']);

angular.module("../public/app/partials/account/book-add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/book-add.html",
    "<div ui-view=\"\">\n" +
    "	<form action=\"\">\n" +
    "		<div class=\"col-md-12\" style=\"margin-bottom:1em\">\n" +
    "			<input ng-model=\"book.name\" type=\"text\" class=\"form-control\" placeholder=\"Book Title\">\n" +
    "		</div>\n" +
    "		<div class=\"col-md-12\" style=\"margin-bottom:1em\">\n" +
    "			<input ng-model=\"book.author\" type=\"text\" class=\"form-control\" placeholder=\"Author\">\n" +
    "		</div>\n" +
    "		<div class=\"col-md-12\" style=\"margin-bottom:1em\">\n" +
    "			<input ng-model=\"book.tags\" type=\"text\" class=\"form-control\" placeholder=\"Book Tags\">\n" +
    "		</div>\n" +
    "		<div class=\"col-md-12\" style=\"margin-bottom:1em\">\n" +
    "			<select class=\"form-control\" ng-model=\"book.genre_id\" ng-options=\"genre.id as genre.name for genre in genres\"></select>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-12\" style=\"margin-bottom:1em\">\n" +
    "			<button class=\"btn btn-success\" ng-click=\"add()\"><i class=\"ion-plus-round\"></i>Add Book</button>\n" +
    "		</div>\n" +
    "		\n" +
    "	</form>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/book-list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/book-list.html",
    "<div class=\"inner card\">\n" +
    "<h4>Book List\n" +
    "\n" +
    "<nav class=\"pull-right\">\n" +
    "	<button class=\"btn btn-success\" ui-sref=\"account.book.add\"><i class=\"ion-plus-round\"></i>Add Book</button>\n" +
    "</nav>\n" +
    "<div class=\"pull-right\" style=\"margin-right:20px\">\n" +
    "	<ul class=\"nav nav-pills\" style=\"font-size:0.5em\">\n" +
    "	<li class=\"active\"><a href=\"#\">Author</a></li>\n" +
    "	<li class><a href=\"#\">Latest</a></li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "\n" +
    "</h4>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-3 book\" ng-repeat=\"book in books\" ng-if=\"books.length>0\">\n" +
    "			<h5>\n" +
    "				<div ng-bind=\"book.name\" class=\"title\"></div>\n" +
    "				<div style=\"font-size:0.7em\">by <a ng-bind=\"book.author\" class=\"author\"></a></div>\n" +
    "				<span class=\"tags\">\n" +
    "					<a href=\"\" ng-repeat=\"tag in book.tags\">#{{tag}}</a>\n" +
    "				</span>\n" +
    "			</h5>\n" +
    "			<img src=\"\" alt=\"\">\n" +
    "			<div class=\"footer\">\n" +
    "				<span class=\"last_read\">Last Week</span>\n" +
    "				<span class=\"status\">\n" +
    "					<label class=\"label label-success\">available</label>\n" +
    "				</span>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<h6 style=\"text-align:center\" ng-if='books.length==0'>\n" +
    "			No books\n" +
    "		</h6>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/book.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/book.html",
    "<div class=\"col-md-4 col-md-offset-4\" ui-view=\"\"></div>");
}]);

angular.module("../public/app/partials/account/browse.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/browse.html",
    "<div ui-view=\"genres\" class=\"col-md-2\"></div>\n" +
    "<div ui-view=\"results\" class=\"col-md-10\"></div>");
}]);

angular.module("../public/app/partials/account/dashboard.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/dashboard.html",
    "<div class=\"col-md-12\">\n" +
    "	<div class=\"col-md-4\" ui-view=\"latest\"></div>\n" +
    "	<div class=\"col-md-4\" ui-view=\"last-borrowed\"></div>\n" +
    "	<div class=\"col-md-4\" ui-view=\"overdue\"></div>\n" +
    "	<div class=\"col-md-4\"></div>\n" +
    "	<div class=\"col-md-4\"></div>\n" +
    "	<div class=\"col-md-4\"></div>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/footer.html",
    "");
}]);

angular.module("../public/app/partials/account/genres.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/genres.html",
    "<div class=\"inner card\">\n" +
    "<h4>Genres</h4>\n" +
    "	<ul class=\"nav nav-pills nav-stacked\">\n" +
    "		<li class=\"active\"><a href=\"#\">All</a></li>\n" +
    "		<li><a href=\"#\">Romance</a></li>\n" +
    "		<li><a href=\"#\">Sci-Fi</a></li>\n" +
    "		<li><a href=\"#\">True Story</a></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/header.html",
    "<nav id=\"dashboard\"\n" +
    ">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand\" ui-sref=\"account.dashboard\">\n" +
    "        tbc\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "          <li><a >Notifications</a></li>\n" +
    "          <li><a is-active-nav ui-sref=\"account.browse\">Browse</a></li>\n" +
    "          <li><a is-active-nav ui-sref=\"account.my-books\">My Books</a></li>\n" +
    "          <li><a ng-click=\"logout()\">Log Out</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "");
}]);

angular.module("../public/app/partials/account/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "<div ui-view=\"footer\"></div>");
}]);

angular.module("../public/app/partials/account/last-borrowed.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/last-borrowed.html",
    "<div class=\"card inner\">\n" +
    "	<h4>Last Borrowed</h4>\n" +
    "	<ul class=\"nav\">\n" +
    "		<li>The Bourne Identity</li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/latest.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/latest.html",
    "<div class=\"card inner\">\n" +
    "	<h4>Latest Books</h4>\n" +
    "	<ul class=\"nav\">\n" +
    "		<li>The Bourne Identity</li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/login.html",
    "<div class=\"full content\">\n" +
    "  <form action=\"\" class=\"ui form\" class=\"left-form\" id=\"login\">\n" +
    "    <h3 class=\"ui header\">\n" +
    "      Login\n" +
    "    </h3>\n" +
    "    <div class=\"inner\">\n" +
    "    <div class=\"ui input\">\n" +
    "      <label for=\"\">Username</label>\n" +
    "      <input type=\"text\" placeholder=\"John Doe\">\n" +
    "    </div>\n" +
    "    <div class=\"ui input\">\n" +
    "      <label for=\"\">Password</label>\n" +
    "      <input type=\"password\" placeholder=\"Enter Password Here...\">\n" +
    "    </div>\n" +
    "    <div class=\"ui green button\" ng-click=\"login()\">Login</div>\n" +
    "      </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/my-books.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/my-books.html",
    "<div ui-view=\"genres\" class=\"col-md-2\"></div>\n" +
    "<div ui-view=\"book-list\" class=\"col-md-10\"></div>");
}]);

angular.module("../public/app/partials/account/overdue.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/overdue.html",
    "<div class=\"card inner\">\n" +
    "	<h4>Overdue</h4>\n" +
    "	<ul class=\"nav\">\n" +
    "		<li>The Bourne Identity</li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "		<li></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/account/results.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/results.html",
    "<div class=\"inner card\">\n" +
    "<h4>Results</h4>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-3 book\">\n" +
    "			<h5>The Bourne Identity</h5>\n" +
    "			<img src=\"\" alt=\"\">\n" +
    "			<div class=\"footer\">\n" +
    "				<span class=\"owner\">Rufus Mbugua</span>\n" +
    "				<span class=\"copies\">3 Copies</span>\n" +
    "				<span class=\"status\">\n" +
    "					<label class=\"label label-danger\">borrowed</label>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-3\">\n" +
    "			<h5>The Bourne Identity</h5>\n" +
    "			<img src=\"\" alt=\"\">\n" +
    "			<div>\n" +
    "				<span class=\"owner\"></span>\n" +
    "				<span class=\"times_borrowed\"></span>\n" +
    "				<span class=\"status\">\n" +
    "					<label class=\"label label-danger\"></label>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-3\">\n" +
    "			<h5>The Bourne Identity</h5>\n" +
    "			<img src=\"\" alt=\"\">\n" +
    "			<div>\n" +
    "				<span class=\"owner\"></span>\n" +
    "				<span class=\"times_borrowed\"></span>\n" +
    "				<span class=\"status\">\n" +
    "					<label class=\"label label-danger\"></label>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-3\">\n" +
    "			<h5>The Bourne Identity</h5>\n" +
    "			<img src=\"\" alt=\"\">\n" +
    "			<div>\n" +
    "				<span class=\"owner\"></span>\n" +
    "				<span class=\"times_borrowed\"></span>\n" +
    "				<span class=\"status\">\n" +
    "					<label class=\"label label-danger\"></label>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/portfolio/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/portfolio/index.html",
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/portfolio/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/portfolio/list.html",
    "");
}]);

angular.module("../public/app/partials/public/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/about.html",
    "<div id=\"about\" class=\"content\">\n" +
    "    <h2>About</h2>\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae corrupti beatae nesciunt\n" +
    "    excepturi quaerat cum officia ab, ipsa praesentium labore provident libero, numquam vel\n" +
    "    impedit facilis, nisi dolorum consectetur neque!</p>\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "    Eligendi tempora recusandae voluptatem natus dignissimos\n" +
    "    commodi itaque officiis, accusamus adipisci obcaecati tempore laboriosam suscipit debitis\n" +
    "    maiores, at, sint qui. Voluptatum, rerum.</p>\n" +
    "    <p>\n" +
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "    Error mollitia assumenda incidunt ab, eveniet ipsum ipsa nemo aut\n" +
    "    laboriosam, tenetur? Ex eaque modi corporis impedit labore pariatur, eius\n" +
    "    dicta molestias.\n" +
    "    </p>\n" +
    "</div>");
}]);

angular.module("../public/app/partials/public/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/banner.html",
    "<div class=\"image-wrapper\" style=\"height:100%\">\n" +
    "  <div slick dots=true infinite=true speed=300 slides-to-show=1 touch-move=true slides-to-scroll=1 arrows=\"true\"\n" +
    "  autoplay=\"true\" autoplaySpeed=\"1000\"\n" +
    "  >\n" +
    "      <div ng-repeat=\"item in items\">\n" +
    "          <div class=\"description\">\n" +
    "            <h2 class=\"bottom\"\n" +
    "            sn-skrollr\n" +
    "            data-start=\"bottom:300\"\n" +
    "            data--80p-top=\"bottom:50\"\n" +
    "            ng-bind=\"item.description\"></h2>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/footer.html",
    "");
}]);

angular.module("../public/app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/header.html",
    "<nav id=\"main\"\n" +
    "sn-skrollr\n" +
    "    data-start=\"position:absolute;top:0;width:100%;background:rgba(255,255,255,0.00001)\"\n" +
    "    data--90p-top=\"padding:5px;position:fixed;width:100%;background:rgba(44, 62, 80,1.0);z-index:100\"\n" +
    ">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand\" href=\"#\">\n" +
    "        The Book <span class=\"blue\">Club</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "          <li><a du-smooth-scroll du-scroll-spy=\"anchor\" href=\"#about\">About</a></li>\n" +
    "          <li><a du-smooth-scroll offset=\"50\" du-scroll-spy=\"anchor\" href=\"#members\">Members</a></li>\n" +
    "          <li><a du-smooth-scroll offset=\"50\" du-scroll-spy=\"anchor\" href=\"#join\">Join</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "");
}]);

angular.module("../public/app/partials/public/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/home.html",
    "<div id=\"banner\" ui-view=\"banner\"></div>\n" +
    "<div ui-view=\"about\"></div>\n" +
    "<div ui-view=\"members\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/map.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/map.html",
    "");
}]);

angular.module("../public/app/partials/public/members.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/members.html",
    "<div id=\"members\" class=\"content\">\n" +
    "  <h3>Members</h3>\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae corrupti beatae nesciunt\n" +
    "     excepturi quaerat cum officia ab, ipsa praesentium labore provident libero, numquam vel\n" +
    "     impedit facilis, nisi dolorum consectetur neque!</p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/test/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/test/index.html",
    "<h1>Test Page</h1>\n" +
    "");
}]);

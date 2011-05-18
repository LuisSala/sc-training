// ==========================================================================
// Project:   News
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
News.main = function main() {


  News.getPath('mainPage.mainPane').append() ;

  News.articlesController.set("content",News.store.find(News.ARTICLE_QUERY));



} ;

function main() { News.main(); }

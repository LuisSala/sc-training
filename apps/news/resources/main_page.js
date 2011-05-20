// ==========================================================================
// Project:   News - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News */

sc_require('views/article_grid');

// This page describes the main user interface for your application.  
News.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'scrollView'.w(),

    scrollView: SC.ScrollView.design({
      hasVerticalScroller: YES,
      contentView: News.ArticleGridView.create()
    }) // end scrollView
  }) // end MainPane

}); // end mainPage





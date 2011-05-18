// ==========================================================================
// Project:   News - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News */

// This page describes the main user interface for your application.  
News.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'scrollView'.w(),
    
    scrollView: SC.ScrollView.design({
          hasVerticalScroller: YES,
          contentView: SC.TemplateView.extend({
              templateName: 'articlelist',
              layerId: 'articlelist',

              init: function() {
                  sc_super();
                  this.invokeLast(function() {
                      this.notifyPropertyChange("frame");
                  });
              } //end init()
          })
    }) // end scrollView
  }) // end MainPane

}); // end mainPage


News.ArticleListView = SC.TemplateCollectionView.extend({
    contentBinding: 'News.articlesController'
}); // end ArticleListView

News.MoreButtonView = SC.TemplateView.extend({
    // Using a dot (.) in the content binding path
    // references the local (this) scope as opposed
    // to the global scope.
    contentBinding: ".parentView.content",

    mouseDown: function(evt) {
        return YES;
    },

    mouseUp: function(evt){
       SC.Logger.log("Content clicked: "+this.getPath("content.title"));
        News.panelController.set("content", this.get("content"));
        News.panelController.openPanel();
        return YES;
    }, // end mouseDown

    touchStart: function(touch) {
        return this.mouseDown(touch);
    },

    touchEnd: function(touch) {
        return this.mouseUp(touch);
    }
}); // end MoreButtonView

News.ArticlePanel = SC.PanelPane.extend({
    layout: { top:60, bottom:60, left: 60, right:60, centerX: 0, centerY: 0 },
    contentView: SC.View.extend({

        childViews: "topToolbar articleView".w(),

        topToolbar: SC.ToolbarView.design({
            layout: { top: 0, height: 40, left: 0, right: 0 },
            childViews: "close titleLabel".w(),
            close: SC.ButtonView.design({
              layout: { right: 7, centerY: 0, height: 24, width: 100 },
              title: "Close",
              target: News.panelController,
              action: "closePanel"
            }), // end close

            titleLabel: SC.LabelView.design({
                  layout: { centerY: 0, height: 24, left: 7, width:200},
                  controlSize: SC.LARGE_CONTROL_SIZE,
                  fontWeight: SC.BOLD_WEIGHT,
                  valueBinding: "News.panelController.content.title"
            }) // end titleLabel


        }),

        articleView: SC.ScrollView.extend({
            layout: {top:40},
            classNames: "article-body".w(),
            contentView: SC.StaticContentView.design({
                contentBinding: "News.panelController.content.body"
            }) // end contentView
        }) // end articleView
    }) // end contentView

}); // end ArticlePanel
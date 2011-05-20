News.ArticleGridView = SC.GridView.extend({
  columnWidth: 200,
  rowHeight: 230,
  contentBinding: 'News.articlesController',
  exampleView: SC.View.extend({
    useStaticLayout: NO,
    childViews: 'moreButton'.w(),

    init: function() {
        sc_super();

        if(SC.browser.isiPhone || SC.browser.isiPod) {
            this.set("columnWidth", 630);
        }

    },
    render: function(context) {
      var content = this.get('content');
      context.push('<div class="article"><h1 class="article-title-grid">%@</h1>'.fmt(content.get('title')));

      var author = content.get('author');
      var publishedDate = content.get('publishedDate');
      context.push('<p class="article-byline">%@ - %@</p>'.fmt(author, publishedDate));

      var description = content.get('description');
      context.push('<div class="article-description">%@</div>'.fmt(description));
      context.push('</div>');

      return sc_super();
    },


    moreButton: SC.ButtonView.design({
      layout: { right: 7, bottom:7, centerY: 0, height: 24, width: 100 },
      title: "_More",
      localize: YES,
      contentBinding: ".parentView.content",

      mouseDown: function(evt) {
          return YES;
      },

      mouseUp: function(evt){
         // SC.Logger.log("Content clicked: "+this.getPath("content.title"));
         //  News.panelController.set("content", this.get("content"));
         //  return YES;

        News.panelController.set('content', this.get('content'));
        News.statechart.sendAction('showPanel');
        return YES;
      }, // end mouseDown

      touchStart: function(touch) {
          return this.mouseDown(touch);
      },

      touchEnd: function(touch) {
          return this.mouseUp(touch);
      }
    })
  })
});


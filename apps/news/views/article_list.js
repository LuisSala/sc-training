News.ArticleListView = SC.StackedView.extend({
  contentBinding: 'News.articlesController',
  exampleView: SC.View.extend({
    useStaticLayout: YES,
    childViews: 'moreButton'.w(),

    render: function(context) {
      var content = this.get('content');
      context.push('<h1>%@</h1>'.fmt(content.get('title')));

      var author = content.get('author');
      var publishedDate = content.get('publishedDate');
      context.push('<p class="item-byline">%@ - %@</p>'.fmt(author, publishedDate));

      var description = content.get('description');
      context.push('<div class="item-description">%@</div>'.fmt(description));

      return sc_super();
    },

    moreButton: SC.View.extend({
      contentBinding: '.parentView.content',
      classNames: 'item-more'.w(),

      useStaticLayout: YES,

      render: function(context) {
        context.push("More…");
      },

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
      } // end mouseDown
    })
  })

});


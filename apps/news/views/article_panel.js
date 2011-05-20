News.ArticlePanel = SC.PanelPane.extend({
    layout: { top:10, bottom:10, left: 10, right:10, centerX: 0, centerY: 0 },
    contentView: SC.View.extend({

        childViews: "topToolbar articleView".w(),

        topToolbar: SC.ToolbarView.design({
            layout: { top: 0, height: 30, left: 0, right: 0 },
            childViews: "close titleLabel".w(),
            close: SC.ButtonView.design({
              layout: { right: 7, centerY: 0, height: 24, width: 100 },
              title: "_Close",
              localize: YES,
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
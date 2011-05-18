// ==========================================================================
// Project:   News.panelController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
News.panelController = SC.ObjectController.create(
/** @scope News.panelController.prototype */ {

  openPanel: function() {
      SC.Logger.log("Opening panel for: "+this.getPath("content.title"));

      var panel = News.ArticlePanel.create().append();
  }

}) ;

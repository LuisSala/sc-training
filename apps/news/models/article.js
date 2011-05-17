// ==========================================================================
// Project:   News.Article
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
News.Article = SC.Record.extend(
/** @scope News.Article.prototype */ {

    title: SC.Record.attr(String),
    url: SC.Record.attr(String),
    author: SC.Record.attr(String),
    description: SC.Record.attr(String),
    publishedDate: SC.Record.attr(String),
    body: SC.Record.attr(String)


}) ;

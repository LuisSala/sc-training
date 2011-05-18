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
    primaryKey: "link",

    title: SC.Record.attr(String),

    url: SC.Record.attr(String, {key:'feedburner:origLink'}),

    author: SC.Record.attr(String, { key: 'dc:creator' }),

    description: SC.Record.attr(String),

    date: SC.Record.attr(Object, { key: 'y:published' }),

    publishedDate: function(){
            var published = this.get("date");
            return published['month']+'/'+published['day']+'/'+published['year'];
        }.property().cacheable(),

    body: SC.Record.attr(String, {key: 'content:encoded'})


}) ;

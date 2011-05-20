// ==========================================================================
// Project:   News.Article Unit Test
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News module test ok equals same stop start */

var article ;
var store;

var articleHash = {
    "link": "http:\/\/feeds.mashable.com\/~r\/Mashable\/~3\/nuv7KuWfogM\/",
    "y:id": {
        "value": "http:\/\/mashable.com\/?p=621077",
        "permalink": "false"
    },
    "feedburner:origLink": "http:\/\/mashable.com\/2011\/05\/18\/killer-robots\/",
    "slash:comments": "1",
    "wfw:commentRss": "http:\/\/mashable.com\/2011\/05\/18\/killer-robots\/feed\/",
    "description": "This is the description",
    "comments": "http:\/\/mashable.com\/2011\/05\/18\/killer-robots\/#comments",
    "dc:creator": "Jolie O'Dell",
    "y:title": "Killer Robots Coming Soon To a TV Near You [VIDEO]",
    "mash:thumbnail": "<img width=\"137\" height=\"85\" src=\"http:\/\/8.mshcdn.com\/wp-content\/uploads\/2011\/05\/killer-robots-141x88.jpg\" class=\"attachment-137x9999\" alt=\"killer-robots\" title=\"killer-robots\"\/>",
    "content:encoded": "This is the content",
    "title": "Killer Robots Coming Soon To a TV Near You [VIDEO]",
    "category": ["Television", "mainstream", "tech", "technology", "grant imahara", "killer robots", "mythbusters", "robots", "science channel"],
    "guid": {
        "isPermaLink": "false",
        "content": "http:\/\/mashable.com\/?p=621077"
    },
    "pubDate": "Thu, 19 May 2011 01:04:17 +0000",
    "y:published": {
        "hour": "1",
        "timezone": "UTC",
        "second": "17",
        "month": "5",
        "minute": "4",
        "utime": "1305767057",
        "day": "19",
        "day_of_week": "4",
        "year": "2011"
    }

    };

module("Test Article record", {
  setup: function() {

    store = SC.Store.create({commitRecordsAutomatically: YES});
    article = store.createRecord(News.Article, articleHash);

  },
  teardown: function() {
    article = null; // reset
    store = null;
 }
});

// TODO: Replace with real unit test for Article
test("Test News.Article date is properly formatted", function() {
  var expected = "5/19/2011";
  var result   = article.get("publishedDate");
  equals(result, expected, "publishedDate should equal "+expected);
});


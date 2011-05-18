// ==========================================================================
// Project:   News.FeedDataSource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals News */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

sc_require('models/article');

//News.ARTICLE_QUERY = SC.Query.local(News.Article);
News.ARTICLE_QUERY = SC.Query.remote(News.Article, {query: "http://www.mashable.com"});

News.FeedDataSource = SC.DataSource.extend(
/** @scope News.FeedDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {

    // TODO: Add handlers to fetch data for specific queries.  
    // call store.dataSourceDidFetchQuery(query) when done.

    var url = "/feed?_id=cfe79b93ed2e40b787f985c48c28826e&_render=json&url="+ encodeURI(query.query);
    SC.Request.getUrl(url).header({'Accept':'application/json'}).json().notify(this, 'didFetchFeed', store, query).send();

    return YES ; // return YES if you handled the query
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  },

    didFetchFeed: function(response, store, query) {

	  if (SC.ok(response)) {

		  var results = response.get('body');

		  var count = results.count;
		  SC.Logger.log("didFetchFeed: count = "+ count);
          var items = results.value.items;

          var storeKeys = store.loadRecords(News.Article, items);

          // This is required for remote queries but not local.
		  store.loadQueryResults(query, storeKeys);

		  store.dataSourceDidFetchQuery(query);
	  } else {
		  store.dataSourceDidErrorQuery(query, response);
	  }// end if-else
  } // end didFetchFeed()
  
}) ;

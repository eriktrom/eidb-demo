/* global EIDB, RSVP */

QUnit.config.testTimeout = 4000;

RSVP.configure('onerror', function(error) {
  console.log('RSVP onerror', error, error.message + '', error.stack);
});


function deleteDB(name, callback) {
  console.log("attempting to delete DB", name);

  var req = window.indexedDB.deleteDatabase(name);
  req.onsuccess = function (event) {
    console.log("deleted DB", name);
    if (callback) { callback(event); }
  };
  req.onerror = function (event) {
    console.log("failed to delete DB", name);
    if (callback) { callback(event); }
  };

  return req;
}

module("Basic Test", {
  teardown: function() {
    stop();
    deleteDB("myDB", function() {
      start();
    });
  }
});

test("Index DB works", function() {
  expect(1);

  stop();
  EIDB.open("myDB").then(function(db) {
    start();
    ok(db instanceof EIDB.Database, "Recieved an EIDB.Database object");

    db.close();
  });
});

function ajax(url, options){
  return RSVP.Promise(function(resolve, reject){
    options.success = function(data) {
      // console.log(data);
      resolve(data);
      // Ember.run(null, resolve, data);
    };

    options.error = function(jqXHR, textStatus, errorThrown) {
      // Construct a serialization-friendly error object
      //   This value should survive the postMessage transport used to communicate to/from cards
      var error = {
        type: textStatus,
        status: jqXHR.status,
        responseText: jqXHR.responseText,
        headers: jqXHR.getAllResponseHeaders()
      };
      // Ember.run(null, reject, error);
    };

    $.ajax(url, options);
  });
}

asyncTest("something", function() {
  expect(5);



  function query() {
    var fakeGithub = true;
    return RSVP.Promise(function(resolve, reject) {
      if (fakeGithub) {
        resolve(window.someData);
      } else {
        ajax("https://api.github.com/users/trombom/events", {})
        .then(function(data) {
          resolve(data);
        });
      }
    });
  }

  query().then(function(data) {
    start();
    console.log("Hello", data);
    ok(true, "yes its true");

    stop();
    EIDB.open("myDB", 1, function(db) {
      start();
      ok(true);
      db.createObjectStore("events", { keyPath: "id" });
      stop();
    }).then(function(db) {
      start();
      ok(true);

      var tx = db.transaction(["events"], "readwrite"),
          store = tx.objectStore("events");


      var lastItemId;
      for (var i = 0; i < data.length; i++) {
        store.add(data[i]);
        if ((i + 1) === data.length) {
          ok(true);
          console.log("Last", data[i]);
          lastItemId = data[i].id;
        }
      }

      stop();
      store.get(lastItemId).then(function(item) {
        start();
        equal(item.id, lastItemId);
        console.log("Last, again", item);
        db.close();
      });
    });
  });
});
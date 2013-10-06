/* global EIDB, RSVP */

QUnit.config.testTimeout = 1000;

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


asyncTest("create an object store", function() {
  expect(4);

  EIDB.open("myDB", 1, function(db) {
    start();
    var store = db.createObjectStore("books", { keyPath: "id" });
  }).then(function(db) {
    var tx = db.transaction(["books"], "readwrite"),
        store = tx.objectStore("books");

    var req = store.add({id: 1, name: "poodr"}).then(function(event) {
      store.add({id: 2, name: "angular js beginners guide"});
    });

    stop();
    req.then(function(event) {
      store.get(1).then(function(obj) {
        start();

        equal(obj.id, 1);
        equal(obj.name, "poodr");

        stop();
        store.get(2).then(function(obj) {
          start();
          equal(obj.id, 2);
          equal(obj.name, "angular js beginners guide");
          db.close();
        });
      });
    });
  });
});

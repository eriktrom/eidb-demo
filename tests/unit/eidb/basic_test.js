/* global EIDB, RSVP */

RSVP.configure('onerror', function(error) {
  console.log('RSVP onerror', error, error.message + '', error.stack);
});


function deleteDB(name, callback) {
  console.log("attempting to delete DB", name);

  var req = window.indexedDB.deleteDatabase(name);
  req.onsuccuss = function(event) {
    console.log("deleted DB", name);
    if (callback) { callback(event); }
  };
  req.onerror = function(event) {
    console.log("failed to delete DB", name);
    if (callback) { callback(event); }
  };
}

module("Basic Test");

test("Index DB works", function() {
  expect(1);

  stop();
  EIDB.open("foo").then(function(db) {
    start();
    ok(db instanceof EIDB.Database, "Recieved an EIDB.Database object");

    db.close();
  });
});


asyncTest("create an object store", function() {
  expect(2);

  EIDB.open("myDB", 1, function(db) {
    start();
    var store = db.createObjectStore("books", { keyPath: "id" });
  }).then(function(db) {
    var tx = db.transaction(["books"], "readwrite"),
        store = tx.objectStore("books");

    var req = store.add({id: 1, name: "poodr"}).then(function(event) {
      store.add({id: 2, name: "angular js beginners guide"});
    });

    req.then(function(event) {
      store.get(1).then(function(obj) {
        start();

        equal(obj.id, 1);
        equal(obj.name, "poodr");
      });
    });
  });
});

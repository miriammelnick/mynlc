// Code to create object stores and add data
(function(){
  $.indexedDB("databaseName", {
    "schema": {
      "1": function(versionTransaction){
        versionTransaction.createObjectStore("objectStore1");
      },
      "2": function(versionTransaction){
        versionTransaction.createObjectStore("objectStore2");
      }
    }
  }).transaction(["objectStore1", "objectStore2"]).then(function(){
    log("Transaction completed");
  }, function(){
    log("Transaction aborted");
  }, function(t){
    log("Transaction in progress");
    t.objectStore("objectStore1").add({
      "valueProp": "val",
      "anotherProp": 2
    }, 1).then(function(){
      log("Data added");
    }, function(){
      log("Error adding data");
    });
  });
})
var db = null;
function html5_storage_support() {
  try {
    return 'localStorage' in window && window['localStorage'] == null;
  } catch (e) {
    return false;
  }
}
//CHECK TO SEE IF THE BROWSER IS COMPATIBLE 
if (!html5_storage_support) {
  alert("This Might Be a Good Time to Upgrade Your Browser or Turn On Jeavascript");
} else {
  

  var Contacts = {
    index: 1,

    init: function() {},

    storeAdd: function(entry) {},
    storeEdit: function(entry) {},
    storeRemove: function(entry) {},

    tableAdd: function(entry) {},
    tableEdit: function(entry) {},
    tableRemove: function(entry) {}
};
Contacts.init();

  //OPEN AND OR CREATE THE DATABASE ON THE USERS MACHINE
	db = openDatabase("MyNLC", "1", "My Personal Contacts", 100000);
  
	function storeMyContact(id) {
		var fullname	= document.getElementById('fullname').innerHTML;
		var phone		= document.getElementById('phone').innerHTML;
		var email		= document.getElementById('email').innerHTML;
		localStorage.setItem('mcFull',fullname);
		localStorage.setItem('mcPhone',phone);
		localStorage.setItem('mcEmail',email);
	}
  //GET STORED VALUES FROM KEYS TO DEFINE JAVASCRIPT VALUES OR DEFINE IF THEY DO NOT EXIST
  function getMyContact() {
    if ( localStorage.getItem('mcFull')) {
      var fullname	= localStorage.getItem('mcFull');
      var phone		= localStorage.getItem('mcPhone');
      var email		= localStorage.getItem('mcEmail');
    }
    else {
      var fullname	= 'Click And Enter A Name';
      var phone		= 'Click And Enter A Phone Number';
      var email		= 'Click And Enter An Email Address';
    }
    document.getElementById('fullname').innerHTML = fullname;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById('email').innerHTML = email;
  }

  function clearLocal() {
    clear: localStorage.clear(); 
    return false;
  }
}
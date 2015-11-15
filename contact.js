var Contact ={}
var Util=require('./util')
Contact.parseName=function(str){
	var arr=str.split(",");
	return arr[0];
}
Contact.parseNumber=function(str){
	var arr=str.split(",");
	return arr[1];
}
Contact.createContact=function(str){
	var arr=str.split(",");
	var newcontact={"name":arr[0],"number":arr[1]};
	return newcontact;
}
Contact.loadContacts=function(done){
	var jsonfile=require('jsonfile')
	var util=require('util')

	var file=Util.getDataPath()
	jsonfile.readFile(file,function(err,obj){
		done(err,obj);
	})
}
Contact.saveContacts=function(contacts,done){
	var jsonfile=require('jsonfile')

	var file=Util.getDataPath()
	jsonfile.writeFile(file,contacts,function(err){
		done(err);
	})
}
Contact.saveContact=function(contact,done){
	Contact.loadContacts(function(err,data){
		data.push(contact)

		Contact.saveContacts(data,function(err){
			done(err);
		})
	})
}
Contact.findContacts=function(name,done){
	Contact.loadContacts(function(err,data){

		function filterByName(obj){

			if(name.localeCompare(obj.name)==0)
				return true;
			else
				return false;
		}

		var foundContacts=data.filter(filterByName);
		done(err,foundContacts);
	})
}
module.exports=Contact
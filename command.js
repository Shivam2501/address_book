var Contact = require('./contact')
var Command={};

Command.getOperation=function(){
	return process.argv[2];
}

Command.getOperationData=function(){
		return process.argv[3];
}
Command.add=function(done){
	if(Command.getOperation().localeCompare("add")==0){
		var data=Contact.createContact(Command.getOperationData());
		Contact.saveContact(data,function(err){
			done(err)
		})

	}
}
Command.find=function(done){
	if(Command.getOperation().localeCompare("find")==0){
		Contact.findContacts(Command.getOperationData(),function(err,data){
			if(err){
				return done(err)
			}
			data.forEach(function(contact){
				console.log(contact.name,contact.number)
			})

			done(null,data)
		})
	}
}
module.exports=Command
var Util={}
var path=require('path')

Util.getHomeDirectory=function(){
	return process.env.HOME
}
Util.getDataPath=function(){
	return path.join(this.getHomeDirectory(),'data.json')
}
module.exports=Util
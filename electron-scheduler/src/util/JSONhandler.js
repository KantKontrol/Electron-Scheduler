
var fs = window.require("fs");




const JSONhandler = {
    path: "./public/assets/appointments.json",
    loadData: function(cb){
        return fs.readFile(this.path, "utf8", cb);
    },
    writeData: function(cb){
        
    }
}


export default JSONhandler;
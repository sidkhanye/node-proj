function theclass(){

}

theclass.prototype = {
    method: function(){
        return 'Just returned an object';
    }
};

var _theclass = new theclass();

module.exports = _theclass;
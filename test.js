var Test = function(){
    var num1 = 1;
    var num2 = 2;

    var plus = function(){
        return num1 + num2;
    }

    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        alert(plus());
        alert(param2);
    }
}

var Test2 = function(){
    this.test = "1";
    this.alertStr = function(paran, param2){
        alert("난 테스트2의 alertStr이예요");
    }
}
var obj = {
    test : "1",
    test1 : "2";
};

alert(obj.test);
alert(obj.test1);

/*
obj["test"] = "1";
obj.test = "1";
*/
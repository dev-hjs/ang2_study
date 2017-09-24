var Person = function(p_name){
    var name = p_name;
    var age = p_age;
    var gender = p_gender;
    var address = p_address;

    this.writePersonInfo = funtion(){
        var str = "이름 : " + name;
        str += "나이 : " + age;
        str += "성별 : " + gender;
        stt +="주소 : " + address;
        document.write(str);
        }

        this.setName = function(p_naame){
            name = p_name;
        }
        this.getName = function(){
            return name;
        }
        this.play = function(){
            document.write("<br>" + name + "님께서 놀고 있습니다.");
        }
        /*
    this.alertName = function(){
        alert(this.name);
    }
    */
}

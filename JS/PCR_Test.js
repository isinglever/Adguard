var d = new Date();

d.setDate(d.getDate() - 1);
d.setHours(10);
var str = d.toISOString();

var d1 = new Date();
d1.setDate(d1.getDate() - 1);
d1.setHours(18);
var str1 = d1.toISOString();

var obj = {
  "errcode" : "0",
  "data" : [
    {
      "hscysj" : str,
      "hsjcsj" : str1,
      "hsjcjq" : "阴性",
      "hsjcjgmc" : "成都禾力升医学检验实验室",
      "inDay7" : true,
      "xm" : "***",
      "zjhm" : "******************",
      "hsjcjg" : "阴性"
    }
  ],
  "requestId" : null,
  "errmsg" : "SUCCESS"
};

$done({body: JSON.stringify(obj)});

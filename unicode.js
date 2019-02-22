window.addEventListener("load",function()
{

   /* console.log('A'.length);
    console.log("dziala");
    if('A' == '\u0041')
    {
        console.log("dziala \u0677");
        var b="0x";
        b=b.concat("062E");
        console.log(b);
        console.log(b);
        console.log(String.fromCharCode(b));

    }else
    {
        console.log("nie dziala");
    }*/
    //Arabic
    var a="\\u";
    var leter=[0x0622,0x064A];
    var specialLetter=[0x0600,0x0621,0x064B,0x06FF];
    var b=0x0622;
    for(;b<0x064A;b++)
    {
        console.log(String.fromCharCode(b));

    }
    //Cheneses
  var letterChineses=[35830,36156];
  var a="诶";
  console.log("诶");
  console.log(a.codePointAt(0));
  a=a.codePointAt(0);
  b="贼德";
  console.log(b.codePointAt(0));
  b=b.codePointAt(0);
  for(;a<b; a++)
  {
    console.log(String.fromCharCode(a));
  }
});
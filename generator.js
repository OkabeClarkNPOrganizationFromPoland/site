window.addEventListener("load",function()
{
    var inputText=document.getElementsByTagName("input")[0];
    console.log(inputText);
    inputText.setAttribute("disabled","disabled");
    var latinLanguage=document.getElementById("latin");
    console.log(latinLanguage);
    var arabicLanguage,greekLanguage,utfLanguage,chinesesLanguage;
    var scope={
        lengthScope:"",
        specialChar:[],
        language:"",
        scopeArray:[],
        randomLength:0,
        password:"",
        specialCharActiv:false,
        numberA:0,
        numberB:0,
        con:[],
        Activity:function()
        {
            console.log("xDXDXDXD");
            var inputLength=document.getElementById("langth");
            var langthSpecial=document.getElementById("langthSpecial");
            console.log(inputLength);
            console.log(langthSpecial);
            this.checkedThis(inputLength.value,langthSpecial.value);
        //    this.checkedNumber(inputLength.value,langthSpecial.value);
        //    this.checkedEmpty(inputLength.value,langthSpecial.value);
        },
        checkedSize:function(tab)
        {
            alert(tab);




        },
        checkedArray:function()
        {
                var choice=Math.round(Math.random()*10); 
                var beginner,end;
                var beginnerSpecial,endSpecial;
                if((choice%2==0)&&(this.specialCharActiv==true))
                {
                  console.log("_.1._");
                  beginner=this.scopeArray[0];
                  end=this.scopeArray[1];
                  beginnerSpecial=this.specialChar[this.specialChar.length-1];
                  endSpecial=this.specialChar[this.specialChar-specialChar]; 
                  console.log("begin "+beginnerSpecial+" dlugosc "+beginnerSpecial.length);
                  console.log("special "+this.specialChar.length+" scope "+this.scopeArray.length);
                }else if((choice%2!=0)&&(this.specialCharActiv==true))
                {
                    console.log("_.2._");
                    beginer=this.scopeArray[3];
                    end=this.scopeArray[4];
                    beginnerSpecial=this.specialChar[this.specialChar.length-1];
                    endSpecial=this.specialChar[this.specialChar-specialChar];
                    console.log("begin "+beginnerSpecial+" dlugosc "+beginnerSpecial.length);
                    console.log("special "+this.specialChar.length+" scope "+this.scopeArray.length);
                }else if((choice%2==0)&&(this.specialCharActiv==false))
                {
                    console.log("_.3._");
                    beginner=this.scopeArray[0];
                    end=this.scopeArray[1];
                }else if((choice%2!=0)&&(this.specialCharActiv==false))
                {
                    console.log("_.4._");
                    beginer=this.scopeArray[3];
                    end=this.scopeArray[4];
                }
        },
        checkedThis:function(a,b)
        {
            console.log(a+" "+b);
            console.log(a.length);
            console.log(a.charCodeAt(0)+" null");
                    console.log("sprawdzanie a "+this.checkedNumber(a));
                    console.log("sprawdzanie b "+this.checkedNumber(b));
                    this.checkedArray();
                    if(this.specialCharActiv==true)
                    {
                        console.log("special char: "+this.specialChar+" scopeArray: "+this.scopeArray);
                        this.con=this.scopeArray.concat(this.specialChar);
                        this.checkedSize(this.scopeArray);
                        this.checkedSize(this.specialChar);
           //             this.con.sort();
                        this.checkedSize(this.con.sort());
                        console.log("tab conncat "+this.con);
                    if(((a.length==0)||(a.charCodeAt(0)==32))&&(this.checkedNumber(b)))
                    {
                        this.numberB=b;
                        this.numberA=this.randomLengthFunction();
                        console.log("NaN a");
                        this.genePass();
                    }else if((this.checkedNumber(a))&&((b.length==0)||(b.charCodeAt(0)==32)))
                    {
                        this.numberA=a;
                        console.log("NaN b");
                        this.numberB=this.randomLengthFunction();
                        this.genePass();
                    }else if (this.checkedNumber(a)&&this.checkedNumber(b))
                    {
        
                        console.log("AWESOME");
                        this.genePass();
        
                    }else if (((a.length==0)||(a.charCodeAt(0)==32))&&((b.length==0)||(b.charCodeAt(0)==32)))
                    {
                        console.log("OMG");
                        this.numberA=this.randomLengthFunction();
                        this.numberB=this.randomLengthFunction();
                        this.genePass();
                    }
                }
                else
                {
                    console.log(this.language+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                    console.log("tablica "+this.scopeArray.length);
                    console.log("tablica "+this.scopeArray);
                    this.randomLength=this.randomLengthFunction();
                    console.log(this.randomLength);
                    if((a.length==0)||(a.charCodeAt(0)==32))
                    {
                        this.numberB=b;
                        this.numberA=this.randomLengthFunction();
                        console.log("NaN a");
                        this.genePass();
                    }else if(this.checkedNumber(a))
                    {
                        this.numberA=a;
                        console.log("NaN b");
                        this.numberB=this.randomLengthFunction();
                        this.genePass();
                    }else if (!(this.checkedNumber(a)))
                    {
                       console.log("nie jest liczba jest znak");
                       this.genePass();
                    }
                }
        },
        genePass:function(tab)
        {
            var str="";
            for(var i=0; i<this.randomLength;i++)
            {
                var number=Math.round(Math.random()*10);
                console.log("num "+number);
                if(number%2==0)
                    {

                        str+=String.fromCodePoint(65);
                        console.log("str 1 "+String.fromCodePoint(65));
                    }
                    else
                    {
                        str+=String.fromCodePoint(77);
                        console.log("str 0 "+String.fromCodePoint(77));
                    }
                  
        }
                console.log(str+" nowe haslo");     
        },
            /*
                if((info.aLength==info.bLength)&&(info.aLength==0)||((a.charCodeAt(0)==32)&&(b.charCodeAt(0)==32)))
                {
                    console.log("this");
                    this.numberA=this.randomLengthFunction();
                    this.numberB=this.randomLengthFunction();
                    console.log(this.numberB+" "+this.numberA);
                }
                else if((a.charCodeAt(0)==32)&&(b.charCodeAt(0)!=32))
                {
                    this.numberB=this.randomLengthFunction();
                    this.numberA=a;
                    console.log(this.numberA);
                    console.log("no b");


                }
                else if((a.charCodeAt(0)!=32)&&(b.charCodeAt(0)==32))
                {
                    console.log("no a");
                    this.numberA=this.randomLengthFunction();
                    this.numberA=a;
                    console.log("A "+this.numberA);
                    console.log(this.numberB);
                }
                else
                {
                    console.log("hhh");
                   if((this.checkedNumber(a)==true)&&(this.checkedNumber(b)))
                   {
                    console.log(this.numberA=a);
                    console.log(this.numberB=b);
                   }
                   else
                   {
                    alert("xd");
                   }
                }
        }, */ 
        randomLengthFunction:function()
        {
            var rand=Math.round(Math.random()*10);
            return rand;
        },
     
        checkedNumber:function(a)
        {
            var aLength=a.length;
            console.log("typof "+typeof a);
            var j=0;
            console.log("długość i liczba "+aLength+" "+a);
               for(var i=0;i<aLength;i++)
           {                   
                console.log("pętla działa");
                if((a.codePointAt(i)>=48)&&((a.codePointAt(i)<=57)))
                {
                    console.log("xD "+j);
                   j++;
                }
                else
                {
                    console.log("if jest false");
                }
            }
                if(aLength==j)
                {
                    console.log("liczba jest dobra");
                    return true;
                }
                 else
                {                    
                    console.log("liczba jest chujowa");
                    return false;
                }
           },
           ArrayEmpty:function()
           {
             console.log("<-------_====================================================_____________________________________+===== = "+this.specialChar);
             console.log("<-------_====================================================_____________________________________+===== = "+this.specialChar.length);
                for(var i=0; i<=this.specialChar.length;i++)
             {
                console.log(i);
                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                this.specialChar.shift();
                console.log(this.specialChar.shift());
             }
             console.log("<-------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&^@@@@ ---------------------------> "+this.specialChar);
             console.log("dlugosc "+this.specialChar.length);
           }
        /*
        genePass:function()
        {
            var str="";
            var i=0;
            console.log("długość pętli "+this.randomLength);
                while(i<this.randomLength)
                {
                    var rand=Math.round(Math.random()*10);
                    console.log("rand "+rand);
                    console.log(this.language+" język i długość tablicy "+this.scopeArray.length);
                    if(rand<this.scopeArray.length-1)
                    {
                        console.log("długość tablicy "+this.scopeArray.length);
                        console.log("zakres "+this.scopeArray);
                        str+=this.scopeArray[rand];
                        console.log(str);
                        i++;
                        console.log("i: "+i);
                    }
                }
        },
        geneChar:function()
        {




        }    */
    };
    latinLanguage.addEventListener("click",function(event)
    {
          console.log("xd");
  //      event.preventDefault();
        if(latinLanguage.checked==true)
        {
            console.log("event checked");
            arabicLanguage.checked=false;
            greekLanguage.checked=false;
            utfLanguage.checked=false;
            chinesesLanguage.checked=false;
            scope.language="latin";
       //     scope.scopeArray=arraySpecialChar.concat(arrayLatinChar);
            scope.scopeArray=[65,90,97,122];
            scope.specialChar=[32,64,91,96,123,126];
            console.log(scope.scopeArray);
            console.log(String.fromCodePoint(65));
        }
        else
        {
            console.log("false event checked");
        }
    
    
    });
    arabicLanguage=document.getElementById("arabic");
    arabicLanguage.addEventListener("click",function(event)
    {
          console.log("xd");
  //      event.preventDefault();
  if(arabicLanguage.checked==true)
  {
      console.log("event checked");
      latinLanguage.checked=false;
      greekLanguage.checked=false;
      utfLanguage.checked=false;
      chinesesLanguage.checked=false;
      scope.language="arabic";
      scope.ArrayEmpty();
      scope.scopeArray=[0x0622,0x64A];
      var i=0x0622;
      while(i<=0x64A)
      {
       i++;
        console.log(i+" "+String.fromCodePoint(i));
      }
       inputText.value=String.fromCodePoint(i-2);
  }
  else
  {
      console.log("false event checked");
  }

    
    });
    greekLanguage=document.getElementById("greek");
    greekLanguage.addEventListener("click",function(event)
    {
        console.log("xd");
 //       event.preventDefault();
    if(greekLanguage.checked==true)
 {
     console.log("event checked");
     arabicLanguage.checked=false;
     latinLanguage.checked=false;
     utfLanguage.checked=false;
     chinesesLanguage.checked=false;
     scope.language="greek";
     scope.specialChar=[880,912,938,1023];
     scope.scopeArray=[913,937];
     var i=0x0391;
     while(i<=0x03FF)
     {
        i++;
        console.log(i+" "+String.fromCodePoint(i));
     }
 }
 else
 {
     console.log("false event checked");
 }

    
    
    });
    utfLanguage=document.getElementById("utf8");
    utfLanguage.addEventListener("click",function(event)
    {
        console.log("xd");
  //      event.preventDefault();
    
  if(utfLanguage.checked==true)
  {
      console.log("event checked");
      arabicLanguage.checked=false;
      greekLanguage.checked=false;
      latinLanguage.checked=false;
      chinesesLanguage.checked=false;
      scope.language="utf";
      scope.scopeArray=[0,16000];
      scope.ArrayEmpty();

  }
  else
  {
      console.log("false event checked");
  }

    
    });
    chinesesLanguage=document.getElementById("chinese");
    chinesesLanguage.addEventListener("click",function(event)
    {
        console.log("xd");
  //      event.preventDefault();
    
  if(chinesesLanguage.checked==true)
  {
      console.log("event checked");
      arabicLanguage.checked=false;
      greekLanguage.checked=false;
      utfLanguage.checked=false;
      latinLanguage.checked=false;
      scope.language="chineses";
      scope.ArrayEmpty();
      scope.scopeArray=[0x2E80,0x2EF3];
      var i=0x2E80;
      var str="";
      while(i<=0x2EF3)
      {
        i++;
        console.log(i+" "+String.fromCodePoint(i));
        str=String.fromCodePoint(i);
        console.log(str);
      }
      inputText.value=str;
  }
  else
  {
      console.log("false event checked");
  }

    
    });
    console.log(arabicLanguage+" "+greekLanguage+" "+utfLanguage+" "+chinesesLanguage);

    var buttonClick=document.getElementsByTagName("button")[0];
    console.log("buttonClick "+buttonClick );
    buttonClick.addEventListener("click",function()
    {   
        console.log("validation");
        console.log("scope "+scope.language);
       if((scope.language=="latin")||(scope.language=="arabic")||(scope.language=="chineses")||(scope.language=="utf")||(scope.language=="greek"))
        {
            inputText.removeAttribute("disabled");
            scope.Activity();
        }
        else
        {
            console.log("chuj cio w dupe");
        }
    });
    var specialCharBox=document.getElementById("specialChar");
    var langthSpecial=document.getElementById("langthSpecial");
    langthSpecial.setAttribute("disabled","disabled");
    console.log(specialCharBox);
    specialCharBox.addEventListener("click",function()
    {

       var specialCharBox=document.getElementById("specialChar");
       if(specialCharBox.checked==true)
       {
         langthSpecial.removeAttribute("disabled");
         scope.specialCharActiv=true;
         console.log("aktywne "+scope.specialCharActiv);
       }
        else
       {
        langthSpecial.setAttribute("disabled","disabled");
        scope.specialCharActiv=false;
        console.log("aktywne "+scope.specialCharActiv);
       }
    });
});
window.addEventListener("load",function()
{  
var inputText=document.getElementsByTagName("input")[0];
console.log(inputText);
inputText.setAttribute("disabled","disabled");
var latinLanguage=document.getElementById("latin");
console.log(latinLanguage);
var arabicLanguage,greekLanguage,utfLanguage,chinesesLanguage;
var scope={
    specialChar:[],
    language:"",
    scopeArray:[],
    NumberA:0,
    NumberB:0
};
var Random={
    randomLength:(function()
    {
        var randomLenght=Math.round(Math.rand()*10);
        return randomLenght;
    }),
    randomLatino:function()
    {
        while(true)
        {
            var rand=Math.round(Math.random()*100);
            if(rand<=32)
            {
                return rand;
            }
        }
    },
    randomGreek:function()
    {
        while(true)
        {
            var rand=Math.round(Math.random()*100);
            if(rand<=24)
            {
                return rand;
            }
        }
    },
    randomLanguage:function(a)
    {
        if(a=="greek")
        {
            this.randomGreek();
        }
        else if(a=="latin")
        {
            this.randomLation();
        }
    },
    randomDifference:function(a)
    {
        if(a<10)
        {
            while(true)
            {
              ran=Math.round(Math.random()*10);  
                if((ran<10)&&(ran<a))
                {
                    break;
                }
                else
                {
                    console.log("a<10 blad");
                }

            }
        } else if((a<100)&&(a>10))
        {
            while(true)
            {
              ran=Math.round(Math.random()*100);  
                if((ran<10)&&(ran<a))
                {
                    break;
                }
                else
                {
                    console.log("a<100 && a>10 blad");
                }
            }
        }
        return ran;
    } 
};
    var arrayCreator=
    {
        tab:[],
        createArray:function(tab)
        {
            console.log(tab.length);
            var para={
                key:0,
                value:[],
                ranDifference:0
                    };
            var i=0;
            var j=2;
                console.log("xxxxx");
                console.log(tab.length);
                console.log("tablica "+tab);
            var iTab=0;
                    while(true)
                    {
                        console.log("iTab "+iTab);
                        if((tab[j]!=undefined)&&(tab[i]!=undefined))
                        {
                            this.tab[iTab]=Object.create(para);
                            this.tab[iTab].key=iTab;
                            this.tab[iTab].value=tab.slice(i, j);
                            console.log(tab[i+1]-tab[i]);
                            this.tab[iTab].ranDifference=tab[i+1]-tab[i];
                            console.log("ranDifference: "+this.tab[iTab].ranDifference);
                            console.log("j: "+j);
                            console.log("i: "+i);
                            console.log(this.tab);
                            i=j;
                            j+=2;
                        }
                        else if((tab[j]==undefined)&&(tab[i]!=undefined))
                        {      
                            this.tab[iTab]=Object.create(para);
                            this.tab[iTab].key=iTab; 
                            this.tab[iTab].value=tab.slice(i);
                            this.tab[iTab].ranDifference=tab[i+1]-tab[i];
                            console.log("ranDifference: "+this.tab[iTab].ranDifference);
                            console.log(tab.slice(i));
                            console.log("i: "+i);
                            console.log("j: "+j); 
                            console.log("kurwa");
                            break;
                        }
                        else if(tab[i]==undefined)
                        {
                            console.log("koniec");
                            break;
                        }
                        iTab++;
                    }
                    for(var t=0 in this.tab)
                    {
                        console.log("nowa tablica: "+Object.values(this.tab[t])+Object.keys(this.tab[t]));
                    }
        },
        clearArray:function()
        {
            console.log("claerArray");
            for(var t=0 in this.tab)
            {
                console.log("claerArray");
                if("key" in this.tab[t])
                {
                    this.tab[t].key=0;
                }
                if("value" in this.tab[t])
                {
                    this.tab[t].value=[0,0];
                } 
                if("ranDifference" in this.tab[t])
                {
                    this.tab[t].ranDifference=0;
                }
                console.log("nowa tablica: "+this.tab[t].key+" "+this.tab[t].value+" "+this.tab[t].ranDifference);
            }
        }
    }; 
        var Validation={
        validationComG:"is Good",
        validationComN:"is Not Good",
        checkedNumber:function(a)
        {
            var aLength=a.length;
            console.log("typof "+a);
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
                if((aLength==j)&&(aLength>0))
                {
                  //  return parseInt(a);
                  return true;
                }
                 else
                {                    
                    console.log("liczba jest chujowa");
                    return false;
                }
                //rozwazyc zmiane typu
           },
            test:function()
           {
               var inputLength=document.getElementById("langth");
               var inputSpecial=document.getElementById("langthSpecial");
               console.log(inputLength);
               console.log(inputSpecial);;
               console.log(this.checkedNumber(inputLength.value));
               console.log(this.checkedNumber(inputSpecial.value));
               console.log(this.checkedEmpty(inputLength.value));
               console.log(this.checkedEmpty(inputSpecial.value));
           },
           checkedEmpty:function(a)
           {
               console.log("debug!!!!!!!!!!!!!!!!!!!!!");
               console.log(a.length);
                if((a.length==0)||(a.codePointAt(0)==32))
                {
                    console.log("Empty "+this.validationComG+" lenght "+a.length);
                    return true;
                }
                else if(a.length)
                {
                    console.log("Empty "+this.validationComN);
                    return false;

                }
           },
           checkedNumberAndEmpty:function(a,b)
           {
               if(Active.specialCharActiv==true)
               {
                    if(((this.checkedNumber(a))&&(this.checkedNumber(b))))
                    {
                       scope.NumberA=a;
                       scope.NumberB=b;
                       arrayCreator.createArray(scope.scopeArray);
                       Pass.genePass(a,scope.scopeArray);
                       arrayCreator.clearArray();
                       arrayCreator.createArray(scope.specialChar);
                       Pass.genePass(b,scope.specialChar);;
                       arrayCreator.clearArray();
                       console.log("pass "+Pass.pass);
                       // TWORZ HASLO
                    }
                    else if(((this.checkedEmpty(a))&&(this.checkedEmpty(b))))
                    {

                        scope.NumberA=randomLanguage(scope.language); 
                        scope.NumberB=randomLanguage(scope.language);
                        console.log(scope.NumberA+" "+scope.NumberB);
                     // TWORZ HASLO
                    }
                    else if(((this.checkedEmpty(a))&&(this.checkedNumber(b))))
                    {
                        scope.NumberA=randomLanguage(scope.language); 
                        console.log("A: "+scope.NumberB);
                      // TWORZ HASLO
                    }else if(((this.checkedNumber(a))&&(this.checkedEmpty(b))))
                    {
                        scope.NumberB=randomLanguage(scope.language);
                        console.log("B: "+scope.NumberB);
                       // TWORZ HASLO
                    }
               }
                else
               {

                    if((this.checkedNumber(a)))
                    {
                        console.log("XXXXXXXXXXXXXXXXXXXXXXX");
                    }
                    else if(this.checkedEmpty(a))
                    {
                        scope.NumberA=randomLanguage(scope.language); 
                        console.log("A: "+scope.NumberA);                        
                    }
               }
           }
           
    };
    var Pass={
        pass:"",
        genePass:function(a,tab)
        {
            console.log("passssssssssssssssssssssss");
                //        str+=String.fromCodePoint(65);
            var i=0;
            var b=tab;
            console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB: "+b); 
          while(i<a)
          { 
            console.log("i: "+i);
            console.log("passssssssssssssssssssssss");
            var random=Math.round(Math.random()*10);
            console.log("random: "+random);
             /*   if(random%2==0)
                {
                    console.log(tab[0]);
                    this.pass+=String.fromCodePoint(tab[0]+random);
                }
                    else
                {
                    console.log(tab[0]);
                    this.pass  +=String.fromCodePoint(tab[2]+random);
                }    
                */
             if(random<5)
             {
                while(true)
                {
                    var ran=Random.randomDifference(arrayCreator.tab[0].ranDifference);
                    console.log("arrayCreator.tab[0].ranDifference: "+arrayCreator.tab[0].ranDifference);
                    if(ran<=arrayCreator.tab[0].ranDifference)
                    {
                        console.log("<5");
                        this.pass+=String.fromCodePoint(arrayCreator.tab[0].value[0]+ran);
                        console.log("ran: "+ran);  
                        var nam=arrayCreator.tab[0].value[0]+ran;
                        console.log("nam: "+nam);
                        console.log("to jest wartosc: "+arrayCreator.tab[0].value[0]+" "+ran);
                        console.log("type of arrayCreator.tab[0].value[0] "+typeof arrayCreator.tab[0].value[0]);
                        console.log("type of ran "+typeof ran);
                        console.log("to jest znak: "+String.fromCodePoint(nam));
                        console.log("i: "+i+" String: "+this.pass);
                        break;
                    }
                    else
                    {
                        console.log("<5");
                        var value=arrayCreator.tab[0].value[0]+ran;
                        console.log("ran: "+ran);
                        console.log("to jest wartosc: "+value);
                        console.log("nie powiodło się");
                        break;
                    }
                }
             } 
                else if(random==5)
             {
                while(true)
                {
                    var ran=Random.randomDifference(arrayCreator.tab[1].ranDifference);
                    if(ran<=arrayCreator.tab[1].ranDifference)
                    {
                        console.log("5");
                        console.log(arrayCreator.tab[1]);
                        console.log("ran: "+ran);
                        console.log("to jest wartosc: "+arrayCreator.tab[1].value[0]+" "+ran);
                        var nam=arrayCreator.tab[1].value[0]+ran;
                        console.log("nam: "+nam);
                        console.log("type of arrayCreator.tab[1].value[0] "+typeof arrayCreator.tab[1].value[0]);
                        console.log("type of ran "+typeof ran);
                        this.pass+=String.fromCodePoint(nam);
                        console.log("to jest znak: "+String.fromCodePoint(nam));
                        console.log("i: "+i+" String: "+this.pass);
                        break;
                    }
                    else
                    {
                        console.log("nie powiodło się");
                        console.log("5");
                        var value=arrayCreator.tab[1].value[0]+ran;
                        console.log("ran: "+ran);
                        console.log("to jest wartosc: "+value);
                        console.log("nie powiodło się");
                        break;
                    }
                }
             }
             else if(random>5)
             {
                while(true)
                {
                    var ran=Random.randomDifference(arrayCreator.tab[2].ranDifference);
                    if(ran<=arrayCreator.tab[2].ranDifference)
                    {
                        console.log(">5");
                        console.log("to jest wartosc: "+arrayCreator.tab[2].value[0]+" "+ran);
                        console.log("ran: "+ran);
                        console.log(arrayCreator.tab[2].value[0]);
                        var nam=arrayCreator.tab[2].value[0]+ran;
                        console.log("nam: "+nam);
                        console.log("type of arrayCreator.tab[2].value[0] "+typeof arrayCreator.tab[2].value[0]);
                        console.log("type of ran "+typeof ran);
                        this.pass+=String.fromCodePoint(nam);
                        console.log("to jest znak: "+String.fromCodePoint(nam));
                        console.log("i: "+i+" String: "+this.pass);
                        break;
                    }
                    else
                    {
                        console.log(">5");
                        var value=arrayCreator.tab[2].value[0]+ran;
                        console.log("ran: "+ran);
                        console.log("to jest wartosc: "+value);
                        console.log("nie powiodło się");
                        break;
                    }
                }
             }
               console.log("pass: "+this.pass); 
            i++; 
            }

        }, 
    };
    var Active={        
        specialCharActiv:false,
        Activity:function()
        {       Pass.pass="";            
            var inputLength=document.getElementById("langth");
            var inputSpecial=document.getElementById("langthSpecial");
   /*         Validation.test();
            if((Validation.checkedNumber(inputLength.value))&&(Validation.checkedNumber(inputSpecial.value)))
            {
                console.log(Validation.validationComG);
            }
            else
            {
                console.log(Validation.validationComN);
            }
    */
             Validation.checkedNumberAndEmpty(inputLength.value,inputSpecial.value);
        }
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
  //    scope.ArrayEmpty();
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
     scope.specialChar=[880,912,938,944,970,1023];
     scope.scopeArray=[913,937,945,969];
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
  //    scope.ArrayEmpty();

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
  //    scope.ArrayEmpty();
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
            Active.Activity();
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
         Active.specialCharActiv=true;
         console.log("aktywne "+Active.specialCharActiv);
       }
        else
       {
        langthSpecial.setAttribute("disabled","disabled");
        Active.specialCharActiv=false;
        console.log("aktywne "+Active.specialCharActiv);
       }
    });
});
  //  arrayCreator.createArray(tabLation);

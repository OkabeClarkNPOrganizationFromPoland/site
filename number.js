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
        }
    };
    var Pass={
        pass:"",
        genePass:function(a,tab)
        {
            console.log("passssssssssssssssssssssss");
                //        str+=String.fromCodePoint(65);
            var i=0; 
          while(i<a)
          {
            console.log("passssssssssssssssssssssss");
            var random=Math.round(Math.random()*10);
                if(random%2==0)
                {
                    console.log(tab[0]);
                    this.pass+=String.fromCodePoint(tab[0]+random);
                }else
                {
                    console.log(tab[0]);
                    this.pass  +=String.fromCodePoint(tab[2]+random);
                }
               console.log("pass: "+this.pass); 
           i++;
          } 
        }, 
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
                       Pass.genePass(a,scope.scopeArray);
                       Pass.genePass(b,scope.specialChar);
                       console.log("pass "+Pass.pass);
                       // TWORZ HASLO
                    }
                    else if(((this.checkedEmpty(a))&&(this.checkedEmpty(b))))
                    {
                        scope.NumberA=Random.randomLatino(); 
                        scope.NumberB=Random.randomLatino();
                        console.log(scope.NumberA+" "+scope.NumberB);
                     // TWORZ HASLO
                    }
                    else if(((this.checkedEmpty(a))&&(this.checkedNumber(b))))
                    {
                        scope.NumberA=Random.randomLatino(); 
                        console.log("A: "+scope.NumberB);
                      // TWORZ HASLO
                    }else if(((this.checkedNumber(a))&&(this.checkedEmpty(b))))
                    {
                        scope.NumberB=Random.randomLatino();
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
                        scope.NumberA=Random.randomLatino(); 
                        console.log("A: "+scope.NumberA);                        
                    }
               }
           }
           
    };
    var Active={        
        specialCharActiv:false,
        Activity:function()
        {               
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
window.addEventListener("load",function()
{
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
                            console.log(tab[j]-tab[i]);
                            console.log(tab[j]-tab[i]);
                            this.tab[iTab].ranDifference=tab[j]-tab[i];
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
                    tab=this.tab;
                    console.log("nowa tablica: "+tab);
        }
    }; 
   var Random={
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

   var tab=[65,90,97,122];
   arrayCreator.createArray(tab);
   console.log(arrayCreator.tab[0].value);

});
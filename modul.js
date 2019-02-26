window.addEventListener("load",function()
{
    function creatorModule(language,descript,scope,specialScope)
    {
        this.language=language;
        this.descript=descript;
        this.scope=scope;
        this.specialScope=specialScope;
    };

    var latin= new creatorModule("latin","łacina",[65,90,97,122],[32,64,91,96,123,126]);
    var greek= new creatorModule("greek","Grecki",[913,937,945,969],[880,912,938,944,970,1023]);
    var arabic= new creatorModule("arabic","arabski",[0x0622,0x064A],[0x0600,0x0621,0x064B,0x06FF]);
    var chinese= new creatorModule("chinese","chinski",[0x3400,0x3FFF],0);
    
    function elements(button,name,attribut)
    {
        this.button=button;
        this.name=name;
        this.attribut=attribut;
        
    };

    var element=new elements(["radio","label"],[latin,greek,arabic,chinese],"id");
    function controler(element)
    {
        this.element=element;

        this.watch=function()
        {
            console.log(Object.keys(this.element));
            console.log(Object.values(this.element));
        };
        var controler={};



        //create new wlwmwnts
    };
    var Scope=new controler(element);
    Scope.watch();
  
});
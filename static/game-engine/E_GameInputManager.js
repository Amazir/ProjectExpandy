/*

    Autor: AmaziR
    Wersja: 0.0.1
    Opis: Ta klasa służy zbieraniu danych z klawiatury.

*/
class InputManager
{
    constructor()
    {
        this.key_handlers = [];
    }

    ListenerOnDown(e, u) // u = true w gorze false w dole
    {
        if(u){
            this.key_handlers.forEach(element => {
                if(e.which == element.keyCode)
                    element.fnc();
            console.log("przycisk w gorze");
            });
        }
        else 
            console.log("przycisk w dole");
    }

    AddHandler(btnId, fnc)
    {
        var tmp = new InputHandler();
        tmp.keyCode = btnId;
        tmp.fnc = fnc;

        this.key_handlers.push(tmp);
    }
}
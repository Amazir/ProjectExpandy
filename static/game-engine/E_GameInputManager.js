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

    ListenerOnDown(e)
    {
        this.key_handlers.forEach(element => {
            if(e.which == element.keyCode)
                element.fnc();
        });
    }

    AddHandler(btnId, fnc)
    {
        var tmp = new InputHandler();
        tmp.keyCode = btnId;
        tmp.fnc = fnc;

        this.key_handlers.push(tmp);
    }
}
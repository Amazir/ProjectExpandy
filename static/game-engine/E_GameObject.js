/*

    Autor: AmaziR
    Wersja: 0.0.3
    Opis: Ta klasa reprezentuje obiekt w grze.

*/
class GameObject
{
    constructor(fnc) 
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.img = new Image();
        this.id = this.generateId();
        if(fnc)
            fnc(this.id);
    }

    generateId()
    {
        return Math.floor((Math.random() * 100000000000) + 1);;
    }

    setTexture(i)
    {
        this.img.src = i;
    }

    draw(c)
    {
        c.drawImage(this.img, this.x, this.y);
    }
}
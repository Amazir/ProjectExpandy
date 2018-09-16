/*

    Autor: AmaziR
    Wersja: 0.0.2
    Opis: Ta klasa reprezentuje obiekt w grze.

*/
class GameObject
{
    constructor() 
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.img = new Image();
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
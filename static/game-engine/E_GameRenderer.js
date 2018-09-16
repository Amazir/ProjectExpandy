/*

    Autor: AmaziR
    Wersja: 0.0.1
    Opis: Ta klasa reprezentuje silnik renderujący.

*/
class Renderer
{
    constructor(canvas, schema) 
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.schema = schema;

        this.rendering = [];
    }

    AddToRender(obj)
    {
        this.rendering.push(obj);
    }

    AddArrayToRender(arr)
    {
        arr.forEach(obj => {
            this.rendering.push(obj);
        });
    }

    Render()
    {
        this.ctx.clearRect(0,0,this.schema.windowWidth, this.schema.windowHeight);
        this.rendering.forEach(obj =>{
            obj.draw(this.ctx);
        });
    }
}
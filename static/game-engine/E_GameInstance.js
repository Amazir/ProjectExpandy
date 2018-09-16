/*

    Autor: AmaziR
    Wersja: 0.0.2
    Opis: Ta klasa reprezentuje instancje gry. 

*/
class Game
{
    constructor(gameSchema) 
    {
        this.g_objects = [];
        this.to_update = [];

        this.schema = gameSchema;

        gameSchema.windowObject.css("width", gameSchema.windowWidth+"px");
        gameSchema.windowObject.css("height", gameSchema.windowHeight+"px");

        this.renderer = new Renderer(gameSchema.windowObject[0], gameSchema);
        
    }

    AddGameObject(t)
    {
        this.g_objects.push(t);
        this.renderer.AddToRender(t);
    }

    Update()
    {
        this.to_update.forEach(func => {func();});
        this.renderer.Render();
    }
}
/*

    Autor: AmaziR
    Wersja: 0.0.3
    Opis: Ta klasa reprezentuje instancje gry. 

*/
class Game
{
    constructor(gameSchema) 
    {
        this.schema = gameSchema;
        gameSchema.windowObject[0].width = gameSchema.windowWidth;
        gameSchema.windowObject[0].height = gameSchema.windowHeight;

        this.renderer = new Renderer(gameSchema.windowObject[0], gameSchema);
        this.input = new InputManager();

        this.g_objects = [];
        this.to_update = [];

        this.SetupInput();
    }

    SetupInput()
    {
        let a = function (e) {
            this.input.ListenerOnDown(e);
        }
        a = a.bind(this);

        $("body").keydown(function(e){
            a(e);
            return false;
        });
    }

    AddGameObject(t)
    {
        this.g_objects.push(t);
        this.renderer.AddToRender(t);
    }

    RemoveGameObject(id)
    {
        var i = 0;
        this.g_objects.forEach(obj => {
            console.log(id);
            console.log(obj.id);
            if(obj.id == id){
                delete this.g_objects[i];
                this.g_objects.length -= 1;
                this.renderer.RemoveFromRenderer(id);
            }
            i++;
        });
    }

    Update()
    {
        this.to_update.forEach(func => {func();});
        this.renderer.Render();
    }
}

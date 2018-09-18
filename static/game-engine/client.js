// Zmienne globalne
var game;

// Funkcja inicjalizująca gre
function Init()
{
    // Tworzenie schematu wg. którego zostanie uruchomiony silnik
    // Schemat zawiera tylko podstawowe dane
    var schematic = new GameSchematic();
    schematic.windowHeight = 480;
    schematic.windowWidth = 640;
    schematic.windowObject = $("#game-window");

    // Uruchamianie nowej instancji gry
    // (w argumencie przesylany jest schemat)
    game = new Game(schematic);

    /*
        TESTOWANIE {
    */
    var t = new GameObject();
    t.x = 50;
    t.y = 50;
    t.setTexture("http://127.0.0.1:3000/static/test.png");
    game.AddGameObject(t);

    var d = new GameObject();
    d.x = 100;
    d.y = 100;
    d.setTexture("http://127.0.0.1:3000/static/test.png");
    game.AddGameObject(d);

    game.input.AddHandler(87, function(){
        alert("chyba działa");
    });
    
    /*
        }
    */
}

// Update'y gry
setInterval(function() {game.Update();}, 1000/25);

// Start gry
Init();
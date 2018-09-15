function Init()
{
    // Tworzenie schematu wg. którego zostanie uruchomiony silnik
    // Schemat zawiera tylko podstawowe dane
    var schematic = new GameSchematic();
    schematic.windowHeight = 480;
    schematic.windowWidth = 640;

    // Uruchamianie nowej instancji gry
    // (w argumencie przesylany jest schemat)
    var game = new Game(schematic);
}

// Start gry
Init();
# Formaty danych gry

## Audio

Katalog audio ma zawierać folder `_meta` z plikami JSON.

Format każdego pliku to:

```json
{
    "file":"NAZWA PLIKU AUDIO",
    "format":"TYP MIME AUDIO (np. audio/mpeg)",
    "shortcuts":[
        "tablica",
        "alternatywnych",
        "nazw",
        "wewnetrznych"
    ]
}
```

Obsługiwane formaty:

mp3, wav, ogg

Typy mime formatów:

`mp3` : `audio/mpeg`
`ogg` : `audio/ogg`
`wav` : `audio/vnd.wav`

## Maps

Każda mapa to oddzielny folder. Nazwy folderów to ID map od 0 to n, gdzie
n to ilość map - 1. Wewnątrz kodu wykorzystuje się taki format do odwoływania do map:

Dla ID: `id.0`

Dla aliasów: `alias.<nazwa>`

FORMAT MAPY:

Każda mapa to 7 plików o następujących nazwach:

`meta.json`
`layer0`
`layer1`
`layer2`
`layer3`
`npc.json`
`triggers.json`

##### meta.json

Plik zawierający metadane mapy.

Format:

```json
{
    "aliases":[
        "tablica",
        "aliasów",
        "mapy"
    ],
    "size":{
        x: 96,
        y: 96
    }
}
```

Size określa wielkość mapy w tilach.

##### layerX

Każdy plik layer to plik z informacjami o warstwie. Każda mapa
składa się z 4 warstw. 2 rysowane pod i 2 rysowane nad spritami.

Oto schemat od góry:

```
layer3
layer2
Sprites
layer1
layer0
```

Format pliku warstwy:

```
ID tile|ID tile|...
```

W każdym pliku warstwy jest `wielkość X` * `wielkość Y` tilów.

Mapa rysowana jest od górnego lewego rogu w lewo i po naryswaniu `wielkość X`
tilów, rysowana jest następna linia.

##### npc.json

Plik ten zawiera listę NPC.

Format:

```json
[
    {
        "x":Pozycja X,
        "y":Pozycja Y,
        "range":Zasięg naokoło NPC,
        "type":"typ NPC (musi być zarejestrowany w silniku)"
    }
]
```

##### triggers.json

Plik ten zawiera listę triggerów

Format

```json
[
    {
        "x":Pozycja X,
        "y":Pozycja Y,
        "script":"Nazwa skryptu triggera"
        "arguments":[
            "lista",
            "argumentów",
            "do",
            "skryptu"
        ]
    }
]
```

## Sprites

Sprity to obrazki rysowane między drugą a trzecią warstwą mapy. Sprity to np.
NPC, Gracz, itemki itp.

Każdy sprite to plik PNG!!!

Katalog sprites zawiera folder `_meta` z plikami JSON.

Format każdego pliku to:

```json
{
    "file":"Nazwa pliku Sprite z kadalogu sprites",
    "format":"static lub animated",
    "size":[wysokość, szerokość],
    "fullsize":[wysokość całości, szerokość całości]
    "animation":{
        "nazwa animacji":{
            "frames":[
                [0,0],
                [0,1],
                [0,2],
                [0,3]
            ]
        }
    }
}
```

W wypadku animacji, sprite jest dzielony na klatki, które są odgrywane po kolei
dla aktualnej animacji. Jeśli nie ma animacji, pokazywana jest lewa górna klatka.

Dla animacji, size to wymiar klatki.

fullsize jest tylko dla animacji!!!

W animacji, frames to spis po kolei jakie klatki (X, Y) mają być grane w danej animacji.

Każda animacja jest odgrywana w 60 FPS (zależne od przeglądarki i jak szybko wykonywane
jest requestAnimationFrame)

## Tiles

Tile to fragmenty mapy. Każdy tile jest 16x16.

Każdy tile to plik PNG!!!

Tile są nazywane po swoim ID 0, np 0.png.

Katalog tile zawiera folder `_meta` z plikami JSON.

Pliki meta są nazywane po ID tila.

Plik meta dla tila jest wymagany tylko jeśli tile jest animowany.

```json
{
    "fullsize":[wysokość całości, szerokość całości] //TYLKO DLA ANIMACJI!
}
```

Każda animacja jest odgrywana w 60 FPS od lewej do prawej (zależne od przeglądarki i jak szybko wykonywane
jest requestAnimationFrame)
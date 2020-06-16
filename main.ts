let madar=game.createSprite(0, 2);
madar.set(LedSpriteProperty.Blink, 300);
let akadalyok: game.LedSprite[]=[]
let oszlopSzamlalo=0;

input.onButtonPressed(Button.A, function () {
    madar.change(LedSpriteProperty.Y, -1)
})

input.onButtonPressed(Button.B, function () {
    madar.change(LedSpriteProperty.Y, 1)
})

basic.forever(function () {
    while(akadalyok.length >0 && akadalyok[0].get(LedSpriteProperty.X)==0){
        
            akadalyok.removeAt(0).delete();
        
    }
    for(let akadaly of akadalyok){
        akadaly.change(LedSpriteProperty.X, -1)
    }

    if (oszlopSzamlalo %3 ==0){
        let ures=randint(0,4)
        for (let i=0; i<=4; i++){
            if(i!= ures){
                akadalyok.push(game.createSprite(4,i))
            }
        }
    }


    for(let akadaly of akadalyok){
        if(akadaly.get(LedSpriteProperty.X)==madar.get(LedSpriteProperty.X) 
        && akadaly.get(LedSpriteProperty.Y)==madar.get(LedSpriteProperty.Y))
        {
            game.gameOver()
        }

    }
    oszlopSzamlalo++;
    basic.pause(1000)
})

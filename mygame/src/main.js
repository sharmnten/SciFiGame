import kaplay,{} from "kaplay";
import "kaplay/global";

kaplay({
    debugKey:"d",
})

loadSprite("hero-run","/sprites/run.png", {

        "x": 0,
        "y": 0,
        "width":126 ,
        "height": 108,
        "sliceY": 4,
		"sliceX":1,
        "anims": {
            "run": {
                "from": 0,
                "to": 3,
                "speed": 3,
                "loop": true,
            },
            
    },
});





const player=add([
    sprite("hero-run"),
    pos(width()/2,height()/2),
	scale(2,2),
    area(),
    anchor("left"),
])

player.play("run")

onKeyDown("left", () => {
    player.move(-100, 0),
    player.flipX = true;
    
    
})
onKeyDown("right", () => {
    player.move(100, 0),
    player.flipX = false;
    
})
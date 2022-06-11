// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";

export default class Seastar extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.seastar1, 
                            window.imageObject.seastar2],
                'die' : [window.imageObject.seastar1, 
                    window.imageObject.seastar2],
            }, 
            20, 3, 1000, [50, 50])

        this.setDirectionTimer = setInterval(() => {
            const x = (this.x - window.playerSprite.x) > 0 ? -1 : 1
            const y = (this.y - window.playerSprite.y) > 0 ? -1 : 1
            
            this.changeDirection(x, y)    
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}
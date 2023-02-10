import { _decorator, Component, Node } from 'cc';
import { LevelController } from '../controller/LevelController';
const { ccclass, property } = _decorator;

@ccclass('Level2')
export class Level2 extends LevelController {
    start() {
        //test func
        setTimeout(() => {
            this.doWin();
        }, 3000);
    }
    private doWin(){
        this.node.destroy();
        this.winGame();
    }
    update(deltaTime: number) {
        
    }
}



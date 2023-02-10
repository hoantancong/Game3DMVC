import { _decorator, Component, Node } from 'cc';
import { LevelController } from '../controller/LevelController';
const { ccclass, property } = _decorator;

@ccclass('Level5')
export class Level5 extends LevelController {
    start() {
        //test func
        setTimeout(() => {
            this.doWin();
        }, 2000);
    }
    private doWin() {
        this.node.destroy();
        this.winGame();
    }
    update(deltaTime: number) {

    }
}



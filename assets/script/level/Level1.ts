import { _decorator } from 'cc';
import { LevelController } from '../controller/LevelController';
const { ccclass, property } = _decorator;

@ccclass('Level1')
export class Level1 extends LevelController {
    start() {
           //test func
        setTimeout(() => {
            this.doWin();
        }, 5000);
    }
    private doWin(){
        this.node.destroy();
        this.winGame();
    }
    update(deltaTime: number) {
        
    }
}



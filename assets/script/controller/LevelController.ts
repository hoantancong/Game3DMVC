import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelController')
export class LevelController extends Component {
    private winCallback;
    private loseCallback;
    setUp(winCallback){
        this.winCallback = winCallback;
    }
    //
    protected winGame(){
        if(this.winCallback){
            this.winCallback();
        }
    }
    protected loseGame(){
        if(this.loseCallback){
            this.loseCallback();
        }
    }
    //
    update(deltaTime: number) {
        
    }
}



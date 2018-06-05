// Laya.init(540,400);
// var txt = new Laya.Text();
// txt.text = "hello layabox";
// txt.color = "#FFFFFF"
// txt.fontSize = 50
// txt.align = "right"
// txt.pos(Laya.stage.width-txt.width>>1,Laya.stage.height-txt.height>>1)
// Laya.stage.addChild(txt);
// Laya.stage.bgColor = '#23238E';
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
class GameMain {
    constructor() {
        //初始化微信小游戏适配
        Laya.MiniAdpter.init(false);
        //初始化引擎
        Laya.init(1080, 1920, Laya.WebGL);
        this.menu = MenuManager.GetInstance();
        //
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        Laya.stage.screenMode = "vertical";
        Laya.loader.load([
            { url: "res/StartUI@atlas0.png", type: Laya.Loader.IMAGE },
            { url: "res/StartUI.fui", type: Laya.Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }
    onLoaded() {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.UIPackage.addPackage("res/StartUI");
        this.menu.OpenWindow(WindowType.StartGameUI);
    }
}
new GameMain();
//# sourceMappingURL=GameMain.js.map
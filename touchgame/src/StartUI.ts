//开始游戏界面
class StartUI extends BaseWindow {
    //开始游戏按钮
    private starBtn: fairygui.GButton;
    //构造函数
    constructor() {
        super()

        this.view = fairygui.UIPackage.createObject("StartUI", "StartUI").asCom
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        
        this.starBtn = this.view.getChild("startGameBtn").asButton;
    }

    //点击开始游戏
    private onStartButtonClick(): void {
        MenuManager.GetInstance().OpenWindow(WindowType.GameUI);
    }

    public Show(windowParams:any):void{
        super.Show(windowParams);
        this.starBtn.onClick(this, this.onStartButtonClick);
    }
    
    public Hide():void{
        super.Hide();
        
        this.starBtn.offClick(this,this.onStartButtonClick);
    }
}
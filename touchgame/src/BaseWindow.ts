class BaseWindow {
    protected windowType:WindowType;
    protected isCloseOther:boolean;
    //视图
    protected view:fairygui.GComponent;
    constructor() {
        
    }

    public Show(windowParams:any[]):void{
        if (this.view) {
            fairygui.GRoot.inst.addChild(this.view)
        }
    }

    public Hide():void{
        if (this.view) {
            fairygui.GRoot.inst.removeChild(this.view)
        }
    }

    public Destory():void{

    }

    public IsCloseOther():void{

    }
}
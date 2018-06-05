class MenuManager {

    public windowList: Array<BaseWindow>;
    public windowMaps: Map<WindowType, BaseWindow>;

    public openList: Array<WindowType>;

    private static instance: MenuManager;

    constructor() {
        this.windowList = new Array<BaseWindow>();
        this.openList = new Array<WindowType>();
        this.windowMaps = new Map<WindowType, BaseWindow>();
    }

    public static GetInstance(): MenuManager {
        if (!this.instance) {
            this.instance = new MenuManager();
        }
        return this.instance;
    }

    /**
     * 打开窗口
     * @param type 窗口类型
     */
    public OpenWindow(type: WindowType, ...windowParams): BaseWindow {
        let has: boolean = this.HasWindow(type);
        let window: BaseWindow;
        //关闭其他窗口
        this.CloseOtherWindow();

        if (has == false) {
            switch (type) {
                case WindowType.GameUI:
                    window = new GameUI();
                    break;

                case WindowType.StartGameUI:
                    window = new StartUI();
                    break;
            }
            this.windowMaps.set(type, window);
            this.windowList.push(window);
        }
        else
        {
            window = this.GetWindow(type);
        }
        this.openList.push(type);
        window.Show(windowParams)

        return window;
    }

    /**
     * 关闭 
     */
    public CloseOtherWindow(relatedWindows?: WindowType[]): void {
        for (var index = this.openList.length - 1; index >= 0; index--) {
            let type: WindowType = this.openList[index];
            let include = false;
            if (relatedWindows) {
                include = relatedWindows.indexOf(type) > -1;
            }

            if (include == false) {
                this.HideWindow(type);
            }
        }
    }

    /**
     * 隐藏窗口
     * @param type 窗口类型
     */
    public HideWindow(type: WindowType): void {
        let window: BaseWindow = this.GetWindow(type);
        if (window) {
            window.Hide()
            UtilTools.Remove(this.openList, type);
        }
    }

    /**
     * 
     * @param type 销毁窗口
     */
    public DestoryWindow(type: WindowType): void {
        let window: BaseWindow = this.GetWindow(type);
        if (window) {
            window.Destory();
            UtilTools.Remove(this.windowList, window);
            UtilTools.Remove(this.openList, type);
            this.windowMaps.delete(type);
        }
    }

    /**
     * 是否已经有窗口
     * @param type 窗口类型
     */
    public HasWindow(type: WindowType): boolean {
        let bol: boolean = this.windowMaps.has(type);
        return bol
    }

    /**
     * 获取窗口
     * @param type 窗口类型
     */
    public GetWindow(type: WindowType): BaseWindow {
        return this.windowMaps.get(type);
    }

    /**
     * 是否打开
     * @param type 窗口类型
     */
    public IsOpenWindow(type: WindowType): boolean {
        let window = this.GetWindow(type);
        let bol: boolean = false;
        if (window) {
            bol = this.openList.indexOf(window) > -1;
        }
        return bol
    }
}
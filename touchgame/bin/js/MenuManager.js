class MenuManager {
    constructor() {
        this.windowList = new Array();
        this.openList = new Array();
        this.windowMaps = new Map();
    }
    static GetInstance() {
        if (!this.instance) {
            this.instance = new MenuManager();
        }
        return this.instance;
    }
    /**
     * 打开窗口
     * @param type 窗口类型
     */
    OpenWindow(type, ...windowParams) {
        let has = this.HasWindow(type);
        let window;
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
        else {
            window = this.GetWindow(type);
        }
        this.openList.push(type);
        window.Show(windowParams);
        return window;
    }
    /**
     * 关闭
     */
    CloseOtherWindow(relatedWindows) {
        for (var index = this.openList.length - 1; index >= 0; index--) {
            let type = this.openList[index];
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
    HideWindow(type) {
        let window = this.GetWindow(type);
        if (window) {
            window.Hide();
            UtilTools.Remove(this.openList, type);
        }
    }
    /**
     *
     * @param type 销毁窗口
     */
    DestoryWindow(type) {
        let window = this.GetWindow(type);
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
    HasWindow(type) {
        let bol = this.windowMaps.has(type);
        return bol;
    }
    /**
     * 获取窗口
     * @param type 窗口类型
     */
    GetWindow(type) {
        return this.windowMaps.get(type);
    }
    /**
     * 是否打开
     * @param type 窗口类型
     */
    IsOpenWindow(type) {
        let window = this.GetWindow(type);
        let bol = false;
        if (window) {
            bol = this.openList.indexOf(window) > -1;
        }
        return bol;
    }
}
//# sourceMappingURL=MenuManager.js.map
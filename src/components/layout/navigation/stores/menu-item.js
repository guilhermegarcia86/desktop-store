export default class MenuItem {

    constructor(data, parent) {
        this.id = data.id

        this.title = data.title;
        this.route = data.route;
        this.icon = data.icon;
        this.badge = data.badge;
        this.counter = data.counter;

        this.parent = parent;

        if (data.items)
            this.items = _.map(data.items, function (child) {
                return new MenuItem(child, this)
            }.bind(this));

        return this
    }

    isSibling(item){
        return this.id != item.id && this.parent && _.some(this.parent.items, function(child){
                return child.id == item.id && child.id != this.id
            })
    }

    isParentOf(item){
        return this.items && _.some(this.items, function(_item){
                return _item.id == item.id || _item.isParentOf(item)
             })
    }

    hasChildrenActive(activeItem) {
      return this.items && _.some(this.items, function(child) {
        return child.id == activeItem.id
      })
    }

    _hasOpenChildren(){
        return _.some(this.items, function(item){
            return item._isOpen()
        })
    }

    isActive(activeItem) {
      return MenuItem.getRoute() == this.route || (this._isOpen() && !this.parent)
      // return activeItem.id === this.id
    }

    _isOpen() {
      return this.isOpen()
    }

    isOpen(activeItem) {
      return _.startsWith(MenuItem.getRoute(), this.route) || this._hasOpenChildren()
      // return (this.items && (this.isActive(activeItem) || this.hasChildrenActive(activeItem) ))
    }

    static getRoute(){
        return location.hash.replace(/#/, '').split('?')[0]
    }

    static normalizeItems(rawItems) {
      return _.map(rawItems, function (item) {
        return new MenuItem(item)
      })
    }
}

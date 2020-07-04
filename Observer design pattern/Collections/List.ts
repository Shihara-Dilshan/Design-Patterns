class List<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  public size = (): number => {
    return this.items.length;
  };

  public add = (value: T): void => {
    this.items.push(value);
  };

  public removeWithIndex = (index: number): void => {
    this.items.splice(index, 1);
  };

  public removeWithObj = (value:T):void => {
    this.items.forEach( (obj, index) => {
        if(obj === value){
            this.items.splice(index, 1);
            return;
        }
    });  
  }

  public get = (index: number): T => {
    return this.items[index];
  };

  public array = (): Array<T> => {
    return this.items;
  }
}

export default List;

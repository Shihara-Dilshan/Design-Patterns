class Computer {
  private Name: string;
  private price: number;
  private ram: number;
  private processor: string;
  private graphics: string;

  constructor(
    $Name: string,
    $price: number,
    $ram: number,
    $processor: string,
    $graphics: string
  ) {
    this.Name = $Name;
    this.price = $price;
    this.ram = $ram;
    this.processor = $processor;
    this.graphics = $graphics;
  }

  /**
   * Getter $Name
   * @return {string}
   */
  public get $Name(): string {
    return this.Name;
  }

  /**
   * Getter $price
   * @return {number}
   */
  public get $price(): number {
    return this.price;
  }

  /**
   * Getter $ram
   * @return {number}
   */
  public get $ram(): number {
    return this.ram;
  }

  /**
   * Getter $processor
   * @return {string}
   */
  public get $processor(): string {
    return this.processor;
  }

  /**
   * Getter $graphics
   * @return {string}
   */
  public get $graphics(): string {
    return this.graphics;
  }

  /**
   * Setter $Name
   * @param {string} value
   */
  public set $Name(value: string) {
    this.Name = value;
  }

  /**
   * Setter $price
   * @param {number} value
   */
  public set $price(value: number) {
    this.price = value;
  }

  /**
   * Setter $ram
   * @param {number} value
   */
  public set $ram(value: number) {
    this.ram = value;
  }

  /**
   * Setter $processor
   * @param {string} value
   */
  public set $processor(value: string) {
    this.processor = value;
  }

  /**
   * Setter $graphics
   * @param {string} value
   */
  public set $graphics(value: string) {
    this.graphics = value;
  }

  public GetComputer = (): void => {
    console.log(
      `Computer name : ${this.$Name}\nComputer price : ${this.price}\nComputer ram : ${this.ram}\nComputer processor : ${this.processor}\nComputer graphics : ${this.graphics}`
    );
  };
}

export default Computer;

import Computer from './Computer'

class ComputerBuilder{
    private Name:string;
    private price:number;
    private ram:number;
    private processor:string;
    private graphics:string;

    public setName = (value: string):ComputerBuilder => {
        this.Name = value;
        return this;
	}

    public setPrice = (price:number):ComputerBuilder => {
        this.price = price;
        return this;
    }

    public setRam = (ram: number):ComputerBuilder => {
        this.ram = ram;
        return this;
	}

    public setProcessor = (processor:string):ComputerBuilder => {
        this.processor = processor;
        return this;
    }

    public setGraphics = (graphics:string):ComputerBuilder => {
        this.graphics = graphics;
        return this;
    }

    public Build = ():Computer => {
        return new Computer(this.Name, this.price, this.ram, this.processor, this.graphics);
    }
    

}

export default ComputerBuilder;
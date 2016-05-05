abstract class AbstractGreeter{
    public abstract greet(): string;
}

export class Greeter extends AbstractGreeter {
    constructor(public greeting: string) {
        super();
     }
    public greet(): string {
        return "<h1>" + this.greeting + "</h1>";
    }
};

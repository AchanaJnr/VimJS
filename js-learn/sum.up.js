function sum(... args){
    const add = (a, b) => a + b;
    return args.reduce(add);
}
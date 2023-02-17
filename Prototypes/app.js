String.prototype.yell = function () {
    return `${this.toUpperCase()}!!!!! AHGGHGHGH!`;
};

Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!'
};

// XXX.prototype is the actual prototype objectitself.
// __proto__ is a reference to the string prototype object's properties.
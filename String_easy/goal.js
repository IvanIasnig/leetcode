var interpret = function(command) {
    let newStr = command.replace(/\(\)/g, 'o');
    let goal = newStr.replace(/\(al\)/g, 'al');
    return goal
};

console.log(interpret("G()()()()(al)"))
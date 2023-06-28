var interpret = function(command) {
    let newStr = command.replaceAll("()", 'o');
    let goal = newStr.replaceAll("(al)", 'al');
    return goal
};

console.log(interpret("G()()()()(al)"))
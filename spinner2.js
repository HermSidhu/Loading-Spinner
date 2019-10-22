let counter = 400
function spinner(delay, character) {
  setTimeout(() => {process.stdout.write(`\r${character}   `)
}, delay)
counter += 200;
};

spinner(counter, '|');
spinner(counter, '/');
spinner(counter, '-');
spinner(counter, '\\');
spinner(counter, '|');
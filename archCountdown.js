function countdown(n) {

    const intervalID = setInterval(() => {
        if (n === 0) {
            process.stdout.write(`0\n`);
            clearInterval(intervalID);
            return;
        }

        if (n === Math.floor(n)) {
            process.stdout.write(`${n}`);
            n -= 0.250
            return;
        }

        n -= 0.250;
        process.stdout.write(`.`);

    }, 250)
}

countdown(5)
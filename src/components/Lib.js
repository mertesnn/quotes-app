export const randomNumberGenerator = (length) => Math.floor(Math.random() * length)

export const changeBgColor = (element) => {
    const red = randomNumberGenerator(255);
    const green = randomNumberGenerator(255);
    const blue = randomNumberGenerator(255);
    document.querySelector(element).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

export const colorfulMode = () => {
    changeBgColor('.bg-1-circle');
    changeBgColor('.bg-2-circle');
    changeBgColor('.bg-3-circle');
    changeBgColor('.bg-4-circle');
    changeBgColor('.top-left-circle');
    changeBgColor('.bottom-right-circle');
}

export const authors = [
    'William Shakespeare',
    'Leonardo da Vinci',
    'Albert Einstein',
    'Abraham Lincoln',
    'Lao Tzu',
    'Confucius',
    'Buddha'
];
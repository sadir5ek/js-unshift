// Бастапкы оюнчулар.
let teamPlayers = [10, 23, 34];
console.log('Баштапкы команда:',teamPlayers);



// Жаңы оюнчулар.
let newPlayers = [7, 9];

// Жаңы оюнчуларды башына кошуу.
newPlayers.forEach(player => teamPlayers.unshift(player));

// Натыйжасын concolго чыгаруу.
console.log("Күчтүү команда: ", teamPlayers);
document.getElementById('calculate-player-cost').addEventListener('click', function () {
    //find element by id
    const playerSalary = getElementById('player-salary');
    //calculate player total salary 
    const getPlayerList = document.getElementById('players-list');
    const playerListLength = getPlayerList.childNodes.length - 1;
    const getTotalCost = playerSalary * playerListLength;
    //store total salary in another element
    setValueById('total-player-cost', getTotalCost);
})
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
document.getElementById('calculate-total-cost').addEventListener('click', function () {
    //find total player cost
    const getTotalPlayerCost = getElementById('total-player-cost');
    //find managet salary
    const getManagerSalary = getElementById('manager-salary');
    //find coach salary
    const getCoachSalary = getElementById('coach-salary');
    //calculate total
    const getTotalAmount = getTotalPlayerCost + getManagerSalary + getCoachSalary;
    setValueById('total-amount', getTotalAmount);
})
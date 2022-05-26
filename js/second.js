//Second exam
let salaries = {
    Akmal: 1200,
    Salim: 5200,
    Karima: 1800,
};
alert (`2-Masala` + [`Akmal: 1200`] + `Salim: 5200` + `Karima: 1800`)
function sumSalaries(salaries) {
    var sum = 0;
    for (let element of Object.values(salaries)) {
         sum += element;
    }
    return sum;
}
alert(sumSalaries(salaries));
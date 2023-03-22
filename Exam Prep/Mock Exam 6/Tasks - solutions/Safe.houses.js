let input = [
    "5", 
    "4 0" ]; 
            
    let print = this.print || console.log;
    let gets =
        this.gets ||
        (
        (arr, index) => () =>
            arr[index++]
        )(input, 0);

let spawnPoints = Number(gets());
let safeHouseIndexes = gets().split(" ").map(Number).sort((a,b) => a - b);
// Сортирайки индексите, си се получава нормално сравняване (в случая на индекси) в масив.

/* Идеята е да проверим на какво разстояние всеки индекс в "spawnPoints"
променливата ще бъде от "safeHouseIndexes". */

let longestDistance = 0;

for(let i=0; i < spawnPoints; i++) {

/* Променливата "minDistance" ни служи за намиране на най-краткото разстояние до "safeHouseIndexes[j]"
от i - индекс, а "distance" намира разстоянието от i - индекса, до safeHouseIndexes[j]
индекса - ако вземем примера по-долу:

S - X - X - X - S
0   1   2   1   0

за i = 2 индекс, разстоянието до най-близкия safe house ще бъде 2, проверявайки и двата случая за "safeHouseIndexes[j]."
Програмата извежда двете дистанции и прави сравнението с "minDistance". Минималната дистанция до safe house и в двата 
случая ще бъде 2 и тъй като за този индекс, сравнен с всички останали, минималната дистанция до safe house ще бъде най-дълга,
то "longestDistance" ще ни бъде 2.  */ 

    let minDistance = Number.MAX_SAFE_INTEGER;
    for(let j=0; j < safeHouseIndexes.length; j++) {
        let distance = Math.abs(i - safeHouseIndexes[j]);
    // Важно е да има Math.abs, защото почти винаги "distance" ще бъде < 0 число
        if(distance < minDistance) {
            minDistance = distance;
        }
    }

    if(minDistance > longestDistance) {
        longestDistance = minDistance;
    }
}
print(longestDistance);
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isacc', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meither', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarstrom', year: 1829, passed: 1909 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownise', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Beign, Menachem', 'Belloc, Hilaire', 'Below, Saul', 'Benchley, Robert', 'Ben-Gurion', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Berge, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Berhard, Sandra', 'Berra, Yogi', 'Berry, Helle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blari, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'van', 'car', 'truck'];

// Array.prototype.filter
// 过滤16世纪出生的inventor
const sixteenth = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(sixteenth);

// Array.prototype.map
// 返回inventor的全名
const fullname = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullname);

// Array.prototype.sort
// 将inventor按出生日期排序，日期从远到近显示
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce
// 计算所有inventor的岁数和
const totalYears = inventors.reduce((total, inventor) => {
  return total += (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 将inventor按在世时间长短排序
const oldest = inventors.sort(function (a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;

  return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);

// 将people按名字母顺序排序
const alpha = people.sort((lastOne, nextOne) => {
  const [aFirst, aLast] = lastOne.split(',');
  const [bFirst, bLast] = nextOne.split(',');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

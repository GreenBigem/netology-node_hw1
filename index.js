const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(process.argv.slice(2)).argv

console.log(argv);

yargs(hideBin(process.argv))
    .command('current', 'c', (yargs) => {
        if (argv.year || argv.y) {
            console.log("Текущий год: " + new Date().getFullYear())
        } else if (argv.month || argv.m) {
            console.log("Текущий месяц: " + new Date().getMonth())
        } else if (argv.date || argv.d) {
            console.log("Текущая дата: " + new Date().getDate())
        } else {
            console.log("Настоящее время: " + new Date())
        }
    })

    // Необходимо добавить возможность получать даты в прошлом или будущем через команды add и sub:
    // cmd add -d 2 — дата и время в формате ISO на два дня вперёд,
    // cmd sub --month 1 — дата и время в формате ISO на один месяц назад.
    
    .command('add', 'a', (yargs) => {
        let date = new Date()
        date.setDate(date.getDate() + argv.d);
        console.log("Дата и время в формате ISO на d дней вперёд: " + date)
    })

    .command('sub', 's', (yargs) => {
        let date = new Date()
        date.setMonth(date.getMonth() - argv.m);
        console.log("Дата и время в формате ISO на m месяц назад: " + date)
    })
    .parse()

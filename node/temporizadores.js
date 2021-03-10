const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 8 * * 3', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// */5 * 8 * * 3 - De 5 em 5 segundos, as 8hs, ignorando dia e mes, na quarta feira (0-domingo, 1-segunda, etc...)


setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando a Tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 8
regra.minute = 5
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

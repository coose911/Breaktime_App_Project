use BreakTime;


db.dropDatabase();


db.diary_entries.insertMany([
    {
        // title: "I hate mondays",
        entry: "mondays suck and i love lasagne",
        date: "1-02-22",
        time: "18:34"
    },{
        // title: "My head hurts",
        entry: "sandwiches really just dont hit the same wihtout a big glass of lovely beer",
        date: "1-02-22",
        time: "12:02"
    },{
        // title: "",
        entry: "why did i have to wake up",
        date: "1-02-22",
        time: "07:16"
    }
])

db.coffees.insertMany([
    {
        coffee: 0
    }
])

db.waters.insertMany([
    {
        water: 0
    }
])

db.breaks.insertMany([
    {
        break: 0
    }
])
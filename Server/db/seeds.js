use BreakTime;


db.dropDatabase();


db.diary_entries.insertMany([
    {
        timeTaken: "16:9:62",
        day: "Sat",
        entry: "mondays suck and i love lasagne"
        
        
    },{
        timeTaken: "16:9:62",
        day: "Fri",
        entry: "sandwiches really just dont hit the same wihtout a big glass of lovely beer"
        
        
    },{
        timeTaken: "16:9:62",
        day: "Tue",
        entry: "why did i have to wake up"
        
        
    },{
        timeTaken: '16:9:62', 
        day: "Sun",
        entry: 'Marcus smiled at me again today'
    }
])

db.coffees.insertMany([
    {timeTaken: '16:9:62', day: 3},
    {timeTaken: '08:9:10', day: 1},
    {timeTaken: '12:9:06', day: 3},
    {timeTaken: '10:9:43', day: 5},
    {timeTaken: '23:59:59', day: 4},
    {timeTaken: '09:9:43', day: 4},
    {timeTaken: '11:9:43', day: 2},
    {timeTaken: '13:9:43', day: 3},
    {timeTaken: '23:9:43', day: 4},
    {timeTaken: '20:9:43', day: 5}
])

db.waters.insertMany([
    {timeTaken: '12:9:43', day: 3},
    {timeTaken: '22:9:43', day: 1},
    {timeTaken: '19:9:43', day: 4},
    {timeTaken: '20:9:43', day: 5}
])

db.breaks.insertMany([
    {timeTaken: '08:9:43', day: 3},
    {timeTaken: '16:9:43', day: 2},
    {timeTaken: '12:9:43', day: 5},
    {timeTaken: '11:9:43', day: 4},
    {timeTaken: '06:9:43', day: 3},
    {timeTaken: '06:9:43', day: 0},
    {timeTaken: '06:9:43', day: 4}
])
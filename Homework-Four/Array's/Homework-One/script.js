let firstNames = ['Kiril', 'Stefan']
let personMood = ['great', 'not so great']
let personActivity = ['running', 'jumping']
function tellStory(name, mood, activity) {
        for (let i = 1; i <= name.length; i++) {

                let storyTeller = `This is ${name[i - 1]}. ${name[i - 1]} is a nice person. Today they are ${mood[i - 1]}. They are ${activity[i - 1]} all day. The end.`
                console.log(storyTeller);
        }
        // -1 poso ako ne stavam -1 ke mi printa i last undefined . . .
}
tellStory(firstNames, personMood, personActivity);
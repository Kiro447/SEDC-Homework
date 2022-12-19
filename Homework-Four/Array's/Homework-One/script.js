let firstNames = ['Kiril', 'Stefan']
let personMood = ['great', 'not so great']
let personActivity = ['running', 'jumping']
function tellStory(name, mood, activity) {
        for (let i = 0; i < name.length; i++) {

                let storyTeller = `This is ${name[i]}. ${name[i]} is a nice person. Today they are ${mood[i]}. They are ${activity[i]} all day. The end.`
                console.log(storyTeller);
        }
}
tellStory(firstNames, personMood, personActivity);
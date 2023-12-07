let input = prompt("Enter What you Want to do !!");
const todos = ['Do the coding','Great Job'];
while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q'){
    if (input.toLowerCase() === 'list'){
        console.log('******************')
        for (let i = 0 ; i < todos.length ; i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('******************');
    }
    else if (input.toLowerCase() === 'new'){
        const newTodo = prompt("Okk !! What do you want to Add ");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    else if (input.toLowerCase() === 'delete'){
        const del = parseInt(prompt("enter the Index of which todo you want to delete "));
        if (Number.isNaN(!del)){
            const deleted = todos.splice(del,1);
            console.log(` ${deleted[0]} is deleted Succesfully from the List`)
        }else{
            console.log(`Invalid index is entered ! Unable to Delete`)
        }
        
    }
    input =  prompt("Enter What you Want to do !!");
}
console.log("Okk !! You Quit the APP")

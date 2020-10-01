exports.run = (client, message, args) => {
    let input = args[0].toLowerCase(); // Command argument
    let output; // Output string
    var regex= /\dd\d/; // Standard format regex

    // Gestion du input
    if(input === "help")
    {
        output = `Veuillez fournir le nombre et le type de dés que vous voulez rouler.\nPar exemple: 2d6 ou 3d10`
    }
    else if(regex.test(input))
    {
        let nb = input.split('d')[0]; // Number of dice
        let type = input.split('d')[1]; // Dice type (ie: 20 for d20)
        let rolls = ""; // Roll results
        let total = 0; // Total int value of roll results

        for(let i=0; i<nb; ++i)
        {
            let roll = Math.floor(Math.random() * (type) ) + 1;
            
            if(roll === 1 || roll == type) // __ markdown if minrolled or maxrolled
            {
                rolls+="__"+roll+"__";
            }
            else
            {
                rolls+=roll;
            }

            if(i<nb-1)
            {
                rolls+=" + ";
            }
            total+=roll;
        }
        rolls+=" -> "+total;
        output = rolls;
    }
    else
    {
        output = `Syntax incorrecte. Utilisez *roll help* pour plus d'informations.`;
    }

    message.channel.send(output)
        .catch(console.error);
}
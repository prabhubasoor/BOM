//

export function getDDMMMFormatedDate(daysToAdd : number):string {
        
    const date = new Date();
    const addedDaysDate = date.getDate() + daysToAdd;

    date.setDate(addedDaysDate);
    const month = date.toLocaleString("en-AU", {
        month: "long"
    });

    let formatedDay = '';
    switch(date.getDate()) {
        case 1:
        case 21:
        case 31: 
            formatedDay = `${date.getDate()}st`;
            break;
        
        case 2:
        case 22:
            formatedDay = `${date.getDate()}nd`;
            break;

        case 3: 
            formatedDay = '3rd';
            break;

        default :
            formatedDay = `${date.getDate()}th`;
            break;
    }


      return `${formatedDay} ${month}`; 
}
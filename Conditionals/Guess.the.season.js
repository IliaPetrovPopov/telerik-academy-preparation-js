let input = [
    'June',
    '20',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

  let month = gets();
  let day = Number(gets());

  switch(month)
{
    case 'January':
        if(day > 0 && day < 32) {
            print(`Winter`);
            break;
        }
    
    case 'February':
        if(day > 0 && day < 29) {
        print(`Winter`);
        break;
    }
    
    case 'March':
        if(day > 0 && day < 20) {
            print(`Winter`);
            break;
        }
        else if(day > 19 && day < 32)
        {
            print(`Spring`);
            break;
        }

    case 'April':
        if(day > 0 && day < 31) {
            print(`Spring`);
            break;
        }
    
    case 'May':
        if(day > 0 && day < 32) {
            print(`Spring`);
            break;
        }
    
    case 'June':
        if(day > 0 && day < 21) {
            print(`Spring`);
            break;
        }
        else if(day > 20 && day < 31) {
            print(`Summer`);
            break;
        }

    case 'July':
        if(day > 0 && day < 32) {
            print(`Summer`);
            break;
        }

    case 'August':
        if(day > 0 && day < 32) {
            print(`Summer`);
            break;
        }

    case 'September':
        if(day > 0 && day < 22) {
            print(`Summer`);
            break;
        }
        else if(day > 21 && day < 31) {
            print(`Autumn`);
            break;
        }

    case 'October':
        if(day > 0 && day < 32) {
            print(`Autumn`);
            break;
        }

    case 'November':
        if(day > 0 && day < 31) {
            print(`Autumn`);
            break;
        }

    case 'December':
        if(day > 0 && day < 21) {
            print(`Winter`);
            break;
        }

    default:
        print(`Winter`);
    }
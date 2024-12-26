//switch
let browser="brave"
switch(browser){

    case "chrome":
        console.log(`>>running chrome browser`);
        break;
    case "firefox":
        console.log(`>>running firefox browser`);
        break;
    case "edge":
        console.log(`>>running edge browser`);
        break;
    default:
        console.log(`>>Not valid browser ${browser} provided`);
}
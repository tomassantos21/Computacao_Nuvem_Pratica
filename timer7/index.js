module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript seems to be running slowly!');
    }
    context.log('Our function was called at this point in time:', timeStamp);   
};
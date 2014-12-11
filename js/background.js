chrome.contextMenus.create({
    'type':'normal',
    'title':'朗读',
    'contexts':['selection'],
    'id':'cn',
    'onclick':loud
});

function loud(info, tab){
  chrome.tts.speak(info.selectionText);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.contextMenus.update('cn',{
        'title':'read "'+message+'" aloud'
    });
});

async function sayHi(){
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert('Hello from my Extension!');
        }
    });
}

document.getElementById('myButton').addEventListener('click', sayHi);
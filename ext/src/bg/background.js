const CONTEXT_MENU_ID = "FIND_BOOKFACE";
function getword(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  chrome.tabs.create({
    url: "https://bookface.ycombinator.com/forum/search?query=" + info.selectionText
  });
}

chrome.contextMenus.create({
  title: `Search bookface for "%s"`,
  contexts:["selection"],
  id: CONTEXT_MENU_ID
});

chrome.contextMenus.onClicked.addListener(getword);

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.update(tab.id, {url: "https://bookface.ycombinator.com/forum/search?query=" + text})
    })

  }
)
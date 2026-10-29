function openApp(appName){
  document.querySelectorAll('.app-window').forEach(el => {
    el.style.display='none';
  });
  let app = document.getElementById(appName + '-app');
  if(app){
    app.style.display='flex';
    app.style.flexDirection='column';
    app.style.zIndex='200';
  }
  if(appName==='notes' && typeof renderNotes === 'function'){
    renderNotes();
  }
}

function closeApp(appName){
  let app = document.getElementById(appName + '-app');
  if(app) app.style.display='none';
}

// biar bisa dipanggil dari onclick di HTML
window.openApp = openApp;
window.closeApp = closeApp;
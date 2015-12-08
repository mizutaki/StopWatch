'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if(process.platform != 'darwin')
	  app.quit();
});

app.on('ready', function(){
  //ブラウザ(Chromium)の起動、初期画面のロード
	mainWindow = new BrowserWindow({width:200, height: 150});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
  });
});
/*
function notification() {
	var n = new Notification('Elelctron', {
		body:'時間ですよ'
	});
}*/

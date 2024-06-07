//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import './index.css'
//import {BrowserRouter} from "react-router-dom";
//
//ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
//    <BrowserRouter>
//      <App />
//    </BrowserRouter>
//  </React.StrictMode>,
//)

import {Telegraf} from 'telegraf';

const token = '6480149527:AAHWvvo8FY1herbqaAnAMfKzgri-NpHdwyA';
const bot = new Telegraf(token);

bot.command('start', (ctx) => {
	ctx.reply('Hello')
})

bot.launch();

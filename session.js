//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU0vdW4vZDlwNVdDWXBSV1p1NVdxTTkrQUhBWnVmQ1EvZzA3M0Y1WXRYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk1TWUhiU1lxZTgxbmE5UTBNVEx5ZnVwa201bFVDd2FkdDlEOVoxS3FnWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRXJWaW0wSHlsUWJvUmNUeS9CUys0K3JQc1lBWjlHYjU3SW5uNTd3c1hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3NTYrSGlBZTZ2RmVmbFJrMzVZY1VURW8rVG5wQkxuR2VBZ28zR1hNYWxjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHOFdBYUhKd0FUY0JJcDhCNzFHekEzYlNrSjlBYzU5bGpEWC9pSk1FVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdBcktrVGhJOTArMGp1Qlk1TzcyYlA2dU5XaHYzQlh1a0g0WkdVc1lTRWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1JNVVydFhCWTBMM2NVeG9IQ0JBRTF1eDVWZXBpVU5vOERMbmVZbmhHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGMwRDdGUGVvQXBlNXJjam03MFYzNUVOTmFXbGF3VlZXbXoycTUvYlcwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwcWRBKzNwOHN1UjR5S2NYaU1DYTJiY2VlSnl6K0VSTDVIT2g4QkNMM2VseG9WM1hmZzJaekNZYU14dkhzMnlPYWNRNitPN1ZaUVRpU2dNdGVRM0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiI0T3dvQ3R3K2p5UHRHVUJLQnhXOU5kRmY5M1lmWENPellxQ25hRmZXdU9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI3M1FaR1BWVCIsIm1lIjp7ImlkIjoiOTQ3MTA5MjcyMjg6OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwMjQ2NTYzODgyMjA4ODo4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpzcnZrREVLNjd1c1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNk5jMTdwUXM5REJZd0ZUaFd6SklGWWlVc1ZPT2tFMUsxUjNpZ0VZQlZTTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMldRUG45NTFWY1B4OTU1MTZ5dWtzWTc4MW5LU1ZrZXQ0UWFMYkdrMmRLYUV2SzB2d1hBd3U3MzhrN2JIWXVtaWlCcVZ3MTloU0VyT2lOSXFWaWxsRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IklkaWJWdFBOaWpUNUVaNDZCUnpaSm1Sd1JuYkZuaytWTkVZNUk3aDhKOGlKRUw2UGxMR1FhbGxDS3loOHlHa1U2OEc4dG9EdHdlL3ZCNnZ6N3hUZkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTA5MjcyMjg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlalhOZTZVTFBRd1dNQlU0VnN5U0JXSWxMRlRqcEJOU3RVZDRvQkdBVlVqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgzNzEyNjAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUQwIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94710927228",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

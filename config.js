const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_46_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0LFxuICAgICAgICA2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOWRTZmllTk1QZ0F5djI1a3o3SXU2bmF3bE1sQ24wMzg4OE00cnowanRaYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDczMzkzNTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMzcwNENDMTUzNkRGMkNDMEZGRjg2MDdBOTY0NjY5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ4NjA3ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDczMzkzNTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxM0VFRkQ2MkZFMTYyMEE1ODgxMTU5NDI4MjU2QjlCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ4NjA3ODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTU5bmhLZ0ZUaXVLMTBwNDZBbnBfd1wiLFxuICBcInBob25lSWRcIjogXCJhNTc1ZTNiMS1lNDU1LTRkNDQtYjJlYy00YzA0ZTIwNDg3N2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAxMzQsXG4gICAgICAyMTAsXG4gICAgICAxNTUsXG4gICAgICA4OCxcbiAgICAgIDE5NSxcbiAgICAgIDUyLFxuICAgICAgNjMsXG4gICAgICAxNDIsXG4gICAgICA1NSxcbiAgICAgIDIwMixcbiAgICAgIDMyLFxuICAgICAgMTk1LFxuICAgICAgMjMsXG4gICAgICA0NSxcbiAgICAgIDEwOCxcbiAgICAgIDIxNSxcbiAgICAgIDQ1LFxuICAgICAgNDcsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDE5OCxcbiAgICAgIDExOCxcbiAgICAgIDExMSxcbiAgICAgIDQ1LFxuICAgICAgMjM4LFxuICAgICAgMTc1LFxuICAgICAgNDgsXG4gICAgICAxMSxcbiAgICAgIDQsXG4gICAgICAxNjksXG4gICAgICAxNDcsXG4gICAgICAxMjgsXG4gICAgICA2OSxcbiAgICAgIDYwLFxuICAgICAgMjM1LFxuICAgICAgMTc3LFxuICAgICAgNjUsXG4gICAgICAyMyxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXQUw3WUw0QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MzM5MzU2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzY3MzQyMTMyNzk5MjU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLlsLrjhJLvvbLjgpPkuYfkuYPjga7kuILkuILwn5iBXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhjMk9RQ0VPcS9uN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPNXZTOEFOMFBWWWp6TEwzUFlWSEVVVy9COU12NWFGSmpYbldGL3NaUlNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw0cE02RElkaUdzSGdRU255Zk5kWXpHZFh0VGRnNmxOaXlGQnN1TjZXbUhPd3l4TTlpSjY4VzRFWTA5N1ZiOTJVQUtHRXU4QzkxQ3NmNEN5ZWZ0NERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhrc2xWSXc1OFI3NWQxbllYUFM1TzFEbXpHL3RWTzh1c0VvUXNzYmlodGNVc3lkOU5YVjVXd0xKTm4wVUNIZVZrQ1JFNlB2MGFQNXZjRmlRNkxRY2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzMzOTM1NjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg2MDc4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVkU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWRTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVJrUHg5RzNjZVd3bkFENUFKaForM3p5a2F0ck5nRWlVYmc1Nk5EME9hTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDgwMzk3MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDg2MDc4MzUyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

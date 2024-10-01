const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlJUE1iQUR4T0gwNm5XQXRqdTB6bEZ0ODRBK2pDNEIwVG05SmNONjZHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0s5MnA0OHJBYjdIRWFFMCt0VlNWZ25mcHVva2dUZGk1SHZOY1JWb1RGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQVRDbzdxUnFwcElncXc0RHNnTGNET0tNWGxhQlMwSlJscEpCaGorZG1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcGtaTVEvcDh4d2k4amt1R0pQK3RLeFhOUlJWcWhINWJVZVZMVXgvVUdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDVnJKNFoxR0U1ektCOHJta0hvVjF1cFh0NEJCcEJPYjd3Y3dQM0tpbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBnZlRET3V2SXliem1oa1Q1U0dZV24xbWxVQiszSFpidXh6eTFsaGl4UlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkYxNngvU3ZTWWk0RTZTL1gwRHJjYjhUNzZnUElpRU5jTm1nczNMLzZscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWVwKzRGK1JJcVhseDljUHEwNHp3N1NuUDRsM1U1ZzRydkU4SVRybnB4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpsTjJaVkZjMUxLVklLR3NjcjhuOTRsSUlWODhzWGV1QkI0SnU5ekpQNG9POWkzajNHNkYrN0paU2ZQWHpSREhqQzA0SHpidVdmNUM3NGtmUkE3cGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IkxoTnZUQ09jeWg0R1FKYjdyWWZxNzhVbVR1bXpuZHp1OFpTSWUxZGtHNkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA4MDE2MzM3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4Qjg1MDNBQjk4MTk2NDZERDM1RTQ5Q0E4M0IxQjlGMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3ODA5ODY4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLa2RZcHg3UlNFU19EY0NXNVZEbGd3IiwicGhvbmVJZCI6ImI4ODBkNWJmLWIwYjYtNDZmNi05ZjIwLTViMzhhNWQzOGJlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQjhMMDdWNkwwYmVQUDNEK1lpNjZoZnV3Y289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkdMTHI3UndlaElwaytuN2FydEJIWk5TNGY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ4WjM3UVRNIiwibWUiOnsiaWQiOiIyMzQ3MDgwMTYzMzc2OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmVhbCBUdiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFN0alBVRkVLeVM4YmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNEFnVXRkUjdsdlZTRTAxTTJIdW4xOHBkY3JyNTM4SnhLUnRNNk53T3JTOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL21PZVU2OWVXMzRHckliU2k5VGljM3JrYXY0ZmFBVDhJU242R2lYQVFKVTArbnJJYXZjM2d1S0Evc0JhNE1ibGdzTU5KeDI3RzQwKy9Xd0VVdjVsQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjRXaVhPU1NrcU9Wa0l6aVZuTWRrekkwcW9rWVc2NTM0M2d1dmxsODUwc1BiQkRmMzRWZFo0OVFrRHc2U0JYbHU1NksxeTgyMi9BbzVnclBLUTV3RWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA4MDE2MzM3Njo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVBSUZMWFVlNWIxVWhOTlROaDdwOWZLWFhLNitkL0NjU2tiVE9qY0RxMHYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc4MDk4NTB9,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.2347080163376,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || true  ,
ANTI_CALL: process.env.ANTI_CALL || true  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};

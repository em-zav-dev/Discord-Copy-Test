/** @type {import('tailwindcss').Config} */
export default {
 mode: 'jit', 

 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'discord_blue': '#295DE7',
        'discord_bluePurple': '#7289da',
        'discord_purple': '#5865f2',
        'discord_green': '#3ba55c',
        'discord_serverBg':"#36393f",
        'discord_serversBg' :"#202225",
        'discord_channelsBg' : "#2f3136",
        'discord_serverNameHoverBg' : "#343"
      },
      height:{
        "83vh": "83vh"
      },
      borderRadius: ["hover", "focus"]
    },
  },
  plugins: [],
}


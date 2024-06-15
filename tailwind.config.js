/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{index.html,./js/script.js}"],
  theme: {
    extend: {
        colors:{
                'DesaturatedRed':['hsl(0, 36%, 70%)'],
                'SoftRed':['hsl(0, 93%, 68%)'],
                'DarkGrayishRed':['hsl(0, 6%, 24%)'],
                'g1c1':['hsl(0, 0%, 100%)'],
                'g1c2':[' hsl(0, 100%, 98%)'],
                'g2c1':['hsl(0, 80%, 86%)'],
                'g2c2':['hsl(0, 74%, 74%)'],
              },
    fontFamily:{'josefinsans':['Josefin Sans','sans-serif']},
      maxWidth:{'85':['375px']},
 letterSpacing:{'broad':['0.4em']},
    fontWeight:{'300':['300'],'400':['400'],'500':['500']},
         width:{'102':['29rem']}
      },
  },
  plugins: [],
}


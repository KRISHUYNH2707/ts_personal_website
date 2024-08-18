tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outfit: ["Merriweather", "sans-serif"],
        },
        animation:{
            spin_slow: 'spin 6s linear infinite'
        },
        colors:{
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F'
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        },
        plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.small_heading': {
                    '@apply text-center text-xl sm:text-2xl mb-3': {},
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ]
    }
},
      darkMode: 'selector'  
}
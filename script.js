		const btnPop = document.getElementById('borderPop')
        const btnSlide = document.getElementById('backSlide')
        const btnCircle = document.getElementById('backCircle')
        const btnUnder = document.getElementById('borderUnder')
        const btnSand = document.getElementById('slidingSand')

		btnPop.addEventListener('click',() => {

		  navigator.clipboard.writeText(borderCSS.innerText)

		})

        btnSlide.addEventListener('click',() => {

		  navigator.clipboard.writeText(backSlideCSS.innerText)
		})

        btnCircle.addEventListener('click',() => {

		  navigator.clipboard.writeText(backCircleCSS.innerText)
		})
        
        btnUnder.addEventListener('click',() => {

		  navigator.clipboard.writeText(borderUnderCSS.innerText)
		})



        btnSand.addEventListener('click',() => {   

            navigator.clipboard.writeText(slidingCSS.innerText)
        })

        
        // when click a button, copy the text to clipboard
        // const btn = document.querySelectorAll('.btn')
        // btn.forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         navigator.clipboard.writeText(borderPop.innerText)
        //         alert('test')
        //     })
        // })

    	
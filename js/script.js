// function initAnimeScroll() {
//   const sections = document.querySelectorAll('.js-scroll')

//   if (sections.length) {
//     const halfScreen = window.innerHeight / 2
//     const sectionActive = 'section-active'

//     function handleAnimeSection() {
//       sections.forEach(section => {
//         const sectionTop = section.getBoundingClientRect().top
//         const isSectionVisible = sectionTop - halfScreen < 0

//         if (isSectionVisible) section.classList.add(sectionActive)
//         else section.classList.remove(sectionActive)
//       })
//     }

//     handleAnimeSection()

//     window.addEventListener('scroll', handleAnimeSection)
//   }
// }

// initAnimeScroll()

// Quero criar um evento que quando eu clique em cada um dos links internos, ele faça o scroll suave até a seção desse link.

function initSmoothLinkScroll() {
  const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"]')

  if (linksInternos) {
    function handleSmoothScroll(event) {
      event.preventDefault()

      const href = event.currentTarget.getAttribute('href')
      const sectionLink = document.querySelector(href)

      sectionLink.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    linksInternos.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })
  }
}

initSmoothLinkScroll()

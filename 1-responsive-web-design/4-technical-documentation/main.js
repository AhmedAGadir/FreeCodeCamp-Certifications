/* ==== bootstrap 4 ad ====== */
document.querySelector('.b4-ad').addEventListener('click', e => {
  e.target.style.display = 'none';
})

/* ===== sandwhich button functionality ====== */

document.querySelector('nav button.sandwhich').addEventListener('click', () => {
  let classList = document.querySelector('nav .nav-links ul').classList;

  Array.from(classList).includes('visible') ? classList.remove('visible') : classList.add('visible');
})


/* ========== SIDEBAR ======== */

let sections = Array.from(document.querySelector('.documentation').children)

window.addEventListener('scroll', () => {

	sections.forEach(section => {
    let sectionID = section.getAttribute('id');
  
  	if (section.getBoundingClientRect().bottom >= 0 && section.getBoundingClientRect().bottom <= section.offsetHeight) {
    
      document.querySelector(`[href="#${sectionID}"]`).parentElement.classList.add('active');
      
      Array.from(document.querySelector(`[href="#${sectionID}"]`).parentElement.parentElement.children).forEach(child => child.style.display = 'block')
      
      let subsections = Array.from(document.querySelectorAll(`#${sectionID} div`));
      
      subsections.forEach(subsection => {
      	
      if (subsection.getBoundingClientRect().bottom >= 0 && subsection.getBoundingClientRect().bottom <= subsection.offsetHeight) {
    	
        let subsectionID = subsection.getAttribute('id');
				
        document.querySelector(`[href="#${subsectionID}"]`).parentElement.classList.add('active');
        
      } else {
      	document.querySelector(`[href="#${subsection.getAttribute('id')}"]`).parentElement.classList.remove('active');
      }
           
      })
          
    } else {
    	document.querySelector(`[href="#${section.getAttribute('id')}"]`).parentElement.classList.remove('active');
      Array.from(document.querySelector(`[href="#${sectionID}"]`).parentElement.parentElement.children).forEach((child, index) => {
      if (index != 0) 
      	child.style.display = 'none';
      });
    }
  })
})

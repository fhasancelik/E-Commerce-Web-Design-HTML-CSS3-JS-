const getElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element
    throw Error('Class name check name ${selector} ')
  }
  const links = getElement('.mini-menu-bar')
  const navBtnDOM = getElement('.mini-menu-button')
  
  navBtnDOM.addEventListener('click',
  () => {
    links.classList.toggle('show-menu')
  }
    
  )
  const date=getElement('#date')
  const currentyear= new Date().getFullYear()
  date.textContent=currentyear
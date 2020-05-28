var selectbox = document.getElementById('themes');

selectbox.addEventListener('change', function() { 
    var activeTheme = this.options[this.selectedIndex].value
        console.log(activeTheme);
        trans()
        document.documentElement.setAttribute('data-theme', activeTheme);
  
});
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}


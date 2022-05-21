(() => {
    
    var allIcons = document.querySelectorAll('.icons');

    function logMyId() {
        console.log(this.id);
    }
    allIcons.forEach(currenticon => currenticon.addEventListener('click', logMyId));

})();
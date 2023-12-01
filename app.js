const changeRootClass = (selectedClass) => {
    const root = document.querySelector('html');
    root.className = ''
    root.classList.add(selectedClass)
}
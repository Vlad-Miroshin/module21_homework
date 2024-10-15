const links = document.querySelectorAll('.task_header');

links.forEach( (link) => {
    link.onclick = (event) => {
        event.currentTarget.querySelector('a').click();
    }
});
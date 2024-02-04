const $list = document.querySelectorAll('li');

function activationLink(){
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
    this.classList.add('active');
}

$list.forEach(($li) => {
    $li.addEventListener('click', activationLink,);
});
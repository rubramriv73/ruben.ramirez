/**
 * @author Rubén Ramírez Rivera
 * 
 * 
 */

const skillsBehavior = function() {
    const hardBtn = document.getElementById('hard');
    const softBtn = document.getElementById('soft');

    const hardSkills = document.getElementById('hard-skills');
    const softSkills = document.getElementById('soft-skills');

    hardBtn.addEventListener('click',function () {
        hardBtn.style.textDecoration = 'underline';
        hardSkills.style.display = 'flex';

        softBtn.style.textDecoration = 'none';
        softSkills.style.display = 'none';
    });

    softBtn.addEventListener('click',function () {
        softBtn.style.textDecoration = 'underline';
        softSkills.style.display = 'flex';

        hardBtn.style.textDecoration = 'none';
        hardSkills.style.display = 'none';
    });
}

const navBtnsBehavior = function() {
    const checkBtn = document.getElementById('btn_menu');
    const navLinks = Array.from(document.querySelectorAll('#nav_link'));

    navLinks.forEach(link => {
        link.addEventListener('click',function (){
            checkBtn.checked = false;
        });
    });

}

document.addEventListener('DOMContentLoaded', function () {
    skillsBehavior();
    navBtnsBehavior();
});
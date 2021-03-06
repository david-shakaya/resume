console.log('ddd');

const listTabs = document.querySelector('.list-tabs');
const tabItem = document.querySelectorAll('.list-tab-item');

listTabs.addEventListener('click', showItem);

function showItem(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  tabItem.forEach(el => {
    if (el.classList[2]) {
      el.classList.remove('active-item');
      el.children[2].classList.remove('hide-tab-btn');
    }
  });
  e.target.offsetParent.classList.add('active-item');
  e.target.classList.add('hide-tab-btn');
}

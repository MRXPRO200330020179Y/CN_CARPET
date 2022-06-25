$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        cssEase: 'ease',
});
//         prevArrow: `<button class="market-arrow arrow-right">
//         <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M30.5778 10.4807L21.3527 1.25563C20.7899 0.692785 19.8771 0.692785 19.3142 1.25563C18.7513 1.81859 18.7513 2.73118 19.3142 3.29415L26.0786 10.0586H1.44142C0.645411 10.0586 0 10.704 0 11.5C0 12.2959 0.645411 12.9414 1.44142 12.9414H26.0786L19.3145 19.7058C18.7515 20.2688 18.7515 21.1814 19.3145 21.7443C19.5958 22.0256 19.9648 22.1665 20.3337 22.1665C20.7026 22.1665 21.0715 22.0256 21.353 21.7443L30.5778 12.5192C31.1408 11.9563 31.1408 11.0437 30.5778 10.4807Z" fill="#008CDB"/>
// </svg>

//          </button>`,
//          nextArrow: `<button class="market-arrow arrow-left">
//          <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.422165 10.4807L9.64725 1.25563C10.2101 0.692785 11.1229 0.692785 11.6858 1.25563C12.2487 1.81859 12.2487 2.73118 11.6858 3.29415L4.92136 10.0586H29.5586C30.3546 10.0586 31 10.704 31 11.5C31 12.2959 30.3546 12.9414 29.5586 12.9414H4.92136L11.6855 19.7058C12.2485 20.2688 12.2485 21.1814 11.6855 21.7443C11.4042 22.0256 11.0352 22.1665 10.6663 22.1665C10.2974 22.1665 9.9285 22.0256 9.64703 21.7443L0.422165 12.5192C-0.140797 11.9563 -0.140797 11.0437 0.422165 10.4807Z" fill="#008CDB"/>
// </svg>

//          </button>`
   

$('.slider-max').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 905,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            
        ],
    });
})


$('.slider-max-mrx').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ],
});

$('.slaeder-katalog').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ],
});




$(document).ready(function () {
    $('.slider-max').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        cssEase: 'ease',
});
})



(function() {
    // Get relevant elements and collections
    const tabbed = document.querySelector('.tabbed');
    const tablist = tabbed.querySelector('ul');
    const tabs = tablist.querySelectorAll('a');
    const panels = tabbed.querySelectorAll('[id^="section"]');
    
    // The tab switching function
    const switchTab = (oldTab, newTab) => {
      newTab.focus();
      // Make the active tab focusable by the user (Tab key)
      newTab.removeAttribute('tabindex');
      // Set the selected state
      newTab.setAttribute('aria-selected', 'true');
      oldTab.removeAttribute('aria-selected');
      oldTab.setAttribute('tabindex', '-1');
      // Get the indices of the new and old tabs to find the correct
      // tab panels to show and hide
      let index = Array.prototype.indexOf.call(tabs, newTab);
      let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
      panels[index].hidden = false;
    }
    
    // Add the tablist role to the first <ul> in the .tabbed container
    tablist.setAttribute('role', 'tablist');
    
    // Add semantics are remove user focusability for each tab
    Array.prototype.forEach.call(tabs, (tab, i) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('id', 'tab' + (i + 1));
      tab.setAttribute('tabindex', '-1');
      tab.parentNode.setAttribute('role', 'presentation');
      
      // Handle clicking of tabs for mouse users
      tab.addEventListener('click', e => {
        e.preventDefault();
        let currentTab = tablist.querySelector('[aria-selected]');
        if (e.currentTarget !== currentTab) {
          switchTab(currentTab, e.currentTarget);
        }
      });
      
      // Handle keydown events for keyboard users
      tab.addEventListener('keydown', e => {
        // Get the index of the current tab in the tabs node list
        let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
        // Work out which key the user is pressing and
        // Calculate the new tab's index where appropriate
        let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
        if (dir !== null) {
          e.preventDefault();
          // If the down key is pressed, move focus to the open panel,
          // otherwise switch to the adjacent tab
          dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
        }
      });
    });
    
    // Add tab panel semantics and hide them all
    Array.prototype.forEach.call(panels, (panel, i) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '-1');
      let id = panel.getAttribute('id');
      panel.setAttribute('aria-labelledby', tabs[i].id);
      panel.hidden = true; 
    });
    
    // Initially activate the first tab and reveal the first tab panel
    tabs[0].removeAttribute('tabindex');
    tabs[0].setAttribute('aria-selected', 'true');
    panels[0].hidden = false;
  })();





  
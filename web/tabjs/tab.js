/**
 * Created by HyperionD on 2017/4/12.
 */

function Tab() {

    // var tab_title = document.querySelector('.tab .tab_title');
    // var tab_content = document.querySelector('.tab .tab_content');
    // var tab_titles = tab_title.children;
    // var tab_contents = tab_content.children;

    const default_opts = {
        tab_classname: 'tab',
        tab_title_classname: 'tab_title',
        tab_content_classname: 'tab_content'
    };

    function getElements() {

    }

    function init() {

        // tab_title样式， 使用flex布局使tab_title横向排列
        tab_title.style.display = 'flex';

        // 将第一项内容显示，其余内容隐藏，并设置第一项内容的id='show'
        tab_contents[0].id = 'show';

        for (var i=1; i<tab_contents.length; i++ ) {
            tab_contents[i].style.display = 'none';
        }
    }


    for (let i=0; i<tab_titles.length; i++) {
        tab_titles[i].addEventListener('click', function () {
            const tab_to_hide = document.querySelector('#show');
            tab_to_hide.style.display = 'none';
            tab_to_hide.id = '';
            tab_contents[i].style.display = 'block';
            tab_contents[i].id = 'show';
        }, false)
    }

    init();

}
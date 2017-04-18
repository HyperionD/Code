/**
 * Tab标签页效果
 * @param {object} opt 参数选项
 * class_name_for_tab:          tab元素的class name
 * class_name_for_tab_title:    tab title元素的class name
 * class_name_for_tab_content:  tab content元素的class name
 */

function Tab(opt) {

    // 默认参数
    const default_opt = {
        class_name_for_tab: 'tab',
        class_name_for_tab_title: 'tab_title',
        class_name_for_tab_content: 'tab_content'
    };

    //给定参数与默认参数结合,获取最终参数
    opt = opt || default_opt;
    const class_name_for_tab = opt.class_name_for_tab || default_opt.class_name_for_tab;
    const class_name_for_tab_title = opt.class_name_for_tab_title || default_opt.class_name_for_tab_title;
    const class_name_for_tab_content = opt.class_name_for_tab_conten || default_opt.class_name_for_tab_content;

    //获取元素
    const tab = document.querySelector('.' + class_name_for_tab);
    const tab_title = tab.querySelector('.' + class_name_for_tab_title);
    const tab_titles = tab_title.children;
    const tab_contents = tab.querySelector('.' + class_name_for_tab_content).children;

    // tab_title样式， 使用flex布局使tab_title横向排列
    tab_title.style.display = 'flex';
    tab_titles[0].id = 'active';

    // 将第一项tab_contents内容显示，其余内容隐藏，并设置第一项内容的id='show'
    tab_contents[0].id = 'show';
    for (let i=1; i<tab_contents.length; i++ ) {
        tab_contents[i].style.display = 'none';
    }

    // 循环绑定事件，使用ES6的let可以解决作用域问题，不需要使用立即执行函数
    // 为了避免tab_contents少于tab_titles报错，所以需要验证tab_to_hide != null, tab_contents[i] != null
    for (let i=0; i<tab_titles.length; i++) {
        tab_titles[i].addEventListener('click', function () {
            const tab_to_hide = tab.querySelector('#show');
            const tab_to_disactive = tab.querySelector('#active');
            tab_to_disactive.id = '';
            tab_titles[i].id = 'active';
            if (tab_to_hide !== null) {
                tab_to_hide.style.display = 'none';
                tab_to_hide.id = '';
            }
            if (tab_contents[i] !== null) {
                tab_contents[i].style.display = 'block';
                tab_contents[i].id = 'show';
            }
        }, false);
    }
}

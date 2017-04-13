/**
 * js实现标签页
 *
 * 使用示例 tab.html
 *
 * Tab(el) el为要实现标签页效果的元素，el元素下应该有classname为tab_title,tab_content的元素，
 * tab_title为标签页的标题，横向显示，默认第一项激活
 * tab_content为标签页的显示内容，顺序与tab_title相同，默认显示第一项内容
 * 激活的tab_title有id='active'
 * 显示的tab_content有id='show'
 */

function Tab(el) {

    //获取元素
    const tab_title = el.querySelector('.tab_title');
    const tab_titles = el.querySelector('.tab_title').children;
    const tab_contents = el.querySelector('.tab_content').children;

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
            const tab_to_hide = el.querySelector('#show');
            const tab_to_disactive = el.querySelector('#active');
            tab_to_disactive.id = '';
            tab_titles[i].id = 'active';
            if (tab_to_hide != null) {
                tab_to_hide.style.display = 'none';
                tab_to_hide.id = '';
            }
            if (tab_contents[i] != null) {
                tab_contents[i].style.display = 'block';
                tab_contents[i].id = 'show';
            }
        }, false)
    }
}
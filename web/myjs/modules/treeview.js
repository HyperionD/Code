define(function() {
  function treeview(tree) {
    let treeDeep = 0;

    function traversalTree(tree) {
      for (let i=0; i<tree.length; i++) {
        console.log(tree[i].name);
        if (tree[i].children.length !== 0) {
          traversalTree(tree[i].children);
        }
      }
    }

    traversalTree(tree);
  }

  return {
    treeview: treeview
  };
})

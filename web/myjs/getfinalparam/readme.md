# Get Final Param

根据定义的参数和默认参数，返回最终使用的参数

```
getFinalParam(param, defaults)

param: 自定义参数

defaults: 默认参数

param与defaults的数据类型必须相同，否则会返回defaults
```

示例说明

```
const options = {a: 'aaa'};

const defaults = {a: 'a-default', b: 'b-default'};

const finalParam = getFinalParam(options, defaults);

console.log(finalParam); // {a: 'aaa', b: 'b-default'}
```

```
const options = {c: 'ccc'};

const defaults = {a: 'a-default', b: 'b-default'};

const finalParam = getFinalParam(options, defaults);

console.log(finalParam); // {a: 'a-default', b: 'b-default'}
```

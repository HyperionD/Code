import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    // entry: 'src/main.js',
    // dest: 'bundle.js',
    format: 'iife',
    moduleName: 'foo',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
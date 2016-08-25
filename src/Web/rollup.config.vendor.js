// https://medium.com/@jonnysamps/angular-2-bundling-with-rollup-4738d0148a2c#.941c74dmo
// rollup.config.vendor.js
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
// Custom Rollup Plugin to resolve rxjs deps
// Thanks to https://github.com/IgorMinar/new-world-test/blob/master/es6-or-ts-bundle/rollup.config.js
class RollupNG2 {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){
        if(id.startsWith('rxjs/')){
            return `${__dirname}/node_modules/rxjs/${id.replace('rxjs/', '')}.js`;
        }
    }
}
const rollupNG2 = (config) => new RollupNG2(config);
export default {
    entry: 'wwwroot/app/vendor_files_rollup.ts',
    dest: 'wwwroot/lib/angular2.compiled.es22015.js',
    format: 'iife',
    moduleName: 'vendor',
    plugins: [
      typescript(),
      rollupNG2(),
      nodeResolve({ jsnext: true, main: true }),
    ]
}
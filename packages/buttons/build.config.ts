import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        // 'src/index',
        { input: 'src/index' },
        { input: 'src/components/', outDir: 'dist/components' },
    ],
    declaration: true, // generate .d.ts files
    rollup: {cjsBridge: true},
})
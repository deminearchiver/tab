// tsup.config.ts
import { defineConfig } from "tsup";
import * as solid from "tsup-preset-solid";

const preset_options: solid.PresetOptions = {
    entries: [
        {
            entry: 'src/index.ts',
        }
    ],
    // drop_console: true,
    cjs: false,
}

export default defineConfig(config => {
    const watching = !!config.watch

    const parsedData = solid.parsePresetOptions(preset_options, watching)

    if (!watching) {
        const packageFields = solid.generatePackageExports(parsedData)

        console.log(`\npackage.json: \n${JSON.stringify(packageFields, null, 2)}\n\n`)

        /*
            will update ./package.json with the correct export fields
        */
        solid.writePackageJson(packageFields);
    }

    return solid.generateTsupOptions(parsedData);
})
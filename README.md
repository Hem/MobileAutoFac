# MobileAutoFac

Sample read me



# typings help

##### Install Typings CLI utility.
npm install typings --global

##### Search for definitions.
typings search tape

##### Find a definition by name.
typings search --name react

##### If you use the package as a module:
##### Install non-global typings (defaults to "npm" source, configurable through `defaultSource` in `.typingsrc`).
typings install debug --save

##### If you use the package through `<script>`, it is part of the environment, or
##### the module typings are not yet available, try searching and installing with `--global`:
typings install dt~mocha --global --save

##### If you need a specific commit from github.
typings install d3=github:DefinitelyTyped/DefinitelyTyped/d3/d3.d.ts#1c05872e7811235f43780b8b596bfd26fe8e7760 --global --save

##### Search and install by version.
typings info env~node --versions
typings install env~node@0.10 --global --save

##### Install typings from a particular source (use `<source>~<name>` or `--source <source>`).
typings install env~atom --global --save
typings install bluebird --source npm --save

##### Use `typings/index.d.ts` (in `tsconfig.json` or as a `///` reference).
cat typings/index.d.ts

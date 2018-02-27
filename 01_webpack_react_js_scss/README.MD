# (close to) minimal Configuration of a webproject base on **webpack**, **sass**, **react** and **javascript**

## **Installation**

install all needed js-libs (defined in *package.json*) by executing:

    npm install

## **webpack**

the build configuration is split up into three file.
One base file (*webpack.common.js*) which contains the bulk of the configuration and two specialisation files (*webpack.dev.js* and *webpack.prod.js*) which define the specific behavior in dev- and prod-mode.

### **Dev-Mode**

execute

    npm start

to start the dev-server. (Website should be available at *localhost://8080* and it should keep updating when the source files are modified).

### **Production-Mode**

execute

    npm run build

to compile all sources to the *dist*-folder.

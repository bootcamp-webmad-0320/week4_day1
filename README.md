# week4_day1

> ES6: object & array destructuring, REST parameters, default parameters
>
> Node: intro & basic commands
>
> Node: server


## Main points: object & array destructuring

- Cuando los nombres de las variables coincidenc on los nombres de las propiedades a extraer de un obejto, la técnica de destructuración permite un código más liviano:

 ````javascript
 const person = {
   name: 'ger',
   age: 33,
   hobbies: ['sky', 'beer']
 }
 const { name, age, hobbies } = person
 ````

- Igualmente es posible aplicar una técnica similar frente a los Arrays:

 ````javascript
 const drinks = ['coca-cola', 'cacaolat', 'beer', 'lemonade']
 const [drink1, , drink3] = drinks
 ````

## Main points: REST parameters & default parameters

- Es posible aunar todos los parámetros restantes en un Array mediante el operador de propagación:

 ````javascript
 const fn = (par1, par2, ...pars) => pars.forEach(elm => console.log(elm))  // 3, 4, 5

 fn(1, 2, 3, 4, 5)
 ````

- Al igual que aplicar un valor por defecto sobre cualquiera de ellos

 ````javascript
 function fn(par1 = 'value 1', par2 = 'value 2') {
   /* ... */
 }
 ````

## Main points: Comandos NPM

- `npm init`: comienza un proyecto de NPM creando `package.json`
- `npm install`: instala las dependencias del archivo `package.json` presente en el directorio  (shortcut `npm i`)
- `npm install`*`module_name`*: instala el módulo indicado en el proyecto de NPM (shortcut `npm i`*`module_name`*), lo que supone:
  - Referenciarlo en el archivo `package.json` bajo la propiedad `dependencies`
  - Incluir sus archivos en el directorio `node_modules`
- `npm uninstall`*`module_name`*: instala el módulo indicado en el proyecto de NPM (shortcut `npm u`*`module_name`*), lo que supone:
  - Eliminarlo del archivo `package.json` bajo la propiedad `dependencies`
  - Excluir sus archivos del directorio `node_modules`

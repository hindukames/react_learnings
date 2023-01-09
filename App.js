import React from "react"
import ReactDOM  from "react-dom/client";

  const heading1 = React.createElement("h1",{ 
    id:"heading1",
 },"Hello React Hi "); 

 const heading2 = React.createElement("h1",{ 
   id:"heading2",
},"Hello React2"); 
// console.log(heading);  

const container = React.createElement("div",{ 
   id:"container",
},[heading1,heading2]); 

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(container); 

/*  - What is `NPM`? 
NPM is an package manager, that is responsible for maintaining all the packages that were needed/installed in our projects 
Here to note, NPM install will create package-lock.json,and will have node modules in our package, which is like db for all packages 
Always keep Node modules in your GitIgnore file, because using the package.jon, package-lock.json, server will create the node modules ( They are very huge in general).Pls dont push them.
  
// ● - What is `Parcel/Webpack`? Why do we need it?  
Parcel is a Bundler, which is used to minifiy, simplifiy, cache, image optimise our codes, so that they become so compressed, that they are easily to be transferred to/from the server. 
// ● - What is `.parcel-cache` '
Parcel.cache is a file, that is usually stored initial point of the dev build that we are creating it. so, when we request for another dev build, that will not take much time in giving the Build/ or not need to run from scratch, it caches the content for its preference.. When we run 
npx parcel index.html, the first time, the time created to have our localhost is huge, but the next time,it is very less for the parcel caching observed 

// ● - What is `npx` ? 
npx is an command used by developers to run the locally installed pacakages by npm for our project build

// ● - What is difference between `dependencies` vs `devDependencies`
Dependencies and Dev-Dependencies are used terminologies in the package.json. Dependencies like React are made global, meaning they are present everywhere ( DEV-PROD), whereas the dev dependencies like the test framework are for the development activities, hence they are made as dev dependencies 
Dev Dependency install: npm install -D parcel / npm install --save-dev parcel
Dependency install: npm install react ( Global in our project)

// ● - What is Tree Shaking?
In every project, which have certain imported modules that can come up with a lot of helper functions as well. But, we would need only some 2 of them. So we generally use Webpack/parcel to 
remove the dead code inorder to have a production reday application. The concept is called as tree-shaking 
// ● - What is Hot Module Replacement? 
Hot Module Replacement is like updating our changes into the local host immediately by means of file watcher for better development experience.

// ● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
// own words. 
1.Minifying the code 
2.Running the Project on the localhost ( even if trigger two projects, they host them in different port numbers)
3.Compression our code, Tree shaking  
4.Hot Module Replacement ( Reflecting the changes in our localhost)
5.Image optimisation
// ● - What is `.gitignore`? What should we add and not add into it?
gitignore is a file, that is usually avoided by git, for not tracking of such files in them. 
To be included: Nodemodules,Parcel.cache 
Not to be included: Package.json, pacakage-lock.json
// ● - What is the difference between `package.json` and `package-lock.json` 
Package.json is the list of all the packages, dependencies involved in an project. Once installed they are stored with the dependencies as ^1.2.2, so project would automatically upgrade to the latest minor release, 
Package.lock.json is a file, where it is used to lock all the dependencies with the exact version numbers, to avoid confusion and perform the same in all the environments 
It maintains integrity between package.json and package.lock.json. Very Helpful when future dev does all the dependencies on the future activities.

// ● - Why should I not modify `package-lock.json`?
Modifying the package-lock.json would make it lose integrity with the package.json 
It is not meant for manuall edit, it is usually auto-generated/regenerated when the package is installed initially or when not part of the version mentioned in the package.json
To lock the exact version number of the package as initial Upload, so that same nodemodules are generated everytime the diff developer clones 
// ● - What is `node_modules` ? Is it a good idea to push that on git? 
Node Modules are the ones, where the pcakages installed and all their dependencies, transitive dependencies are part of. Literally a db for all the packages in our project. 
They will install all the deep level dependencies and they are huge in nature. We dont push them to Git. They are usually can be got from the package-lock.json file and node modules can be generated anywhere. Soo we dont push them
// ● - What is the `dist` folder?
The dist folder ususally contains all the minified version of our code that are used for the production build 
Command used to generate them are : npx parcel build index.html
// ● - What is `browserlists` 
Browserlists are the one, to which our front end application should definitely work/load through. 
If it is for earlier browser versions, the supporting code is usually written by babel and they are given in the browsers
// Read about dif bundlers: vite, webpack, parcel
DONE
// ● Read about: ^ - caret and ~ - tilda 
^ in the package.json of the dependencies section means, the package would be automatically generated to 1.x.x version ( not the major version) 
~ in the package.json of the dependencies section means for, they are open to only updates from 1.2.x changes ( Only the patch changes)
// ● Read about Script types in html (MDN Docs) 
DONE

*/
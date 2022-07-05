# React-Restaurant-website
## What you will learn
   1) Basic Syntax (VS Code Shortcut)
            -- rafce -> create functional component
            -- clg -> to create console.log
            -- imr --> import React
   2) Component Communication ( how to pass data from 1 comp to another )
            -- use useState-->for passing data from one componet to another we have to use useState
   3) Event Handling (arrow function in onClick={()=>functionName("")})
   4) filter,map, sorting in react
   5) 
    
## Ponts to remember 

### 0) Always start Component name with Capital
        dont use component name camel casing otherwise DOM will get confused between component and atribute 
#### 1) event syntaxc 
      nClick = { () => functionName() }   --dont forget that we dont have to use {} again

#### 2) {} in prop (dataBinding)
        need to use  function App({ parameter }) in case of prop      

#### 3) Dont forget to use {} if you want to write js code in html

#### 4) for Unique data  (Restaurent.js)
        we used "new Set()" to get the unique data of cousine (luke dinner, lunch etc)
        we directly kept new Set inside [] to get in array form 
        then spread to convert object into array and not only array tar only data array

#### 5) use of destructuring (Restaurent.js)
        we used at multiple place something.name, something.lastname etc etc 
        so to we can use destructuring and directly write name. last name  

#### 6) Can pass function ref as prop as (Restaurent.js & navbar.js)

#### 7) in map() we have to give return 
        eg  something.map(()=>{  return() } ) 



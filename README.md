# Collaborators, Read This!!

**<span style = "color: rgb(225, 33, 33); font-size: 1.3rem;">NOTE: The files with global in their name will effects all the html files.</span>**

## Main Folders to know about

Each of the pages will have their own folder with their name in it, except the home page(index.html).<br>
**For example,** for the About page, we must have a different folder named About which will contain an HTML file, a JS file, a CSS file and others if necessary. <br><br>

### In the main folder, there is a ```assets``` folder, inside which we have, ```logos```,```image``` and an ```icon``` folders.

The ```image``` folder must contain only the images that will be used by that page. <br>
The ```logos``` folder must contain logos used in that page. **The logos must be Transparent and Square**<br>
The ```icons``` files must contain the icons used in that page.<br><br>

## File naming rules:
    
We're trying to imitating what it possily would be when working a real job, hence oranizing every asset is very crutial.<br>
For this projet, **we'll be using camelCase naming convention to name everything.**

## How to use the style?

cameCase is basically, converting: <br>
first word ---> firstWord.<br>
<br>
 
## How to use this for naming files?

Naming files are crutial for knowing which files is being used by which files.<br>
Using camelCase, we can name file in the following format.<br>

```htmlFileNameStyle.css/Script.js```<br>
```htmlFileName``` being the html page's name that is currently being created or worked on.<br>
```Style.css``` representing that this file is a css file. The final file name will be: ```htmlFileNameStyle.css```<br>
```Script.js``` representing that this file is a javascript file.The final file name will be: ```htmlFileNameScript.js```<br>

### Example:
**artSection.html:**
```
<html>
<head>
<link type = "stylesheet" href = "artSectionStyle.css" >
</head>
<body>

<script src = "artSectionScript.js"></script>

</body>
</html>
```
Notice that the **artSection.html** file is using **artSectionStyle.css** css file and **artSectionScript.js** javaScript file.

**Use camelCase while naming folders with more that one word in it**

# For Coders

The ```globalScript.js``` and the ```globalStyle.css``` files will contain the codes that are being used by all the pages. For this to work, the class names for all the elements being effected **MUST be same** throughout all the html files.

## How to name variables,classes and Ids:
The **camelCase convention** must be used for naming any classes, ids, variables and functions.

## Example:

```
<html>
<html>
<head>
<title> Example Page </title>
</head>
<body>
    <!-- Notice the way classes and Ids are being named -->
    
      <div id="mainContainer">

        <label for="userName"> Name: </label>
        <input type="text" id="userName">
        <label for="userAge"> Age: </label>
        <input type="text" id="userAge">

        <div id="buttonContainer">
            <button class="formButtons">
                Submit Name
            </button>
            <button class="formButtons">
                Submit Age
            </button>
        </div>

      </div> 
    
    <script>
      //Notice how the variables and functions are being named

        const mainContainer = document.getElementById("mainContainer");
        const buttonArray  = document.getElementsByClassName("formButtons");

        function thisIsFunction(){
        }

        const secondFunction = function(){
        }

        const thirdFunction = ()=>{
        }
    
    </script>
</body>
</html>
```

**<span style = "font-size: 1.3rem; color:rgb(255, 71, 25);">
Make sure that the names assigned to Classes, Ids, Variables or Functions makes sense in the context.The length of the name doesn't matter, be as descriptive as possible.
</span>**
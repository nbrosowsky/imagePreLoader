# imagePreLoader.js

A simple javascript program to preload images in the background. 

## Basic Usage

##### [DEMO](https://nbrosowsky.github.io/imagePreLoader/demo.html)

```HTML
<div id="loadingScreen">
  <p id="loadingProgress">
  </p>
</div>
<div id="finishedScreen">
  <p>Finished loading!
  </p>
</div>
```

```javascript
<script>
// pass array of image sources to preLoader //
  preLoad.yourImages = [
        "images/nikita-burdin-1085.jpg",
        "images/milada-vigerova-35578.jpg",
        "images/sergio-rola-39245.jpg",
        "images/andy-wang-39028.jpg",
        "images/blake-richard-verdoorn-13988.jpg",
        "images/christina-sicoli-20299.jpg",
        "images/dawn-armfield-19723.jpg",
        "images/elizabeth-lies-20237.jpg",
        "images/marta-pawlik-37689.jpg"
  ]

  // set preloader //
    preLoad.loadImages("#loadingScreen", "#finishedScreen", "#loadingProgress");
</script>
```

## Background loading

The preloader only triggers show/hide divs if the load screen is visible. 
Therefore, you can trigger the preloader to begin at any time and only go to the loading screen if necessary.

E.g., The demo linked below triggers the preloader to begin when the page loads. When you hit next, it checks whether it is complete or not.
If complete, it goes to the images. If incomplete it takes you to loading screen.

##### [link to background loading demo](https://nbrosowsky.github.io/imagePreLoader/bgDemo.html)

```javascript
<script>
  // preLoad.manualCheck() returns true/false
  // e.g., 
   if (preLoad.manualCheck()){
   ... go to finished display ...
   } else
   ... go to loading display ...
   }
</script
```

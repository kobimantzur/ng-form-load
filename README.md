# ng-form-load
An AngularJS directive written in TypeScript to help deal with forms
This simple directive will disable your form and place a loader in the center of the screen every time you turn on your boolean flag.
I've implemented @ConnorAtherton/loaders.css's ball-pulse loader for pure css.

You can use it in 3 simple steps:
1.add ngFormLoad.min.js & ngFormLoad.min.css to your bundle.               
2.inject ["ngFormLoad"] to your angular app.    
3.add ng-form-load="your flag" attribute to your <form> tag with your loading flag

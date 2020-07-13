 /*
 * @file pagination class should go here 
 */
 class Pages{
  constructor(pages){
    this.pages = pages; 
    // check if the pages is defined and an array e.g if ( this.pages and this.page.length ) // it is defined 
    // read on falsy values in js 
    // get a reference to the current page 
  }

  next(){
    // implement the next function
    // you will use slices to slice the array read on slices 
    // slice the array 
    // increment the reference to current page 
    // at the end of the function return the page as am array 
    // HINT : the slice of the array is returned 
    if(this.pages.length === 0){
return;
    }
  }
}
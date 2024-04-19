const first=document.getElementById("Fact");                              //element get from document first

const button=document.getElementById("btn");                         //element get from document button

const image = document.getElementById("image");                        // image get from document image
 //addEventListener when click the button

button.addEventListener('click',getimages);

button.addEventListener('click',getFacts);  

getimages()                                                              //function calling

async function getimages(){                                                  //async function for getting images

const uniom =await fetch("https://api.thecatapi.com/v1/images/search");       //fetch the api         

const process2=await uniom.json();                                               //get the api using parse

image.src=process2[0].url;                                                       //to put image           

}


getFacts()                                    //function to get  the list of the available facts 

async function getFacts(){                     //async function to get the list of the available facts

 

  const response=await fetch ("https://meowfacts.herokuapp.com/");          //fetch the api response
   
  const process=await response.json();                                       //get the list of the available facts

  first.innerHTML=process.data;                                            //to put the data into the paragraph
  
}










































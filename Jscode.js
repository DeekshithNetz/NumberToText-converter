let result = "";


function a() {
var text;
   // var txt = prompt("Enter a number: ");
   result="";
   document.getElementById('2').value=result;
   var txt=document.getElementById('1').value;
    
    var n=parseInt(txt.length);
    
   
    for(i=0;i<n;i++)
    {
  
        if(txt[i]!=='0')
        {
            
                 
           text=txt.substring(i);
            break;
        }
        
    }
    
   
    convert(text);
}

function convert(text) {
    var n = parseInt(text.length);

    singlecheck(text);
    doublecheck(text);
    triplecheck(text);
    fourcheck(text);
    fivecheck(text);
    sixcheck(text);
    sevencheck(text);
    eightcheck(text);
    ninecheck(text);

    
    if(n>9)
  {
      document.getElementById('2').value="only 9 digits are allowed";
  }
  else
  { document.getElementById('2').value=result;
  }
}

function singlecheck(text) {
    if (text.length === 1) {
       
        if (text === '1') {
            result += "One ";
        }
        if (text === '2') {
            result += "Two ";
        }
        if (text === '3') {
            result += "Three ";
        }
        if (text === '4') {
            result += "Four ";
        }
        if (text === '5') {
            result += "Five ";
        }
        if (text === '6') {
            result += "Six ";
        }
        if (text === '7') {
            result += "Seven ";
        }
        if (text === '8') {
            result += "Eight ";
        }
        if (text === '9') {
            result += "Nine ";
        }
    }
}

function doublecheck(text) {
    if (text.length === 2) {
        var i = 0;
        if (text[i] === '0') {
            singlecheck(text[i + 1]);
        } else {
            if (text[i] === '1') {
                if (text[i + 1] === '0') {
                    result += "Ten ";
                }
                if (text[i + 1] === '1') {
                    result += "Eleven ";
                }
                if (text[i + 1] === '2') {
                    result += "Twelve ";
                }
                if (text[i + 1] === '3') {
                    result += "Thirteen ";
                }
                if (text[i + 1] === '4') {
                    result += "Fourteen ";
                }
                if (text[i + 1] === '5') {
                    result += "Fifteen ";
                }
                if (text[i + 1] === '6') {
                    result += "Sixteen ";
                }
                if (text[i + 1] === '7') {
                    result += "Seventeen ";
                }
                if (text[i + 1] === '8') {
                    result += "Eighteen ";
                }
                if (text[i + 1] === '9') {
                    result += "Nineteen ";
                }
            }
            if (text[i] === '2') {
                result += "Twenty ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '3') {
                result += "Thirty ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '4') {
                result += "Forty ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '5') {
                result += "Fifty ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '6') {
                result += "Sixty ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '7') {
                result += "Seventy ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '8') {
                result += "Eighty ";
                singlecheck(text[i + 1]);
            }
            if (text[i] === '9') {
                result += "Ninety ";
                singlecheck(text[i + 1]);
            }
        }
    }
}






 //triple check
   function triplecheck(text)
   {
   var i=0;
   if(text.length===3)
   {
   if(text[i]==='0')
   {
       doublecheck(text.substring(1));
   }
   else
   {
       singlecheck(text[i]);
      
      result+="Hundred ";
   
      
       if(text[i+1]==='0')
       {
           singlecheck(text[i+2])
       }
      else
      {
          doublecheck(text[i+1]+text[i+2]);
      } 
      }
      
   }
       
   }
   //fourcheck
   function fourcheck(text)
   {
   var i=0;
       if(text.length===4)
       {
           singlecheck(text[i]);
           
          result+="Thousand "; if(text[i+1]+text[i+2]==='00')
           {
               singlecheck(text[i+3]);
           }
           else
           {
               triplecheck(text[i+1]+text[i+2]+text[i+3]);
           }
           
       }
   }
   //five check
   function fivecheck(text)
   {
   var i=0;
   if(text.length===5)
   {
   if(text[i]+text[i+1]==='00')
   {
       triplecheck(text.substring(2));
   }
   else
   {
       
   
       doublecheck(text[i]+text[i+1]);
       result+="Thousand ";
       triplecheck(text[i+2]+text[i+3]+text[i+4]);
       }
       
   }
   }
   //lakh check
   function sixcheck(text)
   {
   var i=0;
       if(text.length===6)
       {
           singlecheck(text[i]);
           result+="Lakh ";
          
           fivecheck(text[i+1]+text[i+2]+text[i+3]+text[i+4]+text[i+5]);
       }
   }
   //lakh double
   function sevencheck(text)
   {
       var i=0;
       if(text.length===7)
       {
       if(text[i]+text[i+1]==='00')
       {
           fivecheck(text.substring(2));
       }
       else
       {
       
           doublecheck(text[i]+text[i+1]);
           result+="Lakh ";
           fivecheck(text.substring(2));
           //sixcheck(text.substring(1));
       }
       }
   }
   function eightcheck(text)
   {
       var i=0;
       if(text.length===8)
       {
           singlecheck(text[i]);
           result+="Crore ";
           sevencheck(text.substring(1));
           
       }
   }
   function ninecheck(text)
   {
       var i=0;
       if(text.length===9)
       {
           doublecheck(text[i]+text[i+1]);
           result+="Crore ";
           sevencheck(text.substring(2));
       }
              }

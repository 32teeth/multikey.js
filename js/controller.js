function controller()
  {
    if(arguments[0])
    {
      var keys = arguments[0];
      var ball = document.getElementById("ball");
      var dir = 0;
      for(var prop in keys)
      {
        switch(prop)
        {
          case "%"://left
            if(keys[prop]){dir+=1;}
          break;
          case "&"://up
            if(keys[prop]){dir+=2;}
          break;  
          case "'"://right
            if(keys[prop]){dir+=4;}
          break; 
          case "("://down
            if(keys[prop]){dir+=8;}
          break; 
          default:
            var el = document.getElementById(prop);
            if(el)
            {
              if(keys[prop])
              {
                el.classList.add("on");
              }
              else
              {
                el.classList.remove("on");
              }
            }          
          break;        
        }

        switch(dir)
        {
          case 1://left
            ball.style.left = "-8px";
            ball.style.top = "8px";
          break;
          case 2://up
            ball.style.left = "8px";
            ball.style.top = "-8px";
          break;
          case 3://left up
            ball.style.left = "-8px";
            ball.style.top = "-8px";
          break;
          case 4://right
            ball.style.left = "24px";
            ball.style.top = "8px";
          break;
          case 6://right up
            ball.style.left = "24px";
            ball.style.top = "-8px";
          break;
          case 8://down
            ball.style.left = "8px";
            ball.style.top = "24px";
          break;
          case 9://left down
            ball.style.left = "-8px";
            ball.style.top = "24px";
          break;
          case 12://right down
            ball.style.left = "24px";
            ball.style.top = "24px";
          break; 
          default:
            ball.style.left = "8px";
            ball.style.top = "8px";          
          break;            

        }
      }
    }
  }
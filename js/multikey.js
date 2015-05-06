/*
** @author Eugene Andruszczenko
** @version 0.1
** @date May 5th, 2015
** @description 
** multi key press tracker and broadcaster 
** example usage would be a virtual game controller for canvas based games
*/


/*
** @class multikey 
** @description revealing module pattern
**
*/
var multikey = (function(){

	/*
	** @param states {object}
	** @description 
	** 		object that holds the current state of pressed keys, 
	**		property maps to fromCharCode and value is boolean (true|false)
	*/
	var states = {};

	/*
	** @param keys {array}
	** @description if a set of keys is pushed to the setup method, those are the keys the handler will listen for
	*/
	var map = false;

	/*
	** @param valid {boolean}
	** @description if a set of keys is pushed to the setup method, those are the keys the handler will listen for
	*/
	var valid = true;	

	/*
	** @param cbfunc {function}
	** @description callback function to be called from the even handler method
	*/	
	var cb;

	/*
	** @method setup
	** @param cbfunc {cbfunc} 	
	** @param keys {string} 
	** @param arrows {boolean}
	** @description setup
	*/		
	function setup(cbfunc, keys, arrows)
	{
		cb = cbfunc;
	  if(keys)
	  {
	  	map = keys.split("");
	  }

	  if(arrows)
	  {
	  	map = map.concat("&%'(".split(""));
	  }
	  bind();
	}

	/*
	** @method bind
	** @description binds the keyup and keydown events to the window object
	*/		
	function bind()
	{
	  ("keydown keyup".split(" ")).forEach(function(e)
	    {
	      window.addEventListener(e,multikey.handler,false);
	    }
	  );
	}

	/*
	** @method unbind
	** @description unbinds the keyup and keydown events to the window object
	*/		
	function unbind()
	{
	  ("keydown keyup".split(" ")).forEach(function(e)
	    {
	      window.removeEventListener(e,multikey.handler,false);
	    }
	  );
	}	

	/*
	** @method handler
	** @param e {event} 
	** @description 
	*/		
	function handler(e)
	{
	  var char = String.fromCharCode(e.keyCode).toLowerCase();

	  if(!map)
	  {
	    states[char] = e.type === "keydown" ? true : false
	  }
	  else
	  {
	  	valid = false;
	  	if(map.indexOf(char)!=-1)
	  	{
	  		states[char] = e.type === "keydown" ? true : false;
	  		valid = true;
	  	}
	  }

	  if((typeof cb === 'function') && valid)
	  {
	    cb(states);
	  }   
	}

	/*
	** @return
	** @description exposed methods for multikeypress
	*/	
	return {
	  setup:function(cbfunc, keys, arrows){setup(cbfunc, keys, arrows);},
	  bind:function(){bind();},
	  unbind:function(){unbind();},
	  handler:function(e){handler(e);}
	}

})();
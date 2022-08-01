
const findSndSmallest = (x,y,z) => {
    if(x<y && x<z)
		{
		    if(y<z)
		        return +y
		    else if(z<y)
		        return +z
		}
		else if(y<x && y<z)
		{
		    if(z<x)
		        return +z
		    else if(x<z)
		        return +x
		}
		else if(z<y && z<x)
		{
		    if(z<x)
		        return +x
		    else if(y<x)
		        return +y
		}
};
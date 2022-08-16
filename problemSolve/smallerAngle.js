
var Minimal_Angle = (h, m) => 
{
  if(h<0 || m<0 || h>12 || m>60)
    return "Invalid Input";
    
  let hangle = 0.5 * (h * 60 + m);
  let minangle = 6 * m;
  let angle = Math.abs(hangle - minangle);
  let mangle = 360 - angle;
  if(angle<mangle)
    return angle;
  else
    return mangle;
};
 

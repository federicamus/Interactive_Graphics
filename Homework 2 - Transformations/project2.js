// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
	  let rad = rotation * Math.PI / 180; 
    let cosTheta = Math.cos(rad);
    let sinTheta = Math.sin(rad);

    return [
        scale * cosTheta, scale * sinTheta, 0,  
        -scale * sinTheta, scale * cosTheta, 0,   
        positionX, positionY, 1                  
    ]
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	let result = new Array(9).fill(0);

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            result[row + col * 3] = 
                trans2[row + 0 * 3] * trans1[0 + col * 3] +
                trans2[row + 1 * 3] * trans1[1 + col * 3] +
                trans2[row + 2 * 3] * trans1[2 + col * 3];
        }
    }

    return result;
	
}


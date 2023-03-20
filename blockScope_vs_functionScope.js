

for (var i = 0; i < 3; i++) {
    //! block scope
	var x = 30;
}

console.log(x);

var var1; //? global scopre
function test(){  
    //! function scope
    var var2 = 10  //? local scope : only difined in function scope
}


{
    //! block scope
    console.log("hello fom block scope")
}
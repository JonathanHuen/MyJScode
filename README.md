# MyJScode
 
如果形参与全局变量同名，它会遮住全局变量，
但只要在函数中不使用该全局变量，遮住它就没有什么关系。
最好使用注释对这一点进行说明，以免以后阅读代码时感到迷惑。

第四章 数组

如果访问索引太大或太小(如小于0)的数组元素，得到的结果将是undefined

可通过索引0来获取数组的第一个元素
通过xxxx[xxxx.length - 1]来获取最后一个数组元素

获取数组总长度：xxxx.length

数组添加新元素时，必须小心地指定该索引，否则数组将是稀疏的（sparse），即存在“空洞”（如索引0和2处有值，而索引1处没有值），即使存在空洞也未必是坏事，但只需使用时特别注意即可。

检验数组元素是否有undefined
if(myarray[i] == undefined){
    ...
}

要在数组中添加新元素，可使用函数push

第五章 对象

用冒号分隔属性名和属性值

属性名可以是任意字符串，但通常遵循变量命名规则
注意：将包含空格的字符串用作属性名时，必须用引号将其括起。例如："on sale": true;

第六章 DOM模型

回调函数onload
例:function init() {
		var planet = document.getElementById("greenplanet");
		planet.innerHTML = "Red Alert: hit by phaser fire!"; 
	}
	window.onload = init;

setAttribute设置属性
例: planet.setAttribute("class", "redtext");    
方法要接受两个实参————要添加或修改的特性的名称和 要设置的特性值<=如果指定的特性不存在，将在元素钟创建它

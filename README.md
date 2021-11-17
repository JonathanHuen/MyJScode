# MyJScode
 
如果形参与全局变量同名，它会遮住全局变量，
但只要在函数中不使用该全局变量，遮住它就没有什么关系。
最好使用注释对这一点进行说明，以免以后阅读代码时感到迷惑。

第四章 数组
===========

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
===========

用冒号分隔属性名和属性值

属性名可以是任意字符串，但通常遵循变量命名规则
注意：将包含空格的字符串用作属性名时，必须用引号将其括起。例如："on sale": true;

第六章 DOM模型
==============

回调函数onload
	例:function init() {
			var planet = document.getElementById("greenplanet");  
			planet.innerHTML = "Red Alert: hit by phaser fire!";  
		}  
		window.onload = init;

setAttribute设置属性
例: planet.setAttribute("class", "redtext");    
方法要接受两个实参————要添加或修改的特性的名称和 要设置的特性值<=如果指定的特性不存在，将在元素钟创建它

DOM的一些其他功能
从DOM中获取元素
创建元素并将其加入到DOM中
从DOM删除元素
遍历DOM中的元素

要点
-----
+ 在JS代码中，使用document对象来访问DOM
+ document对象包含可用来访问和修改DOM的属性和方法


#第七章 系统地讨论类型

对于还未初始化的东西，都会将undefined赋给它。

**undefined和null各自的用途**
在应该提供一个对象，但无法创建或找到时，将提供null——null用于表示对象不存在；  
在变量未初始化、对象没有指定属性或数组没有指定元素时，将返回undefined。

JavaScript灰色地带**NaN**——无法表示的数字(Not a Number)<u>*其类型为number*</u>

NaN不仅用于表示所有无法表示的值还是JavaScript中唯一一个不与自己相等的值！
NaN != NaN

>那么如何检查变量是否为NaN呢？
>>因为NaN与任何东西（包括他自己）都不相等，所以你**不能**采取任何方式来检查变量与NaN是否相等，错误案例如下  
>>	if(myNum == NaN){	
>>		myNum = 0;
>>	}

>>正确的做法是使用特殊函数isNaN如下所示
>>	if(isNaN(myNum)){
>>		myNum = 0;	
>>	}
>>
>>

>相等运算符==的工作原理

>如果两个值的类型<u>相同</u>，就直接进行比较

>如果两个值的类型<u>不同</u>，则尝试将它们<u>转换</u>为相同的类型(如果可能的话)，再进行比较

>>1.比较数字和字符串

>>先试图将字符串转化为数字，如无法转换时则字符串为NaN，因此最终结果为false

>>2.比较布尔值和其他类型

>>+ 布尔和数字的情况

>>把布尔值转换为数字，再进行比较，true转换为1，false转换为0

>>+ 布尔和字符串的情况

>>将布尔值转换为数字后再进行比较

>>3.比较null和undefined

>>这两个值比较结果为true，因为他们都表示"没有值"（null和undefined分别表示没有值的对象和没有值的变量)

>>4.特殊的情况

>>以上三种可确定任何相等表达式的值。然而还存在一些边界情况和需要注意的地方。例如将空字符串转换为数字的结果为0
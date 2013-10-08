/*
*@ RadixSort 基数排序
*@param list 待排序的自然数列表
*@param len	 自然数的最大位数
*@param radix列表项的进制，默认为10进制数
*/
function radixSort(list,len,radix){
	radix = radix||10;
	var 	bucket	= new Array(radix),
		temp	= [],
		rate	= 1,//rate保存当前计算的位，个位为1，十位为10
		listLen	= list.length,//列表长度
		undefined;
	
	for(var i=0;i<len;i++){
	
		resetArray(bucket,0);
		arrayCopy(list,temp);
		
		//计算每个列表项当前位出现的次数
		for(var j=0;j<listLen;j++){
			var item	= list[j],
				key		= Math.floor(item/rate)%radix,
				undefined;
			
			bucket[key]++;			
		}
		
		//计算每个key的排序位置
		for(j=1;j<radix;j++){
			bucket[j] = bucket[j-1]+bucket[j];
		}
		
		//按key对item进行排序
		for(j=listLen-1;j>=0;j--){
			item	= temp[j];
			key		= Math.floor(item/rate)%radix;
			list[--bucket[key]] = item;
		}
		console.log('按',rate,'排序结果为：',list);
		//对下一位排序
		rate*=radix;
		
	}
}


/*
*@ resetArray 重置数组元素为指定的值
*@param arr 要重置的数组
*@param val 重置的值
*/
function resetArray(arr,val){
	for(var i=0,len=arr.length;i<len;i++){
		arr[i] = val;
	}
}

/*
*@ arrayCopy 把一个数组中的值复制到另一个数组，只针对值类型，不做深度复制
*@param sourceArr 源数组
*@param destArr 目标数组
*/
function arrayCopy(sourceArr,destArr){
	for(var i=0,len=sourceArr.length;i<len;i++){
		destArr[i] = sourceArr[i];
	}
}


//examples
var list = [123,79,234,678,25,456,1];
console.log('排序前:',list);//output   排序前:123,79,234,678,25,456,1
radixSort(list,3);
console.log('排序后:',list);//output   排序后:1,25,79,123,234,456,678

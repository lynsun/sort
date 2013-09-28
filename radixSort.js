   /*
		*@ RadixSort 基数排序
		*@param list 待排序的自然数列表
		*@param len	 自然数的最大位数
		*/
		function radixSort(list,len){
			var bucket	= new Array(10),
				  temp	= [],
				  rate	= 1,//rate保存当前计算的位，个位为1，十位为10
				  listLen	= list.length,//列表长度
			  	undefined;
			
			for(var i=0;i<len;i++){
				resetArray(bucket,0);
				arrayCopy(list,temp);
				
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

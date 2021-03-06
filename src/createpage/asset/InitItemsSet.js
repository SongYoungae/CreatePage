import * as FormFormat from '../asset/FormFormat';

// 타입별 아이템 초기화
export const InitItemsSet = (Struct) => {
	var InitData = {};
	Struct.forEach((item) => {
		if (item.format === 'Tab') Object.assign(InitData, FormFormat.InitData(item));
		else InitData[item.id] = FormFormat.InitData(item);
		//console.log(item.id, item.format, InitData[item.id]);
	});
	return InitData;
};

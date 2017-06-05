/**
 * 存储Storage
 */
export const setStore = (name, content,flag="local") => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	flag === "local"?localStorage.setItem(name, content):sessionStorage.setItem(name,content);
}

/**
 * 获取Storage
 */
export const getStore = (name,flag="local") => {
	if (!name) return;
	return flag === "local"?localStorage.getItem(name):sessionStorage.getItem(name);
}

/**
 * 删除Storage
 */
export const removeStore = (name,flag="local") => {
	if (!name) return;
	flag === "local"?localStorage.removeItem(name):sessionStorage.reomveItem(name);
}
/**
 * 清空Storage
 */
export const clearStore = (flag="local") => {
    flag === "local"?localStorage.clear():sessionStorage.clear();
}
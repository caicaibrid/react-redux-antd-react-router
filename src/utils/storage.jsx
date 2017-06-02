/**
 * 存储Storage
 */
export const setStore = (name, content,flag="local") => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	flag === "local"?window.localStorage.setItem(name, content):window.sessionStorage.setItem(name,content);
}

/**
 * 获取Storage
 */
export const getStore = (name,flag="local") => {
	if (!name) return;
	return flag === "local"?window.localStorage.getItem(name):window.sessionStorage.getItem(name);
}

/**
 * 删除Storage
 */
export const removeStore = (name,flag="local") => {
	if (!name) return;
	flag === "local"?window.localStorage.reomveItem(name):window.sessionStorage.reomveItem(name);;
}
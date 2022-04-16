/*
 * @Description: 当前指定模块的文件夹名称
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-04-10 14:24:36
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-10 21:09:09
 */
// 使用基于 promise 的文件系统
// import * as fs from 'fs/promises';
const fs = require('fs/promises');

/**
 * @name: 获取文件夹名称
 * @test: test font
 * @msg: 
 * @param {*} filePath 文件夹路径
 * @return {*}
 */
const readerFolderName = async (filePath) => {
	let fileNameList = [];
	try {
		new Promise((resolve, reject) => {
			fs.opendir(filePath).then((dir) => {
				if (dir) {
					resolve(dir);
				}
			});
		}).then(async (result) => {
			console.log("Promise1", result);
			for await (const dirent of result) {
				console.log("dirent", dirent);
				fileNameList.push(dirent.name);
			}
		}).catch((err) =>{
			console.log("error1", err);
		});
		new Promise((resolve, reject) => {
			console.log(">>>>>>2");
			resolve("2执行");
		}).then((result) => {
			console.log("Promise2", result);
		}).catch((err) =>{
			console.log("error2", err);
		});;
	} catch (error) {
		console.log("error", error);
	}
}
// console.log("global", global);
// console.log("process", process);
module.exports = {
	readerFolderName
}
// const path = require('path');
// const __dirname = path.resolve();
// 读取views里面的目录名称
// const list = readerFolderName(__dirname + "/src/views");
console.log("__dirname", __dirname);
// console.log("list", list);
console.log("this", this);